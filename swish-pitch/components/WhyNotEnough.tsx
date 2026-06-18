"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Flame, Award } from "lucide-react";

const cards = [
  {
    title: "Speed Only",
    Icon: Zap,
    desc: "Gets the first order. Loses the second.",
    bg: "#C8321A",
    text: "#ffffff",
    iconColor: "#ffffff",
  },
  {
    title: "Taste Only",
    Icon: Flame,
    desc: "Loves the food. Can't wait 45 minutes.",
    bg: "#FEF3C7",
    text: "#1A1A1A",
    iconColor: "#F5A623",
  },
  {
    title: "Swish = Both",
    Icon: Award,
    desc: "Fast enough to order. Good enough to repeat.",
    bg: "#1A1A1A",
    text: "#ffffff",
    iconColor: "#F5A623",
  },
];

export default function WhyNotEnough() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6" style={{ backgroundColor: "#FAF7F2" }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.35em] uppercase mb-6"
          style={{ color: "#C8321A", fontFamily: "var(--font-inter)" }}
        >
          THE GAP
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold italic mb-8 leading-tight"
          style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
        >
          Speed Opens the Door.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed mb-16 max-w-2xl"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
        >
          Every QC food brand is screaming '10 minutes.' No one is screaming 'delicious.' That's the untapped territory. Speed cracks the door open. Taste makes them stay.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ backgroundColor: card.bg }}
            >
              <card.Icon
                size={32}
                style={{ color: card.iconColor }}
              />
              <h3
                className="text-2xl font-bold"
                style={{ color: card.text, fontFamily: "var(--font-fraunces)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed opacity-80"
                style={{ color: card.text, fontFamily: "var(--font-inter)" }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
