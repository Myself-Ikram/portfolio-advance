import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "Hello",      // English
  "नमस्ते",     // Hindi
  "నమస్కారం",  // Telugu
  "Hola",       // Spanish
  "مرحبا",      // Arabic
];

interface PreloaderProps {
  onComplete: () => void;
  /** When provided, skip the greeting cycle and show this label directly (page transition mode) */
  label?: string;
}

export default function Preloader({ onComplete, label }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Page-transition mode: single label, call onComplete quickly ──
  useEffect(() => {
    if (!label) return;
    const t = setTimeout(() => onComplete(), 750);
    return () => clearTimeout(t);
  }, [label, onComplete]);

  // ── Initial preloader mode: cycle through greetings ──
  useEffect(() => {
    if (label) return; // skip cycling in transition mode

    if (index === words.length - 1) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(finishTimeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1200 : 320
    );

    return () => clearTimeout(timeout);
  }, [index, label, onComplete]);

  // SVG Bezier Curves — Dennis Snellenberg's iconic curved exit
  const w = dimension.width;
  const h = dimension.height;

  const initialPath = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 300} 0 ${h} L0 0`;
  const targetPath  = `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.25 },
    },
  };

  const slideUpVariants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: label ? 0.25 : 0.3 },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  // What to display: single label (transition) or cycling greeting (preloader)
  const displayText = label ?? words[index];

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
    >
      {/* Center word / label with dot */}
      <motion.p
        key={displayText}
        variants={textVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex items-center text-white text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight z-10 select-none pointer-events-auto"
      >
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white mr-3.5 sm:mr-4 inline-block" />
        {displayText}
      </motion.p>

      {/* Dennis Snellenberg curved SVG background */}
      {w > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141516]">
          <motion.path
            variants={curveVariants}
            initial="initial"
            exit="exit"
          />
        </svg>
      )}
    </motion.div>
  );
}
