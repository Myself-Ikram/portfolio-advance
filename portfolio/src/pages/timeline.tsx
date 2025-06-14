import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const timeline = [
  {
    year: "2019 - 2023",
    title: "Computer Science Education",
    desc: "Completed B.Tech in Computer Science Engineering from JPNCE. Participated in coding workshops, tech fests, and frontend training sessions.",
    icon: <FaGraduationCap className="text-lg" />,
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    tags: ["B.Tech", "CSE", "Workshops"],
  },
  {
    year: "2023 - 2024",
    title: "Junior Software Developer",
    desc: "Worked at TechTok4u Pvt Ltd (Remote). Developed the 'Instil' MERN & React Native app, digitalizing school management workflows for schools.",
    icon: <FaLaptopCode className="text-lg" />,
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    tags: ["MERN", "React Native", "Remote"],
  },
  {
    year: "2024 - Present",
    title: "Frontend Developer",
    desc: "Working at Aptapace Innovative Technologies (Onsite). Developed ReactJS/React Native apps for carpooling, doctor booking, and event management, integrating payments & APIs.",
    icon: <FaBriefcase className="text-lg" />,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    tags: ["ReactJS", "React Native", "API Integration"],
  },
];

function Timeline() {
  return (
    <div
      id="time"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
        >
          Professional Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-400"
        >
          My career milestones and educational background
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0"
          >
            {/* Date Section */}
            <div className="md:w-3/12">
              <div
                className={`${item.color} text-white p-4 rounded-xl shadow-lg h-full flex items-center`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-white/20 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.year}</p>
                    <p className="text-sm font-light opacity-90">
                      {item.title.split(" ")[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-9/12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-500/30 transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        idx === 0
                          ? "bg-indigo-900/30 text-indigo-300"
                          : idx === 1
                          ? "bg-cyan-900/30 text-cyan-300"
                          : "bg-purple-900/30 text-purple-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
