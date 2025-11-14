import React from "react";

interface CaseStudiesSectionProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  title = "Industry Case Studies",
  subtitle = "Real Business. Real Results.",
  paragraphs = [
    "Every business faces unique challenges when it comes to healthcare coverage. At Unify Healthcare™, we’ve partnered with companies across industries to lower costs, improve employee satisfaction, and strengthen their bottom line.",
    "Explore our case studies below to see how Unify Healthcare™ can help your business achieve smarter, more affordable healthcare.",
  ],
}) => {
  return (
    <section className="w-[90%] mx-auto px-6 py-16 case-stud-sec">
      <h2 className="title text-[42px] font-[Lato] text-center mb-2">
        {title}
      </h2>
      <p className="subtitle text-2xl text-light-blue-theme mb-6">{subtitle}</p>
      <p className="paragraphs text-2xl text-gray-800 mb-4">{paragraphs}</p>
    </section>
  );
};

export default CaseStudiesSection;
