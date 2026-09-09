import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Magnetic from "../components/Magnetic";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  category: "all" | "mobility" | "cloud" | "academic";
  scope: string;
  clients?: string;
  timeline: string;
  protocols: string[];
  summary: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: "winit",
    role: "Software Engineer",
    company: "WINIT Solutions",
    category: "mobility",
    scope: "Hyderabad, India (GCC Logistics)",
    clients: "Choithrams, Zad Holding, Dubai Refreshment (PepsiCo distributor)",
    timeline: "Aug 2025 — Present",
    protocols: [
      "React Native",
      "Zebra ZPL",
      "Honeywell",
      "Python Build CLI",
      "Offline SQLite Sync",
      "Zustand",
      "TypeScript",
    ],
    summary:
      "Architecting mission-critical sales force automation and FMCG logistics platforms across the GCC region. Specialized in hardware thermal print engines, multi-tenant build automation, and resilient offline-first transactional syncing.",
    highlights: [
      "Architected dynamic Python white-labeling CLI automating multi-tenant client builds (assets, package IDs, Firebase configs, endpoints).",
      "Engineered cross-platform mobile thermal print engines (Zebra ZPL, Honeywell, Bixolon) over Bluetooth and Wi-Fi for field invoicing.",
      "Developed offline-first SQLite database architecture with Zustand queues to ensure 100% data integrity in remote zero-connectivity zones.",
      "Accelerated engineering delivery speed by 40% utilizing structured LLM workflows (Cursor, Claude Code) and modular component patterns.",
    ],
    metrics: [
      { label: "Deployment Speed", value: "40% Faster" },
      { label: "Enterprise Scale", value: "GCC Region" },
      { label: "Uptime Requirement", value: "99.9%" },
    ],
  },
  {
    id: "aptapace",
    role: "Frontend & Mobile Developer",
    company: "Aptapace Innovative Technologies",
    category: "mobility",
    scope: "Hyderabad, India",
    clients: "1T4 Carpooling, Save Farmers, BookUrAppointment",
    timeline: "Oct 2024 — Aug 2025",
    protocols: [
      "React Native",
      "TypeScript",
      "EAS Build",
      "Razorpay",
      "Cashfree",
      "Aadhaar KYC",
      "Tailwind CSS",
    ],
    summary:
      "Led full-lifecycle mobile engineering and web applications for high-traffic consumer and service products. Managed App Store and Play Store releases, payment pipelines, and identity verification.",
    highlights: [
      "Managed end-to-end iOS App Store and Google Play releases using EAS Build automated CI/CD pipelines.",
      "Integrated Indian payment gateways (Razorpay, Cashfree, Airpay) with end-to-end transaction reconciliation.",
      "Implemented government Aadhaar KYC verification flows for verified carpooling in the 1T4 platform.",
      "Built high-performance, responsive administrative web dashboards with React and Tailwind CSS.",
    ],
    metrics: [
      { label: "App Store & Play Store", value: "Production" },
      { label: "Payment Gateways", value: "4 Integrated" },
    ],
  },
  {
    id: "tektok4u",
    role: "Junior Software Developer",
    company: "TechTok4u Pvt Ltd",
    category: "cloud",
    scope: "Hyderabad, India",
    clients: "Instil Digital School Management",
    timeline: "Jun 2023 — May 2024",
    protocols: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Linux VPS",
    ],
    summary:
      "Engineered administrative school management software, cross-platform mobile application modules, and backend REST APIs hosted on Linux VPS environments.",
    highlights: [
      "Developed administrative web portals for attendance tracking, student progress, and fee collection.",
      "Created cross-platform mobile modules for parents and faculty in React Native.",
      "Configured Node.js / Express microservices and Linux VPS hosting environments.",
    ],
    metrics: [
      { label: "Core Platform", value: "Instil SMM" },
      { label: "Backend", value: "Node/Express" },
    ],
  },
  {
    id: "jpnce",
    role: "B.Tech in Computer Science Engineering",
    company: "JPNCE",
    category: "academic",
    scope: "Mahabubnagar / Hyderabad, India",
    timeline: "Jul 2019 — Jul 2023",
    protocols: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    summary:
      "Rigorous 4-year foundation in computer science principles, algorithmic problem solving, distributed systems architecture, and relational database management.",
    highlights: [
      "Specialized in core algorithms, object-oriented system design, and database normalization.",
      "Developed foundational full-stack projects and technical leadership initiatives.",
    ],
    metrics: [
      { label: "Degree", value: "B.Tech CSE" },
      { label: "Graduation", value: "July 2023" },
    ],
  },
];

