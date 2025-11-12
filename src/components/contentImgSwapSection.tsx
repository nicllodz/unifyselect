// import Image from "next/image";
import { ReactNode } from "react";

interface EmployersSolutionsProps {
  headline: string;
  subheading: ReactNode;
  body: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  bgImageSrc: string;
  reverse?: boolean; // 🔁 makes layout switch sides
}

export default function EmployerSolutionSection({
  headline,
  subheading,
  body,
  ctaText,
  ctaLink,
  bgImageSrc,
  reverse = false,
}: EmployersSolutionsProps) {
  return (
    <section
      className={`swap-col-section flex flex-col lg:flex-row items-stretch gap-20 my-16 w-[90%] mx-auto 
        ${ reverse ? "lg:flex-row-reverse" : "" }`}
    >
      <div className="w-full lg:hidden">
        <img
          src={bgImageSrc}
          alt={headline || "Case Study Image"}
          className="w-full h-[250px] md:h-[500px] object-cover rounded-3xl"
        />
      </div>
      {/* Text Column */}
      <div className="w-full lg:w-1/2 bg-[#f9f9f9] rounded-3xl shadow-sm p-20 text-col">
        <h2 className="text-3xl mb-3 text-[42px] font-[Lato] text-gray-900">{headline}</h2>
        <p className="text-light-blue-theme text-2xl mb-4">{subheading}</p>
        <p className="text-gray-800 text-2xl mb-10">{body}</p>
        {ctaText && (
          <a
            href={ctaLink || "#"}
            className="text-yellow-500 font-medium underline"
          >
            {ctaText}
          </a>
        )}
      </div>

      {/* Background Image Column */}
      <div
        className="w-full lg:w-1/2 rounded-3xl bg-cover bg-center col-img-bg"
        style={{ backgroundImage: `url(${bgImageSrc})` }}
      />
    </section>
  );
}
