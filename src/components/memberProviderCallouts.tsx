// components/MemberProviderCallouts.tsx

import React from 'react';

// Data for the two callout cards, defining all content and unique styling classes
const callouts = [
  {
    type: 'Members',
    description: "Nominate your preferred Doctor(s) to join the Unify Community™ & future visits could be with no-copay or deductible.",
    buttonText: 'Nominate Now',
    // Theme 1: Blue/Slate
    titleColor: 'text-slate-700',
    buttonOutline: 'border-slate-500 text-slate-700 hover:bg-slate-50',
    headerBg: 'bg-slate-500',
  },
  {
    type: 'Providers',
    description: "See Patients with a 72 hour or less reimbursement and $0 collections.",
    buttonText: 'Join the Unify Community',
    // Theme 2: Yellow/Orange
    titleColor: 'text-amber-500',
    buttonOutline: 'border-amber-400 text-amber-600 hover:bg-amber-50',
    headerBg: 'bg-amber-400',
  },
];

export default function MemberProviderCallouts() {
  return (
    // Outer section for padding and background
    <section className="py-16 px-4 bg-gray-50"> 
      
      {/* Container for the two cards, centered and responsive */}
      <div className="w-[70%] mx-auto flex flex-col md:flex-row gap-8">
        
        {callouts.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 bg-white shadow-xl rounded-xl overflow-hidden flex flex-col"
          >
            {/* Colored Header Bar */}
            <div className={`h-2 w-full ${item.headerBg}`}></div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              
              {/* Content Area */}
              <div>
                <h2 className={`text-4xl font-semibold mb-4 ${item.titleColor}`}>
                  {item.type}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Button */}
              <button
                className={`mt-8 py-3 px-6 text-lg rounded-full border-2 transition-all duration-200 ${item.buttonOutline}`}
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}