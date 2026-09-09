import { motion } from "framer-motion";

interface AgentTool {
  id: string;
  name: string;
  creator: string;
  logo: string;
}

const agentTools: AgentTool[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    creator: "Anthropic",
    logo: "/brands/claude.png",
  },
  {
    id: "cursor",
    name: "Cursor",
    creator: "Anysphere",
    logo: "/brands/cursor.png",
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    creator: "DeepMind",
    logo: "/brands/antigravity.png",
  },
  {
    id: "codex",
    name: "OpenAI Codex",
    creator: "OpenAI",
    logo: "/brands/codex.png",
  },
  {
    id: "vscode",
    name: "VS Code",
    creator: "Microsoft",
    logo: "/brands/vscode.png",
  },
];

export default function AgenticExposure() {
  return (
    <section className="relative bg-[#F8F8FA] text-[#1C1D20] py-16 sm:py-24 px-5 sm:px-12 md:px-20 lg:px-28 border-t border-[#1C1D20]/10 z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1C1D20]/45 block mb-1.5">
              Accelerating Production
            </span>
            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#1C1D20]">
              AI Coding Agents &amp; Modern IDEs
            </h3>
          </div>
          <span className="text-xs font-mono text-[#1C1D20]/40">
            Next-generation developer tooling
          </span>
        </div>

        {/* Clean Logo + Name Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {agentTools.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="bg-white border border-[#1C1D20]/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-[#1C1D20]/25 transition-all duration-300 group hover:-translate-y-1.5 cursor-default"
            >
              {/* Logo Image */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0, rotate: -8 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08 + 0.12,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-14 h-14 rounded-2xl bg-[#F8F8FA] border border-[#1C1D20]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm p-2.5"
              >
                <img
                  src={agent.logo}
                  alt={agent.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              {/* Tool Name */}
              <h4 className="text-base sm:text-lg font-medium text-[#1C1D20] tracking-tight group-hover:text-[#455CE9] transition-colors">
                {agent.name}
              </h4>

              {/* Creator */}
              <span className="text-[11px] font-mono text-[#1C1D20]/45 mt-0.5">
                {agent.creator}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
