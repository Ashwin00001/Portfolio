"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 z-50 bg-black text-white">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <button
        onClick={() => {
          document.body.classList.toggle("bg-white");
          document.body.classList.toggle("text-black");
          setDark(!dark);
        }}
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}