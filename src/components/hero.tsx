/* This is home page hero section */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  // you can pass in text, images, buttons etc via props
  headline?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImageSrc?: string;
  showButtons?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  headline = "Making Healthcare Affordable for Everyone",
  subheading = "",
  ctaText = "",
  bgImageSrc = "/images/healthcare3.webp",
  showButtons = true,
}) => {
  return (
    <section className="relative bg-cover bg-top pl-[200px] bg-no-repeat hero-section " 
      style={{ backgroundImage: `url(${bgImageSrc})` }}>      

      <div className="hero-con text-white bg-black/40 h-full px-[80px] w-[44%] flex flex-col justify-center py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          {headline}
        </h1>
        <h2 className="text-lg md:text-2xl mb-10 font-bold">
          {subheading}
        </h2>
        <p className="inline-block text-white rounded-md transition md:text-2xl pr-[50px]">
          {ctaText}
        </p>
        {showButtons && (<div className="flex gap-8 mt-8 hero-btns">
          {/* First button */}
          <Link
            href="/#grid-section-solution"
            className="hero-btn-1 flex items-center gap-2 px-10 py-3 bg-white text-light-blue-theme rounded-3xl"
          >
            <Image
              src="/images/icon-shield-heart-edited.png"
              alt="Check"
              width={40}
              height={40}
            />
            Learn How We Help
          </Link>

          {/* Second button */}
          <Link
            href="/#contact-us"
            className="hero-btn-2 flex items-center gap-2 py-2 text-blue-theme rounded-full bg-[#fae190] shadow-[3px_5px_#f1ae19] 
              font-bold px-18 text-lg">
              Sign Up Today
              {/* <Image src="/icons/arrow.png" alt="Arrow" width={20} height={20} /> */}
          </Link>
        </div>)}
      </div>
    </section>
  );
};

export default Hero;
