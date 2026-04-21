"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Medi-vision",
      description: "System to manage visitor entries efficiently.",
      tech: "Java, MySQL",
      github: "https://github.com/Ashwin00001/MediVision.git",
      demo: "#",
    },
    {
      title: "Customer Churn Analysis",
      description: "Personalized diet planning application.",
      tech: "Node.js, Express",
      github: "https://github.com/Ashwin00001/Customer-Churn-Analysis.git",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="p-6 rounded-xl border border-gray-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-3">
              {project.description}
            </p>

            <p className="text-sm text-gray-500">
              {project.tech}
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-gray-300"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-gray-300"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}