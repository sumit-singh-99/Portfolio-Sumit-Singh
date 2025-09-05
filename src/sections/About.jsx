import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    "Full-Stack Development (React, Node.js, Python, C++)",
    "Experience with Databases (MySQL, SQLite, PostgreSQL)",
    "Built Scalable Desktop & Web Applications",
    "Strong Problem-Solving & DSA Skills",
  ];

  const education = [
    { level: "B.Tech (CSE)", year: "2022 - 2026", score: "CGPA: 7.3" },
    { level: "12th (Science)", year: "2022", score: "74%" },
    { level: "10th", year: "2020", score: "90%" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center px-6 py-16 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Profile Photo (Sticky / Frozen while scrolling) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start sticky top-24 self-start"
        >
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-72 h-72 rounded-2xl object-cover shadow-lg border-4 border-indigo-500 hover:scale-105 transform transition duration-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’m <span className="font-semibold">Sumit Singh</span>, a
              passionate Software Engineer and final-year Computer Science
              student. I enjoy building scalable applications, modern user
              interfaces, and solving challenging problems with efficient code.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">
                    ✔
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <ul className="space-y-3">
              {education.map((edu, idx) => (
                <motion.li
                  key={idx}
                  className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="font-medium text-indigo-600 dark:text-indigo-400">
                    {edu.level}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {edu.year} — {edu.score}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
