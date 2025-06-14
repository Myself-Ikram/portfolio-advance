import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RiLightbulbFlashLine } from "react-icons/ri";

// Updated color palette
const COLORS = {
  PRIMARY: "#0ea5e9", // Sky blue
  SECONDARY: "#06b6d4", // Cyan
  ACCENT: "#8b5cf6", // Violet
  DARK: "#0f172a", // Navy
  LIGHT: "#f1f5f9", // Light gray
  TEXT: "#e2e8f0", // Light text
};

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1220] to-[#1e293b] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 120 + 20,
              height: Math.random() * 120 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: COLORS.ACCENT,
              opacity: 0.05,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
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

      {/* Header */}
      <motion.div
        className="fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <RiLightbulbFlashLine className="text-2xl text-cyan-400" />
            <a href="#">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Ikram
              </span>
            </a>
          </motion.div>

          <div className="hidden md:flex gap-6">
            {["About", "Projects", "Skills"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item}`}
                className="text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={
                "mailto:ikrammohdabdul@gmail.com?subject=Let's Connect&body=Hi, I have seen your portfolio and would love to connect with you"
              }
            >
              Get in Touch
            </a>
          </motion.button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Intro section */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-0.5 w-12 bg-cyan-400" />
              <span className="text-cyan-400 font-medium tracking-wider">
                HELLO, I'M
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold"
            >
              <h1 className="leading-tight">
                MOHD ABDUL <span className="text-cyan-400">IKRAM</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl h-14"
            >
              <TypeAnimation
                sequence={[
                  "React Developer",
                  1500,
                  "MERN Stack Developer",
                  1500,
                  "React Native Developer",
                  1500,
                  "UI/UX Enthusiast",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor
                className="text-cyan-300 font-medium"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-slate-300 max-w-lg leading-relaxed"
            >
              <p>
                I build modern, responsive web and mobile applications with
                cutting-edge technologies. Passionate about creating intuitive
                user experiences and scalable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#Projects">
                <motion.button
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium flex items-center gap-2 text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode />
                  View Projects
                </motion.button>
              </a>
              <a href="/resume.pdf" download>
                <motion.button
                  className="px-6 py-3 rounded-lg bg-slate-800 text-white font-medium border border-slate-700 text-xs"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8"
            >
              <div className="flex gap-6">
                {[
                  {
                    icon: <FaLinkedin size={24} />,
                    url: "https://www.linkedin.com/in/mohd-abdul-ikram-388410223",
                    color: "#0A66C2",
                  },
                  {
                    icon: <FaGithub size={24} />,
                    url: "https://github.com/Myself-ikram",
                    color: "#FFFFFF",
                  },
                  {
                    icon: <FaInstagram size={24} />,
                    url: "https://www.instagram.com/shadabqhadri?igsh=cW9paWw5cjJpczkz",
                    color: "#E4405F",
                  },
                  {
                    icon: <HiMail size={24} />,
                    url: "mailto:ikrammohdabdul@gmail.com?subject=Let's Connect&body=Hi, I have seen your portfolio and would love to connect with you!",
                    color: "#EA4335",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile image section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl border-4 border-cyan-400/20 shadow-2xl shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                  <img
                    src="pro.jpg"
                    // src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Profile"
                    className="relative z-10 w-full max-w-md object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-3 -left-2 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-0"
                animate={{ y: [0, -10, 0] }}
                style={{ zIndex: 10 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-bold text-slate-900">2+ Years</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-2 w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 z-0"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                style={{ zIndex: 10 }}
              >
                <span className="font-bold text-white text-sm text-center">
                  10+ Projects
                </span>
              </motion.div>

              {/* Dots decoration */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="w-3 h-3 rounded-full bg-cyan-400"
                    animate={{
                      y: [0, idx % 2 === 0 ? -8 : -4, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent z-0" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-cyan-400 flex justify-center p-1">
            <motion.div
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ y: [0, 20] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
        <span className=" text-cyan-400 text-sm mt-4 ">Scroll Down</span>
      </motion.div>
    </div>
  );
}

export default Home;
