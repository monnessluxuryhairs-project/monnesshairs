// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { navBarMenuData } from "../../utils/navBar";

// const NavBar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <nav
//       className="
//         fixed top-0 left-0 w-full z-[1000]
//         px-[5%] py-4
//         flex justify-between items-center
//         bg-[#110a14] backdrop-blur-md
//         shadow-[0_4px_30px_rgba(0,0,0,0.1)]
//         border-b border-[var(--glass-border)]
//       "
//     >
//       {/* LOGO */}
//       <Link className="flex items-center gap-4 brand-logo">
//         <img
//           src="/assets/logo/monNewLogo.jpeg"
//           alt="logo"
//           className="
//             w-20 h-20 rounded-full object-cover
//             border-2 border-[var(--gold)]
//             animate-pulse-gold
//           "
//         />

//         <span
//           className="
//             font-bold uppercase whitespace-nowrap tracking-wider text-[14px] md:text-[19px]
//             bg-gradient-to-r from-[var(--milk)] via-[var(--light-purple)] to-[var(--gold)]
//             bg-clip-text text-transparent
//             font-['Playfair_Display']
//           "
//         >
//           Monness Luxury Hairs
//         </span>
//       </Link>

//       {/* DESKTOP NAV LINKS */}
//       <ul className="hidden md:flex gap-8 nav-links">
//         {navBarMenuData.map((nav, idx) => (
//           <li key={idx}>
//             <NavLink
//               to={nav.link}
//               className={({ isActive }) =>
//                 `
//                 relative font-medium py-2 hover:text-[var(--gold)] transition 0.3s ease-in duration-300
//                 group
//                 ${isActive ? "text-[var(--gold)]" : "text-white "}
//               `
//               }
//             >
//               {nav.title}

//               {/* Underline hover animation */}
//               <span
//                 className="
//                   absolute bottom-0 left-0 w-0 h-[2px]
//                   bg-[var(--gold)] transition-all duration-300
//                   group-hover:w-full
//                 "
//               />
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* RIGHT ICONS */}
//       <div className="flex items-center gap-6 nav-icons">
//         <button
//           className="
//             text-xl relative cursor-pointer
//             transition duration-300
//             hover:text-[var(--gold)] hover:scale-110
//           "
//         >
//           <img
//             src="../../../public/assets/icons/shopping-cart-3d.webp"
//             alt=""
//             className="w-[24px] h-[24px] "
//           />

//           <span
//             className="
//               cart-count absolute -top-2 -right-2
//               w-[18px] h-[18px] text-[0.7rem] rounded-full
//               bg-[var(--gold)] text-[var(--black)]
//               flex justify-center items-center font-bold
//             "
//           >
//             0
//           </span>
//         </button>

//         {/* MOBILE MENU BUTTON (optional) */}
//         {/* … you can add your hamburger here */}
//       </div>

//       {/* MOBILE MENU */}
//       {/* <div
//         className={`
//           fixed top-0 right-0 h-full w-64 p-6 pt-20
//           bg-black/80 backdrop-blur-md text-white
//           shadow-lg md:hidden transition-transform duration-300
//           ${mobileOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         <ul className="flex flex-col gap-6 text-lg">
//           {navBarMenuData.map((nav, idx) => (
//             <li key={idx}>
//               <NavLink
//                 to={nav.link}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `
//                     block py-2 transition duration-200
//                     ${
//                       isActive
//                         ? "text-[var(--gold)] font-semibold"
//                         : "text-white"
//                     }
//                   `
//                 }
//               >
//                 {nav.title}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div> */}

//       {/* BACKDROP */}
//       {/* {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 md:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )} */}
//     </nav>
//   );
// };

// export default NavBar;

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navBarMenuData } from "../../utils/navBar";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 w-full z-[1000]
          px-[5%] py-4
          flex justify-between items-center
          bg-[#110a14]/95 backdrop-blur-md
          shadow-[0_4px_30px_rgba(0,0,0,0.3)]
          border-b border-[var(--glass-border)]
        "
      >
        {/* LOGO AREA */}
        <Link className="flex items-center gap-4">
          {/* Logo image (ALWAYS visible) */}
          <img
            src="/assets/logo/monNewLogo.jpeg"
            alt="logo"
            className="
              w-16 h-16 rounded-full object-cover
              border-2 border-[var(--gold)]
              animate-pulse-gold
            "
          />

          {/* Logo name (ONLY ON MOBILE) */}
          <span
            className="
              font-bold uppercase tracking-wider text-[16px]
              bg-gradient-to-r from-[var(--milk)] via-[var(--light-purple)] to-[var(--gold)]
              bg-clip-text text-transparent font-['Playfair_Display']
              whitespace-nowrap
              md:hidden
            "
          >
            Monness Luxury Hairs
          </span>
        </Link>

        {/* NAV LINKS (TABLET & DESKTOP ONLY) */}
        <ul className="hidden md:flex gap-8">
          {navBarMenuData.map((nav, idx) => (
            <li key={idx}>
              <NavLink
                to={nav.link}
                className={({ isActive }) =>
                  `
                    relative font-medium py-2 transition duration-300 group
                    ${
                      isActive
                        ? "text-[var(--gold)]"
                        : "text-white hover:text-[var(--gold)]"
                    }
                  `
                }
              >
                {nav.title}
                <span
                  className="
                    absolute bottom-0 left-0 w-0 h-[2px]
                    bg-[var(--gold)] transition-all duration-300
                    group-hover:w-full
                  "
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE (CART + HAMBURGER) */}
        <div className="flex items-center gap-6">
          {/* Cart (visible ON TABLET & DESKTOP only) */}
          <button className="relative hidden md:block hover:scale-110 transition duration-300">
            <img
              src="/assets/icons/shopping-cart-3d.webp"
              alt=""
              className="w-[26px] h-[26px]"
            />
            <span
              className="
                absolute -top-2 -right-2 w-[18px] h-[18px]
                bg-[var(--gold)] text-[var(--black)]
                rounded-full flex justify-center items-center text-[11px] font-bold
              "
            >
              0
            </span>
          </button>

          {/* Hamburger (visible ONLY on mobile) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`
          fixed top-0 right-0 w-64 h-full z-[2000]
          bg-[#110a14] text-white p-6 pt-20
          transform transition-transform duration-300 md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setMobileOpen(false)}
        >
          <HiX />
        </button>

        <ul className="flex flex-col gap-6 text-lg">
          {navBarMenuData.map((nav, idx) => (
            <li key={idx}>
              <NavLink
                to={nav.link}
                onClick={() => setMobileOpen(false)} // Close on click
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "text-[var(--gold)] font-semibold" : "text-white"
                  }`
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* BACKDROP (click anywhere to close mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-[1500]"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
