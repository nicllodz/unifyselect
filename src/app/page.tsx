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

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MembershipSection />
      <HmCopays/>
      <Solution/>
      <CareNavigation/>
      <TelehealthServ/>
      <AboutSection/>
      <ContactForm/>
      <ResourcesSection/>
    </div>
  );
};

export default HomePage;
