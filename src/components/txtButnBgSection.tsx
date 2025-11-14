import React, { ReactNode } from "react";
import { Info, ExternalLink } from "lucide-react";

interface AboutSectionProps {
  title?: string;
  subtitle?: ReactNode;
  buttonTitle?: string;
  buttonLink?: string;
  bgImage?: string;
  showButtons?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Check ups are old school",
  subtitle = "As a Unify Select Health member you receive personalized healthcare with attentive doctors and health staff. Together they know every detail of your health and create a care plan that's just for you.",
  buttonTitle = "Learn More",
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
      <div className="px-6 py-20 text-center w-[90%] mx-auto">
        <h2 className="text-white text-[42px] mt-2 font-[Lato] font-normal leading-none">
          {title}
        </h2>
        <p className="text-white/90 mt-6 text-2xl">{subtitle}</p>
        {showButtons && buttonTitle && (
          <div className="mt-12">
            <a
              href={buttonLink}
              className="font-[Lato] inline-flex items-center bg-white text-blue-theme hover:bg-gray-100 transition duration-200 
                         font-extrabold sm:text-xl py-7 px-22 rounded-full shadow-xl transform hover:scale-[1.02] active:scale-100"
              aria-label={buttonTitle}
            >              
              {/* Simplified rendering to be fully dynamic */}
              <span className="text-2xl ">{buttonTitle}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
