import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const projectsRef = useRef(null);
  const educationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: eduProgress } = useScroll({
    target: educationRef,
    offset: ["start end", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const eduY = useTransform(eduProgress, [0, 1], [120, 0]);
  const eduOpacity = useTransform(eduProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-32 pb-32">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* INTRO */}
        <section className="text-center space-y-6 mt-8 sm:mt-12">
          <h1 className="text-3xl sm:text-5xl font-bold">About Me</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            I’m an engineering student passionate about building intelligent
            systems at the intersection of software, hardware, and automation.
          </p>
        </section>

        {/* INTERESTS */}
        <section className="text-center space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Interests</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Computer Vision",
              "Machine Learning",
              "Automation",
              "Robotics",
              "UAV Systems",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 rounded-full border text-sm sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="text-center space-y-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "Machine Learning",
              "Deep Learning",
              "Robotics",
              "Graphic Designing",
              "Video Editing",
            ].map((skill) => (
              <div
                key={skill}
                className="
                  h-20 sm:h-24
                  flex items-center justify-center
                  border rounded-2xl
                  bg-white
                  text-base sm:text-lg font-medium
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section ref={projectsRef}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-24 text-center">
            Projects
          </h2>

          <div className="flex flex-col gap-28">

            {/* PROJECT 1 */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="
                w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl
                mx-auto border rounded-3xl
                p-6 sm:p-8 md:p-10 lg:p-12 bg-white
              "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                Live Heading Detector
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Computer vision based heading detection system.
              </p>
              <a
                href="https://github.com/samarAli-7/ARROW_HEADING_FINDER_AND_CLASSIFIER"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View on GitHub
              </a>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div
              style={{ x: rightX, opacity }}
              className="
                w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl
                mx-auto border rounded-3xl
                p-6 sm:p-8 md:p-10 lg:p-12 bg-white
              "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                Visual Rescue System
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Vision-based rescue system for UAS operations.
              </p>
              <a
                href="https://github.com/samarAli-7/UAS-rescue-task"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View on GitHub
              </a>
            </motion.div>

            {/* PROJECT 3 */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="
                w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl
                mx-auto border rounded-3xl
                p-6 sm:p-8 md:p-10 lg:p-12 bg-white
              "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                SIH 2025 Prototype
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Prototype developed for Smart India Hackathon 2025.
              </p>
              <a
                href="https://github.com/samarAli-7/sih-2025-prototype"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View on GitHub
              </a>
            </motion.div>

            {/* PROJECT 4 */}
            <motion.div
              style={{ x: rightX, opacity }}
              className="
                w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl
                mx-auto border rounded-3xl
                p-6 sm:p-8 md:p-10 lg:p-12 bg-white
              "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                Drone Prep
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                UAV preparation involving flight planning, sensors, and autonomy.
              </p>
              <a
                href="https://uasdtu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                UAS DTU Website
              </a>
            </motion.div>

            {/* PROJECT 5 */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="
                w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl
                mx-auto border rounded-3xl
                p-6 sm:p-8 md:p-10 lg:p-12 bg-white
              "
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                Rover Prep
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                Ground rover development focusing on mobility and automation.
              </p>
              <a
                href="https://uasdtu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                UAS DTU Website
              </a>
            </motion.div>

          </div>
        </section>

        {/* EDUCATION (END) */}
        <section ref={educationRef} className="text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>

          <motion.div
            style={{ y: eduY, opacity: eduOpacity }}
            className="
              max-w-3xl mx-auto
              border rounded-3xl
              p-8 sm:p-12
              bg-white
            "
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Bachelor of Technology
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              First-year Engineering Student <br />
              Delhi Technological University (DTU)

            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}

export default About;
