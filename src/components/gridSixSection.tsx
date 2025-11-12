/* This is home page second section */

import { ReactNode } from "react";
import Image from "next/image";

type MembershipSectionProps = {
  title?: ReactNode;
  subtitle?: string;
  textbody?: ReactNode;
};

const features = [
  {
    icon: "/images/icon-direct-primay-care.png",
    title: "Direct Primary Care",
    description: (<p>Primary Care & Wellness Visits with No <br /> Copay, No Deductible.</p>),
  },
  {
    icon: "/images/icon-specialist-care.png",
    title: "Specialist Care",
    description: (<p>Network of specialists with personalized <br /> guidance, and real results.</p>),
  },
  {
    icon: "/images/icon-care-navigation-team.png",
    title: "Care Navigation™ Team",
    description: (<p>Simplifying the process with a single <br /> contact, humanizing healthcare.</p>),
  },
  {
    icon: "/images/icon-prescription-savings.png",
    title: "Prescription Savings",
    description: (<p>Easily refill prescriptions <br /> with Big Discounts.</p>),
  },
  {
    icon: "/images/icon-open-network.png",
    title: "Open Network",
    description: "Use our physicians or your own.",
  },
  {
    icon: "/images/icon-labs.png",
    title: "Labs",
    description: "Most routine lab work at lower prices.",
  },
];

export default function MembershipSection({ 
  title = "SMARTCare™ Membership", 
  subtitle = "Maximum Benefits, Minimal Cost",
  textbody = (
    <p className="text-black">
      Healthcare shouldn&apos;t be complicated—or costly. With <span className="font-bold">UNIFY SMARTCare™</span>, 
      you get streamlined access to the care you need most, without the hidden fees, fine print, or confusing networks. 
      Our membership puts you in control: simple, predictable, and affordable healthcare designed to fit your life and your budget.
    </p>
  ),
}: MembershipSectionProps) {
  return (
    <section className="py-16 w-[90%] mx-auto px-4">
      <div className="">
        <h2 className="text-[42px] font-bold text-blue-theme font-[Lato] leading-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-2xl text-light-blue-theme">{subtitle}</p>}
        <div className="mt-3 text-2xl">{textbody}</div>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <Image 
              src={item.icon} 
              alt={item.title} 
              className="h-20 w-20 object-contain"
              width={80}
              height={80}
            />
            <h3 className="mt-4 font-bold text-[26px] font-[Montserrat]">{item.title}</h3>
            <div className="text-gray-600 mt-2 text-[15px]">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}