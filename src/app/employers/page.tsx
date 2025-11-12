import Hero from "@/components/hero";
import EmployerSolutionSection from "@/components/contentImgSwapSection";
import BenefitListSection from "@/components/listIconSection";
import EmployersCommunitySection from "@/components/contentImgHalfBtnSection";
import BusinessSolutionsGrid from "@/components/muliGridContentSection";
import CareNavigation from "@/components/textBgImgSection";
import CaseStudiesSection from "@/components/simpleTitleTextSection";
import ContactSection from "@/components/contactMapSection";

export default function EmployersPage() {
  return (
    <main className="employers-page">
      <Hero
        headline="Solutions for Your Business"
        subheading="Healthcare coverage built for the C-Suite, appreciated by HR"
        ctaText="Your healthcare coverage need s are as unique as your business. Whether you're in manufacturing, hospitality, retail, or any other industry, we have a health plan just for you and your employees."
        bgImageSrc="/images/stock-employers.webp"
        showButtons={false}
      />
      <EmployerSolutionSection
        headline="Solutions for Small Businesses"
        subheading="From start-ups to family-owned businesses with up to 50 employees"
        body={
            <>
                <strong>Unify Healthcare™</strong> plans for small businesses are built
                to give you and your team affordable, practical coverage without the
                complexity of big insurance. Designed to scale as you grow, our plans keep
                your employees cared for while keeping costs under control.
            </>
        }
        ctaText="Let's Get Started"
        ctaLink="/#contact-us"
        bgImageSrc="/images/stock-solutions-small-businesses.webp"
      />
      <EmployerSolutionSection
        headline="Solutions for Not-So-Small Businesses"
        subheading="Growing companies with 100+ employees in any industry"
        body={
            <>
                For mid-sized businesses with larger teams and unique challenges, <strong>Unify Healthcare™</strong>
                provides tailored coverage that balances affordability with flexibility. Our solutions are designed to meet 
                the diverse needs of your workforce—delivering plans that grow with your business.
            </>
        }
        ctaText="Explore Plans"
        ctaLink="/#contact-us"
        bgImageSrc="/images/stock-solutions-not-so-small-businesses.webp"
        reverse
        />
      <BenefitListSection
        title="Plans that cost 30% less than Major Insurance Carriers"
        subtitle="Cut unnecessary expenses while giving your employees better benefits they can afford"
        items={[
          { title: "Lower Healthcare Spend", desc: "- Reward healthy employees with lower costs, better care and transparent pricing" },
          { title: "Care Navigation Team", desc: "- Our care concierge team assists patients from appointment setting to follow up" },
          { title: "Network Optimization", desc: "- Freedom to choose your own provider" },
          { title: "Stop Loss", desc: "- Unify plans negotiate the best terms compared to traditional carriers" },
          { title: "DPC", desc: "- Everyone will have access to their doctor for better care and diagnosis" },
        ]}
      />
      <EmployersCommunitySection />
      <BusinessSolutionsGrid
        title="Solutions for All Business Types"
        subtitle="Finding a healthcare solution to fit your business and employees needs can be a struggle until now"
        items={[
          { title: "Manufacturing", desc: "Keep your workforce healthy and productive with cost-efficient coverage.", icon: "/images/icon-solutions-manufacturing.png" },
          { title: "Transportation", desc: "Affordable plans built for drivers and logistics teams always on the move.", icon: "/images/icon-solutions-transportation.png" },
          { title: "Contractors", desc: "Flexible healthcare designed for independent workers and project-based teams.", icon: "/images/icon-associations-contractors.png" },
          { title: "Franchises", desc: "Scalable benefits that grow with your franchise locations and staff.", icon: "/images/icon-solutions-franchises.png" },
          { title: "Staffing", desc: "Easy-to-manage plans that support temporary, seasonal, and permanent employees.", icon: "/images/icon-solutions-staffing.png" },
          { title: "Hospitality", desc: "Give your team reliable care without cutting into your bottom line.", icon: "/images/icon-solutions-hospitality.png" },
          { title: "Restaurants", desc: "Simple, affordable coverage for restaurant owners, chefs, and service staff.", icon: "/images/icon-solutions-restaurants.png" },
          { title: "Home Health", desc: "Healthcare solutions tailored for caregivers and in-home providers.", icon: "/images/icon-solutions-home-health.png" },
          { title: "Government Contractors", desc: "Compliant, competitive plans that meet contract requirements.", icon: "/images/icon-solutions-government-contractors.png" },
          { title: "Janitorial", desc: "Practical coverage for essential workers keeping businesses clean and safe.", icon: "/images/icon-solutions-janitorial.png" },
          { title: "Marketing Agencies", desc: "Creative perks with smart healthcare solutions that attract top talent.", icon: "/images/icon-solutions-marketing-agencies.png" },
          { title: "Agriculture", desc: "Affordable coverage to support farmworkers and rural communities.", icon: "/images/icon-solutions-agriculture.png" },
        ]}
        columns={4}
      />
      <CareNavigation
        title="Here for Your Employees"
        subtitle = "For less than a $1 an hour you can offer medical care for ALL YOUR EMPLOYEES."
        description={
            <>
                <strong>Unify Healthcare™</strong> businesses are boosting this to incentivize quality 
                candidates to their business. Our premium healthcare benefits can help you deliver high-quality 
                healthcare in the way that works best for your company. <br />
                <br />
                <strong>Unify Healthcare™</strong> supports employers that are looking for key health benefits 
                such as Enticing and Winning Quality Employees, Improving Employee Productivity and Overall Health, 
                and Enhancing Value-Based Care.
            </>
        }
        imageSrc= "/images/stock-here-to-help-your-employees.webp"
      />
      <CaseStudiesSection />
      <ContactSection 
        rightType="image"
        imageSrc="/images/stock-contact-unify-healthcare.webp"
        title="We're Here to Help"
        subtitle="Reach us anytime"
      />
    </main>
  );
}
