"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Pizza",
    rotate: "-2deg",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "Food spread",
    rotate: "1deg",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    alt: "Healthy bowl",
    rotate: "-1deg",
  },
];

export default function HeroCampaign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#C8321A" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-7xl md:text-[10rem] font-bold italic text-white text-center leading-none mb-16"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Order Already.
        </motion.h2>

        {/* Rationale */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto text-center leading-relaxed mb-24"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The insight is simple: the customer doesn't hesitate because they don't want food. They hesitate because they don't trust the experience. 'Order Already' is permission. It's Swish saying: we've got this. The food is hot, it's fast, and it's worth it. Stop second-guessing. Order already.
        </motion.p>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: img.rotate }
                  : {}
              }
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
              className="bg-white p-4 pb-14 shadow-2xl"
              style={{ transform: `rotate(${img.rotate})` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 object-cover"
              />
              <p
                className="mt-4 text-center text-base font-bold italic"
                style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
              >
                Order Already.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
