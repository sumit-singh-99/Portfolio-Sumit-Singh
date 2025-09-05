import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Absentee Manager App",
    description:
      "A full-stack desktop app for attendance management, automated alerts, and analytics.",
    image: "/projects/absentee.png",
    github: "https://github.com/yourusername/absentee-manager",
    demo: "#",
  },
  {
    title: "Recipe Suggestor",
    description:
      "A React + Supabase powered app that suggests recipes with saved favorites.",
    image: "/projects/recipe.png",
    github: "https://github.com/yourusername/recipe-suggestor",
    demo: "#",
  },
  {
    title: "Legal Juri AI",
    description:
      "AI-powered legal research & drafting system using RAG and LLMs.",
    image: "/projects/legaljuri.png",
    github: "https://github.com/yourusername/legal-juri-ai",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">🚀 Projects</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
