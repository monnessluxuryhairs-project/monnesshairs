import React from "react";

export default function FounderSection() {
  return (
    <section className="py-20 px-[5%] text-center bg-[linear-gradient(180deg,rgba(106,13,173,0.5),rgba(0,0,0,0.8))] relative">
      <div className="max-w-[800px] mx-auto relative">
        {/* Founder Image */}
        <img
          src="/assets/images/ceo.jpeg"
          alt="Founder"
          className="
            w-[200px] h-[200px] rounded-full object-cover 
            border-[5px] border-gold mx-auto mb-8
            shadow-[0_10px_30px_rgba(0,0,0,0.3)]
            opacity-0 scale-[0.8]
            animate-fadeInDelay
          "
        />

        {/* Quote */}
        <p
          className="
            text-[1.8rem] italic mb-8 relative
            opacity-0 translate-y-[30px]
            animate-fadeInUpDelay2
            text-milk
          "
        >
          "Monness Luxury Hairs is a brand with a vision to redefine beauty
          standards and empower women through premium hair solutions."
        </p>

        {/* Name */}
        <h4
          className="
            text-[1.5rem] text-gold mb-2
            opacity-0 translate-y-[30px]
            animate-fadeInUpDelay3
          "
        >
          Monness Adaramati
        </h4>

        {/* Title */}
        <p
          className="
            text-[1.1rem] text-milk
            opacity-0 translate-y-[30px]
            animate-fadeInUpDelay4
          "
        >
          Founder & CEO
        </p>
      </div>
    </section>
  );
}
