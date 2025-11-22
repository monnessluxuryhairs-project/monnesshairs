import { Link } from "react-router-dom";
import { footerData } from "../../utils/footerData";

export default function Footer() {
  return (
    <footer
      className="
        footer relative px-[5%] py-20 pt-20
        bg-gradient-to-b from-[rgba(106,13,173,0.5)] to-[rgba(0,0,0,0.9)]
      "
    >
      {/* Grid */}
      <div
        className="
          footer-grid grid gap-8 mb-12
          grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
        "
      >
        {/* Logo + About */}
        <div className="footer-col text-white">
          <h3 className="relative inline-block text-[1.5rem] mb-6">
            Monness Luxury Hairs
            <span
              className="
                absolute left-0 bottom-[-8px] h-[2px] w-1/2 bg-[var(--gold)]
                animate-lineGrow origin-left
              "
            ></span>
          </h3>

          <p className="leading-relaxed text-white/80">
            Premium quality 100% virgin human hair extensions, wigs, and
            closures. Hand-selected for perfection.
          </p>

          {/* Social Links */}
          <div className="social-links flex gap-4 mt-6">
            {[
              {
                href: "https://www.instagram.com/monnessluxuryhairs?igsh=MXdzemh4c3NrdXZpZA==",
                img: "https://static.vecteezy.com/system/resources/previews/027/224/013/non_2x/instagram-3d-logo-free-png.png",
              },
              {
                href: "#",
                img: "https://static.vecteezy.com/system/resources/previews/027/224/008/non_2x/facebook-3d-logo-free-png.png",
              },
              {
                href: "https://www.tiktok.com/@luxuryhairsinlagos8?_t=ZM-8xbwTX7elPU&_r=1",
                img: "https://cdn3d.iconscout.com/3d/free/thumb/free-tiktok-3d-logo-download-in-png-blend-fbx-gltf-file-formats--social-media-pack-logos-4602451.png",
              },
              {
                href: "https://wa.me/message/4NQ2COIZ2DLBA1",
                img: "https://static.vecteezy.com/system/resources/previews/027/223/999/non_2x/whatsapp-3d-logo-free-png.png",
              },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                className="
                  social-link w-10 h-10 rounded-full bg-[var(--glass)]
                  flex items-center justify-center border border-[var(--glass-border)]
                  transition-all duration-[500ms]
                  [transform-style:preserve-3d]
                  hover:bg-[var(--gold)] hover:text-[var(--black)]
                  hover:-translate-y-[5px] hover:rotate-y-[20deg]
                  hover:shadow-[0_5px_15px_rgba(255,215,0,0.4)]
                "
              >
                <img src={icon.img} alt="" className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        {/* Mapped Footer Sections */}
        {footerData.map((section, index) => (
          <div className="footer-col text-white" key={index}>
            <h3 className="relative inline-block text-[1.5rem] mb-6">
              {section.title}
              <span
                className="
                  absolute left-0 bottom-[-8px] h-[2px] w-1/2 bg-[var(--gold)]
                  animate-lineGrow origin-left
                "
              ></span>
            </h3>

            <ul className="footer-links space-y-2">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="
                    transition-all duration-300
                    hover:translate-x-[5px]
                  "
                >
                  <Link
                    to={link.url}
                    className="inline-block transition-all duration-300 hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="
          footer-bottom text-center pt-8
          border-t border-[var(--glass-border)] text-white/80
        "
      >
        <p>&copy; 2025 Monness Luxury Hairs. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
