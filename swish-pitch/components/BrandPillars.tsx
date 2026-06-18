"use client";

import { motion } from "framer-motion";
import { Zap, Flame, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Zap,
    title: "Speed",
    tagline: "10 min, no compromise.",
    desc: "The promise that starts the relationship. Fast enough to believe. Real enough to trust.",
  },
  {
    num: "02",
    icon: Flame,
    title: "Taste",
    tagline: "Hot. Fresh. Real food.",
    desc: "The promise that keeps the relationship going. Not meal-kit quality. Actual delicious food.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Confidence",
    tagline: "Order without second-guessing.",
    desc: "That's the Swish feeling. You already know it'll be good. That's the brand doing its job.",
  },
];

export default function BrandPillars() {
  return (
    <section className="bg-[#1A1A1A] py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F5A623] text-sm font-semibold tracking-[0.3em] uppercase mb-12"
        >
          Brand Pillars
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-20"
        >
          Three things
          <br />
          <span className="text-[#F5A623] italic">Swish never compromises.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 group hover:border-[#C8321A]/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl font-bold text-white/10">
                  {p.num}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#C8321A]/20 flex items-center justify-center group-hover:bg-[#C8321A]/40 transition-colors duration-300">
                  <p.icon size={22} className="text-[#F5A623]" />
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-[#F5A623] font-semibold text-sm mb-4">
                {p.tagline}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