export default function ExperiencePage() {
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "card">("list");
  const [expandedId, setExpandedId] = useState<string | null>("winit");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const filtered =
    filter === "all"
      ? experiences
      : experiences.filter((item) => item.category === filter);

  return (
    <div className="bg-white text-[#1C1D20] selection:bg-[#1C1D20] selection:text-white min-h-screen">
      {/* 1. Header Section */}
      <section className="pt-28 sm:pt-36 md:pt-48 pb-10 sm:pb-16 px-5 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1.12] text-[#1C1D20] max-w-6xl"
        >
          Architecting enterprise systems &amp; production mobile applications
        </motion.h1>

        {/* Filters & View Switcher Bar */}
        <div className="flex items-center justify-between gap-3 mt-8 sm:mt-16">
          {/* Filter Pills - Horizontally scrollable on mobile without scrollbars, wrapping on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-1 sm:flex-initial sm:flex-wrap">
            {[
              { label: "All", key: "all", count: 4 },
              { label: "Enterprise Mobility", key: "mobility", count: 2 },
              { label: "Full-Stack Cloud", key: "cloud", count: 1 },
              { label: "Education", key: "academic", count: 1 },
            ].map((pill) => {
              const isActive = filter === pill.key;
              return (
                <button
                  key={pill.key}
                  onClick={() => setFilter(pill.key)}
                  className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-300 flex items-center gap-1.5 select-none ${
                    isActive
                      ? "bg-[#1C1D20] text-white shadow-md scale-[1.02]"
                      : "border border-[#1C1D20]/20 text-[#1C1D20] hover:border-[#1C1D20]"
                  }`}
                >
                  <span>{pill.label}</span>
                  <sup className="text-[10px] font-mono opacity-60">
                    {pill.count}
                  </sup>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle (List vs Card) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2 sm:pl-0 border-l border-[#1C1D20]/10 sm:border-l-0">
            {/* List View Button */}
            <Magnetic strength={15}>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 select-none ${
                  viewMode === "list"
                    ? "bg-[#1C1D20] text-white shadow-md"
                    : "border border-[#1C1D20]/20 text-[#1C1D20] hover:border-[#1C1D20]"
                }`}
              >
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 18 14"
                  fill="currentColor"
                >
                  <rect width="18" height="2" rx="1" />
                  <rect y="6" width="18" height="2" rx="1" />
                  <rect y="12" width="18" height="2" rx="1" />
                </svg>
              </button>
            </Magnetic>

            {/* Card View Button */}
            <Magnetic strength={15}>
              <button
                onClick={() => setViewMode("card")}
                aria-label="Card View"
                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 select-none ${
                  viewMode === "card"
                    ? "bg-[#1C1D20] text-white shadow-md"
                    : "border border-[#1C1D20]/20 text-[#1C1D20] hover:border-[#1C1D20]"
                }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <rect width="6.5" height="6.5" rx="1" />
                  <rect x="9.5" width="6.5" height="6.5" rx="1" />
                  <rect y="9.5" width="6.5" height="6.5" rx="1" />
                  <rect x="9.5" y="9.5" width="6.5" height="6.5" rx="1" />
                </svg>
              </button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* 2. Main Experience Content */}
      <section className="px-5 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto pb-28 sm:pb-36">
        {viewMode === "list" ? (
          /* ================= LIST VIEW ================= */
          <div>
            {/* Table Column Headers (Desktop Only) */}
            <div className="hidden md:grid grid-cols-12 pb-4 text-[11px] font-mono uppercase tracking-wider text-[#1C1D20]/40 border-b border-[#1C1D20]/15">
              <div className="col-span-4">Organization &amp; Role</div>
              <div className="col-span-3">Location &amp; Scope</div>
              <div className="col-span-3">Core Stack &amp; Protocols</div>
              <div className="col-span-2 text-right">Period</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#1C1D20]/15">
              {filtered.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : item.id)
                    }
                    className="group py-6 sm:py-10 cursor-pointer transition-all duration-300"
                  >
                    {/* ── DESKTOP ROW (md and up) ── */}
                    <div className="hidden md:grid grid-cols-12 items-center gap-4">
                      {/* Organization & Role */}
                      <div className="col-span-4">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1D20] tracking-tight group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                          <span>{item.company}</span>
                          <span className="text-sm text-[#1C1D20]/40 group-hover:text-[#455CE9] transition-colors">
                            {isExpanded ? "▲" : "▼"}
                          </span>
                        </h3>
                        <p className="text-base font-medium text-[#1C1D20]/60 mt-1">
                          {item.role}
                        </p>
                      </div>

                      {/* Scope & Clients */}
                      <div className="col-span-3 text-base text-[#1C1D20]/80">
                        <span className="block font-medium">{item.scope}</span>
                        {item.clients && (
                          <span className="text-xs text-[#1C1D20]/50 block mt-0.5 line-clamp-1">
                            {item.clients}
                          </span>
                        )}
                      </div>

                      {/* Protocols */}
                      <div className="col-span-3">
                        <div className="flex flex-wrap gap-1.5">
                          {item.protocols.slice(0, 3).map((p) => (
                            <span
                              key={p}
                              className="text-xs px-2.5 py-1 rounded-full bg-[#1C1D20]/5 text-[#1C1D20]/75 font-medium"
                            >
                              {p}
                            </span>
                          ))}
                          {item.protocols.length > 3 && (
                            <span className="text-xs px-2 py-1 text-[#1C1D20]/40 font-mono">
                              +{item.protocols.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period */}
                      <div className="col-span-2 text-right text-sm font-mono text-[#1C1D20]/60">
                        {item.timeline}
                      </div>
                    </div>

                    {/* ── MOBILE ROW (< md: Dennis Snellenberg Minimalist Card) ── */}
                    <div className="md:hidden flex flex-col gap-2">
                      {/* Top Row: Company & Role on left, Period & Toggle on right */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-medium text-[#1C1D20] tracking-tight flex items-center gap-2">
                            <span>{item.company}</span>
                          </h3>
                          <p className="text-sm font-normal text-[#1C1D20]/70 mt-0.5">
                            {item.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                          <span className="text-xs font-mono text-[#1C1D20]/55 bg-[#1C1D20]/5 px-2 py-0.5 rounded">
                            {item.timeline.includes("—") ? item.timeline.split("—")[0].trim() : item.timeline}
                          </span>
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors ${
                            isExpanded ? "bg-[#1C1D20] text-white" : "bg-[#1C1D20]/5 text-[#1C1D20]/60"
                          }`}>
                            {isExpanded ? "▲" : "▼"}
                          </span>
                        </div>
                      </div>

                      {/* Scope & Clients */}
                      <div className="text-xs text-[#1C1D20]/60 flex items-center gap-1.5 flex-wrap">
                        <span>{item.scope}</span>
                        {item.clients && (
                          <>
                            <span className="opacity-40">•</span>
                            <span className="text-[#1C1D20]/50 truncate max-w-[220px]">
                              {item.clients}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Protocol Badges */}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.protocols.slice(0, 3).map((p) => (
                          <span
                            key={p}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-[#1C1D20]/5 text-[#1C1D20]/75 font-medium"
                          >
                            {p}
                          </span>
                        ))}
                        {item.protocols.length > 3 && (
                          <span className="text-[11px] px-1.5 py-0.5 text-[#1C1D20]/40 font-mono">
                            +{item.protocols.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Details Drawer (Shared, Responsive) */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                          className="overflow-hidden mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#1C1D20]/10"
                        >
                          <div className="bg-[#F8F8FA] rounded-xl sm:rounded-2xl p-4 sm:p-8">
                            <p className="text-sm sm:text-lg text-[#1C1D20]/85 leading-relaxed mb-4 sm:mb-6 font-normal max-w-4xl">
                              {item.summary}
                            </p>

                            {/* Metrics inside drawer if present */}
                            {item.metrics && item.metrics.length > 0 && (
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 sm:p-4 mb-4 sm:mb-6 bg-white rounded-lg sm:rounded-xl border border-[#1C1D20]/10">
                                {item.metrics.map((m, idx) => (
                                  <div key={idx}>
                                    <span className="block text-base sm:text-xl font-bold text-[#1C1D20]">
                                      {m.value}
                                    </span>
                                    <span className="text-[10px] sm:text-xs text-[#1C1D20]/50 uppercase tracking-wider font-mono">
                                      {m.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="mb-4 sm:mb-6">
                              <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-[#1C1D20]/50 mb-2 sm:mb-3">
                                Key Engineering Accomplishments:
                              </h4>
                              <ul className="space-y-2 max-w-4xl">
                                {item.highlights.map((h, i) => (
                                  <li
                                    key={i}
                                    className="text-xs sm:text-base text-[#1C1D20]/80 flex items-start gap-2.5 sm:gap-3"
                                  >
                                    <span className="text-[#455CE9] font-mono mt-0.5">
                                      —
                                    </span>
                                    <span>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Full Protocols Badge Row */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#1C1D20]/10">
                              {item.protocols.map((p) => (
                                <span
                                  key={p}
                                  className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-[#1C1D20]/10 text-[#1C1D20] font-medium"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ================= CARD / GRID VIEW ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#F8F8FA] border border-[#1C1D20]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between hover:shadow-xl hover:border-[#1C1D20]/30 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Timeline & Scope */}
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#1C1D20]/50">
                      {item.timeline}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20]/5 text-xs font-medium text-[#1C1D20]/70 truncate max-w-[180px]">
                      {item.scope}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1D20] tracking-tight mb-1 sm:mb-2 group-hover:text-[#455CE9] transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-sm sm:text-lg font-medium text-[#1C1D20]/70 mb-4 sm:mb-6">
                    {item.role}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-base text-[#1C1D20]/80 leading-relaxed mb-4 sm:mb-6">
                    {item.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                    {item.highlights.slice(0, 3).map((h, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-[#1C1D20]/75 flex items-start gap-2"
                      >
                        <span className="text-[#455CE9] font-mono">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: Protocols & Metrics */}
                <div>
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 py-3 sm:py-4 mb-4 sm:mb-6 border-t border-b border-[#1C1D20]/10">
                      {item.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <span className="block text-xl sm:text-2xl font-semibold text-[#1C1D20]">
                            {m.value}
                          </span>
                          <span className="text-[10px] sm:text-xs text-[#1C1D20]/60 uppercase tracking-wider">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {item.protocols.map((p) => (
                      <span
                        key={p}
                        className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-[#1C1D20]/10 text-[#1C1D20]/80 font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Dennis Snellenberg Dark Footer */}
      <Footer />
    </div>
  );
}
