import React from "react";
import Hero from "@/components/hero";
import MembershipSection from "@/components/gridSixSection";
import HmCopays from "@/components/titleTxtBgIconSection";
import Solution from "@/components/gridFourSection";
import CareNavigation from "@/components/textBgImgSection";
import TelehealthServ from "@/components/titleTxtBgSection";
import AboutSection from "@/components/txtButnBgSection";
import ResourcesSection from "@/components/carouselSection";
import ContactForm from "@/components/contactMapSection";
import BenefitListSection from "@/components/listIconSection";
import BusinessSolutionsGrid from "@/components/muliGridContentSection";
import CaseStudiesSection from "@/components/simpleTitleTextSection";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <BenefitListSection
        title="Sensible and Complete Whole-body Health"
        subtitle="The future of healthcare is personalized with"
        items={[
          { desc: "Advanced Testing" },
          { desc: "Nutritional Guidance" },
          { desc: "On-going Collaboration" },
          { desc: "Latest Technology" },
        ]}
      />
      <AboutSection/>
      <BusinessSolutionsGrid
        title="6 Reasons to become a Unify Select Member"
        subtitle="Join a community built around transparency and trust — where you health, time and money are all treated with the same care."
        items={[
          { title: "Direct Access", desc: "To your Doctor through Email and Text Messaging.", icon: "/images/icon-solutions-manufacturing.png" },
          { title: "Zero Wait Time", desc: "Virtually Zero Wait Time and Unlimited Visits.", icon: "/images/icon-solutions-transportation.png" },
          { title: "Diagnostic Test", desc: "Get to the root of your issues.", icon: "/images/icon-associations-contractors.png" },
          { title: "$0 Copay", desc: "Unlimited Visits with Virtually No Co-pay.", icon: "/images/icon-solutions-franchises.png" },
          { title: "Unlimited Urgent Care", desc: "All Acute Medications and Procedures Included.", icon: "/images/icon-solutions-staffing.png" },
          { title: "Nutrition Plan", desc: "Healthy and in control of your own health.", icon: "/images/icon-solutions-hospitality.png" },
        ]}
        columns={3}
      />
      <CaseStudiesSection 
        title="We eliminate the insurance company between the doctor and patient and focus on a real doctor-patient relationship."
        subtitle=""
        paragraphs=""
      />
    </div>
  );
};

export default HomePage;
