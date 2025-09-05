import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Tata Motors",
    duration: "Jun 2024 – Aug 2024",
    description:
      "Developed an Absenteeism Control Framework, automating attendance tracking and alert notifications via a desktop app.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2023 – Present",
    description:
      "Contributed to open-source projects focusing on React, Python automation, and API integrations.",
  },
  {
    role: "Student Developer",
    company: "College Projects",
    duration: "2021 – Present",
    description:
      "Built multiple academic and personal projects, including Legal Juri AI, Recipe Suggestor, and data visualization dashboards.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">💼 Experience</h2>

        <div className="relative border-l-4 border-indigo-600 dark:border-indigo-400">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-10 ml-6"
            >
              {/* Icon */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-600 dark:bg-indigo-400 text-white rounded-full">
                <FaBriefcase size={16} />
              </span>

              {/* Card */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
