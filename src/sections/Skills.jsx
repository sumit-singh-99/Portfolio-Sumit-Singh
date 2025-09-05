import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
