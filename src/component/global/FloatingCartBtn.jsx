import React from "react";

export default function FloatingCartButton({ onClick, cartCount = 0, icon }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-[1004]
        bg-[var(--gold)] text-black w-14 h-14 rounded-full
        flex items-center justify-center shadow-lg
        transition-all duration-300
        hover:scale-110
      "
    >
      <img src={icon} alt="Cart" className="w-7 h-7" />

      {/* Cart Count Badge */}
      {cartCount > 0 && (
        <span
          className="
            absolute -top-1 -right-1 bg-red-600 text-white text-xs
            w-5 h-5 rounded-full flex items-center justify-center
            border border-black
          "
        >
          {cartCount}
        </span>
      )}
    </button>
  );
}
