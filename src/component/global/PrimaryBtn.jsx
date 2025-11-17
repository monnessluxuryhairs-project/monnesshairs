import { Link } from "react-router-dom";

const PrimaryBtn = ({ to, text, onClick, className = "" }) => {
  const baseClasses = `
    inline-block px-8 py-4 
    bg-gradient-to-r from-gold to-lightPurple 
    text-black rounded-full font-semibold 
    uppercase tracking-wider 
    shadow-[0_10px_25px_rgba(255,215,0,0.5)]
    relative overflow-hidden
    transition-all duration-500
    hover:-translate-y-[5px] hover:scale-105 hover:shadow-[0_15px_35px_rgba(255,215,0,0.7)]
  `;

  const shineEffect = `
    absolute top-0 left-[-100%] w-full h-full
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    transition-all duration-500
    group-hover:left-[100%]
  `;

  // If it's a router link
  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses} ${className}`}>
        {text}
        <span className={shineEffect}></span>
      </Link>
    );
  }

  // If it's a normal button
  return (
    <button onClick={onClick} className={`group ${baseClasses} ${className}`}>
      {text}
      <span className={shineEffect}></span>
    </button>
  );
};

export default PrimaryBtn;
