"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Positioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-6" style={{ backgroundColor: "#FAF7F2" }} ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.35em] uppercase mb-12"
          style={{ color: "#C8321A", fontFamily: "var(--font-inter)" }}
        >
          THE POSITIONING
        </motion.p>

        {/* Line 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold italic leading-tight mb-4"
          style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
        >
          Fast gets you the order.
        </motion.h2>

        {/* Line 2 */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl md:text-8xl font-bold italic leading-tight mb-16"
          style={{ fontFamily: "var(--font-fraunces)", color: "#F5A623" }}
        >
          Taste gets you the repeat.
        </motion.h2>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-sm tracking-widest uppercase text-black/40"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          — The Swish Brand Positioning
        </motion.p>
      </div>
    </section>
  );
}
