import Lottie from "lottie-react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaTools,
  FaMobileAlt,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa"; // Changed FaCode to FaUserTie for summary, added FaLightbulb for passion
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si"; // Added more specific tech icons
import about from "../lotties/aboutt.json";

// Re-using the Modern & Dynamic Color Palette from Home component
const COLORS = {
  BACKGROUND_DEEP: "#08080D",
  BACKGROUND_ACCENT: "#15151F",
  GLOW_PRIMARY: "#3b82f6", // Vibrant Blue
  GLOW_SECONDARY: "#a855f7", // Intense Violet
  TEXT_MAIN: "#F8F8F8",
  TEXT_MUTED: "#A0A0B0",
  BORDER_LIGHT: "#2A2A38",
};

function AboutG() {
  const skills = [
    { name: "React.js", icon: <SiReact className="text-blue-400 text-xl" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500 text-xl" />,
    },
    {
      name: "React Native",
      icon: <FaMobileAlt className="text-indigo-400 text-xl" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400 text-xl" />,
    }, // Clarified Express.js
    { name: "Redux", icon: <SiRedux className="text-purple-600 text-xl" /> }, // Added Redux
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-xl" />,
    }, // Added TypeScript
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
    }, // Added Tailwind CSS
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-xl" /> }, // Added HTML5
    { name: "CSS3", icon: <SiCss3 className="text-blue-600 text-xl" /> }, // Added CSS3
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-xl" />,
    }, // Added JavaScript
    { name: "Git", icon: <SiGit className="text-red-600 text-xl" /> }, // Added Git
  ];

  const experiences = [
    {
      title: "Healthcare Booking Platform",
      description:
        "Developed and integrated doctor scheduling, appointment management, and secure Aadhaar KYC verification.",
    },
    {
      title: "Real-time Carpooling Application",
      description:
        "Engineered features for real-time ride matching, dynamic route optimization, and seamless payment integration.",
    },
    {
      title: "Astrology E-commerce Platform",
      description:
        "Implemented a robust custom CMS, secure payment gateway integrations, and personalized user experiences.",
    },
  ];

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
      id="about" // Changed to lowercase for consistency with Home nav
      className="min-h-screen text-white overflow-hidden relative font-sans antialiased py-20 md:py-24" // Increased vertical padding
      style={{ background: COLORS.BACKGROUND_DEEP, color: COLORS.TEXT_MAIN }}
    >
      {/* Background Orbital Elements (consistent with Home) */}
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
        {/* Title Section */}
        <motion.div
          className="mb-16 text-center" // Increased margin bottom
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent" // Larger, bolder title
            style={{
              backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full" // Thicker, longer line
            style={{
              background: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto" // Larger, muted text
            style={{ color: COLORS.TEXT_MUTED }}
            variants={itemVariants}
          >
            A dedicated Full Stack Developer committed to building impactful web
            and mobile solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left: Animation and Visual Elements */}
          <motion.div
            className="flex justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div
              className="relative p-8 rounded-3xl" // Larger padding, more rounded
              style={{
                background: `linear-gradient(135deg, ${COLORS.GLOW_PRIMARY}10, ${COLORS.GLOW_SECONDARY}10)`, // Subtle gradient background for the Lottie container
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
                boxShadow: `0 0 40px ${COLORS.GLOW_PRIMARY}30, 0 0 20px ${COLORS.GLOW_SECONDARY}20`, // Enhanced glow shadow
              }}
              variants={itemVariants}
            >
              <Lottie
                animationData={about}
                className="w-full max-w-lg h-auto"
              />{" "}
              {/* Max width for Lottie */}
            </motion.div>

            {/* Floating icons with enhanced styling */}
            <motion.div
              className="absolute -top-8 -right-8 w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
              style={{
                background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                boxShadow: `0 0 25px ${COLORS.GLOW_PRIMARY}50`,
                zIndex: 10,
              }}
              animate={{ rotate: [0, 15, -15, 0], y: [0, -10, 0] }} // Added y movement
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaLaptopCode className="text-3xl text-white" />{" "}
              {/* Larger icon */}
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full flex items-center justify-center shadow-xl"
              style={{
                background: `linear-gradient(45deg, ${COLORS.GLOW_SECONDARY}, ${COLORS.GLOW_PRIMARY})`,
                boxShadow: `0 0 25px ${COLORS.GLOW_SECONDARY}50`,
                zIndex: 10,
              }}
              animate={{ rotate: [0, -15, 15, 0], y: [0, 10, 0] }} // Added y movement
              transition={{
                duration: 5.5,
                repeat: Infinity,
                delay: 0.3,
                ease: "easeInOut",
              }}
            >
              <FaGraduationCap className="text-3xl text-white" />{" "}
              {/* Larger icon */}
            </motion.div>
          </motion.div>
          {/* Right: Content Sections */}
          <div className="space-y-8">
            {" "}
            {/* Increased space between sections */}
            {/* Professional Summary */}
            <motion.div
              className="bg-transparent backdrop-blur-sm rounded-xl p-8 border" // Transparent background, larger padding
              style={{
                backgroundColor: COLORS.BACKGROUND_ACCENT, // Using accent for card background
                borderColor: COLORS.BORDER_LIGHT,
                boxShadow: `0 0 30px ${COLORS.BACKGROUND_ACCENT}40`, // Subtle shadow
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <motion.div
                className="flex items-center gap-4 mb-5"
                variants={itemVariants}
              >
                {" "}
                {/* Increased gap and margin */}
                <div
                  className="p-3 rounded-full" // Larger icon background
                  style={{
                    background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}20, ${COLORS.GLOW_SECONDARY}20)`, // Gradient for icon background
                  }}
                >
                  <FaUserTie
                    className="text-2xl"
                    style={{ color: COLORS.GLOW_PRIMARY }}
                  />{" "}
                  {/* Changed icon, larger size */}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.GLOW_PRIMARY }}
                >
                  {" "}
                  {/* Larger, primary glow color */}
                  Professional Summary
                </h3>
              </motion.div>

              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: COLORS.TEXT_MUTED }}
              >
                {" "}
                {/* Larger text, muted color */}
                <motion.p variants={itemVariants}>
                  I'm a{" "}
                  <strong style={{ color: COLORS.GLOW_PRIMARY }}>
                    Full Stack Developer
                  </strong>{" "}
                  with{" "}
                  <strong style={{ color: COLORS.GLOW_PRIMARY }}>
                    2 years of experience
                  </strong>{" "}
                  building robust web and mobile applications using the{" "}
                  <strong style={{ color: COLORS.GLOW_SECONDARY }}>
                    MERN stack
                  </strong>{" "}
                  and
                  <strong style={{ color: COLORS.GLOW_SECONDARY }}>
                    {" "}
                    React Native
                  </strong>
                  .
                </motion.p>
                <motion.p variants={itemVariants}>
                  My expertise includes crafting intuitive UIs, optimizing state
                  management, seamlessly integrating third-party APIs and
                  payment gateways, and end-to-end deployment to various
                  platforms.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I earned my B.Tech in Computer Science Engineering from{" "}
                  <strong style={{ color: COLORS.GLOW_PRIMARY }}>
                    Jaya Prakash Narayana College of Engineering
                  </strong>
                  , where I actively contributed to tech fests and coding
                  workshops, fostering a strong foundation in software
                  development.
                </motion.p>
              </div>
            </motion.div>
            {/* Skills Section */}
            <motion.div
              className="bg-transparent backdrop-blur-sm rounded-xl p-8 border"
              style={{
                backgroundColor: COLORS.BACKGROUND_ACCENT,
                borderColor: COLORS.BORDER_LIGHT,
                boxShadow: `0 0 30px ${COLORS.BACKGROUND_ACCENT}40`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <motion.div
                className="flex items-center gap-4 mb-5"
                variants={itemVariants}
              >
                <div
                  className="p-3 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${COLORS.GLOW_SECONDARY}20, ${COLORS.GLOW_PRIMARY}20)`,
                  }}
                >
                  <FaTools
                    className="text-2xl"
                    style={{ color: COLORS.GLOW_SECONDARY }}
                  />{" "}
                  {/* Larger, secondary glow color */}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.GLOW_SECONDARY }}
                >
                  Skills & Expertise
                </h3>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {" "}
                {/* More columns for skills */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 group cursor-pointer"
                    style={{
                      backgroundColor: COLORS.BACKGROUND_DEEP, // Darker background for skill cards
                      border: `1px solid ${COLORS.BORDER_LIGHT}`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.08, // More pronounced hover scale
                      boxShadow: `0 0 15px ${COLORS.GLOW_PRIMARY}40`,
                      background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}10, ${COLORS.GLOW_SECONDARY}10)`, // Subtle gradient on hover
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }} // Faster staggering
                  >
                    <div className="mb-2 text-3xl group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span
                      className="font-medium text-sm text-center"
                      style={{ color: COLORS.TEXT_MUTED }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Experience Section */}
            <motion.div
              className="bg-transparent backdrop-blur-sm rounded-xl p-8 border"
              style={{
                backgroundColor: COLORS.BACKGROUND_ACCENT,
                borderColor: COLORS.BORDER_LIGHT,
                boxShadow: `0 0 30px ${COLORS.BACKGROUND_ACCENT}40`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <motion.div
                className="flex items-center gap-4 mb-5"
                variants={itemVariants}
              >
                <div
                  className="p-3 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}20, ${COLORS.GLOW_SECONDARY}20)`,
                  }}
                >
                  <FaMobileAlt
                    className="text-2xl"
                    style={{ color: COLORS.GLOW_PRIMARY }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.GLOW_PRIMARY }}
                >
                  Key Projects
                </h3>
              </motion.div>

              <div className="space-y-6">
                {" "}
                {/* Increased space between projects */}
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-5 items-start" // Align dot to start of text
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{
                          background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                        }}
                      />{" "}
                      {/* Gradient dot */}
                      {index !== experiences.length - 1 && (
                        <div
                          className="h-full w-0.5 mt-2"
                          style={{ backgroundColor: COLORS.BORDER_LIGHT }}
                        />
                      )}
                    </div>
                    <div>
                      <h4
                        className="font-bold text-lg mb-1"
                        style={{ color: COLORS.TEXT_MAIN }}
                      >
                        {exp.title}
                      </h4>{" "}
                      {/* Larger, main text color */}
                      <p
                        className="text-base"
                        style={{ color: COLORS.TEXT_MUTED }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Passion Section */}
            <motion.div
              className="bg-transparent backdrop-blur-sm rounded-xl p-8 border"
              style={{
                backgroundColor: COLORS.BACKGROUND_ACCENT,
                borderColor: COLORS.BORDER_LIGHT,
                boxShadow: `0 0 30px ${COLORS.BACKGROUND_ACCENT}40`,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <motion.div
                className="flex items-center gap-4 mb-5"
                variants={itemVariants}
              >
                <div
                  className="p-3 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${COLORS.GLOW_SECONDARY}20, ${COLORS.GLOW_PRIMARY}20)`,
                  }}
                >
                  <FaLightbulb
                    className="text-2xl"
                    style={{ color: COLORS.GLOW_SECONDARY }}
                  />{" "}
                  {/* New icon, secondary glow color */}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.GLOW_SECONDARY }}
                >
                  My Passion
                </h3>
              </motion.div>

              <motion.p
                className="text-base leading-relaxed"
                style={{ color: COLORS.TEXT_MUTED }}
                variants={itemVariants}
              >
                I'm deeply passionate about creating{" "}
                <strong style={{ color: COLORS.GLOW_PRIMARY }}>
                  intuitive UI/UX designs
                </strong>
                , mastering{" "}
                <strong style={{ color: COLORS.GLOW_SECONDARY }}>
                  performance optimization
                </strong>
                , and architecting{" "}
                <strong style={{ color: COLORS.GLOW_PRIMARY }}>
                  highly scalable solutions
                </strong>{" "}
                that deliver exceptional user experiences. I thrive on
                overcoming complex technical challenges and continuously pushing
                the boundaries of what's possible in development.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements at bottom (consistent with Home) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: `linear-gradient(to top, ${COLORS.BACKGROUND_DEEP} 5%, transparent 100%)`,
          opacity: 0.7,
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default AboutG;
