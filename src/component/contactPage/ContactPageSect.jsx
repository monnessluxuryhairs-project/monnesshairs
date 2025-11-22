import React from "react";
import { FaPhone, FaPinterest } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function ContactPageSect() {
  return (
    <section
      className="
        h-screen flex flex-col justify-center items-center text-center mt-20 px-[5%] relative overflow-hidden
      "
    >
      {/* Gradient Background Layer */}
      <div
        className="
          absolute inset-0 
          bg-[linear-gradient(45deg,rgba(106,13,173,0.8),rgba(0,0,0,0.9))]
          -z-10
        "
      />

      {/* Title */}
      <h1
        className="
          text-[4rem] mb-4 
          bg-gradient-to-r from-gold via-lightPurple to-milk 
          bg-clip-text text-transparent
          opacity-0 translate-y-[30px] animate-fadeInUpDelay
        "
      >
        Get In Touch
      </h1>

      {/* Subtitle */}
      <p
        className="
          text-[1.2rem] max-w-[600px] mb-8 text-milk 
          opacity-0 translate-y-[30px] animate-fadeInUpDelay2
        "
      >
        We'd love to hear from you. Reach out through any of these channels.
      </p>

      {/* Contact Methods */}
      <div
        className="
          flex justify-center flex-wrap gap-8 mt-12
          opacity-0 translate-y-[30px] animate-fadeInUpDelay3
        "
      >
        {/* Card 1 */}
        <ContactCard
          icon={<FaPhone size={40} />}
          title="Call Us"
          detail="+234 807 596 8901"
          link="tel:+2348075968901"
          btnLabel="Call Now"
        />

        {/* Card 2 */}
        <ContactCard
          icon={<FaMessage size={40} />}
          title="Email Us"
          detail="info@monnessluxuryhairs.com"
          link="mailto:info@monnessluxuryhairs.com"
          btnLabel="Send Email"
        />

        {/* Card 3 */}
        <ContactCard
          icon={<FaPinterest size={40} />}
          title="Visit Us"
          detail="Shop 176, block A1, HFP Eastline Shopping Complex, Abraham Adesanya, Ajah Lagos, Nigeria."
          link="https://maps.apple.com/place?coordinate=6.470340,3.586510"
          btnLabel="Get Directions"
        />
      </div>
    </section>
  );
}

/* Contact Card Component */
function ContactCard({ icon, title, detail, link, btnLabel }) {
  return (
    <div
      className="
        bg-glass border border-glassBorder backdrop-blur-[10px]
        rounded-[15px] p-8 w-[280px] text-center
        shadow-glassShadow
        transition-all duration-500
        transform perspective-[1000px] rotate-y-[20deg]
        hover:rotate-y-0 hover:-translate-y-3 hover:shadow-xl mb-20
      "
    >
      <div
        className="
          text-gold text-[2.5rem] mb-4 transition-all duration-500
          hover:scale-110 hover:rotate-[10deg]
        "
      >
        {icon}
      </div>

      <h3 className="text-[1.5rem] mb-3 text-milk">{title}</h3>
      <p className="text-milk mb-6">{detail}</p>
      <a
        href={link}
        className="
          inline-block px-6 py-2 rounded-full border border-milk
          text-milk font-medium transition-all duration-300
          hover:bg-gold hover:text-black hover:border-gold
        "
      >
        {btnLabel}
      </a>
    </div>
  );
}
