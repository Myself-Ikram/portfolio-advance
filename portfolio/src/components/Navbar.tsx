import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";
import { useTransition } from "../context/TransitionContext";
import CurvedMenu from "./CurvedMenu";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { navigateWithTransition } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 160);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightPage =
    location.pathname === "/about" || location.pathname === "/experience";
  const textColor = isLightPage ? "text-[#1C1D20]" : "text-white";
  const dotColor = isLightPage ? "bg-[#1C1D20]" : "bg-white";

  const codeRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState<{ code: number; name: number }>({
    code: 140,
    name: 190,
  });

  useEffect(() => {
    const measure = () => {
      if (codeRef.current && nameRef.current) {
        const cWidth = Math.ceil(codeRef.current.getBoundingClientRect().width) + 4;
        const nWidth = Math.ceil(nameRef.current.getBoundingClientRect().width) + 4;
        setWidths({ code: cWidth, name: nWidth });
      }
    };
    measure();
    if (document.fonts) document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent,
    item: { name: string; href: string }
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    if (item.name === "About") {
      navigateWithTransition("/about", "About");
    } else if (item.name === "Experience") {
      navigateWithTransition("/experience", "Experience");
    } else if (item.name === "Contact") {
      const el = document.querySelector("footer");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigateWithTransition("/", "Home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 py-6 sm:py-8 pointer-events-none">
        {/* Brand / Credits */}
        <div className="pointer-events-auto">
          <Magnetic strength={20}>
            <a
              href="/"
              onClick={handleHomeClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`group flex items-center gap-2.5 ${textColor} font-medium text-sm sm:text-base tracking-tight cursor-pointer py-2 px-2 sm:px-3 select-none transition-colors duration-300`}
            >
              {/* Spinning © */}
              <span
                className={`${textColor} font-normal text-base sm:text-lg transition-transform duration-700 ease-out group-hover:rotate-[360deg] inline-block`}
              >
                ©
              </span>

              {/* Sliding Name Reveal */}
              <motion.div
                className="relative overflow-hidden h-5 sm:h-6 flex items-center"
                animate={{ width: isHovered ? widths.name : widths.code }}
                transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.span
                  className={`absolute left-0 whitespace-nowrap font-medium ${textColor} flex items-center transition-colors duration-300`}
                  animate={{ x: isHovered ? "-115%" : "0%" }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                >
                  <span className="font-normal pr-1.5">Code by</span>
                  <span className="font-semibold">Ikram</span>
                </motion.span>

                <motion.span
                  className={`absolute left-0 whitespace-nowrap font-semibold ${textColor} flex items-center transition-colors duration-300`}
                  initial={{ x: "115%" }}
                  animate={{ x: isHovered ? "0%" : "115%" }}
                  transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                >
                  Mohd Abdul Ikram
                </motion.span>
              </motion.div>

              {/* Hidden measurement spans */}
              <div
                className="absolute top-0 left-0 pointer-events-none -z-50 opacity-0 select-none overflow-hidden h-0"
                aria-hidden="true"
              >
                <span
                  ref={codeRef}
                  className="whitespace-nowrap text-sm sm:text-base tracking-tight flex items-center"
                >
                  <span className="font-normal pr-1.5">Code by</span>
                  <span className="font-semibold">Ikram</span>
                </span>
                <span
                  ref={nameRef}
                  className="whitespace-nowrap text-sm sm:text-base tracking-tight font-semibold flex items-center"
                >
                  Mohd Abdul Ikram
                </span>
              </div>
            </a>
          </Magnetic>
        </div>

        {/* Desktop Nav */}
        <nav className="pointer-events-auto hidden sm:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              (item.name === "About" && location.pathname === "/about") ||
              (item.name === "Experience" &&
                (location.pathname === "/experience" ||
                  location.pathname === "/work"));
            return (
              <Magnetic key={item.name} strength={25}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 sm:px-5 py-2.5 text-sm sm:text-base font-semibold ${textColor} cursor-pointer group inline-block transition-colors duration-300`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${dotColor} transition-transform duration-300 ${
                      isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                    }`}
                  />
                </a>
              </Magnetic>
            );
          })}
        </nav>

        {/* Mobile "• Menu" button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`pointer-events-auto sm:hidden flex items-center gap-2 ${textColor} font-semibold text-sm tracking-tight py-2 px-2 select-none`}
          aria-label="Toggle menu"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${dotColor} transition-all duration-300 ${
              menuOpen ? "scale-150" : "scale-100"
            }`}
          />
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Dennis Snellenberg Floating Menu Button & Curved Bubbling Drawer */}
      <CurvedMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((o) => !o)}
        onClose={() => setMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </>
  );
}
