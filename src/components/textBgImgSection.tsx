import Image from "next/image";
import { ReactNode } from "react";

interface CareNavigationProps {
  title?: string;
  subtitle?: string;
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // optional to swap image and text sides
}

export default function CareNavigation({
  title = "Care Navigation™ Team",
  subtitle = "Team Members On Call",
  description = "Our Care Navigation™ personal health concierge team assists you with appointments, scheduling labs, or get answers to some of your healthcarequestions. The Care Navigation™ Team will assist you by phone, text or video.",
  imageSrc= "/images/team-members-on-call.webp",
  imageAlt = "Care Navigation Image",
  reverse = false,
}: CareNavigationProps) {
  return (
    <section className="flex justify-center py-12 px-6 bg-white carenav-sect">
      <div
        className={`w-[90%] flex flex-col md:flex-row items-end gap-8 bg-[#ebf2ff] rounded-xl mt-20 relative carenav-cont ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="w-[70%] p-20 carenav-left">
          <h3 className="text-blue-theme font-bold text-[28px] font-[Lato] carenav-title">
            {title}
          </h3>
          <h2 className="text-[42px] font-bold text-light-blue-theme mt-2 leading-tight carenav-subtitle">
            {subtitle}
          </h2>
          <p className="text-black mt-4 leading-relaxed text-2xl">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="w-[30%] absolute pr-10 carenav-img right-0 flex justify-end">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="object-cover care-member-img"
          />
        </div>
      </div>
    </section>
  );
}
