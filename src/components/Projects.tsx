import ProjectCard from "./ProjectCard";

const featured = [
  {
    title: "Ekdor",
    category: "Founder · D2C Chikankari Apparel",
    description:
      "Scaled to ₹1Cr+ revenue, 5,000+ customers, 85K Instagram community.",
    image: "/images/ekdor-cover.jpg",
    href: "/ekdor",
    linkLabel: "Case Study",
  },
  {
    title: "Zora",
    category: "D2C · Sustainable Kitchenware",
    description:
      "₹3L+ revenue in 60 days. Website, content, social, and offline stalls.",
    image: "/images/zora.jpg",
    href: "#", // Replace with project URL
  },
  {
    title: "Nua",
    category: "Consulting · FemTech",
    description:
      "Diagnosed adoption barriers via 116 surveys and 40 interviews. GTM strategy for first-time trials.",
    image: "/images/nua.jpg",
    href: "#", // Replace with project URL
  },
  {
    title: "Villain",
    category: "Strategy · Perfume Brand",
    description:
      "Product strategy, 4 SKU recommendations, channel, pricing, and brand positioning.",
    image: "/images/villain.jpg",
    href: "#", // Replace with project URL
  },
];

const brandSprints = [
  {
    title: "Knot",
    category: "Brand Strategy",
    description: "GTM & positioning.",
    image: "/images/knot.jpg",
    href: "#",
  },
  {
    title: "Qua",
    category: "Brand Strategy",
    description: "GTM & positioning.",
    image: "/images/qua.jpg",
    href: "#",
  },
  {
    title: "Luna",
    category: "Brand Strategy",
    description: "GTM & positioning.",
    image: "/images/luna.jpg",
    href: "#",
  },
  {
    title: "Truva",
    category: "Brand Strategy",
    description: "GTM & positioning.",
    image: "/images/truva.jpg",
    href: "#",
  },
  {
    title: "Lahori Jeera",
    category: "Brand Strategy",
    description: "GTM & positioning.",
    image: "/images/lahori.jpg",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-8 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-[#888] uppercase tracking-widest mb-12">
          Work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {featured.map((p) => (
            <ProjectCard key={p.title} {...p} featured />
          ))}
        </div>

        <div className="mt-24">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-8">
            Brand Projects
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
            {brandSprints.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
