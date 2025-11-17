import React from "react";
import { Link } from "react-router-dom";

const SecondaryBtn = ({ to, onClick, children, className = "" }) => {
  const base = `
    relative overflow-hidden rounded-full px-4 py-2 border 
    border-[var(--milk)] text-[var(--milk)] font-medium text-sm
    transition-all duration-300 flex items-center justify-center
  `;

  const shine = `
    absolute top-0 left-[-100%] w-full h-full
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    transition-all duration-500
  `;

  const hoverClasses =
    "hover:bg-[var(--gold)] hover:text-[var(--black)] hover:border-[var(--gold)] transform hover:-translate-y-1";

  if (to) {
    return (
      <Link to={to} className={`${base} ${hoverClasses} ${className}`}>
        {children}
        <span className={shine} />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${hoverClasses} ${className}`}
    >
      {children}
      <span className={shine} />
    </button>
  );
};

export default SecondaryBtn;
