"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-[var(--font-space)] text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Ashwin</span>
          </h1>

          <p className="font-[var(--font-inter)] text-gray-400 mt-4 text-lg">
            Backend Developer | Java | Building real-world systems
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition">
            View Projects
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="p-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <Image
              src="/profile.png"
              alt="Ashwin"
              width={280}
              height={280}
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}