"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-black text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm Ashwin!!
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 z-10 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Backend Developer specializing in Java, building scalable systems.
      </motion.p>

      <motion.div className="mt-8 flex gap-4 z-10">
  <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
    View Projects
  </button>

  <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
    Contact Me
  </button>

  <a
    href="/resume.pdf"
    target="_blank"
    className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
  >
    Resume
  </a>
</motion.div>
    </section>
  );
}