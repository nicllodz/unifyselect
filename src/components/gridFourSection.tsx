// components/Solutions.tsx
import Image from "next/image";

export default function Solution() {
  const solutions = [
    {
      title: "Members",
      icon: "/images/icon-members.png",
      heading: "Smart, Simple, and Affordable Healthcare Designed Around You",
      description:
        "Lower healthcare costs with plans that are easy to access and tailored to your needs.",
      link: "Explore Member Plans",
      href: "/members",
    },
    {
      title: "Employers",
      icon: "/images/icon-employers.png",
      heading: "Smarter Healthcare Solutions Built for Your Business",
      description:
        "Cut costs while giving your employees better benefits they can afford.",
      link: "Explore Employer Solutions",
      href: "/employers",
    },
    {
      title: "Brokers",
      icon: "/images/icon-brokers.png",
      heading: "Grow Your Business with Smarter Healthcare Solutions",
      description:
        "Win and retain clients with affordable, innovative health solutions.",
      link: "Partner With Us",
      href: "/brokers",
    },
    {
      title: "Associations",
      icon: "/images/icon-associations.png",
      heading:
        "Boost Membership Value with Affordable Healthcare Solutions",
      description:
        "Boost & retain membership with turnkey, zero start-up healthcare plans.",
      link: "See Association Benefits",
      href: "/associations",
    },
  ];

  return (
    <section className="bg-gray-50 py-16" id="grid-section-solution">
      <div className="w-[90%] mx-auto px-6 ">
        <h2 className="text-[42px] font-[Lato] text-gray-900 solns-title">
          We have a solution for everyone
        </h2>
        <p className="text-light-blue-theme mt-2 text-2xl">
          Learn more about Unify Healthcare™
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow p-6 text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-blue-theme">
                  {item.title}
                </h3>

                {/* ✅ Image from /public/images */}
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={200}
                  height={134}
                  className="py-5 mx-auto"
                />

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.heading}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <a
                href={item.href}
                className="mt-4 inline-block font-medium text-[#f1ae19] hover:underline font-[Lato] underline"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
