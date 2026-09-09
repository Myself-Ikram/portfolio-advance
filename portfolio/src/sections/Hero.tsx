import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Globe from "../components/Globe";
import Marquee from "../components/Marquee";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const [is3DMode, setIs3DMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 60]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(1.65);
  const currentTimeRef = useRef<number>(1.65);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (!desktop) {
        setIs3DMode(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!is3DMode || !isDesktop) return;

    const video = videoRef.current;
    if (!video) return;

    // Pause video to manually scrub frames via currentTime
    video.pause();

    const dur = video.duration || 3.45;
    const centerTime = dur * 0.48;
    targetTimeRef.current = centerTime;
    currentTimeRef.current = centerTime;
    try {
      video.currentTime = centerTime;
    } catch {}

    // Cursor tracking: 0.0 (left) to 1.0 (right)
    const updateTargetFromClientX = (clientX: number) => {
      const d = video.duration || 3.45;
      const normalizedX = Math.max(0, Math.min(1, clientX / window.innerWidth));
      
      // In the clip: 0.05s is looking left, ~1.65s is center, ~3.3s is looking right
      const minTime = 0.05;
      const maxTime = Math.max(0.2, d - 0.15);
      targetTimeRef.current = minTime + normalizedX * (maxTime - minTime);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateTargetFromClientX(e.clientX);
    };

    const handleMouseLeave = () => {
      const d = video.duration || 3.45;
      targetTimeRef.current = d * 0.48;
    };

    // Smooth render loop with linear interpolation (LERP)
    let rafId: number;
    const renderLoop = () => {
      if (video && video.readyState >= 2) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.005) {
          currentTimeRef.current += diff * 0.2;
          video.currentTime = currentTimeRef.current;
        }
      }
      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [is3DMode, isDesktop]);

  return (
    <section className="relative w-full h-screen h-[100dvh] max-h-[100dvh] bg-[#8c9090] text-white overflow-hidden select-none">

      {/* ── Portrait / Interactive 3D (Anchored to bottom, no gap, responsive height) ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none z-10"
      >
        {/* 1. Static Photo (Default view, and always shown on mobile < md) */}
        <motion.img
          src="/ikram-front.png"
          alt="Mohd Abdul Ikram"
          initial={false}
          animate={{ opacity: isDesktop && is3DMode ? 0 : 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="h-[88vh] sm:h-[92vh] md:h-[96vh] lg:h-[100vh] max-h-none w-auto max-w-none object-contain object-bottom scale-[1.05] sm:scale-100 md:scale-[1.04] lg:scale-[1.06] origin-bottom"
          loading="eager"
        />

        {/* 2. Interactive Head-Turn Video (Desktop/Tablet md+ only when 3D is toggled) */}
        <motion.video
          ref={videoRef}
          src="/ikram-head.mp4"
          poster="/ikram-front.png"
          playsInline
          muted
          preload="auto"
          initial={false}
          animate={{ opacity: isDesktop && is3DMode ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="hidden md:block absolute inset-x-0 bottom-0 top-0 mx-auto h-[88vh] sm:h-[92vh] md:h-[96vh] lg:h-[100vh] max-h-none w-auto max-w-none object-contain object-bottom scale-[0.88] md:scale-[0.90] lg:scale-[0.92] origin-bottom filter brightness-[1.01] contrast-[1.01]"
        />
      </motion.div>

      {/* ─────────────────── DESKTOP LAYOUT (md and up) ─────────────────── */}

      {/* Left location badge */}
      <div className="hidden md:block absolute left-0 top-[42%] -translate-y-1/2 z-20 pointer-events-auto">
        <Magnetic strength={15}>
          <div className="bg-[#1C1D20] text-white flex items-center gap-4 py-3.5 pl-6 pr-7 rounded-r-full shadow-2xl cursor-default hover:pr-9 transition-all border-y border-r border-white/10">
            <Globe />
            <div className="flex flex-col text-sm font-medium leading-tight">
              <span className="text-white/60">Located in</span>
              <span className="text-white font-semibold tracking-wide">Hyderabad, India</span>
            </div>
          </div>
        </Magnetic>
      </div>

      {/* Right role badge */}
      <div className="hidden md:block absolute right-10 lg:right-20 top-[40%] -translate-y-1/2 z-20 pointer-events-auto">
        <Magnetic strength={20}>
          <div className="flex items-start gap-4 cursor-default">
            <div className="w-11 h-11 rounded-full bg-[#1C1D20]/85 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white mt-1 shadow-xl">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left text-white drop-shadow-md">
              <p className="text-base lg:text-xl text-white/80 font-normal leading-snug">Full Stack &</p>
              <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">Mobile Software Engineer</p>
            </div>
          </div>
        </Magnetic>
      </div>

      {/* Right side: 3D Interactive View Toggle (md and up only) */}
      <div className="hidden md:block absolute right-10 lg:right-20 top-[52%] -translate-y-1/2 z-20 pointer-events-auto">
        <Magnetic strength={18}>
          <motion.button
            onClick={() => setIs3DMode((prev) => !prev)}
            animate={
              !is3DMode
                ? {
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                      "0 15px 35px -5px rgba(69, 92, 233, 0.4)",
                      "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    ],
                  }
                : { scale: 1.05 }
            }
            transition={
              !is3DMode
                ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle 3D interactive view"
            className={`group relative flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors duration-300 border ${
              is3DMode
                ? "bg-white text-[#1C1D20] border-white ring-4 ring-white/20"
                : "bg-[#1C1D20]/90 hover:bg-[#1C1D20] text-white/95 hover:text-white border-white/20 backdrop-blur-md cursor-pointer"
            }`}
          >
            {/* Pulsing beacon glow ring when idle to invite clicks */}
            {!is3DMode && (
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-sm animate-pulse pointer-events-none" />
            )}

            {/* Status orb */}
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              {is3DMode ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#455CE9] opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-[#455CE9]" />
                </>
              ) : (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
                </>
              )}
            </div>

            <span className="relative uppercase text-[11px] font-medium tracking-widest">
              {is3DMode ? "3D Active • Move Cursor" : "Interactive 3D View"}
            </span>

            <span
              className={`relative text-[9px] font-bold px-1.5 py-0.5 rounded tracking-normal transition-colors ${
                is3DMode
                  ? "bg-[#1C1D20]/10 text-[#1C1D20]"
                  : "bg-white/15 text-white group-hover:bg-white/25"
              }`}
            >
              {is3DMode ? "ON" : "CLICK"}
            </span>
          </motion.button>
        </Magnetic>
      </div>

      {/* Desktop Name Marquee (Lower third overlapping torso) */}
      <div className="hidden md:block absolute bottom-6 lg:bottom-10 left-0 w-full z-30 pointer-events-none">
        <Marquee
          speed={2.2}
          className="text-[12vw] lg:text-[11vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
        />
      </div>


      {/* ─────────────────── MOBILE LAYOUT (< md, Dennis style) ─────────────────── */}

      {/* Mobile Name Marquee (Centered across chest like Dennis Snellenberg) */}
      <div className="md:hidden absolute top-[52%] -translate-y-1/2 left-0 w-full z-20 pointer-events-none">
        <Marquee
          speed={2.2}
          className="text-[22vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        />
      </div>

      {/* Mobile Bottom Info Bar: Role left with arrow, Globe right */}
      <div className="md:hidden absolute bottom-8 left-0 right-0 z-30 px-6 flex items-end justify-between pointer-events-auto">
        {/* Role text bottom-left with arrow */}
        <div className="flex flex-col text-white drop-shadow-md">
          <svg className="w-5 h-5 mb-2 text-white/80" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5L12.5 12.5M12.5 12.5H3.5M12.5 12.5V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-xs text-white/75 font-normal leading-snug">Full Stack &</p>
          <p className="text-base font-bold text-white tracking-tight leading-snug">
            Mobile Software<br />Engineer
          </p>
        </div>

        {/* Globe + location bottom-right */}
        <div className="flex flex-col items-center gap-1">
          <Globe size={42} />
          <span className="text-[10px] text-white/70 font-medium tracking-wide text-center leading-tight">
            Hyderabad<br />India
          </span>
        </div>
      </div>

    </section>
  );
}
