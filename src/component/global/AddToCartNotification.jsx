import React from "react";

const AddToCartNotification = ({ isVisible, product, onClose }) => {
  if (!isVisible || !product) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed top-6 right-6 z-[9999]
        bg-[var(--gold)] text-black font-semibold
        px-5 py-3 rounded-lg shadow-xl
        flex items-center gap-3 cursor-pointer
        transition-all duration-300
        animate-slideIn
      "
    >
      <span className="text-lg">✔</span>
      <span>{product.title} added to cart</span>
    </div>
  );
};

export default AddToCartNotification;
