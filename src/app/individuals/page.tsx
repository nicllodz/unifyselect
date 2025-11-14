import Hero from "@/components/hero";
import EmployerSolutionSection from "@/components/contentImgSwapSection";
import BenefitListSection from "@/components/listIconSection";
import EmployersCommunitySection from "@/components/contentImgHalfBtnSection";
import BusinessSolutionsGrid from "@/components/muliGridContentSection";
import CareNavigation from "@/components/textBgImgSection";
import CaseStudiesSection from "@/components/simpleTitleTextSection";
import ContactSection from "@/components/contactMapSection";
import AboutSection from "@/components/txtButnBgSection";

export default function IndividualsPage() {
  return (
    <main className="individuals-page">
      <Hero
        headline="New approach to Personal care"
        subheading="Unify Select physicians spend as long as needed to listen, explain, and treat your issue - a true doctor - patient relationship"
        ctaText=""
        bgImageSrc="/images/stock-employers.webp"
        showButtons={true}
      />
      <EmployerSolutionSection
        headline="Get to know you"
        subheading=""
        body={
            <>
                In your first visit you&apos;ll meet your doctor and care team for 60 minutes - compared to the average 
                Family Practice physician who spends about 8 minutes with each patient. Your doctor will focus on your goals, 
                answer questions and create your health profile. Most of all the doctor will spend as long as needed to listen, 
                explain, and treat your problem.
            </>
        }
        bgImageSrc="/images/stock-solutions-small-businesses.webp"
      />
      <EmployerSolutionSection
        headline="Continuous Care"
        subheading=""
        body={
            <>
                Staying healthy begins with continuous care - not once in awhile visits. So, Unify Select established their 
                membership program around you and your personal health. Members reduce the need for expensive specialists since 
                you can visit your doctor anytime.
            </>
        }
        bgImageSrc="/images/stock-solutions-not-so-small-businesses.webp"
        reverse
        />
        <EmployerSolutionSection
        headline="Members and their Families get access to the following:"
        subheading=""
        body={
            <>
                <div className="text-light-blue-theme font-bold">Unlimited access to your doctor</div> 
                Literally. After hours, weekends, holidays, etc. We understand healthcare need doesn&apos;t just occur during 
                standard business hours.

                <div className="text-light-blue-theme font-bold mt-3">Same day and next-day service</div> 
                Because our physician has reserved their time for a select few, there will be no &quot;squeezing you in.&quot; 
                You&apos;re a priority, and you&apos;ll feel like one.

                <div className="text-light-blue-theme font-bold mt-3">Concierge Service</div> 
                Every member gets access to a care team made up of a nurse, and three care coordinators. 
                Your care team is with you for 24/7 access everyday.
            </>
        }
        bgImageSrc="/images/stock-solutions-small-businesses.webp"
      />
      <AboutSection
        title = "Find out if Unify Select is a good fit for you. Schedule a call today."
        subtitle = ""
        buttonTitle = "Schedule a Call"
      />
    </main>
  );
}
