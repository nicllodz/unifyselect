import Hero from "@/components/hero";
import ContactSection from "@/components/contactMapSection";
import AboutSection from "@/components/txtButnBgSection";
import CaseStudiesSection from "@/components/simpleTitleTextSection";
import FeatureGridSection from "@/components/featureGrid";
import MemberProviderCallouts from "@/components/memberProviderCallouts";
import StackedImageContent from "@/components/contentBigImg";
// import FeatureGrid from "@/components/featureGrid";

export default function PlansPage() {
  return (
    <main className="plans-page">
      <Hero
        headline="Unify Healthcare™ for Associations"
        subheading="Affordable Medical Plans to enhance the value of your membership"
        ctaText="With ZERO start-up costs your membership count is sure to get a boost while giving members a competitive edge"
        bgImageSrc="/images/stock-unify-community.webp"
        showButtons={false}
      />
      <AboutSection
        title = "Welcome to the Unify Community™"
        subtitle = {
          <>
              with Reference-Based Pricing and No Balance Bills
              <br/><br/>
              <strong>Unify Healthcare™</strong> Providers engage our members with the best possible pricing – we designed a better 
              transparent healthcare relationship and reimbursement process.
          </>
        }
        showButtons = {false}
      />
      <CaseStudiesSection 
        title="The Unify Community™"  
        subtitle="A smarter healthcare ecosystem designed by and for our members."
        paragraphs="Redefining healthcare by putting Employers, Providers, and Members on the same team. With member-driven networks, 
                    aligned incentives, and transparent pricing, we deliver care that's fair, affordable, and built around real needs."
      />
      <FeatureGridSection />
      <MemberProviderCallouts />
      <StackedImageContent />
      <ContactSection 
        rightType="map"
        // imageSrc="/images/stock-contact-unify-healthcare.webp"
        title="We&apos;re Here to Help"
        subtitle="Reach us anytime"
      />
    </main>
  );
}
