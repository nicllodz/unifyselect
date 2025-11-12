import Hero from "@/components/hero";
import MembershipSection from "@/components/gridSixSection";
import HmCopays from "@/components/titleTxtBgIconSection";
import AboutSection from "@/components/txtButnBgSection";
import CareNavigation from "@/components/textBgImgSection";
import ContactSection from "@/components/contactMapSection";

export default function MembersPage() {
  return (
    <main className="members-page">
      <Hero
        headline="Simply Smart Affordable Alternatives to Rising Healthcare Costs"
        subheading="It's time for Smart Affordable Healthcare"
        ctaText="UNIFY SMARTCare™ is committed to helping our members achieve their healthiest life, with providing great affordable medical care plans"
        bgImageSrc="/images/stock-members.webp"
        showButtons={false}
      />
      <MembershipSection />
      <HmCopays/>
      <AboutSection
        title = "Our Care Navigation™ Team can save you money and hassles"
        subtitle = "Stop the frustrations of Traditional Insurance. We put the Paitent FIRST."
        showButtons = {false}
      />
      <CareNavigation
        subtitle = "24/7 Secure Provider Access"
        description="We streamline your Primary care experience with secure our Care Navigation™ Team communications anytime, anywhere."
        imageSrc= "/images/stock-care-navigation-team.webp"
      />
      <ContactSection 
        rightType="image"
        imageSrc="/images/stock-contact-here-to-help.webp"
        title="We're Here to Help"
        subtitle="Reach us anytime"
      />
    </main>
  );
}
