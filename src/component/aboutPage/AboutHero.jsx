import React from "react";

export default function AboutHero() {
  return (
    <section
      className="
      relative h-screen flex flex-col justify-center items-center text-center 
      px-[5%] overflow-hidden
      about-hero-bg
    "
    >
      {/* Title */}
      <h1
        className="
        text-[4rem] mb-6 font-bold about-title-gradient
        opacity-0 translate-y-[30px] animate-fadeInUp delay-[300ms]
      "
      >
        Our Story
      </h1>

      {/* Subtitle */}
      <p
        className="
        text-[1.5rem] max-w-[800px] mx-auto mb-12
        opacity-0 translate-y-[30px] animate-fadeInUp delay-[600ms]
      "
      >
        Crafting luxury hair experiences that empower and transform since 2020
      </p>

      {/* Floating images */}
      <div className="floating-hair hair-1"></div>
      <div className="floating-hair hair-2"></div>
      <div className="floating-hair hair-3"></div>
      <div className="floating-hair hair-4"></div>
    </section>
  );
}
