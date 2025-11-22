import { Link } from "react-router-dom";

export default function CategoryCard({ image, title, link }) {
  return (
    <div
      className="
        relative h-[300px] rounded-[15px] overflow-hidden opacity-0
        translate-y-[50px] scale-[0.95]
        shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        transition-all duration-[500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        [perspective:1000px] [transform-style:preserve-3d]
        category-card group
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          w-full h-full object-cover transition-all
          duration-[1000ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
          category-image group-hover:scale-[1.1] group-hover:rotate-[1deg]
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute bottom-0 left-0 w-full p-6 text-center
          bg-gradient-to-t from-black/80 to-transparent
          category-overlay translate-z-[30px]
        "
      >
        <h3
          className="
            text-[1.5rem] mb-2 transition-all duration-300
            category-title group-hover:text-[var(--gold)]
          "
        >
          {title}
        </h3>

        <Link
          to={link}
          className="
            inline-block px-5 py-2 rounded-full font-semibold text-sm
            bg-[var(--gold)] text-[var(--black)]
            relative overflow-hidden
            category-btn
            transition-all duration-[500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
            hover:bg-[var(--milk)] hover:-translate-y-[3px]
            hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)]
            before:content-[''] before:absolute before:top-0 before:left-[-100%]
            before:w-full before:h-full
            before:bg-gradient-to-r before:from-transparent
            before:via-white/30 before:to-transparent
            before:transition-all before:duration-500
            hover:before:left-[100%]
          "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
