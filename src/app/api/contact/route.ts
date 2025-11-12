// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";

// --- Type Definition for reCAPTCHA Response (Outside POST) ---
interface RecaptchaResponse {
    success: boolean;
    score: number;
}

// --- Environment Variables (Read all necessary variables once) ---
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "default@example.com";
const ALERT_EMAILS_STRING = process.env.BREVO_ALERT_EMAILS || process.env.BREVO_RECIPIENT_EMAIL || "";

// **NEW:** reCAPTCHA Environment Variables
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_THRESHOLD = parseFloat(process.env.RECAPTCHA_THRESHOLD || "0.5");


// Map the string list into Brevo's required array format
const RECIPIENT_LIST = ALERT_EMAILS_STRING.split(',')
    .filter(email => email.trim() !== '')
    .map(email => ({ email: email.trim(), name: "Your Team" }));


export async function POST(req: Request) {
    // 🛑 CRITICAL FIX: Initialize recaptchaData here (inside POST, but before try)
    let recaptchaData: RecaptchaResponse | null = null;
    
    try {
        const data = await req.json();
        // **NEW:** Destructure recaptchaToken
        const { fullName, email, phone, type, message, recaptchaToken } = data;
        const submissionTime = new Date().toLocaleString();

        // --- 1. Basic Server-Side Validation ---
        if (!fullName || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields: Name, Email, and Message are required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ success: false, error: "Invalid email format." }, { status: 400 });
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
            
            // Assign the parsed data to the variable declared above
            recaptchaData = await recaptchaRes.json();
            
            // 🥳 FINAL FIX: Type Narrowing for TypeScript
            if (recaptchaData) {
                if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_THRESHOLD) {
                    console.warn(`reCAPTCHA failed: Score=${recaptchaData.score}, Success=${recaptchaData.success}`);
                    return NextResponse.json(
                        { success: false, error: "Spam check failed. Please try again." },
                        { status: 403 } 
                    );
                }
                console.log(`reCAPTCHA verified with score: ${recaptchaData.score}`);
            }
        }


        // --- 3. Save to Firestore ---
        await addDoc(collection(db, "contacts"), {
            fullName: fullName.trim(),
            email: email.toLowerCase().trim(),
            phone: phone ? phone.trim() : null,
            type: type || "General Inquiry",
            message: message.trim(),
            createdAt: Timestamp.now(),
            // ✅ NOW SAFE: Access score using ternary check
            recaptchaScore: recaptchaData ? recaptchaData.score : "N/A", 
        });


        // --- 4. Send email via Brevo REST API ---

        if (!BREVO_API_KEY || RECIPIENT_LIST.length === 0) {
            console.error("BREVO_API_KEY or Recipient List is missing. Email skipped.");
            return NextResponse.json({ success: true, warning: "Email not sent due to missing configuration." });
        }

        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                "api-key": BREVO_API_KEY, 
            },
            body: JSON.stringify({
            sender: { email: SENDER_EMAIL, name: `${fullName.trim()} (Website Contact)` },
            to: RECIPIENT_LIST, 
            replyTo: { email: email.toLowerCase().trim(), name: fullName.trim() },
            subject: `New Contact Submission: ${fullName.trim()}`,
            htmlContent: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Contact Submission</h2>
                    <hr>
                    <p><strong>Name:</strong> ${fullName.trim()}</p>
                    <p><strong>Email:</strong> ${email.toLowerCase().trim()}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Type:</strong> ${type || 'General Inquiry'}</p>
                    <p><strong>Message:</strong></p>
                    <div style="border: 1px solid #ddd; padding: 10px; margin-top: 5px; white-space: pre-wrap;">${message.trim()}</div>
                    <hr>
                    <p>Submitted on: ${submissionTime}</p>
                    ${recaptchaData ? `<p><strong>reCAPTCHA Score:</strong> ${recaptchaData.score}</p>` : ''}
                </div>
                `,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Brevo API Response Error:", res.status, errorData);
            throw new Error(`Brevo API error: ${res.status} - ${JSON.stringify(errorData)}`);
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Error in contact submission:", error);
        return NextResponse.json(
        { success: false, error: "Internal server error during submission." },
        { status: 500 }
        );
    }
}