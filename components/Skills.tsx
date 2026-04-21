"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Java", level: "80%" },
    { name: "Spring Boot", level: "70%" },
    { name: "MySQL", level: "75%" },
    { name: "React", level: "60%" },
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <motion.h2
        className="text-3xl font-semibold mb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="mb-2">{skill.name}</p>

            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: skill.level }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}