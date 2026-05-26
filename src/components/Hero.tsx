import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 pt-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#333] leading-tight">
            Anisha
            <br />
            Jain
          </h1>
          <p className="text-xl text-[#888] font-light leading-relaxed">
            Entrepreneur &<br />
            Brand Strategist
          </p>
          <a
            href="#work"
            className="mt-4 text-sm text-[#888] hover:text-[#333] transition-colors flex items-center gap-2 w-fit group"
          >
            View Work
            <span className="group-hover:translate-y-0.5 transition-transform inline-block">
              ↓
            </span>
          </a>
        </div>

        {/* Drop public/images/headshot.jpg to replace placeholder */}
        <div className="relative w-72 h-96 md:w-[380px] md:h-[500px] bg-[#f0f0f0] flex-shrink-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#bbb] text-xs">headshot.jpg</span>
          </div>
          <ImageWithFallback
            src="/images/headshot.jpg"
            alt="Anisha Jain"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
