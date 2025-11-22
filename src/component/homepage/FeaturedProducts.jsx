import React, { useState } from "react";
import { featuredProducts } from "../../utils/featuredProducts";
import SecondaryBtn from "../../component/global/SecondaryBtn";
import FeaturedProductModal from "../formModals/FeaturedProductsModal";
import AddToCartNotification from "../global/AddToCartNotification";

const FeaturedProducts = ({ onAdd = () => {} }) => {
  const [modalProduct, setModalProduct] = useState(null);
  const [notif, setNotif] = useState(null);

  // This is the function BOTH the plus button AND modal will use
  const handleAddToCart = (productId) => {
    onAdd(productId); // send to global cart if needed
    setNotif(productId); // show notification

    setTimeout(() => setNotif(null), 2500);
  };

  return (
    <>
      <section
        className="relative text-center overflow-hidden py-20 px-[5%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(106,13,173,0.5))",
        }}
      >
        <div aria-hidden className="absolute inset-0 -z-10" />

        <h2
          className="mx-auto inline-block text-[2.5rem] mb-12 opacity-0 transform translate-y-8"
          style={{
            animation:
              "fadeInUp 1s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
            maxWidth: "min(100%, 900px)",
          }}
        >
          <span className="relative inline-block">Our Featured Collection</span>
        </h2>

        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-[1400px] mx-auto shadow-xl 
"
        >
          {featuredProducts.map((p, idx) => (
            <article
              key={p.id}
              className="bg-[var(--glass)] backdrop-blur-md rounded-lg overflow-hidden border border-[var(--glass-border)]"
              style={{
                boxShadow: "var(--glass-shadow)",
                transition: "all .5s cubic-bezier(0.175,0.885,0.32,1.275)",
                opacity: 0,
                transform: "translateY(50px) rotateY(20deg)",
                animation: `fadeInUp 1s cubic-bezier(0.175,0.885,0.32,1.275) forwards ${
                  0.1 * (idx + 1)
                }s`,
              }}
            >
              <div className="w-full h-[300px] md:h-[400px] overflow-hidden shadow-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 hover:scale-110"
                  style={{ transformOrigin: "center bottom" }}
                />
              </div>

              <div className="p-6">
                {p.badge && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[0.8rem] font-semibold"
                    style={{
                      background: "var(--gold)",
                      color: "var(--black)",
                      transform: "translateZ(20px)",
                      animation: "badgePulse 2s infinite",
                    }}
                  >
                    {p.badge}
                  </span>
                )}

                <h3 className="mt-3 text-lg font-semibold transition-colors duration-300">
                  {p.title}
                </h3>

                <div
                  className="mt-2 text-[1.1rem] font-semibold"
                  style={{ color: "var(--gold)", transition: "all .3s ease" }}
                >
                  {p.price}
                </div>

                <div className="mt-4 w-full flex justify-between items-center gap-3">
                  <SecondaryBtn onClick={() => setModalProduct(p)}>
                    View Details
                  </SecondaryBtn>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={() => handleAddToCart(p.id)}
                    aria-label={`Add ${p.title} to cart`}
                    className="
                      w-10 h-10 rounded-full flex items-center justify-center 
                      font-bold text-black 
                      bg-[var(--light-purple)] 
                      hover:bg-[var(--gold)]
                      transform hover:-translate-y-1
                      hover:shadow-lg hover:shadow-[var(--gold)]/40
                      transition-all duration-300
                    "
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL WITH FIXED onAdd PROP */}
      <FeaturedProductModal
        isOpen={!!modalProduct}
        onClose={() => setModalProduct(null)}
        product={modalProduct}
        onAdd={handleAddToCart} // 🔥 REQUIRED FIX
      />

      <AddToCartNotification
        isVisible={!!notif}
        product={notif}
        onClose={() => setNotif(null)}
      />
    </>
  );
};

export default FeaturedProducts;
