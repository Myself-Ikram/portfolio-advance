import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RiLightbulbFlashLine } from "react-icons/ri";

// Modern & Dynamic Color Palette
const COLORS = {
  BACKGROUND_DEEP: "#08080D", // Almost black, for ultimate contrast
  BACKGROUND_ACCENT: "#15151F", // Slightly lighter for subtle depth
  GLOW_PRIMARY: "#3b82f6", // Vibrant Blue (e.g., Tailwind's blue-500)
  GLOW_SECONDARY: "#a855f7", // Intense Violet (e.g., Tailwind's violet-500)
  TEXT_MAIN: "#F8F8F8", // Bright white for primary text
  TEXT_MUTED: "#A0A0B0", // Soft gray for secondary text/paragraphs
  BORDER_LIGHT: "#2A2A38", // Subtle border for definition
};

function Home() {
  return (
    <div
      className="min-h-screen text-white overflow-hidden relative font-sans antialiased" // Added antialiased for smoother fonts
      style={{ background: COLORS.BACKGROUND_DEEP, color: COLORS.TEXT_MAIN }}
    >
      {/* Background Orbital Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 30, // Larger elements
              height: Math.random() * 100 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 2 === 0 ? COLORS.GLOW_PRIMARY : COLORS.GLOW_SECONDARY,
              opacity: 0.03, // Very subtle, just a hint of color
              filter: "blur(30px)", // More blur for a softer glow
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10, // Slower, more ethereal movement
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Subtle radial gradient from center */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${COLORS.GLOW_PRIMARY}08, transparent 70%)`,
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800" // Stronger blur, subtle border
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <RiLightbulbFlashLine className="text-3xl text-blue-400" />{" "}
            {/* Slightly larger icon */}
            <a href="#" className="flex items-center">
              <span
                className="font-extrabold text-2xl bg-clip-text text-transparent tracking-wide"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                }}
              >
                Ikram
              </span>
            </a>
          </motion.div>

          <div className="hidden md:flex gap-10">
            {" "}
            {/* Increased gap for more breathing room */}
            {["About", "Portfolio", "Technologies", "Timeline"].map(
              (
                item,
                index // Aligned with your App.tsx screens
              ) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`} // Ensure href matches section IDs
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative font-medium text-lg group"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                    }}
                  />
                </motion.a>
              )
            )}
          </div>

          <motion.button
            className="px-6 py-2 rounded-full font-semibold relative overflow-hidden group shadow-lg"
            style={{
              background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${COLORS.GLOW_PRIMARY}60`,
            }} // Add glow on hover
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
            <a
              href={
                "mailto:ikrammohdabdul@gmail.com?subject=Let's Connect&body=Hi, I have seen your portfolio and would love to connect with you"
              }
              className="relative z-10 text-white"
            >
              Contact Me
            </a>
          </motion.button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-6 pt-48 pb-24 relative z-10">
        {" "}
        {/* Adjusted padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {" "}
          {/* Increased gap */}
          {/* Intro section */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div
                className="h-1 w-20 rounded-full" // Thicker, rounded line
                style={{
                  background: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                }}
              />
              <span className="font-medium tracking-widest text-base uppercase text-gray-400">
                Hi there, I'm
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-extrabold leading-tight"
            >
              <h1
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.TEXT_MAIN}, ${COLORS.TEXT_MAIN})`,
                }}
              >
                MOHD ABDUL{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                  }}
                  className="bg-clip-text text-transparent"
                >
                  IKRAM
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl h-20 font-semibold" // Increased height for TypeAnimation
            >
              <TypeAnimation
                sequence={[
                  "a React Developer",
                  1500,
                  "a MERN Stack Developer",
                  1500,
                  "a React Native Developer",
                  1500,
                  "a UI/UX Enthusiast",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
                cursor
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="max-w-xl leading-relaxed text-lg text-gray-400"
              style={{ color: COLORS.TEXT_MUTED }}
            >
              <p>
                I thrive on crafting robust, scalable, and user-centric web and
                mobile applications. Passionate about bringing ideas to life
                with clean code and intuitive design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex flex-wrap gap-6 mt-6"
            >
              <a href="#portfolio">
                <motion.button
                  className="px-8 py-3 rounded-xl font-medium flex items-center gap-3 text-base relative overflow-hidden group shadow-lg"
                  style={{
                    background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 25px ${COLORS.GLOW_PRIMARY}60`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
                  <FaCode className="relative z-10 text-white" />
                  <span className="relative z-10 text-white">
                    Explore My Work
                  </span>
                </motion.button>
              </a>
              <a href="/resume.pdf" download>
                <motion.button
                  className="px-8 py-3 rounded-xl font-medium border relative overflow-hidden group text-base"
                  style={{
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BACKGROUND_ACCENT,
                    color: COLORS.TEXT_MAIN,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: COLORS.GLOW_PRIMARY,
                    boxShadow: `0 0 15px ${COLORS.GLOW_PRIMARY}40`,
                    background: COLORS.BACKGROUND_DEEP,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300"></span>
                  <span className="relative z-10">Download Resume</span>
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="mt-10"
            >
              <div className="flex gap-7">
                {" "}
                {/* Slightly larger gap */}
                {[
                  {
                    icon: <FaLinkedin size={26} />, // Larger icons
                    url: "https://www.linkedin.com/in/mohd-abdul-ikram-388410223",
                    color: "#0A66C2",
                  },
                  {
                    icon: <FaGithub size={26} />,
                    url: "https://github.com/Myself-ikram",
                    color: COLORS.TEXT_MAIN, // Match text color for consistent theme
                  },
                  {
                    icon: <FaInstagram size={26} />,
                    url: "https://www.instagram.com/shadabqhadri?igsh=cW9paWw5cjJpczkz",
                    color: "#E4405F",
                  },
                  {
                    icon: <HiMail size={26} />,
                    url: "mailto:ikrammohdabdul@gmail.com?subject=Let's Connect&body=Hi, I have seen your portfolio and would love to connect with you!",
                    color: "#EA4335",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="p-4 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out" // Larger padding
                    style={{
                      backgroundColor: COLORS.BACKGROUND_ACCENT,
                      border: `1px solid ${COLORS.BORDER_LIGHT}`,
                      color: social.color,
                    }}
                    whileHover={{
                      y: -8, // More pronounced lift
                      scale: 1.15, // More scale
                      backgroundColor: social.url.includes("linkedin")
                        ? social.color
                        : social.url.includes("github")
                        ? COLORS.GLOW_PRIMARY
                        : social.url.includes("instagram")
                        ? social.color
                        : social.url.includes("mailto")
                        ? social.color
                        : COLORS.GLOW_PRIMARY, // Specific hover colors or primary glow
                      color: "white", // Text color on hover
                      boxShadow: `0 0 15px ${social.color}60`, // Glow matching icon color
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Profile image section */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative rounded-full p-2" // Circular container for the image
              style={{
                background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                boxShadow: `0 0 60px ${COLORS.GLOW_PRIMARY}60, 0 0 30px ${COLORS.GLOW_SECONDARY}40`, // More intense, multi-color glow
              }}
            >
              <div
                className="relative overflow-hidden rounded-full border-4" // Image inside a circle
                style={{
                  borderColor: COLORS.BACKGROUND_DEEP, // Dark border to separate from glow
                }}
              >
                <img
                  src="pro.jpg"
                  alt="Profile"
                  className="relative z-10 w-full max-w-sm h-auto object-cover rounded-full transform hover:scale-105 transition-transform duration-500" // Circular image, slight zoom on hover
                  style={{ aspectRatio: "1/1" }} // Ensure it's a perfect circle
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 rounded-full flex items-center justify-center text-xl font-bold text-black"
                style={{
                  background: `linear-gradient(45deg, ${COLORS.GLOW_PRIMARY}, ${COLORS.GLOW_SECONDARY})`,
                  boxShadow: `0 0 20px ${COLORS.GLOW_PRIMARY}40`,
                  zIndex: 20, // Higher z-index to be on top
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                2+ Years
              </motion.div>

              {/* Floating projects badge */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full flex items-center justify-center text-base text-center font-bold text-black p-2"
                style={{
                  background: `linear-gradient(45deg, ${COLORS.GLOW_SECONDARY}, ${COLORS.GLOW_PRIMARY})`,
                  boxShadow: `0 0 20px ${COLORS.GLOW_SECONDARY}40`,
                  zIndex: 20, // Higher z-index
                }}
                animate={{ y: [0, 15, 0], rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                10+ Projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }} // More movement
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-9 h-14 rounded-full border-2 flex justify-center p-1.5" // Slightly larger scroll indicator
            style={{ borderColor: COLORS.GLOW_PRIMARY }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: COLORS.GLOW_SECONDARY }}
              animate={{ y: [0, 22] }} // Match larger height
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        <span
          className="text-sm mt-4 tracking-wider"
          style={{ color: COLORS.TEXT_MUTED }}
        >
          Scroll Down
        </span>
      </motion.div>
    </div>
  );
}

export default Home;
