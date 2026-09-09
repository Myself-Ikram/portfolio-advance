import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Dynamic curve height based on scroll: expands to 150px on entry, flattens on scroll
  const curveHeight = useTransform(scrollYProgress, [0, 1], [150, 0]);

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setLocalTime(`${timeString} GMT+5:30`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative z-20">
      {/* ── Dennis Snellenberg Dynamic Scroll-Linked Curvy Arch ── */}
      <div className="relative w-full overflow-hidden pointer-events-none -mb-[1px]">
        <motion.div
          style={{ height: curveHeight }}
          className="relative w-full overflow-hidden"
        >
          <svg
            className="w-full h-full block"
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 Q720,0 1440,150 L1440,150 L0,150 Z"
              fill="#1C1D20"
            />
          </svg>
        </motion.div>
      </div>

      <footer className="relative bg-[#1C1D20] text-white pt-12 sm:pt-16 pb-12 px-6 sm:px-12 md:px-20 lg:px-28">

      <div className="max-w-7xl mx-auto">
        {/* Header / Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-white/50 text-base sm:text-lg mb-6 tracking-tight">
              <span className="text-xl transform rotate-12 inline-block">↗</span>
              <span>Available for high-impact engineering roles</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] text-white">
              <span className="inline-flex items-center gap-4 sm:gap-6 flex-wrap">
                <img
                  src="/ikram-front.png"
                  alt="Mohd Abdul Ikram"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-white/20 inline-block shadow-lg"
                />
                <span>Let's work</span>
              </span>
              <br />
              <span>together</span>
            </h2>
          </div>

          {/* Magnetic "Get in touch" round CTA button */}
          <div className="lg:col-span-4 flex lg:justify-end items-center pt-6 lg:pt-12">
            <Magnetic strength={40}>
              <a
                href="mailto:ikrammohdabdul@gmail.com"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-base sm:text-lg font-medium shadow-2xl hover:scale-105 transition-transform duration-300 select-none group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  Get in touch
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Contact Pill Buttons */}
        <div className="flex flex-wrap gap-4 mb-24">
          <Magnetic strength={20}>
            <a
              href="mailto:ikrammohdabdul@gmail.com"
              className="px-8 py-5 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white hover:text-[#1C1D20] transition-colors duration-300 inline-block"
            >
              ikrammohdabdul@gmail.com
            </a>
          </Magnetic>

          <Magnetic strength={20}>
            <a
              href="tel:+919110543857"
              className="px-8 py-5 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white hover:text-[#1C1D20] transition-colors duration-300 inline-block"
            >
              +91 91105 43857
            </a>
          </Magnetic>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/15 mb-10" />

        {/* Bottom Metadata row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-white/60 tracking-tight items-center">
          {/* Version */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1">
              Version
            </span>
            <p className="text-white font-medium">2026 © Edition</p>
          </div>

          {/* Local Time in Hyderabad, India */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1">
              Local Time (Hyderabad)
            </span>
            <p className="text-white font-medium">{localTime || "GMT+5:30"}</p>
          </div>

          {/* Socials */}
          <div className="sm:text-right">
            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1">
              Socials
            </span>
            <div className="flex sm:justify-end gap-5">
              <Magnetic strength={15}>
                <a
                  href="https://www.linkedin.com/in/mohd-abdul-ikram-388410223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-all"
                >
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic strength={15}>
                <a
                  href="https://github.com/Myself-Ikram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-all"
                >
                  GitHub
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
}
