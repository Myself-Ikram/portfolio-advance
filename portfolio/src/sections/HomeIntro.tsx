import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";
import { useTransition } from "../context/TransitionContext";

export default function HomeIntro() {
  const { navigateWithTransition } = useTransition();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition("/about", "About");
  };

  return (
    <section className="relative bg-white text-[#1C1D20] pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-5 sm:px-12 md:px-20 lg:px-28 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Clean Full-Stack Engineering Statement */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="text-2xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-[#1C1D20] leading-[1.4] sm:leading-[1.45] mb-8 sm:mb-12"
            >
              <span className="block text-[#1C1D20]/70 mb-3 sm:mb-5">
                Specialized across modern full-stack &amp; mobile ecosystems:
              </span>
              <span className="font-semibold text-[#1C1D20]">
                React, Next.js, Express, Node.js, MongoDB, PostgreSQL, SQLite, React Native
              </span>
              , and <span className="font-semibold text-[#1C1D20]">TypeScript</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-base sm:text-lg text-[#1C1D20]/65 leading-relaxed max-w-2xl font-normal"
            >
              From hardware thermal print engines and offline SQLite synchronization to
              cloud microservices and multi-tenant build automation CLI tooling — building
              high-performance systems under enterprise load.
            </motion.p>
          </div>

          {/* Right: Circular Magnetic "About me" Button */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Magnetic strength={35}>
                <a
                  href="/about"
                  onClick={handleAboutClick}
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#1C1D20] text-white flex items-center justify-center text-base sm:text-lg font-medium shadow-2xl hover:scale-105 transition-transform duration-300 select-none group cursor-pointer"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    About me
                  </span>
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
