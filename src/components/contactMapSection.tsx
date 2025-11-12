"use client";
import React from "react";
import ContactForm from "./contactForm";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  rightType?: "map" | "image";
  imageSrc?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We’re Here to Help",
  subtitle = "Reach us anytime",
  rightType = "map",
  imageSrc = "/images/default.jpg",
}) => {
  return (
    <section id="contact-us" className="flex flex-col md:flex-row bg-[#f9f9f9] shadow-md overflow-hidden hmContactSec">
      {/* Left side: Text and Form */}
      <div className="md:w-1/2 p-20 m-auto md:px-20 hm-contact-form">
        <h2 className="text-[42px] text-gray-900 font-[Lato] leading-tight">{title}</h2>
        <p className="mt-2 text-2xl text-light-blue-theme mb-5">{subtitle}</p>

        {/* The reusable form component */}
        <ContactForm />
      </div>

      {/* Right side: Map or Image */}
      <div className="md:w-1/2 md:block hm-contact-map">
        {rightType === "map" ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.8757667200193!2d-74.3986180234782!3d40.819889031002866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ff4a922466ed%3A0x16e0c6955557c5fa!2sTriohm!5e1!3m2!1sen!2sph!4v1759817963260!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}
      </div>
    </section>
  );
};

export default ContactSection;