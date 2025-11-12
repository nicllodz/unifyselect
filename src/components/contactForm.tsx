"use client";
import React, { useState } from "react";

// ⚠️ FIX: Extend the Window interface to define grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

// **STEP 1: Replace with your actual public reCAPTCHA Site Key**
const RECAPTCHA_SITE_KEY = "6LfV_fsrAAAAAO_8Vxu8iICfCLXWmgKLC73MPQHC"; 

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allows only digits and control keys
    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(e.key)) {
      return;
    }
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
        return;
    }
    if (e.key.startsWith('Arrow') || e.key === 'Home' || e.key === 'End') {
      return;
    }
    if (e.key.length === 1 && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Basic client-side validation
      const phoneDigits = formData.phone.replace(/[\s-()]/g, '');
      if (formData.phone && !/^\d+$/.test(phoneDigits)) {
          throw new Error("Phone number must contain only digits.");
      }

      // **STEP 2: Execute reCAPTCHA V3 to get a token**
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA is not loaded. Ensure the script is added.");
      }
      
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
      
      // **STEP 3: Send the token along with the form data**
      const payload = {
        ...formData,
        recaptchaToken: token, // Add the token to the payload
      };
      
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // Send the payload with the token
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Thank you! Your message has been sent. 🎉");
        setFormData({ fullName: "", email: "", phone: "", type: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong on the server.");
      }
    } catch (error) {
      console.error(error);
      let errorMessage = "Error submitting form. Please try again.";
      
      if (error instanceof Error) {
        if (error.message.includes("digits")) {
            errorMessage = error.message; 
        } else if (error.message.includes("reCAPTCHA")) {
            errorMessage = "reCAPTCHA validation failed. Please refresh the page and try again.";
        } else {
            console.error("Caught Error Message:", error.message);
        }
      }

      setStatus(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          placeholder="Full Name" 
          className="w-full border-2 rounded-xl p-3" 
          required 
        />
        <input 
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email Address" 
          className="w-full border-2 rounded-xl p-3" 
          required 
        />
        <input 
          name="phone" 
          type="tel" 
          value={formData.phone} 
          onChange={handleChange} 
          onKeyDown={handlePhoneKeyDown} 
          placeholder="Phone Number" 
          className="w-full border-2 rounded-xl p-3" 
        />
        <select 
          name="type" 
          value={formData.type} 
          onChange={handleChange} 
          className="w-full border-2 rounded-xl p-3"
          required
        >
          <option value="" disabled>I’m Contacting You As...</option>
          <option value="Client">Client</option>
          <option value="Partner">Partner</option>
          <option value="Other">Other</option>
        </select>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Message" 
          className="w-full border-2 rounded-xl p-3 h-32" 
          required 
        />

        <button
          type="submit"
          disabled={loading}
          className="hover:bg-yellow-500 text-gray-900 py-3 rounded-full bg-[#fae190] shadow-[3px_5px_#f1ae19] font-bold px-10 text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Sending..." : "Submit →"}
        </button>
      </form>

      {status && <p className="mt-4 text-lg font-medium text-gray-700">{status}</p>}
    </>
  );
};

export default ContactForm;