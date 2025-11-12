// components/EmployersSection.tsx
import { Link } from "lucide-react";
import React from "react";

export default function EmployersSection() {
  return (
    <section
      className="flex flex-col lg:flex-row bg-[#4268B3] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/hm-about-bg.png')", // optional main section bg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 p-25 flex flex-col justify-center employer-left-col">
        <h2 className="text-[42px] font-[Lato] mb-6 leading-tight">
          Happy, Healthy Employees <br /> Are Dedicated Employees
        </h2>
        <p className="text-2xl mb-8 leading-relaxed text-white/90">
          All our plans are supported with a community of local doctors and quality care.
          Unify doctors offer fair pricing and care for Unify members with $0 Copays
          and No Deductible.
        </p>
        <a
          href="/community"
          className="btn w-fit inline-block bg-white text-blue-theme px-13 py-7 rounded-full shadow hover:bg-gray-100 transition font-[Lato] text-xl"
        >
          About <span className="font-bold">Unify Community™</span>
        </a>
      </div>

      {/* Right Column with Responsive Background */}
      <div
        className="w-full lg:w-1/2 bg-cover bg-top employer-right-col"
        style={{
          backgroundImage: "url('/images/stock-learn-more-about-unify-community.webp')",
        }}
      ></div>
    </section>
  );
}
