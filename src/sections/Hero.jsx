import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  // Particle Init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#6366f1" },
      links: {
        color: "#6366f1",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 2, outModes: { default: "bounce" } },
      number: { value: 40 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="z-10 grid md:grid-cols-2 items-center gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-indigo-600 dark:text-indigo-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m Sumit Singh
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Software Engineer • Full-Stack Developer • Problem Solver
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <a
              href="#projects"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1pnef8wwNuFsaEW-BZiBJC4JpgXUPEi-l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 sm:px-6 sm:py-3 border border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-50 dark:hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/images/profile.jpg"
            alt="Sumit Singh"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-indigo-600 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
