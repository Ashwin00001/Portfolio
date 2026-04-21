export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <p className="mb-8 text-gray-400">
        Interested in working together? Let's connect !!
      </p>

      {/* Buttons container */}
      <div className="flex justify-center gap-4 flex-wrap">
        
        <a
          href="mailto:ashwinsai2005@gmail.com"
          className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Email Me
        </a>

        <a
          href="https://github.com/Ashwin00001"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}