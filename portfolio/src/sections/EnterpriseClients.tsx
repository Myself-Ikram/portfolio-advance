import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";
import { useTransition } from "../context/TransitionContext";

interface ClientBrand {
  id: string;
  name: string;
  sub?: string;
  region: string;
  logo: string;
}

const enterpriseClients: ClientBrand[] = [
  {
    id: "pepsico",
    name: "Dubai Refreshment",
    region: "Dubai",
    logo: "/brands/dubai-refreshment.png",
  },
  {
    id: "zad",
    name: "Zad Holding",
    region: "Dubai",
    logo: "/brands/zad.png",
  },
  {
    id: "choithrams",
    name: "Choithrams",
    region: "GCC",
    logo: "/brands/choithrams.png",
  },
  {
    id: "soprole",
    name: "Soprole",
    region: "Global",
    logo: "/brands/soprole.png",
  },
  {
    id: "alislami",
    name: "Al Islami Foods",
    region: "GCC",
    logo: "/brands/alislami.png",
  },
];

export default function EnterpriseClients() {
  const { navigateWithTransition } = useTransition();

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition("/experience", "Experience");
  };

  return (
    <section className="relative bg-white text-[#1C1D20] pt-4 sm:pt-8 pb-20 sm:pb-32 px-5 sm:px-12 md:px-20 lg:px-28 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12 sm:mb-16 pb-6 border-b border-[#1C1D20]/15">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1C1D20]/45 block mb-1.5">
              Work History
            </span>
            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#1C1D20]">
              Major Companies Worked For
            </h3>
          </div>
          <span className="text-xs font-mono text-[#1C1D20]/40">
            Enterprise &amp; global brands
          </span>
        </div>

        {/* ── Minimalist Full-Width Tabular Row List (Dennis Snellenberg Style) ── */}
        <div className="divide-y divide-[#1C1D20]/15 border-b border-[#1C1D20]/15">
          {enterpriseClients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 16,
                mass: 0.7,
                delay: i * 0.09,
              }}
              whileHover={{ x: 6, scale: 1.01 }}
              className="group py-6 sm:py-8 flex items-center justify-between transition-colors duration-300 hover:px-4 cursor-default rounded-2xl hover:bg-[#F8F8FA]/80"
            >
              {/* Left: Brand Logo Image + Company Name */}
              <div className="flex items-center gap-4 sm:gap-6">
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{
                    scale: [0, 1.28, 0.92, 1.06, 1],
                    rotate: [-15, 8, -4, 2, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.09 + 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.18,
                    rotate: [0, -6, 6, -3, 0],
                    transition: { duration: 0.4 },
                  }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F8F8FA] border border-[#1C1D20]/10 flex items-center justify-center flex-shrink-0 shadow-sm p-2 sm:p-2.5 bubble-wobble bubble-float-${i % 5} group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-3xl lg:text-4xl font-normal text-[#1C1D20] tracking-tight group-hover:text-[#455CE9] group-hover:translate-x-1.5 transition-all duration-300">
                    {client.name}
                  </h4>
                  {client.sub && (
                    <span className="text-xs sm:text-sm font-normal text-[#1C1D20]/50 block mt-0.5">
                      {client.sub}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Region & Arrow */}
              <div className="flex items-center gap-3 sm:gap-6">
                <span className="text-xs sm:text-sm font-mono text-[#1C1D20]/40 hidden sm:block">
                  {client.region}
                </span>
                <motion.span
                  whileHover={{ scale: 1.22, rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#1C1D20]/15 flex items-center justify-center text-xs sm:text-sm text-[#1C1D20]/40 group-hover:border-[#455CE9] group-hover:bg-[#455CE9] group-hover:text-white transition-all duration-300 shadow-sm"
                >
                  ↗
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered Magnetic CTA: "Explore Full Experience" */}
        <div className="flex justify-center pt-14 sm:pt-20">
          <Magnetic strength={25}>
            <a
              href="/experience"
              onClick={handleWorkClick}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-[#1C1D20]/25 text-[#1C1D20] font-medium text-sm sm:text-base hover:bg-[#1C1D20] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-md select-none group cursor-pointer"
            >
              <span>Explore Full Experience</span>
              <span className="w-6 h-6 rounded-full bg-[#1C1D20]/10 group-hover:bg-white/20 flex items-center justify-center text-xs font-mono transition-colors">
                4
              </span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
