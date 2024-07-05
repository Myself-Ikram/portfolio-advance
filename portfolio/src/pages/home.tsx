import Header from "../components/header";
import { COLORS } from "../constants/constant";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";

function Home() {
  return (
    <div className="h-screen">
      <div
        className="h-full md:h-1/2 lg:h-full"
        style={{ backgroundColor: COLORS.DARKBLUE }}
      >
        <Header />
        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-2 p-4 h-5/6 ">
          {/* Intro */}
          <div className="text-white md:col-span-3 lg:col-span-1 gap-9 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="text-2xl font-bold"
            >
              <p>Hi, I am</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 3 }}
              className="text-3xl md:text-4xl lg:text-5xl"
            >
              <p
                className="font-bold flex"
                style={
                  {
                    //   fontSize: { xs: 28, sm: 54, md: 36, lg: 50 },
                  }
                }
              >
                MOHD ABDUL
                <motion.p
                  animate={{ color: COLORS.GREEN }}
                  transition={{ delay: 5, duration: 0.5 }}
                >
                  &nbsp;IKRAM
                </motion.p>
              </p>
            </motion.div>
            <motion.div
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 6 }}
            >
              <TypeAnimation
                sequence={[
                  "ReactJs Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "React Native Developer",
                  1000,
                ]}
                speed={75} // Faster typing speed
                repeat={Infinity}
                cursor
                style={{ color: "white" }}
              />
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 4, duration: 7 }}
            >
              <div
                className="flex content-between gap-5 md:gap-10 mt-10"
                // sx={{
                //   display: "flex",
                //   justifyContent: "space-between",
                //   width: { xs: "75vw", sm: "40vw" },
                //   marginY: { xs: "10%" },
                // }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/mohd-abdul-ikram-388410223"
                  style={{ color: COLORS.GREEN, opacity: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedin size={25} />
                </motion.a>
                <p style={{ color: COLORS.RED }}>|</p>
                <motion.a
                  href="https://github.com/Myself-ikram"
                  style={{ color: COLORS.GREEN, opacity: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaGithub size={25} />
                </motion.a>
                <p style={{ color: COLORS.RED }}>|</p>

                <motion.a
                  href="#"
                  style={{ color: COLORS.GREEN, opacity: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram size={25} />
                </motion.a>
                <p style={{ color: COLORS.RED }}>|</p>

                <motion.a
                  href="#"
                  style={{ color: COLORS.GREEN, opacity: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebook size={25} />
                </motion.a>
                <p style={{ color: COLORS.RED }}>|</p>

                <motion.a
                  href="#contact"
                  style={{ color: COLORS.GREEN, opacity: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <ImMail2 size={25} />
                </motion.a>
              </div>
            </motion.div>
          </div>
          {/* Icon */}
          <div className="text-white md:col-span-2 lg:col-span-1 flex justify-center items-end z-0 ">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{ opacity: 1, scale: 0.75, y: 30 }}
              transition={{ duration: 2 }}
              whileTap={{ y: -1500 }}
              className="mask mask-hexagon"
              style={{ height: 200, width: 200, backgroundColor: COLORS.GREEN }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
