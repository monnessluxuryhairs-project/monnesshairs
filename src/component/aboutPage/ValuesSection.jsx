// src/components/ValuesSection.jsx
import React from "react";
import valuesData from "../../utils/valuesData";

export default function ValuesSection() {
  return (
    <section
      className="py-20 px-[5%] relative overflow-hidden
                 bg-[linear-gradient(180deg,rgba(0,0,0,0.8),rgba(106,13,173,0.5))]"
    >
      <h2
        className="text-4xl md:text-5xl text-center mb-12 text-white
                   opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.05s" }}
      >
        Our Core Values
      </h2>

      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {valuesData.map((item, i) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className="group relative overflow-hidden bg-[var(--glass)]
                         backdrop-blur-lg rounded-[15px] p-8 border
                         border-[var(--glass-border)] shadow-[var(--glass-shadow)]
                         transition-all duration-500 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.2 * i + 0.2}s` }}
            >
              {/* Shine layer */}
              <div
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
                           bg-[linear-gradient(45deg,transparent,rgba(255,215,0,0.1),transparent)]
                           opacity-0 pointer-events-none transition-opacity duration-500
                           group-hover:opacity-100 group-hover:animate-shine"
              />

              {/* Icon */}
              <div
                className="text-[3rem] mb-6 text-[var(--gold)] transition-transform duration-500
                           group-hover:rotate-y-180 group-hover:scale-110"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Icon />
              </div>

              <h3
                className="text-[1.8rem] mb-4 inline-block relative text-white
                           after:block after:absolute after:bottom-[-8px] after:left-0
                           after:w-1/2 after:h-[2px] after:bg-[var(--gold)]
                           after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {item.title}
              </h3>

              <p className="text-[1.1rem] text-white/90 leading-[1.7]">
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
