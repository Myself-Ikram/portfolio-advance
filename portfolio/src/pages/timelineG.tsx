import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

// Re-using the Modern & Dynamic Color Palette from Home/About/Portfolio
const COLORS = {
  BACKGROUND_DEEP: "#08080D", // Almost black, for ultimate contrast
  BACKGROUND_ACCENT: "#15151F", // Slightly lighter charcoal for elements
  GLOW_PRIMARY: "#3b82f6", // Vibrant Blue
  GLOW_SECONDARY: "#a855f7", // Intense Violet
  TEXT_MAIN: "#F8F8F8", // Bright white for primary text
  TEXT_MUTED: "#A0A0B0", // Soft gray for secondary text/paragraphs
  BORDER_LIGHT: "#2A2A38", // Subtle border for definition
};

const timeline = [
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology in CSE",
    desc: "Completed B.Tech in Computer Science Engineering from Jaya Prakash Narayana College of Engineering. Actively participated in coding workshops, tech fests, and advanced frontend training sessions.",
    icon: <FaGraduationCap className="text-xl" />, // Larger icon
    glowColor: COLORS.GLOW_PRIMARY, // Using primary glow color
    tags: ["B.Tech", "CSE", "Workshops", "Frontend Training"], // More descriptive tags
  },
  {
    year: "2023 - 2024",
    title: "Junior Software Developer",
    desc: "Contributed as a Junior Software Developer at TechTok4u Pvt Ltd (Remote). Key responsibilities included the development of the 'Instil' MERN stack & React Native application, digitalizing school management workflows.",
    icon: <FaLaptopCode className="text-xl" />, // Larger icon
    glowColor: COLORS.GLOW_SECONDARY, // Using secondary glow color
    tags: ["MERN Stack", "React Native", "Remote Work", "School Management"],
  },
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    desc: "Currently serving as a Frontend Developer at Aptapace Innovative Technologies (Onsite). Focused on building cutting-edge ReactJS/React Native applications for diverse domains including carpooling, doctor booking, and event management, with extensive payment and API integrations.",
    icon: <FaBriefcase className="text-xl" />, // Larger icon
    glowColor: COLORS.GLOW_PRIMARY, // Using primary glow color
    tags: ["ReactJS", "React Native", "API Integration", "Payment Gateway"],
  },
];

function TimelineG() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="timeline" // Changed to lowercase for consistency with Home nav
      className="min-h-screen relative font-sans antialiased py-20 md:py-24" // Consistent padding
      style={{ background: COLORS.BACKGROUND_DEEP, color: COLORS.TEXT_MAIN }}
    >
      {/* Background Orbital Elements (consistent with other pages) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 30,
              height: Math.random() * 100 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 2 === 0 ? COLORS.GLOW_PRIMARY : COLORS.GLOW_SECONDARY,
              opacity: 0.03,
              filter: "blur(30px)",
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${COLORS.GLOW_PRIMARY}08, transparent 70%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            variants={itemVariants}
          >
            Professional Journey
          </motion.h2>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-xl"
            style={{ color: COLORS.TEXT_MUTED }}
            variants={itemVariants}
          >
            Explore my career milestones, educational background, and key
            contributions.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {" "}
          {/* Increased space between timeline items */}
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants} // Apply section variants for each timeline item
              className="flex flex-col md:flex-row gap-8 last:mb-0 relative" // Added relative for connecting line
            >
              {/* Vertical Connecting Line (for MD+ screens) */}
              {idx < timeline.length - 1 && (
                <div
                  className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${
                      item.glowColor
                    }50, ${timeline[idx + 1].glowColor}50)`,
                  }}
                />
              )}
              {/* Horizontal line for small screens */}
              <div
                className="block md:hidden absolute left-0 right-0 h-1 top-full mt-6 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${COLORS.GLOW_PRIMARY}50, ${COLORS.GLOW_SECONDARY}50)`,
                }}
              />

              {/* Date/Icon Section (Left on MD+, Top on mobile) */}
              <motion.div
                className="md:w-4/12 flex-shrink-0 relative z-10" // flex-shrink-0 to prevent shrinking
                variants={itemVariants}
              >
                <div
                  className={`p-6 rounded-2xl shadow-xl h-full flex items-center justify-center text-white text-center md:text-left`}
                  style={{
                    background: `linear-gradient(135deg, ${item.glowColor}20, ${item.glowColor}05)`, // Subtle gradient background
                    border: `1px solid ${item.glowColor}50`, // Border with glow color
                    boxShadow: `0 0 25px ${item.glowColor}30`, // More pronounced shadow
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <div
                      className="p-3 rounded-full"
                      style={{
                        background: `linear-gradient(45deg, ${COLORS.BACKGROUND_DEEP}, ${COLORS.BACKGROUND_ACCENT})`, // Dark background for icon
                        border: `1px solid ${item.glowColor}80`, // Stronger border for icon
                        boxShadow: `0 0 15px ${item.glowColor}40`, // Icon glow
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <p
                        className="font-semibold text-xl"
                        style={{ color: COLORS.TEXT_MAIN }}
                      >
                        {item.year}
                      </p>
                      <p
                        className="text-sm font-light mt-1"
                        style={{ color: COLORS.TEXT_MUTED }}
                      >
                        {item.title.split(" ")[0]}{" "}
                        {/* Keeping original part of title */}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Central Dot for MD+ screens */}
              <div className="hidden md:flex flex-col items-center justify-center z-20">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${item.glowColor}, ${item.glowColor}80)`,
                    boxShadow: `0 0 10px ${item.glowColor}80`,
                  }}
                />
              </div>

              {/* Content Section (Right on MD+, Bottom on mobile) */}
              <motion.div
                className="md:w-8/12 relative z-10" // Adjusted width
                variants={itemVariants}
              >
                <div
                  className="p-8 rounded-2xl shadow-lg border h-full transition-all duration-300" // Larger padding, more rounded
                  style={{
                    backgroundColor: COLORS.BACKGROUND_ACCENT,
                    borderColor: COLORS.BORDER_LIGHT,
                    boxShadow: `0 0 20px ${COLORS.BACKGROUND_ACCENT}30`,
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: COLORS.TEXT_MAIN }}
                  >
                    {" "}
                    {/* Larger, bolder title */}
                    {item.title}
                  </h3>
                  <p
                    className="text-base mb-6 leading-relaxed"
                    style={{ color: COLORS.TEXT_MUTED }}
                  >
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {" "}
                    {/* Increased gap for tags */}
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-3.5 py-1.5 rounded-full font-medium" // Pill-shaped tags, more padding
                        style={{
                          backgroundColor: `${item.glowColor}20`, // Subtle glow background for tags
                          color: item.glowColor, // Text color matches glow
                          border: `1px solid ${item.glowColor}40`, // Subtle border for tags
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimelineG;
