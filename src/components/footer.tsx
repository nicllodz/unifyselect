import Image from "next/image";
import Link from "next/link"; // <-- NEW: Import Link
import React from "react";
import NewsletterForm from "./newsLetterForm";

export default function Footer() {
  return (
    <footer className="bg-[#2C3670] text-white py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10 border-b-2 border-blue-300/30 border-dashed pb-8 footer-top text-center md:text-left">
        {/* Logo and Name */}
        <div className="logo-footer">
          <Image
            src="/images/logo-unify-white-vertical.png"
            alt="Unify Healthcare Logo"
            width={210}
            height={166}
            className="mb-3"
          />
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-medium mb-3 footer-title">Solutions</h3>
          <ul className="footer-text">
            {/* FIX: Use Link for internal navigation */}
            <li><Link href="/members" className="hover:underline">Members</Link></li>
            <li><Link href="/employers" className="hover:underline">Employers</Link></li>
            <li><Link href="/brokers" className="hover:underline">Brokers</Link></li>
            <li><Link href="/associations" className="hover:underline">Associations</Link></li>
            <li><Link href="/community" className="hover:underline">Unify Community<sup>™</sup></Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-resources">
          <h3 className="font-medium footer-title mb-3">Resources</h3>
          <ul className="footer-text">
            <li>
              SMARTCare<sup>™</sup>
            </li>
            <li>Mobile App</li>
            <li>Questions?</li>
            <li>Provider Portal</li>
            <li>Employer Portal</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-company">
          <h3 className="font-medium footer-title mb-3">Company</h3>
          <ul className="footer-text">
            <li>Articles</li>
            <li>Latest News</li>
            <li>Press Releases</li>
            <li>Leadership Team</li>
            <li>
              Care Navigation<sup>™</sup> Team
            </li>
            {/* FIX: Use Link for internal anchor to homepage section */}
            <li><Link href="/#contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 grid md:grid-cols-4 gap-8 footer-bottom text-center md:text-left">
        {/* Newsletter */}
        <NewsletterForm />

        {/* Mobile App */}
        <div className="footer-mobile-app">
          <h4 className="font-medium mb-2 footer-title">Mobile App</h4>
          <p className="footer-text">Download the App</p>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-medium mb-2 footer-title" >Support</h4>
          <p className="footer-text">
            {/* External link (mailto) - KEEP <a> */}
            <a href="mailto:info@unifyhc.com" className="hover:underline">
              info@unifyhc.com
            </a>
          </p>
          <p className="footer-text">
            {/* External link (tel) - KEEP <a> */}
            <a href="tel:9736587300" className="hover:underline">
              (973) 658-7300
            </a>
          </p>
        </div>

        {/* Socials - All are external, so keep <a> */}
        <div className="footer-social">
          <h4 className="font-medium mb-2 footer-title">Connect with Us</h4>
          <div className="flex mt-2 footer-social">
            {/* Social media links are external - KEEP <a> */}
            <a
              href="https://www.linkedin.com/company/unifyhealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon-social-linkedin-white.png"
                alt="LinkedIn"
                width={64}
                height={64}
                className="hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://x.com/unifyhealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon-social-x-white.png"
                alt="X (Twitter)"
                width={64}
                height={64}
                className="hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.youtube.com/@unifyhealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon-social-youtube-white.png"
                alt="YouTube"
                width={64}
                height={64}
                className="hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/unifyhealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon-social-facebook-white.png"
                alt="Facebook"
                width={64}
                height={64}
                className="hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/unifyhealthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icon-social-instagram-white.png"
                alt="Instagram"
                width={64}
                height={64}
                className="hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}