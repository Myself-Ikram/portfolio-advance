import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";
import { useTransition } from "../context/TransitionContext";

interface CurvedMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isScrolled: boolean;
}

export default function CurvedMenu({
  isOpen,
  onToggle,
  onClose,
  isScrolled,
}: CurvedMenuProps) {
  const location = useLocation();
  const { navigateWithTransition } = useTransition();
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 1000
  );

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Experience", href: "/experience" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mohd-abdul-ikram-388410223" },
    { name: "GitHub", href: "https://github.com/Myself-Ikram" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "Email", href: "mailto:ikrammohdabdul@gmail.com" },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: { title: string; href: string }) => {
    e.preventDefault();
    onClose();

    if (link.title === "Home") {
      if (location.pathname !== "/") {
        navigateWithTransition("/", "Home");
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } else if (link.title === "About") {
      if (location.pathname !== "/about") {
        navigateWithTransition("/about", "About");
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } else if (link.title === "Experience") {
      if (location.pathname !== "/experience") {
        navigateWithTransition("/experience", "Experience");
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } else if (link.title === "Contact") {
      const footer = document.querySelector("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // SVG Curve path definitions (elastic bubble effect)
  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const menuVariants = {
    initial: {
      x: "calc(100% + 100px)",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    initial: { x: 80, opacity: 0 },
    enter: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 + i * 0.08 },
    }),
    exit: (i: number) => ({
      x: 80,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: (navLinks.length - 1 - i) * 0.04 },
    }),
  };

  // Button is visible when scrolled OR when menu is currently open OR always on small mobile devices
  const showButton = isScrolled || isOpen;

  return (
    <>
      {/* ── 1. Floating Circular Dennis Snellenberg Hamburger Button ── */}
      <div className="fixed top-5 right-5 sm:top-8 sm:right-10 z-[1001] pointer-events-auto select-none">
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <Magnetic strength={25}>
                <button
                  onClick={onToggle}
                  aria-label={isOpen ? "Close Menu" : "Open Menu"}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center gap-1.5 shadow-2xl cursor-pointer group transition-colors duration-500 ${
                    isOpen
                      ? "bg-[#455CE9] text-white border-transparent"
                      : "bg-[#1C1D20] text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Top Line */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 4 : 0,
                      width: isOpen ? 22 : 24,
                    }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    className="h-[2px] bg-white rounded-full block"
                  />
                  {/* Bottom Line */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -4 : 0,
                      width: isOpen ? 22 : 24,
                    }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    className="h-[2px] bg-white rounded-full block"
                  />

                  {/* Ripple pulse on hover */}
                  <span className="absolute inset-0 rounded-full border border-white/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                </button>
              </Magnetic>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── 2. Full Curved Drawer + Backdrop ── */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[998] cursor-pointer"
            />

            {/* Sliding Drawer Container with SVG Bubble Curve */}
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 h-screen w-full sm:w-[480px] md:w-[540px] bg-[#1C1D20] text-white z-[999] flex flex-col justify-between p-10 sm:p-14 md:p-20 shadow-2xl select-none overflow-y-auto"
            >
              {/* Elastic Bubbling SVG Curve on the left border */}
              <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#1C1D20] stroke-none pointer-events-none">
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                />
              </svg>

              {/* Top Navigation Header Label */}
              <div className="pt-4 sm:pt-6">
                <span className="text-xs font-mono tracking-widest uppercase text-white/40 block pb-4 border-b border-white/15">
                  Navigation
                </span>
              </div>

              {/* Center Menu Links */}
              <nav className="flex flex-col gap-5 sm:gap-7 my-auto py-8">
                {navLinks.map((link, index) => {
                  const isActive =
                    (link.title === "Home" && location.pathname === "/") ||
                    (link.title === "About" && location.pathname === "/about") ||
                    (link.title === "Experience" &&
                      (location.pathname === "/experience" || location.pathname === "/work"));

                  return (
                    <motion.div
                      key={link.title}
                      custom={index}
                      variants={linkVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Magnetic strength={20}>
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="group flex items-center gap-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white/90 hover:text-white transition-colors duration-200 cursor-pointer select-none"
                        >
                          {/* Active/Hover Dot Indicator */}
                          <span
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#455CE9] transition-all duration-300 ${
                              isActive
                                ? "scale-100 opacity-100"
                                : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                            }`}
                          />
                          <span className="group-hover:translate-x-3 transition-transform duration-300">
                            {link.title}
                          </span>
                        </a>
                      </Magnetic>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Socials & Quick Links */}
              <div className="pt-8 border-t border-white/15">
                <span className="text-[11px] font-mono tracking-wider uppercase text-white/40 block mb-3">
                  Socials
                </span>
                <div className="flex flex-wrap gap-5 sm:gap-7">
                  {socialLinks.map((social) => (
                    <Magnetic key={social.name} strength={15}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") || social.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-normal text-white/70 hover:text-white hover:underline transition-colors"
                      >
                        {social.name}
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
