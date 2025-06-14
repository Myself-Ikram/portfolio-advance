import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const tabs = ["Client", "Personal"];

const clientProjects = [
  {
    id: 1,
    name: "1T4 – Carpooling App",
    desc: "Ride booking with Google Maps integration, Aadhaar KYC, and license verification features.",
    tech: ["React Native", "Firebase", "Google Maps API", "Aadhaar API"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.carpool1t4",
    type: "mobile",
  },
  {
    id: 2,
    name: "BookUrAppointment",
    desc: "Doctor booking platform with analytics dashboard, time slot management, payment settlements & notifications.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.labourlaw",
    type: "mobile",
  },
  {
    id: 3,
    name: "IRIA2026",
    desc: "International doctor event app with registration system, analytics dashboard, and speaker management tools.",
    tech: ["React Native", "Firebase", "Data Visualization"],
    link: "https://play.google.com/store/apps/details?id=com.aptapace.iria",
    type: "mobile",
  },
  {
    id: 4,
    name: "SaveFarmer",
    desc: "Agricultural marketplace platform for land, livestock & farming equipment sales.",
    tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    link: "https://play.google.com/store/apps/details?id=com.upendra105.Save_Farmers",
    type: "mobile",
  },
  {
    id: 5,
    name: "RaoosAstro",
    desc: "Astrology platform with consultation booking system and e-commerce functionality.",
    tech: ["MERN Stack", "JWT Auth", "Payment Integration"],
    link: "https://raoosastro.com",
    type: "web",
  },
];

const personalProjects = [
  {
    id: 1,
    name: "Coffee Store App",
    desc: "Mobile app with cart system, order tracking, animated transitions, and persistent storage.",
    tech: ["React Native", "Context API", "AsyncStorage"],
    link: "https://github.com/Myself-Ikram/CoffeeStore",
    type: "mobile",
    github: "https://github.com/Myself-Ikram/task_management_mobile",
  },
  {
    id: 2,
    name: "Task Management App",
    desc: "Login-based task management system with user authentication and data persistence.",
    tech: ["React Native", "Firebase Auth", "Firestore"],
    link: "https://github.com/Myself-Ikram/task_management_mobile",
    type: "mobile",
    github: "https://github.com/Myself-Ikram/task_management_mobile",
  },
  {
    id: 3,
    name: "Quiz Application",
    desc: "Role-based quiz platform with real-time scoring, admin dashboard, and JWT authentication.",
    tech: ["MERN Stack", "JWT Auth", "Real-time Updates"],
    link: "https://github.com/Myself-Ikram/Quiz-Application",
    type: "web",
    github: "https://github.com/Myself-Ikram/Quiz-Application",
  },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);
  const projects = activeTab === 0 ? clientProjects : personalProjects;

  return (
    <div
      id="Projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          My Portfolio
        </h1>
        <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A collection of my professional and personal development projects
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gray-800 rounded-xl p-1 border border-gray-700 shadow-lg">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === idx
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
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
  );
}

const ProjectCard = ({ project, idx, isPersonal }: any) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-xl hover:shadow-cyan-500/10 transition-all h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Project Icon Header */}
      <div
        className={`p-6 pb-0 ${
          project.type === "mobile" ? "bg-cyan-900/20" : "bg-purple-900/20"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`p-3 rounded-lg ${
              project.type === "mobile"
                ? "bg-cyan-500/20 text-cyan-400"
                : "bg-purple-500/20 text-purple-400"
            }`}
          >
            {project.type === "mobile" ? (
              <FaMobileAlt className="text-2xl" />
            ) : (
              <FaGlobe className="text-2xl" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              <span
                className={
                  project.type === "mobile"
                    ? "text-cyan-400"
                    : "text-purple-400"
                }
              >
                {idx + 1}.
              </span>{" "}
              {project.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {project.type === "mobile" &&
                project.link.includes("play.google.com") && (
                  <SiGoogleplay className="text-sm text-green-400" />
                )}
              <span className="text-xs text-gray-400">
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
        <p className="text-gray-300 mb-4">{project.desc}</p>

        {/* Tech Stack */}
        <div className="mt-auto mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">
            TECH STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: any, i: number) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded bg-gray-700/50 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-sm"
          >
            <FaExternalLinkAlt />
            {project.type === "mobile" ? "View App" : "Visit Site"}
          </a>

          {isPersonal && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all text-sm"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
