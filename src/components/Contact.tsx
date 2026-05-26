export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 md:px-16 py-24 border-t border-[#e5e5e5]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-[#888] uppercase tracking-widest mb-12">
          Contact
        </p>
        <a
          href="mailto:anisha_jain@pg26.mesaschool.co"
          className="text-2xl md:text-4xl font-light text-[#333] hover:text-[#888] transition-colors block w-fit"
        >
          anisha_jain@pg26.mesaschool.co
        </a>
        <div className="flex gap-8 mt-8 text-sm text-[#888]">
          <a
            href="https://www.linkedin.com/in/anishajain15051999/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#333] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#333] transition-colors"
          >
            Resume
          </a>
        </div>
        <p className="mt-20 text-xs text-[#ccc]">© 2025 Anisha Jain</p>
      </div>
    </section>
  );
}
