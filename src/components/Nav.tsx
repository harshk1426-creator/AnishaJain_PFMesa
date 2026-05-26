"use client";

export default function Nav({ backLink = false }: { backLink?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 bg-white/90 backdrop-blur-sm border-b border-[#e5e5e5]">
      {backLink ? (
        <a
          href="/"
          className="text-sm text-[#888] hover:text-[#333] transition-colors flex items-center gap-2"
        >
          ← Back
        </a>
      ) : (
        <span className="text-sm tracking-widest uppercase text-[#333] font-medium">
          Anisha Jain
        </span>
      )}
      <div className="flex gap-8 text-sm text-[#888]">
        {backLink ? (
          <a href="/" className="hover:text-[#333] transition-colors">
            Portfolio
          </a>
        ) : (
          <>
            <a href="#work" className="hover:text-[#333] transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-[#333] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#333] transition-colors">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#333] transition-colors"
            >
              Resume
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
