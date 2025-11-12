import Hero from "@/components/hero";
import EmployerSolutionSection from "@/components/contentImgSwapSection";
import BenefitListSection from "@/components/listIconSection";
import ContactSection from "@/components/contactMapSection";
import HmCopays from "@/components/titleTxtBgIconSection";

export default function BrokersPage() {
  return (
    <main className="brokers-page">
      <Hero
        headline="Win More Clients and Grow Your Brokerage"
        subheading="Healthcare Plans built on Direct Patient Care"
        ctaText="Offer medical plans to clients designed to lower costs, align incentives, and improve access."
        bgImageSrc="/images/stock-brokers.webp"
        showButtons={false}
      />
      <HmCopays
        headingMain="Ideal solutions for any size group."
        headingHighlight="5-30,000+ Employees."
        body={
            <>
                Are your Clients looking for healthcare solutions that can cover all their employees? 
                <strong> Unify Healthcare™</strong> provides the necessary tools to empower brokers with the best resources. <br/><br/>
                <strong>Unify Healthcare™</strong> changes the way clients utilize health insurance while providing better access to 
                exponentially better medical care. We give you the power to deliver direct primary patient care to any 
                size client, in all 50 states.
            </>
        }
        />

      <EmployerSolutionSection
        headline="We have the solutions and services for brokers to grow their business"
        subheading={
            <>
                The <strong>Unify Healthcare™</strong> Team of experts is dedicated to supporting brokers 
                with concierge account management services.
            </>
        }
        body={
            <>
                Our dedicated support team for brokers align provider networks, health benefit options, 
                medical utilization, and organizational management with selected health plans, chronic care management 
                and population health management plans. We make it possible for you to keep your customers happy 
                while attracting customers away from your competitors with Affordable Healthcare + Savings.
            </>
        }
        bgImageSrc="/images/stock-brokers-solutions-and-services.webp"
      />
      <EmployerSolutionSection
        headline="Our affordable programs offer benefits to you and your customers"
        subheading="When a client is looking for extra cash flow or reduced costs, we partner with you to help you win and keep them"
        body={
            <>
                <strong>Unify Healthcare™</strong>s solutions are a new approach to health coverage, 
                empowering your clients business with an increase in profits while reducing overhead costs.
                <br/><br/>
                <strong>Unify Healthcare™</strong>s level-funded and self-funded health plans are designed to 
                connect employer groups with top quality care at the lowest possible cost.
            </>
        }
        bgImageSrc="/images/stock-brokers-affordable-programs.webp"
        reverse
        />
      <BenefitListSection
        title="SMARTCare™ Plan"
        subtitle="Level funded Medical Plan that is affordable to purchase and use. SMARTCare™ is compliant with the Employee Retirement Income Security Act"
        description={
            <>
                Our plans are a perfect fit for clients offering healthcare as a business perk. 
                When competing to retain and recruit the best lower-wage employees in a business, 
                <strong> SMARTCare™</strong> as a stand-alone plan offers an affordable medical cost sharing alternative to traditional insurance.
            </>
        }
        items={[
          { desc: "Care Navigation™ Team (24-7 Care Guidance)" },
          { desc: "$0 Co-pays and No Deductibles (Unify Office Visits)" },
          { desc: "Open Network" },
          { desc: "Minimum 5 Employees" },
          { desc: "Available in 50 States" },
          { desc: "Meets ACA minimum coverage" },
        ]}
      />
      <ContactSection 
        rightType="image"
        imageSrc="/images/stock-contact-send-us-a-message.webp"
        title="We're Here to Help"
        subtitle="Reach us anytime"
      />
    </main>
  );
}
