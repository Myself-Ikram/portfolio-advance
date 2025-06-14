import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

// Re-using the Modern & Dynamic Color Palette
const COLORS = {
  BACKGROUND_DEEP: "#08080D", // Almost black, for ultimate contrast
  BACKGROUND_ACCENT: "#15151F", // Slightly lighter charcoal for elements
  GLOW_PRIMARY: "#3b82f6", // Vibrant Blue
  GLOW_SECONDARY: "#a855f7", // Intense Violet
  TEXT_MAIN: "#F8F8F8", // Bright white for primary text
  TEXT_MUTED: "#A0A0B0", // Soft gray for secondary text/paragraphs
  BORDER_LIGHT: "#2A2A38", // Subtle border for definition
};

const tabs = ["Client Projects", "Personal Projects"]; // More descriptive tab names

const clientProjects = [
  {
    id: 1,
    name: "1T4 – Carpooling App",
    desc: "A comprehensive ride-sharing mobile application with integrated Google Maps, Aadhaar KYC verification, and driver license authentication.",
    tech: ["React Native", "Firebase", "Google Maps API", "Aadhaar API"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.carpool1t4",
    type: "mobile",
  },
  {
    id: 2,
    name: "BookUrAppointment",
    desc: "An intuitive doctor appointment booking platform featuring a robust analytics dashboard, flexible time slot management, secure payment settlements, and real-time notifications.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.labourlaw",
    type: "mobile",
  },
  {
    id: 3,
    name: "IRIA2026",
    desc: "An event management mobile application for an international medical conference, including a seamless registration system, detailed analytics dashboard, and comprehensive speaker management tools.",
    tech: ["React Native", "Firebase", "Data Visualization"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.iria",
    type: "mobile",
  },
  {
    id: 4,
    name: "SaveFarmer",
    desc: "A dedicated agricultural marketplace facilitating the buying and selling of land, livestock, and essential farming equipment, integrated with secure payment gateways.",
    tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    link: "https://play.google.com/store/apps/details?id=com.upendra105.Save_Farmers",
    type: "mobile",
  },
  {
    id: 5,
    name: "RaoosAstro",
    desc: "A fully-featured astrology platform offering online consultation booking and a robust e-commerce section for astrological products, secured with JWT authentication.",
    tech: ["MERN Stack", "JWT Auth", "Payment Integration"],
    link: "https://raoosastro.com",
    type: "web",
  },
];

const personalProjects = [
  {
    id: 1,
    name: "Coffee Store App",
    desc: "A minimalist mobile coffee ordering application featuring a smooth cart system, real-time order tracking, fluid animated transitions, and persistent local storage for user preferences.",
    tech: ["React Native", "Context API", "AsyncStorage", "Animation"],
    link: "https://github.com/Myself-Ikram/CoffeeStore",
    type: "mobile",
    github: "https://github.com/Myself-Ikram/CoffeeStore",
  },
  {
    id: 2,
    name: "Task Management App",
    desc: "A secure, login-based task management system with comprehensive user authentication via Firebase and real-time data persistence powered by Firestore, enabling efficient task organization.",
    tech: ["React Native", "Firebase Auth", "Firestore", "Redux"], // Added Redux
    link: "https://github.com/Myself-Ikram/task_management_mobile",
    type: "mobile",
    github: "https://github.com/Myself-Ikram/task_management_mobile",
  },
  {
    id: 3,
    name: "Quiz Application",
    desc: "A dynamic, role-based quiz platform with instant real-time scoring, an intuitive admin dashboard for content management, and robust user authentication secured with JWT.",
    tech: ["MERN Stack", "JWT Auth", "Socket.io", "Role-Based Access"], // Added Socket.io, Role-Based Access
    link: "https://github.com/Myself-Ikram/Quiz-Application",
    type: "web",
    github: "https://github.com/Myself-Ikram/Quiz-Application",
  },
];

function PortfolioG() {
  const [activeTab, setActiveTab] = useState(0);
  const projects = activeTab === 0 ? clientProjects : personalProjects;

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
      id="portfolio" // Changed to lowercase for consistency with Home nav
      className="min-h-screen relative font-sans antialiased py-20 md:py-24" // Consistent padding
      style={{ background: COLORS.BACKGROUND_DEEP, color: COLORS.TEXT_MAIN }}
    >
      {/* Background Orbital Elements (consistent with Home & About) */}
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
          className="mb-16 text-center"
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
            My Portfolio
          </motion.h2>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full"
            style={{
              background: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-xl max-w-3xl mx-auto"
            style={{ color: COLORS.TEXT_MUTED }}
            variants={itemVariants}
          >
            Showcasing a diverse collection of my professional client work and
            impactful personal development projects.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-16" // Increased margin bottom
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants} // Applied itemVariants for tab animation
        >
          <div
            className="rounded-full p-1 flex shadow-lg" // More rounded, no internal border
            style={{
              backgroundColor: COLORS.BACKGROUND_ACCENT,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            {tabs.map((tab, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group`} // Larger padding
                style={{
                  color:
                    activeTab === idx ? COLORS.TEXT_MAIN : COLORS.TEXT_MUTED,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === idx && (
                  <motion.span
                    layoutId="underline" // For smooth animation between tabs
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                      zIndex: -1, // Keep behind text
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" // Increased gap
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants} // Use section variants for grid container
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              isPersonal={activeTab === 1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project, idx, isPersonal }: any) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border h-full flex flex-col transition-all duration-300 ease-in-out" // More rounded, smooth transition
      style={{
        backgroundColor: COLORS.BACKGROUND_ACCENT, // Card background
        borderColor: COLORS.BORDER_LIGHT,
        boxShadow: `0 0 15px ${COLORS.BACKGROUND_ACCENT}30`, // Subtle initial shadow
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03, // Slight lift on hover
        boxShadow: `0 0 30px ${
          project.type === "mobile"
            ? COLORS.GLOW_PRIMARY
            : COLORS.GLOW_SECONDARY
        }60, 0 0 15px ${
          project.type === "mobile"
            ? COLORS.GLOW_SECONDARY
            : COLORS.GLOW_PRIMARY
        }40`, // Dual glow on hover
        borderColor:
          project.type === "mobile"
            ? COLORS.GLOW_PRIMARY
            : COLORS.GLOW_SECONDARY, // Border color changes on hover
      }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Project Icon Header */}
      <div
        className={`p-6 pb-4 rounded-t-3xl`} // Padding and rounded top
        style={{
          background: `linear-gradient(to right, ${
            project.type === "mobile"
              ? COLORS.GLOW_PRIMARY
              : COLORS.GLOW_SECONDARY
          }08, transparent)`, // Subtle gradient background
        }}
      >
        <div className="flex items-center gap-5 mb-4">
          <div
            className={`p-4 rounded-full flex items-center justify-center shadow-md`} // Larger icon container
            style={{
              background: `linear-gradient(45deg, ${
                project.type === "mobile"
                  ? COLORS.GLOW_PRIMARY
                  : COLORS.GLOW_SECONDARY
              }, ${
                project.type === "mobile"
                  ? COLORS.GLOW_SECONDARY
                  : COLORS.GLOW_PRIMARY
              })`,
              boxShadow: `0 0 15px ${
                project.type === "mobile"
                  ? COLORS.GLOW_PRIMARY
                  : COLORS.GLOW_SECONDARY
              }40`, // Icon glow
            }}
          >
            {project.type === "mobile" ? (
              <FaMobileAlt className="text-2xl text-white" />
            ) : (
              <FaGlobe className="text-2xl text-white" />
            )}
          </div>
          <div className="flex-1">
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: COLORS.TEXT_MAIN }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${
                    project.type === "mobile"
                      ? COLORS.GLOW_PRIMARY
                      : COLORS.GLOW_SECONDARY
                  }, ${
                    project.type === "mobile"
                      ? COLORS.GLOW_SECONDARY
                      : COLORS.GLOW_PRIMARY
                  })`,
                }}
              >
                {idx + 1}.{" "}
              </span>
              {project.name}
            </h3>
            <div className="flex items-center gap-3">
              {project.type === "mobile" &&
                project.link.includes("play.google.com") && (
                  <SiGoogleplay
                    className="text-base"
                    style={{ color: COLORS.GLOW_PRIMARY }}
                  />
                )}
              <span
                className="text-sm tracking-wide"
                style={{ color: COLORS.TEXT_MUTED }}
              >
                {project.type === "mobile"
                  ? "Mobile Application"
                  : "Web Application"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <p
          className="mb-6 text-base leading-relaxed flex-grow"
          style={{ color: COLORS.TEXT_MUTED }}
        >
          {project.desc}
        </p>{" "}
        {/* Increased margin, flex-grow */}
        {/* Tech Stack */}
        <div className="mt-auto mb-6">
          {" "}
          {/* Ensure tech stack stays at bottom */}
          <h4
            className="text-sm font-semibold uppercase mb-3"
            style={{ color: COLORS.GLOW_PRIMARY }}
          >
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: any, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full font-medium" // Rounded full for pills, padding
                style={{
                  backgroundColor: COLORS.BACKGROUND_DEEP, // Darker background for tech pills
                  color: COLORS.TEXT_MUTED,
                  border: `1px solid ${COLORS.BORDER_LIGHT}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-4 mt-auto">
          {" "}
          {/* Aligned to bottom */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium relative overflow-hidden group shadow-lg text-sm"
            style={{
              background: `linear-gradient(45deg, ${
                project.type === "mobile"
                  ? COLORS.GLOW_PRIMARY
                  : COLORS.GLOW_SECONDARY
              }, ${
                project.type === "mobile"
                  ? COLORS.GLOW_SECONDARY
                  : COLORS.GLOW_PRIMARY
              })`,
              color: COLORS.TEXT_MAIN,
            }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
            <FaExternalLinkAlt className="relative z-10" />
            <span className="relative z-10">
              {project.type === "mobile" ? "View App" : "Visit Site"}
            </span>
          </a>
          {isPersonal && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium relative overflow-hidden group text-sm"
              style={{
                backgroundColor: COLORS.BACKGROUND_DEEP,
                color: COLORS.TEXT_MAIN,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
              <FaGithub className="relative z-10" />
              <span className="relative z-10">Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioG;
