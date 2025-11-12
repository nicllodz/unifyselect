import Image from "next/image";
import { ReactNode } from "react";

interface BenefitItem {
  title?: string;
  desc: string;
}

interface BenefitListSectionProps {
  title?: string;
  subtitle?: string;
  items: BenefitItem[];
  iconSrc?: string;
  iconAlt?: string;
  description?: ReactNode;
  itemsTitle?: string;
}

export default function BenefitListSection({
  title,
  subtitle,
  items,
  description,
  itemsTitle,
  iconSrc = "/images/check-square-green.png", // default image path
  iconAlt = "check icon",
}: BenefitListSectionProps) {
  return (
    <section className="py-16 bg-white w-[90%] mx-auto icon-list-section">
      <div className="px-6">
        {/* Title */}
        {title && (
          <h2 className="text-[42px] font-[Lato] text-gray-900 mb-2 leading-none title">
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-light-blue-theme text-2xl mb-10">{subtitle}</p>
        )}

        {/* Subtitle */}
        {description && (
          <p className="text-gray-800 text-2xl mb-10">{description}</p>
        )}
        {/* Items Title */}
        {itemsTitle && (
          <p className="text-gray-800 text-2xl mb-8 font-bold">{itemsTitle}</p>
        )}

        {/* Dynamic list */}
        <ul className="space-y-2 text-left">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <Image
                  src={iconSrc}
                  alt={iconAlt}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <p className="text-gray-800 text-2xl">
                <strong>{item.title}</strong> {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
