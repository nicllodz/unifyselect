import Hero from "@/components/hero";
import EmployerSolutionSection from "@/components/contentImgSwapSection";
import BenefitListSection from "@/components/listIconSection";
import ContactSection from "@/components/contactMapSection";
import HmCopays from "@/components/titleTxtBgIconSection";
import BusinessSolutionsGrid from "@/components/muliGridContentSection";
import AboutSection from "@/components/txtButnBgSection";

export default function AssociationsPage() {
  return (
    <main className="associations-page">
      <Hero
        headline="Unify Healthcare™ for Associations"
        subheading="Affordable Medical Plans to enhance the value of your membership"
        ctaText="With ZERO start-up costs your membership count is sure to get a boost while giving members a competitive edge"
        bgImageSrc="/images/stock-associations.webp"
        showButtons={false}
      />
      <HmCopays
        headingMain="Increase and Retain Members."
        headingHighlight="Quick and Easy Start-Up."
        body={
            <>
                For years, Americans have ranked affordable healthcare as their number one concern.
                <br/><br/>
                At <strong>Unify Healthcare™</strong>, we turn that concern into confidence with solutions designed to 
                lower costs and improve access for everyone.
            </>
        }
        />

      <EmployerSolutionSection
        headline="Recruit More Members"
        subheading={
            <>
                Attract new members with healthcare benefits they actually value
            </>
        }
        body={
            <>
                Build your membership with affordable health care, a sought-after benefit at no cost to your organization. 
                Our easy to implement health plan will foster member engagement and attract members.
            </>
        }
        bgImageSrc="/images/stock-recuit-more-members.webp"
      />
      <EmployerSolutionSection
        headline="Retain Your Members"
        subheading="Keep members engaged with care that puts their needs first"
        body={
            <>
                Affordable medical care is a top priority for your members. Improve member retention with a better health care 
                experience and ease of use. We provide you and your members with all the tools necessary.
            </>
        }
        bgImageSrc="/images/stock-retain-your-members.webp"
        reverse
        />
      <BusinessSolutionsGrid
        title="Our Medical Plans are Designed for Associations"
        subtitle="Your members deserve more than one-size-fits-all insurance"
        items={[
          { title: "Freelancers", desc: "Affordable coverage that gives independents peace of mind and stability.", icon: "/images/icon-associations-freelancers.png" },
          { title: "Transportation", desc: "Keep drivers healthy and on the road with accessible, low-cost care.", icon: "/images/icon-associations-transportation.png" },
          { title: "Consultants", desc: "Flexible plans that match the changing needs of project-based work.", icon: "/images/icon-associations-consultants.png" },
          { title: "Realtors", desc: "Provide agents with reliable healthcare so they can focus on closing deals.", icon: "/images/icon-associations-realtors.png" },
          { title: "Contractors", desc: "Practical benefits built to support skilled trades and their unique risks.", icon: "/images/icon-solutions-contractors.png" },
          { title: "Wholesale Stores", desc: "Protect staff and improve retention with cost-saving health plans.", icon: "/images/icon-associations-wholesale-stores.png" },
        ]}
        columns={3}
      />
      <BenefitListSection
        title="We Make It Easy"
        subtitle="Letting your members know about Unify Healthcare is all you have to do. We do the rest!"
        description={
            <>
                From a personalized, targeted web page to a custom enrollment website, we&apos;ll take your members 
                through the process seamlessly. Our marketing team supports your organization with webinars, 
                email campaigns, and informative marketing material.
                Member Onboarding:
            </>
        }
        itemsTitle="Member Onboarding:"
        items={[
          { desc: "Branded Enrollment Website" },
          { desc: "Email Campaigns and Notifications" },
          { desc: "Webinars for Member Information" },
          { desc: "Marketing Brochures" },
        ]}
      />
      <AboutSection
        title = "Healthcare That Strengthens Membership"
        subtitle = "Boost recruitment and retention with zero-cost, easy-to-implement health plans"
        showButtons = {false}
      />
      <ContactSection 
        rightType="image"
        imageSrc="/images/stock-contact-unify-healthcare.webp"
        title="We&apos;re Here to Help"
        subtitle="Reach us anytime"
      />
    </main>
  );
}
