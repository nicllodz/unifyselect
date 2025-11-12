"use client";

interface BusinessItem {
  title: string;
  desc: string;
  icon?: string;
}

interface BusinessSolutionsGridProps {
  title: string;
  subtitle: string;
  items: BusinessItem[];
  columns?: 1 | 2 | 3 | 4;
}

const BusinessSolutionsGrid: React.FC<BusinessSolutionsGridProps> = ({
  title,
  subtitle,
  items,
  columns = 3,
}) => {
  const gridCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns] || "lg:grid-cols-3";

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-[90%] mx-auto px-6">
        <h2 className="text-4xl md:text-[42px] font-[Lato] text-gray-900 mb-2">{title}</h2>
        <p className="text-2xl mb-12 text-light-blue-theme">{subtitle}</p>

        <div className={`multigrid-content grid gap-8 sm:grid-cols-2 ${gridCols}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              {item.icon && (
                <div className="mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-18 h-18 mx-auto md:mx-0 multigrid-imgs"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-[#2e3970] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionsGrid;
