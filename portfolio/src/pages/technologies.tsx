import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const tech = [
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    color: "bg-blue-900/30",
  },
  {
    name: "React Native",
    icon: <FaReact className="text-blue-400" />,
    color: "bg-blue-900/30",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    color: "bg-green-900/30",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400" />,
    color: "bg-green-900/30",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    color: "bg-gray-800/50",
  },
  {
    name: "JavaScript",
    icon: <div className="text-yellow-400 font-bold">JS</div>,
    color: "bg-yellow-900/30",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    color: "bg-blue-900/30",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    color: "bg-cyan-900/30",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    color: "bg-orange-900/30",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-purple-400" />,
    color: "bg-purple-900/30",
  },
  // Add more technologies as needed
];

function Technologies() {
  return (
    <div
      id="Skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          Tech Stack
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Technologies I work with regularly
        </motion.p>
      </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {tech.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl backdrop-blur-sm border border-gray-700 shadow-lg ${item.color} flex flex-col items-center gap-3 cursor-pointer hover:shadow-cyan-500/20 transition-all`}
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-lg font-medium text-white text-center">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-4">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Frontend Focus
            </h3>
            <p className="text-gray-300">
              Specializing in React and React Native development with extensive
              experience in building responsive, performant user interfaces
              using modern CSS frameworks like Tailwind.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Full Stack Capabilities
            </h3>
            <p className="text-gray-300">
              Proficient in the MERN stack (MongoDB, Express, React, Node.js)
              with experience building and deploying full-stack applications
              with RESTful APIs.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
