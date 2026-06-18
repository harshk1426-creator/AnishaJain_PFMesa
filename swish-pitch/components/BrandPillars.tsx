"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Flame, Shield } from "lucide-react";

const pillars = [
  {
    number: "01",
    Icon: Zap,
    title: "Speed",
    desc: "10 min, no compromise. The promise that starts the relationship.",
  },
  {
    number: "02",
    Icon: Flame,
    title: "Taste",
    desc: "Hot. Fresh. Real food. The promise that keeps it going.",
  },
  {
    number: "03",
    Icon: Shield,
    title: "Confidence",
    desc: "Order without second-guessing. That's the Swish feeling.",
  },
];

export default function BrandPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" style={{ backgroundColor: "#FFFFFF" }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-16"
          style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
        >
          Brand Pillars
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="border border-black/10 rounded-2xl p-8 relative overflow-hidden cursor-default group"
            >
              {/* Large number background */}
              <span
                className="absolute -top-4 -right-2 text-9xl font-bold opacity-5 select-none"
                style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
              >
                {pillar.number}
              </span>

              {/* Icon */}
              <pillar.Icon
                size={28}
                className="mb-6"
                style={{ color: "#C8321A" }}
              />

              {/* Title */}
              <h3
                className="text-3xl font-bold italic mb-4"
                style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
              >
                {pillar.title}
              </h3>

              {/* Desc */}
              <p
                className="text-base leading-relaxed text-black/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
