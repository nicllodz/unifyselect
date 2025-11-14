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
  subheading = "Direct, transparent care designed for you — not your insurance company",
  ctaText = "",
  bgImageSrc = "/images/healthcare3.webp",
  showButtons = false,
}) => {
  return (
    <section className="relative bg-cover bg-top pl-[100px] bg-no-repeat hero-section " 
      style={{ backgroundImage: `url(${bgImageSrc})` }}>      

      <div className="hero-con text-white bg-black/40 h-full px-[80px] w-[44%] min-h-[calc(100vh-147px)] flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
          {headline}
        </h1>
        <h2 className="text-lg md:text-2xl mb-10">
          {subheading}
        </h2>
        <p className="inline-block text-white rounded-md transition md:text-2xl pr-[50px]">
          {ctaText}
        </p>
        {showButtons && (<div className="flex gap-8 mt-20 hero-btns">
          {/* First button */}
          <Link
            href="/#grid-section-solution"
            className="hero-btn flex items-center gap-2 px-20 py-6 bg-white text-light-blue-theme rounded-3xl text-2xl font-extrabold font-[Lato]"
          >
            Join Now
          </Link>
        </div>)}
      </div>
    </section>
  );
};

export default Hero;
