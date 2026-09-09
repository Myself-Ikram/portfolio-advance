import { motion, useScroll, useTransform } from "framer-motion";
import Globe from "../components/Globe";
import Marquee from "../components/Marquee";
import Magnetic from "../components/Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <section className="relative w-full h-screen h-[100dvh] max-h-[100dvh] bg-[#8c9090] text-white overflow-hidden select-none">

      {/* ── Portrait (Anchored to bottom, no gap, responsive height) ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none z-10"
      >
        <img
          src="/ikram-front.png"
          alt="Mohd Abdul Ikram"
          className="h-[88vh] sm:h-[92vh] md:h-[96vh] lg:h-[100vh] max-h-none w-auto max-w-none object-contain object-bottom scale-[1.05] sm:scale-100 md:scale-[1.04] lg:scale-[1.06] origin-bottom"
          loading="eager"
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
      <div className="hidden md:block absolute right-10 lg:right-20 top-[42%] -translate-y-1/2 z-20 pointer-events-auto">
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
