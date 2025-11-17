import { Link } from "react-router-dom";
import PrimaryBtn from "../global/PrimaryBtn";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] flex flex-col justify-center items-center text-center px-[5%] overflow-hidden">
      {/* Background Gradient Layer */}
      <div
        className="  absolute inset-0 -z-10 
      bg-gradient-to-br from-[#6a0dadb3] to-black/90
      bg-[length:200%_200%]
      animate-gradientShift"
        style={{
          background:
            "linear-gradient(45deg, rgba(106,13,173,0.7), rgba(0,0,0,0.9))",
        }}
      ></div>

      <div className="hero-content max-w-full z-[1] px-[5%] perspective-[1000px]">
        {/* Title */}
        <h1
          className="text-[25px] md:text-[56px] lg:pt-[7rem] leading-tight mb-6 text-white opacity-0 translate-y-[30px] rotate-x-[20deg]
          animate-[fadeInUp_1s_cubic-bezier(0.175,0.885,0.32,1.275)_0.3s_forwards]
          drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        "
        >
          Luxury Hair Extensions For The Queen In You
        </h1>

        {/* Subtitle */}
        <p
          className="text:[16px] md:text-[19.2px] text-white mb-8 opacity-0 translate-y-[30px] scale-[0.95]
          animate-[fadeInUp_1s_cubic-bezier(0.175,0.885,0.32,1.275)_0.5s_forwards]
          px-[5%]
        "
        >
          Premium quality 100% virgin human hair extensions, wigs, and closures.
          Hand-selected for perfection.
        </p>

        {/* Button */}
        <PrimaryBtn
          text="Shop Now"
          to="/shop"
          className="
    opacity-0 translate-y-[30px] scale-[0.95]
    animate-[fadeInUp_1s_cubic-bezier(0.175,0.885,0.32,1.275)_0.7s_forwards]
  "
        />
      </div>
    </section>
  );
};

export default HeroSection;
