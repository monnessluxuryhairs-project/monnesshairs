// import React, { useEffect } from "react";

// const FeaturedProductModal = ({ isOpen, onClose, product, onAdd }) => {
//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!isOpen || !product) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[1002] flex items-center justify-center
//       bg-black/90 backdrop-blur-xl"
//       onClick={onClose}
//     >
//       <div
//         className="
//         bg-gradient-to-br from-[rgba(106,13,173,0.9)] to-[rgba(0,0,0,0.9)]
//         rounded-xl w-[90%] max-w-[800px]
//         max-h-[88vh] overflow-y-auto
//         p-8 relative border border-[var(--glass-border)]
//         shadow-[0_20px_50px_rgba(0,0,0,0.5)]
//       "
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
//           bg-[var(--gold)] text-[var(--black)] text-xl shadow-md
//           hover:rotate-90 hover:scale-110 transition-all duration-300"
//         >
//           ×
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Image */}
//           <div className="relative overflow-hidden rounded-lg shadow-xl h-[350px] md:h-[400px] pt-8">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
//             />
//           </div>

//           {/* Details */}
//           <div className="flex flex-col">
//             <h2 className="text-3xl mb-4 text-[var(--gold)] font-bold">
//               {product.title}
//             </h2>

//             <div className="text-2xl font-semibold text-[var(--milk)] mb-4">
//               {product.price}
//             </div>

//             <p className="mb-6 leading-7">{product.description}</p>

//             {/* Features */}
//             <ul className="mb-6 space-y-2">
//               {product.features?.map((f, i) => (
//                 <li
//                   key={i}
//                   className="pl-6 relative before:content-['✓'] before:absolute
//                   before:left-0 before:text-[var(--gold)]"
//                 >
//                   {f}
//                 </li>
//               ))}
//             </ul>

//             {/* ACTIONS */}
//             <div className="flex gap-4 mt-4">
//               {/* ADD TO CART BTN – gold shadow on hover */}
//               <button
//                 onClick={() => onAdd(product.id)}
//                 className="
//                 flex-1 py-3 rounded-full
//                 bg-[var(--light-purple)] text-[var(--black)] font-semibold
//                 shadow-lg transform active:scale-95 transition-all
//                 hover:bg-[var(--gold)]
//                 hover:-translate-y-1
//                 hover:shadow-[0_0_25px_var(--gold)]
//               "
//               >
//                 Add to Cart
//               </button>

//               {/* BUY NOW */}
//               <button
//                 className="
//                 flex-1 py-3 rounded-full
//                 bg-[var(--gold)] text-white font-semibold
//                 shadow-lg transform active:scale-95 transition-all
//                 hover:-translate-y-1
//                 hover:shadow-[0_0_25px_var(--light-purple)]
//               "
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProductModal;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedProductModal = ({ isOpen, onClose, product, onAdd }) => {
  const navigate = useNavigate();

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !product) return null;

  // BUY NOW HANDLER
  const handleBuyNow = () => {
    try {
      sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    } catch (e) {}

    navigate("/payment", { state: { product } });
  };

  return (
    <div
      className="fixed inset-0 z-[1002] flex items-center justify-center 
      bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="
        bg-gradient-to-br from-[rgba(106,13,173,0.9)] to-[rgba(0,0,0,0.9)]
        rounded-xl w-[90%] max-w-[800px] 
        max-h-[88vh] overflow-y-auto 
        p-8 relative border border-[var(--glass-border)]
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center
          bg-[var(--gold)] text-[var(--black)] text-xl shadow-md 
          hover:rotate-90 hover:scale-110 transition-all duration-300"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-xl h-[350px] md:h-[400px] pt-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl mb-4 text-[var(--gold)] font-bold">
              {product.title}
            </h2>

            <div className="text-2xl font-semibold text-[var(--milk)] mb-4">
              {product.price}
            </div>

            <p className="mb-6 leading-7">{product.description}</p>

            {/* Features */}
            <ul className="mb-6 space-y-2">
              {product.features?.map((f, i) => (
                <li
                  key={i}
                  className="pl-6 relative before:content-['✓'] before:absolute 
                  before:left-0 before:text-[var(--gold)]"
                >
                  {f}
                </li>
              ))}
            </ul>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-4">
              {/* ADD TO CART */}
              <button
                onClick={() => onAdd(product.id)}
                className="
                flex-1 py-3 rounded-full 
                bg-[var(--light-purple)] text-[var(--black)] font-semibold
                shadow-lg transform active:scale-95 transition-all
                hover:bg-[var(--gold)]
                hover:-translate-y-1
                hover:shadow-[0_0_25px_var(--gold)]
              "
              >
                Add to Cart
              </button>

              {/* BUY NOW */}
              <button
                onClick={handleBuyNow}
                className="
                flex-1 py-3 rounded-full 
                bg-[var(--gold)] text-white font-semibold
                shadow-lg transform active:scale-95 transition-all
                hover:-translate-y-1
                hover:shadow-[0_0_25px_var(--light-purple)]
              "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductModal;
