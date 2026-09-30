export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#top"
          className="text-xl font-bold"
        >
          <span className="text-white">Shruti</span>
          <span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#education"
            className="hover:text-cyan-400 transition"
          >
            Education
          </a>


          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}