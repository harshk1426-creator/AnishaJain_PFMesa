"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Closing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32"
      style={{ backgroundColor: "#1A1A1A" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-7xl md:text-[9rem] font-bold italic text-white leading-none mb-8"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Let's build this.
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-white/70 max-w-xl leading-relaxed mb-16"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          I'm Arpita Ambekar. I want to build the Swish brand from the inside.
        </motion.p>

        {/* Detail lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-3 items-center"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#F5A623", fontFamily: "var(--font-inter)" }}
          >
            Applying for: Brand Manager
          </p>
          <p
            className="text-base"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter)" }}
          >
            arpita@email.com
          </p>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 left-0 right-0 text-center text-xs tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-inter)" }}
      >
        Swish × Arpita Ambekar, 2024
      </motion.p>
    </section>
  );
}
