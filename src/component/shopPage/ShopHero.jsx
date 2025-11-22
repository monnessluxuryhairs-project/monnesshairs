import React, { useState } from "react";

export default function ShopHero ({ onFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Products", value: "all" },
    { label: "Extensions", value: "extensions" },
    { label: "Wigs", value: "wigs" },
    { label: "Closures", value: "closures" },
    { label: "Frontals", value: "frontals" },
  ];

  const handleFilterClick = (value) => {
    setActiveFilter(value);
    if (onFilter) onFilter(value);
  };

  return (
    <section
      className="
        pt-[10rem] pb-12 px-[5%] text-center
        bg-[linear-gradient(45deg,rgba(106,13,173,0.7),rgba(0,0,0,0.9))]
      "
    >
      {/* Title */}
      <h1
        className="
          text-4xl md:text-5xl font-bold mb-4 text-white
          opacity-0 translate-y-5 animate-[fadeInUp_1s_ease_forwards]
        "
      >
        Our Luxury Collection
      </h1>

      {/* Subtitle */}
      <p
        className="
          text-[1.2rem] max-w-[700px] mx-auto mb-8 text-white
          opacity-0 translate-y-5 animate-[fadeInUp_1s_ease_forwards_0.3s]
        "
      >
        Discover premium 100% virgin human hair extensions, wigs, and closures
        hand-selected for perfection.
      </p>

      {/* Filters */}
      <div
        className="
          flex justify-center flex-wrap gap-4
          opacity-0 translate-y-5 animate-[fadeInUp_1s_ease_forwards_0.5s]
        "
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => handleFilterClick(f.value)}
            className={`
              py-2.5 px-5 rounded-full border text-sm font-medium
              transition-all duration-300
              ${
                activeFilter === f.value
                  ? "bg-[var(--gold)] text-[var(--black)] border-[var(--gold)]"
                  : "bg-transparent text-[var(--milk)] border-[var(--milk)] hover:bg-[var(--gold)] hover:text-[var(--black)] hover:border-[var(--gold)]"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>
    </section>
  );
}
