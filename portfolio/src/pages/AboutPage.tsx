import { useEffect } from "react";
import { motion } from "framer-motion";
import Globe from "../components/Globe";
import Footer from "../components/Footer";
import Magnetic from "../components/Magnetic";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  const services = [
    {
      num: "01",
      title: "Mobile & Hardware Architecture",
      desc: "Architecting high-performance React Native applications with direct hardware communication — including thermal printing engines (Zebra ZPL, Honeywell, Bixolon via Bluetooth/Wi-Fi), offline-first SQLite synchronization, and Hermes engine optimization.",
    },
    {
      num: "02",
      title: "Full-Stack & Cloud Solutions",
      desc: "Designing robust Next.js and Node.js microservices with PostgreSQL, MongoDB, and Redis. Building reactive real-time administrative dashboards, role-based access control, dynamic multi-tenant build pipelines, and payment gateways.",
    },
    {
      num: "03",
      title: "The Full Package",
      desc: "From low-level hardware protocols and automated white-label build CLIs (Python) to production App Store / Play Store deployment and scalable backend APIs. I deliver comprehensive, production-ready solutions built for extreme operational reliability.",
    },
  ];

  return (
    <div className="bg-white text-[#1C1D20] selection:bg-[#1C1D20] selection:text-white min-h-screen">
      {/* 1. Header Section */}
      <section className="pt-36 sm:pt-48 pb-16 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1.08] text-[#1C1D20]"
        >
          Engineering scalable mobile &amp; full-stack systems with enterprise precision
        </motion.h1>
      </section>

      {/* 2. Divider Line & Floating Globe Disc */}
      <section className="relative px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto mb-20 sm:mb-28">
        <div className="w-full h-[1px] bg-[#1C1D20]/15" />
        <div className="absolute -top-16 sm:-top-20 right-8 sm:right-16 md:right-24">
          <Magnetic strength={25}>
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#455CE9] shadow-xl flex items-center justify-center select-none cursor-pointer group">
              <Globe size={68} className="transform group-hover:scale-110 transition-transform duration-500" />
            </div>
          </Magnetic>
        </div>
      </section>

      {/* 3. Editorial Intro Statement & Portrait (about-image) */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto mb-28 sm:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Statement */}
          <div className="lg:col-span-5 pt-4">
            <div className="flex items-center gap-3 text-xl mb-6 text-[#1C1D20]/70 font-mono">
              <span className="text-2xl transform rotate-12 inline-block">↗</span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-[#1C1D20] mb-6 tracking-tight">
              At <strong className="font-semibold text-[#1C1D20]">WINIT Solutions</strong>, I architect mission-critical sales force automation and FMCG logistics platforms across the GCC region for industry giants including <span className="font-medium text-[#1C1D20]">Choithrams</span>, <span className="font-medium text-[#1C1D20]">Zad Holding</span>, and <span className="font-medium text-[#1C1D20]">Dubai Refreshment</span>.
            </p>

            <p className="text-base sm:text-lg text-[#1C1D20]/70 leading-relaxed mb-8">
              Specialized in dynamic thermal printing engines (Zebra ZPL, Honeywell), automated multi-tenant Python CLI builds, and resilient offline-first transactional syncing (PostgreSQL &amp; SQLite) where operational downtime is never an option.
            </p>

            {/* Metric Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1C1D20]/15">
              <div>
                <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-[#1C1D20]">
                  3+
                </span>
                <span className="text-[11px] sm:text-xs text-[#1C1D20]/60 uppercase tracking-wider mt-1 block">
                  Years Exp.
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-[#1C1D20]">
                  40%
                </span>
                <span className="text-[11px] sm:text-xs text-[#1C1D20]/60 uppercase tracking-wider mt-1 block">
                  Speedup
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-semibold tracking-tight text-[#1C1D20]">
                  GCC
                </span>
                <span className="text-[11px] sm:text-xs text-[#1C1D20]/60 uppercase tracking-wider mt-1 block">
                  Enterprise
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Workspace Photo */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1C1D20] aspect-[1290/1219] shadow-2xl group">
              <img
                src="/ikram-monitor.png"
                alt="Mohd Abdul Ikram architecting code at workspace"
                className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (about-services) */}
      <section className="bg-[#E9EAEB] py-28 sm:py-36 px-6 sm:px-12 md:px-20 lg:px-28">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1D20] flex items-center">
              <span>I can help you with</span>
              <span className="inline-flex ml-2 font-mono">
                <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
              </span>
            </h2>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {services.map((service) => (
              <div key={service.num} className="flex flex-col">
                <span className="text-sm font-mono text-[#1C1D20]/40 mb-3 block">
                  {service.num}
                </span>
                <div className="w-full h-[1px] bg-[#1C1D20]/20 mb-8" />
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1D20] mb-5">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-[#1C1D20]/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dennis Snellenberg Dark Footer */}
      <Footer />
    </div>
  );
}
