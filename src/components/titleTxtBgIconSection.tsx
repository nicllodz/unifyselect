import Image from "next/image";
import { ReactNode } from "react";

interface HmCopaysProps {
  headingMain?: string;
  headingHighlight?: string;
  body?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
}

export default function HmCopays({
  headingMain = "$0 Copays.",
  headingHighlight = "No Deductibles.",
  body = [
    "Healthcare is often expensive and confusing—for individuals, families, and businesses. We believe it doesn't have to be that way.",
    "That's why Unify Healthcare™ delivers membership plans that eliminate unnecessary costs while improving access to care. With our technology and personal support, we make healthcare simple, predictable, and affordable for everyone.",
  ],
  logoSrc = "/images/logo-unify-blue.png",
  logoAlt = "Unify Logo",
}: HmCopaysProps) {
  return (
    <section className="flex justify-center px-4 py-16 bg-white w-[90%] mx-auto">
      <div className="relative w-full rounded-2xl bg-blue-50 p-8 md:p-18 copays-con">
        {/* Logo */}
        <div className="absolute top-[-34px] right-6">
          <Image src={logoSrc} alt={logoAlt} width={220} height={66} priority />
        </div>

        {/* Heading */}
        <h2 className="text-[42px] font-bold text-blue-900 mb-4 leading-tight font-[Lato]">
          {headingMain}{" "}
          <span className="text-light-blue-theme">{headingHighlight}</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-800 text-2xl mb-10">{body}</p>
      </div>
    </section>
  );
}
