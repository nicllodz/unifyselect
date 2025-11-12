// components/StackedImageContent.tsx

import React from 'react';
import Image from 'next/image';

// Define static content
const sectionContent = {
  title: "Here's How It Works",
  subtitle: "A simple, transparent process designed to put people first",
  // Use a placeholder image path for a wide banner-style image
  imageSrc: "/images/big-img.webp", 
  imageAlt: "Wide image illustrating a scalable solution",
};

export default function StackedImageContent() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="flex flex-col">

        {/* Title and Subtitle Area */}
        <div className="w-[90%] mx-auto mb-12">
          <h2 className="text-[42px] font-[Lato] font-semibold text-[#293568] mb-4">
            {sectionContent.title}
          </h2>
          <p className="text-2xl text-light-blue-theme">
            {sectionContent.subtitle}
          </p>
        </div>

        {/* Large Image (Below the text) */}
        <div className="w-full overflow-hidden">
          <Image
            src={sectionContent.imageSrc}
            alt={sectionContent.imageAlt}
            // Set dimensions appropriate for a banner/feature image
            width={1200} 
            height={400} 
            layout="responsive"
            className="object-cover"
          />
        </div>        
      </div>
    </section>
  );
}