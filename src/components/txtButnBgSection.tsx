import React, { ReactNode } from "react";

interface AboutSectionProps {
  title?: string;
  subtitle?: ReactNode;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
  showButtons?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Healthcare That Works Smarter, For Everyone",
  subtitle = "Bringing simplicity, savings, and humanity back to healthcare.",
  buttonText = "About Unify Healthcare™",
  buttonLink = "#",
  bgImage = "/images/hm-about-bg.png",
  showButtons = true,
}) => {
  return (
    <section
      className="relative w-full mt-10 abtsection"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto px-6 py-20 text-center">
        <h2 className="text-white text-[42px] mt-2 font-[Lato] font-normal leading-none">
          {title}
        </h2>
        <p className="text-white/90 mt-6 text-2xl">{subtitle}</p>
        {showButtons && (<div className="mt-8">
          <a
            href={buttonLink}
            className="inline-block bg-white text-blue-theme px-13 py-7 rounded-full shadow hover:bg-gray-100 transition font-[Lato] text-xl"
          >
            {buttonText.split("Unify Healthcare™")[0]}
            <span className="font-extrabold">Unify Healthcare™</span>
            {buttonText.split("Unify Healthcare™")[1]}
          </a>
        </div>)}
      </div>
    </section>
  );
};

export default AboutSection;
