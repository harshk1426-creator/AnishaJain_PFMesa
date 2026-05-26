import Nav from "@/components/Nav";
import ImageWithFallback from "@/components/ImageWithFallback";

function Img({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`bg-[#f0f0f0] overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-[#bbb] text-xs">{src.split("/").pop()}</span>
      </div>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />
    </div>
  );
}

const metrics = [
  { value: "₹1Cr+", label: "Revenue" },
  { value: "65%", label: "Gross Margin" },
  { value: "5,000+", label: "Paying Customers" },
  { value: "85K+", label: "Instagram Followers" },
  { value: "45%", label: "Repeat Revenue" },
  { value: "~4× ROAS", label: "Meta Ad Returns" },
];

export default function EkdorPage() {
  return (
    <main>
      <Nav backLink />

      {/* Hero */}
      <section className="pt-20">
        <Img
          src="/images/ekdor-hero.jpg"
          alt="Ekdor — D2C Chikankari Brand"
          className="w-full aspect-[16/7]"
        />
      </section>

      {/* Title */}
      <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto">
        <p className="text-xs text-[#888] uppercase tracking-widest mb-4">
          Founder · D2C Apparel · 2021–2024
        </p>
        <h1 className="text-4xl md:text-6xl font-light text-[#333] leading-tight mb-6">
          Ekdor
        </h1>
        <p className="text-xl text-[#888] font-light max-w-2xl leading-relaxed">
          A vertically integrated D2C women&apos;s apparel brand in the niche
          category of Chikankari — built from scratch, scaled to ₹1Cr+ revenue.
        </p>
      </section>

      {/* Metrics */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-12">
            Results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl md:text-3xl font-light text-[#333]">
                  {m.value}
                </p>
                <p className="text-xs text-[#888] mt-2 leading-relaxed">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product images row */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Img
              src="/images/ekdor-1.jpg"
              alt="Ekdor product"
              className="aspect-[3/4]"
            />
            <Img
              src="/images/ekdor-2.jpg"
              alt="Ekdor product"
              className="aspect-[3/4] md:mt-12"
            />
            <Img
              src="/images/ekdor-3.jpg"
              alt="Ekdor product"
              className="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* Business & Growth */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-8">
              Business & Growth
            </p>
            <ul className="space-y-5 text-[#333]">
              <li className="leading-relaxed">
                Scaled to{" "}
                <span className="text-[#555]">₹1Cr+ revenue</span> with 65%
                gross margins through disciplined pricing and inventory control.
              </li>
              <li className="leading-relaxed">
                Acquired <span className="text-[#555]">5,000+ paying customers</span>{" "}
                organically (AOV ~₹1,650), fulfilling ~3,600 orders/year with
                ~80% revenue from organic channels.
              </li>
              <li className="leading-relaxed">
                Built a repeat-led business — 45% revenue from returning
                customers, 60% concentrated in{" "}
                <span className="text-[#555]">5 hero SKUs</span>.
              </li>
            </ul>
          </div>
          <Img
            src="/images/ekdor-4.jpg"
            alt="Ekdor business"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Operations */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Img
            src="/images/ekdor-ops.jpg"
            alt="Operations"
            className="aspect-[4/3]"
          />
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-8">
              Operations & Supply Chain
            </p>
            <ul className="space-y-5 text-[#333]">
              <li className="leading-relaxed">
                Managed a multi-vendor supply chain across{" "}
                <span className="text-[#555]">4 vendors</span> with 25–45 day
                lead-time variability, POs, and payment terms.
              </li>
              <li className="leading-relaxed">
                Designed a hybrid logistics setup across 3PL (WareIQ), local
                couriers, and in-house runners — 1–2 days Delhi/NCR, 3–4 days
                pan-India at{" "}
                <span className="text-[#555]">~7–8% logistics cost</span>.
              </li>
              <li className="leading-relaxed">
                Controlled returns (~21%) in a 65% COD business via
                IVR/WhatsApp verification and direct customer intervention.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-8">
              Marketing & Growth
            </p>
            <ul className="space-y-5 text-[#333]">
              <li className="leading-relaxed">
                Built an{" "}
                <span className="text-[#555]">85K+ Instagram community</span>{" "}
                driving brand resonance in a low-trust apparel category.
              </li>
              <li className="leading-relaxed">
                Managed ₹1L/month Meta ad spends, consistently delivering{" "}
                <span className="text-[#555]">~4× ROAS</span> (peaks of 6×)
                through creative-led A/B testing.
              </li>
              <li className="leading-relaxed">
                Improved cart-to-order conversion by ~15% via checkout
                optimization and targeted abandonment recovery.
              </li>
              <li className="leading-relaxed">
                Used content and tactical pricing to minimise dead stock to{" "}
                <span className="text-[#555]">21% of total inventory</span>.
              </li>
            </ul>
          </div>
          <Img
            src="/images/ekdor-social.jpg"
            alt="Ekdor social media"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Sakhi Campaign */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-12">
            Creative Campaign
          </p>

          <Img
            src="/images/sakhi-hero.jpg"
            alt="Sakhi Campaign"
            className="w-full aspect-[16/7] mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#333]">
              Sakhi
            </h2>
            <p className="text-[#888] leading-relaxed">
              Shot with real women in Old Delhi. The choice of real women — not
              models — and a culturally loaded location signals a deliberate
              brand philosophy: that chikankari belongs to real women, real
              lives, real spaces. The campaign prioritises emotional resonance
              and cultural authenticity over aspirational distance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Img
              src="/images/sakhi-1.jpg"
              alt="Sakhi campaign"
              className="aspect-[3/4]"
            />
            <Img
              src="/images/sakhi-2.jpg"
              alt="Sakhi campaign"
              className="aspect-[3/4] md:mt-8"
            />
            <Img
              src="/images/sakhi-3.jpg"
              alt="Sakhi campaign"
              className="aspect-[3/4]"
            />
            <Img
              src="/images/sakhi-4.jpg"
              alt="Sakhi campaign"
              className="aspect-[3/4] md:mt-8"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 md:px-16 py-16 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-[#888] uppercase tracking-widest mb-8">
              Team & Leadership
            </p>
            <p className="text-[#333] text-lg font-light leading-relaxed">
              Built and retained a full-time cross-functional team of 8 —
              personally training early hires by involving them in pricing,
              launch, and growth decisions, and gradually transferring ownership
              as the business scaled.
            </p>
          </div>
          <Img
            src="/images/ekdor-team.jpg"
            alt="Ekdor team"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-8 md:px-16 py-24 border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-[#888] font-light">Want to know more?</p>
          <div className="flex gap-8 text-sm text-[#888]">
            <a
              href="mailto:anisha_jain@pg26.mesaschool.co"
              className="hover:text-[#333] transition-colors"
            >
              Get in touch
            </a>
            <a href="/" className="hover:text-[#333] transition-colors">
              ← Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
