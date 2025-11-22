import React from "react";
import CategoryCard from "./categoriesCard";
import { categoriesData } from "../../utils/categoriesData";

export default function Categories() {
  return (
    <section
      className="
        relative py-20 px-[5%] text-center overflow-hidden categories
        bg-gradient-to-b from-[rgba(106,13,173,0.5)] to-[rgba(0,0,0,0.8)]
      "
    >
      {/* Diamond Pattern Parallax */}
      <div
        className="
          absolute inset-0 opacity-[0.05] -z-10
          bg-[url('/diamond-pattern.png')]
          animate-diamondMove
        "
      ></div>

      <h2 className="text-3xl font-bold section-title text-white">
        Shop By Category
      </h2>

      <div
        className="
          grid gap-8 mt-12 categories-grid
          grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        "
      >
        {categoriesData.map((cat, i) => (
          <CategoryCard
            key={i}
            title={cat.title}
            image={cat.image}
            link={cat.link}
          />
        ))}
      </div>
    </section>
  );
}
