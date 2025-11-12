"use client";
import React, { useState } from 'react';

// ⚠️ FIX: Extend the Window interface to define grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// **Use the same public reCAPTCHA Site Key as your Contact Form**
const RECAPTCHA_SITE_KEY = "6LfV_fsrAAAAAO_8Vxu8iICfCLXWmgKLC73MPQHC"; 

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    if (!email) {
      setStatus("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      // **STEP 1: Execute reCAPTCHA V3 to get a token**
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA is not loaded. Ensure the script is added.");
      }
      
      // Use a specific action for the newsletter form
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'newsletter_subscribe' });
      
      // **STEP 2: Send the token along with the email**
      const res = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, recaptchaToken: token }), // Send the token
      });

      const data = await res.json();
      
      if (data.success) {
          setStatus("Thank you! You have been subscribed.");
          setEmail('');
      } else {
          // Improved error handling to include server-side reCAPTCHA failure
          throw new Error(data.error || "Failed to subscribe."); 
      }
    } catch (error) {
        console.error(error);
        let errorMessage = (error instanceof Error && error.message.includes("already")) 
             ? "You are already subscribed!"
             : "Error signing up. Please try again.";
             
        if (error instanceof Error && error.message.includes("reCAPTCHA")) {
            errorMessage = "Spam protection failed. Please refresh and try again.";
        }
          
        setStatus(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter-signup w-full">
      <h4 className="font-medium mb-2 footer-title">Stay Updated:</h4>
      
      <form onSubmit={handleSubmit} className="flex relative w-[90%] md:w-full"> 
        
        <input
          type="email" 
          placeholder="Sign up for Newsletter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="flex-grow rounded-l-[30px] px-5 py-5 text-gray-700 border-2 border-[#597cbc] bg-white focus:outline-none focus:ring-2 focus:ring-[#597cbc] border-r-0"
        />
        
        <button 
          type="submit"
          disabled={loading}
          className="flex-shrink-0 text-white rounded-r-[30px] px-6 py-5 font-bold transition-colors hover:bg-[#3d4b96] cursor-pointer"
          style={{ backgroundColor: '#597cbc' }}
        >
          {loading ? '...' : 'Subscribe'}
        </button>
      </form>
      
      {status && <p className={`mt-2 text-sm ${status.includes("Error") || status.includes("already") || status.includes("Spam") ? 'text-red-400' : 'text-green-400'}`}>{status}</p>}
    </div>
  );
}