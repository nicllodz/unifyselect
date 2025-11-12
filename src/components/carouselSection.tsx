"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResourcesSection() {
  const resources = [
    { src: "/images/download_cover_brochure_50.png", alt: "SMARTCare 2-19" },
    { src: "/images/download_cover_brochure_2-19.png", alt: "SMARTCare 20-49" },
    { src: "/images/download_cover_brochure_20-49.png", alt: "SMARTCare 50+" },
  ];

  return (
    <section className="w-full bg-white py-16 resources-section">
      <div className="w-[90%] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[42px] text-gray-900 font-[Lato] leading-none">
          Resources at your fingertips
        </h2>
        <p className="mt-2 text-2xl text-light-blue-theme">
          Marketing &amp; Info Tools for You and Your Team
        </p>

        {/* Card Grid */}
        <div className="w-[80%] m-auto mt-10 sm:grid-cols-2 resourcs-grid hidden sm:grid grid-cols-2 md:grid-cols-3 gap-30">
          {[
            // { src: "/images/resources-one.png", alt: "Health Plan 2025" },
            { src: "/images/download_cover_brochure_50.webp", alt: "SMARTCare 2-19" },
            { src: "/images/download_cover_brochure_2-19.webp", alt: "SMARTCare 20-49" },
            { src: "/images/download_cover_brochure_20-49.webp", alt: "SMARTCare 50+" },
          ].map((item, index) => (
            <div key={index} className="border-2 border-[#597cbc] shadow-sm relative w-full h-auto">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Carousel for mobile */}
        <div className="sm:hidden mt-10">
          <Swiper modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}>
            {resources.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="border-2 border-[#597cbc] shadow-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full">
              <ChevronLeft className="w-5 h-5 text-white" />
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </Swiper>
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <a href="#" className="text-yellow-500 font-medium hover:underline">
            View more Resources...
          </a>
        </div>
      </div>
    </section>
  );
}
