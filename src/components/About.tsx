import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-16 py-24 border-t border-[#e5e5e5]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-[#888] uppercase tracking-widest mb-12">
          About
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#333] text-xl font-light leading-relaxed">
              Founded and scaled a D2C Chikankari apparel brand to ₹1Cr+
              revenue before pursuing post-graduation at Mesa School of
              Business.
            </p>
            <p className="text-[#888] mt-6 leading-relaxed">
              She works across consumer brands — consulting on GTM strategy,
              growth, and brand positioning in fashion, FemTech, F&B, and home
              goods.
            </p>
          </div>

          {/* Drop public/images/about.jpg to replace placeholder */}
          <div className="relative aspect-[4/3] bg-[#f0f0f0] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#bbb] text-xs">about.jpg</span>
            </div>
            <ImageWithFallback
              src="/images/about.jpg"
              alt="About Anisha"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
