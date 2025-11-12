// components/BenefitsSection.js
import Image from "next/image";

const benefits = [
  {
    title: "The Best Doctors",
    image: "/images/stock-members.webp",
    description: `The Unify Community™ works for every employer - starting from our clients' claim history intake to provider nominations enabling our members to share their preferred providers.`,
    extra: `From there we expand our provider selection with Unify Community™ provider invites so members can see who they want.`,
  },
  {
    title: "Improved Outcomes",
    image: "/images/stock-brokers-affordable-programs.webp",
    description: `The Unify Community™ provides incentives for providers, members and employers for the best outcomes:`,
    list: [
      "Providers receive fast reimbursement",
      "Employers have more control over rising healthcare costs",
      "Members get the care they need, when they need it at an affordable price",
    ],
  },
  {
    title: "Transparent Pricing",
    image: "/images/stock-contact-send-us-a-message.webp",
    description: `Traditional network pricing offers a percentage discount from an artificially inflated starting point making costs unpredictable.`,
    extra: `Unify Community™ providers funding is transparent from known Medicare reimbursement rates. This ensures fair pricing for both the provider and employer.`,
  },
];

export default function FeturedGrids() {
  return (
    <section className="px-4 pb-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-sm hover:shadow-lg transition-shadow bg-gray-50"
          >
            <div className="w-full h-56 relative mb-6">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="content p-6">
            <h3 className="text-xl font-semibold text-[#2e3970] mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-4">{item.description}</p>

            {item.list && (
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {item.extra && (
              <p className="text-gray-700">{item.extra}</p>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
