import Lottie from "lottie-react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import about from "../lotties/aboutt.json";

function About() {
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
    { name: "Express", icon: <SiExpress className="text-gray-400 text-xl" /> },
    {
      name: "UI/UX Design",
      icon: <FaCode className="text-purple-400 text-xl" />,
    },
  ];

  const experiences = [
    {
      title: "Healthcare Booking Platform",
      description: "Implemented doctor scheduling and Aadhaar KYC integration",
    },
    {
      title: "Carpooling App",
      description: "Developed real-time ride matching and payment integration",
    },
    {
      title: "Astrology E-commerce",
      description: "Built custom CMS and payment gateway integrations",
    },
  ];

  return (
    <div
      id="About"
      className="min-h-screen bg-gradient-to-br from-[#0c1220] to-[#1e293b] text-white overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
              opacity: 0.05,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Title with animation */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            About Me
          </h2>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Full Stack Developer specializing in MERN stack and React Native
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Animation and Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-slate-700 shadow-xl shadow-cyan-500/10">
                  <Lottie animationData={about} className="w-full max-w-md" />
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                className="absolute -top-3 -right-2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-0"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ zIndex: 10 }}
              >
                <FaLaptopCode className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 z-0"
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
                style={{ zIndex: 10 }}
              >
                <FaGraduationCap className="text-2xl text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Introduction */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <FaCode className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300">
                  Professional Summary
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-sm lg:text-base leading-relaxed">
                <p>
                  I'm a{" "}
                  <strong className="text-cyan-300">
                    Full Stack Developer
                  </strong>{" "}
                  with{" "}
                  <strong className="text-cyan-300">
                    2 years of experience
                  </strong>{" "}
                  building modern web apps using the{" "}
                  <strong className="text-purple-300">MERN stack</strong> and
                  mobile apps with{" "}
                  <strong className="text-purple-300">React Native</strong>.
                </p>

                <p>
                  I specialize in crafting intuitive UIs, managing state
                  efficiently, integrating APIs and payment gateways, and
                  deploying apps to Play Store, App Store, and VPS.
                </p>

                <p>
                  I earned my B.Tech in Computer Science Engineering from{" "}
                  <strong className="text-cyan-300">
                    Jaya Prakash Narayana College of Engineering
                  </strong>
                  , where I actively contributed to tech fests and coding
                  workshops.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-purple-500/20">
                  <FaTools className="text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-purple-300">
                  Skills & Expertise
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-slate-800 rounded-full">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-pink-500/20">
                  <FaMobileAlt className="text-pink-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-pink-300">
                  Key Projects
                </h3>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      {index !== experiences.length - 1 && (
                        <div className="h-full w-0.5 bg-cyan-400/30 mx-auto mt-1" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-cyan-300">{exp.title}</h4>
                      <p className="text-slate-300 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Passion Section */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <FaLaptopCode className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300">My Passion</h3>
              </div>

              <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                I'm passionate about{" "}
                <strong className="text-cyan-300">UI/UX design</strong>,{" "}
                <strong className="text-cyan-300">performance tuning</strong>,
                and{" "}
                <strong className="text-cyan-300">
                  building scalable solutions
                </strong>{" "}
                that make a meaningful impact. I thrive on solving complex
                problems and creating seamless user experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent z-0" />
    </div>
  );
}

export default About;
