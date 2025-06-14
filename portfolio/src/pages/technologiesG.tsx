import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiJavascript, // Import SiJavascript for a consistent icon
} from "react-icons/si";

// Re-using the Modern & Dynamic Color Palette from other components
const COLORS = {
  BACKGROUND_DEEP: "#08080D", // Almost black, for ultimate contrast
  BACKGROUND_ACCENT: "#15151F", // Slightly lighter charcoal for elements
  GLOW_PRIMARY: "#3b82f6", // Vibrant Blue
  GLOW_SECONDARY: "#a855f7", // Intense Violet
  TEXT_MAIN: "#F8F8F8", // Bright white for primary text
  TEXT_MUTED: "#A0A0B0", // Soft gray for secondary text/paragraphs
  BORDER_LIGHT: "#2A2A38", // Subtle border for definition
};

const tech = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />, // Using a single vibrant color
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "React Native",
    icon: <FaReact className="text-blue-400" />, // Slight variation for React Native
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    glowColor: COLORS.GLOW_PRIMARY, // Can be adjusted to a third glow if desired
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-emerald-400" />, // Specific green for Mongo
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    glowColor: COLORS.GLOW_SECONDARY,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />, // Using an actual icon for consistency
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    glowColor: COLORS.GLOW_SECONDARY,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    glowColor: COLORS.GLOW_PRIMARY,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-purple-400" />,
    glowColor: COLORS.GLOW_SECONDARY,
  },
];

function TechnologiesG() {
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
      id="technologies" // Changed to lowercase for consistency
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
            My Tech Stack
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
            A comprehensive list of technologies I frequently use for
            development.
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto" // Increased gap
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {tech.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-2xl border shadow-lg flex flex-col items-center gap-4 cursor-pointer transition-all duration-300 relative group`} // More rounded, consistent styling
              style={{
                backgroundColor: COLORS.BACKGROUND_ACCENT,
                borderColor: COLORS.BORDER_LIGHT,
                boxShadow: `0 0 15px ${COLORS.BACKGROUND_ACCENT}30`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -8, // More pronounced lift
                scale: 1.07, // Slightly more scale
                boxShadow: `0 0 30px ${item.glowColor}60, 0 0 15px ${item.glowColor}40`, // Stronger glow on hover
                borderColor: item.glowColor, // Border changes color on hover
              }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="text-5xl p-2 rounded-full" // Larger icon, subtle rounded background
                style={{
                  background: `linear-gradient(45deg, ${item.glowColor}10, ${item.glowColor}00)`, // Very subtle background for icon area
                  color: item.glowColor, // Ensure icon color is vibrant
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-xl font-semibold text-center"
                style={{ color: COLORS.TEXT_MAIN }}
              >
                {" "}
                {/* Larger font */}
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto p-10 rounded-3xl border shadow-xl" // Increased top margin, more padding, more rounded
          style={{
            backgroundColor: COLORS.BACKGROUND_ACCENT,
            borderColor: COLORS.BORDER_LIGHT,
            boxShadow: `0 0 30px ${COLORS.BACKGROUND_ACCENT}50`, // Stronger shadow for this section
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-center" // Larger, bolder, centered
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={itemVariants}
          >
            My Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Increased gap */}
            <motion.div variants={itemVariants}>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS.GLOW_PRIMARY }}
              >
                {" "}
                {/* Larger, bolder, glow color */}
                Frontend Focus
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: COLORS.TEXT_MUTED }}
              >
                Specializing in **React** and **React Native** development, I
                have extensive experience building highly responsive,
                performant, and user-centric interfaces. My expertise includes
                leveraging modern CSS frameworks like **Tailwind CSS** to create
                sleek and intuitive designs.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS.GLOW_SECONDARY }}
              >
                {" "}
                {/* Larger, bolder, glow color */}
                Full Stack Capabilities
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: COLORS.TEXT_MUTED }}
              >
                Proficient across the **MERN stack** (MongoDB, Express.js,
                React, Node.js), I am skilled in developing and deploying robust
                full-stack applications. My backend experience includes
                designing **RESTful APIs**, ensuring seamless data flow and
                efficient server-side logic.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechnologiesG;
