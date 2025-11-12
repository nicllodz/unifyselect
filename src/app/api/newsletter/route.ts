// api/newsletter/route.ts
import { NextResponse } from "next/server";

// --- Type Definition for reCAPTCHA Response ---
interface RecaptchaResponse {
    success: boolean;
    score: number;
}

// --- Environment Variables ---
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL; 
const BREVO_RECIPIENT_EMAIL = process.env.BREVO_RECIPIENT_EMAIL; 
const BREVO_NEWSLETTER_LIST_ID = process.env.BREVO_NEWSLETTER_LIST_ID; 

// **NEW:** reCAPTCHA Environment Variables (Same as contact form)
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_THRESHOLD = parseFloat(process.env.RECAPTCHA_THRESHOLD || "0.5");


// Safely define the recipient list for the alert email
const ALERT_EMAILS_STRING = process.env.BREVO_ALERT_EMAILS ?? BREVO_RECIPIENT_EMAIL ?? ""; 
const RECIPIENT_LIST = ALERT_EMAILS_STRING.split(',')
    .filter(email => email.trim() !== '')
    .map(email => ({ email: email.trim(), name: "Team Alerts" })); 


export async function POST(req: Request) {
    let contactAddedOrExists = false; 
    // 🛑 CRITICAL FIX: Initialize recaptchaData here 
    let recaptchaData: RecaptchaResponse | null = null;

    try {
        const data = await req.json();
        // **NEW:** Destructure recaptchaToken
        const { email, recaptchaToken } = data; 

        // --- 1. Validation and Setup Checks ---
        if (!email || !email.includes('@')) {
            return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
        }

        if (!BREVO_API_KEY || !BREVO_NEWSLETTER_LIST_ID || RECIPIENT_LIST.length === 0 || !BREVO_SENDER_EMAIL) {
            console.error("Missing required Brevo ENV variables or recipient list is empty.");
            return NextResponse.json({ success: false, error: "Server configuration missing required keys." }, { status: 500 });
        }
        
        // --- 2. reCAPTCHA v3 Verification (NEW STEP) ---
        if (!RECAPTCHA_SECRET_KEY) {
            console.error("RECAPTCHA_SECRET_KEY is missing. Skipping reCAPTCHA verification.");
        } else if (!recaptchaToken) {
            return NextResponse.json(
                { success: false, error: "reCAPTCHA token is missing." },
                { status: 400 }
            );
        } else {
            const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

            const recaptchaRes = await fetch(verificationUrl, { method: "POST" });
            
            recaptchaData = await recaptchaRes.json();
            
            // 🥳 FIX: Type Narrowing for TypeScript
            if (recaptchaData) {
                if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_THRESHOLD) {
                    console.warn(`reCAPTCHA failed: Score=${recaptchaData.score}`);
                    return NextResponse.json(
                        { success: false, error: "Spam check failed. Please try again." },
                        { status: 403 } // Block the request
                    );
                }
                console.log(`reCAPTCHA verified with score: ${recaptchaData.score}`);
            }
        }


        // --- 3. Brevo API Call 1: Add/Update Contact to List #3 --- (Old Step 2)
        const contactPayload = {
            listIds: [parseInt(BREVO_NEWSLETTER_LIST_ID)], 
            email: email.toLowerCase().trim(),
            updateExistingContacts: true,
            // Include reCAPTCHA score as an attribute for tracking spam quality
            attributes: { 
                SOURCE: "Website Footer Newsletter",
                RECAPTCHA_SCORE: recaptchaData ? recaptchaData.score : 0, // Safe access
            } 
        };

        const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": BREVO_API_KEY,
            },
            body: JSON.stringify(contactPayload),
        });

        if (contactRes.ok) {
            contactAddedOrExists = true;
        } else {
            const errorData = await contactRes.json();

            // Check for the acceptable "already exists" 400 warning
            if (contactRes.status === 400 && JSON.stringify(errorData).includes("already associated")) {
                console.warn(`Contact ${email} already subscribed. Treating as success.`);
                contactAddedOrExists = true; 
            } else {
                // Hard failure, throw the error
                console.error("Brevo Contacts API Hard Failure:", contactRes.status, errorData);
                throw new Error(`Subscription failed due to API error: ${contactRes.status}`);
            }
        }
        
        // --- 4. Brevo API Call 2: Send Internal Alert Email (Transactional) --- (Old Step 3)
        if (contactAddedOrExists) {
            // ... (alert email logic remains unchanged, but you could add the score to the email body if desired)
            await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": BREVO_API_KEY,
                },
                body: JSON.stringify({
                    sender: { email: BREVO_SENDER_EMAIL, name: "Newsletter Bot" },
                    to: RECIPIENT_LIST, 
                    subject: `New Newsletter Subscriber: ${email}`,
                    htmlContent: `
                        <p>A new user has successfully subscribed to the Newsletter (ID ${BREVO_NEWSLETTER_LIST_ID}):</p>
                        <p><strong>Email:</strong> ${email.toLowerCase().trim()}</p>
                        <p>Time: ${new Date().toLocaleString()}</p>
                        ${recaptchaData ? `<p><strong>reCAPTCHA Score:</strong> ${recaptchaData.score}</p>` : ''}
                    `,
                }),
            })
            .then(alertRes => {
                if (!alertRes.ok) {
                    console.error("Alert Email Failed to Send:", alertRes.status);
                }
            })
            .catch(error => {
                    console.error("Error sending alert email:", error);
            });
        }

        // --- 5. Final Success Response --- (Old Step 4)
        return NextResponse.json({ success: true, message: "Subscription successful." });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Internal server error during subscription.";
        console.error("Critical error during newsletter submission:", error);
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
}