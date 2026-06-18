"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function SwishTruth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#1A1A1A" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            <p
              className="text-5xl md:text-6xl font-bold italic leading-tight text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              10 minutes gets you the first order.
            </p>
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            <p
              className="text-5xl md:text-6xl font-bold italic leading-tight"
              style={{ fontFamily: "var(--font-fraunces)", color: "#F5A623" }}
            >
              Great taste gets you the tenth.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="border-white/20 mb-16"
        />

        {/* Pull quote */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="text-center"
        >
          <p
            className="text-3xl md:text-5xl italic font-bold text-white/80 mb-6 leading-snug"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            "Fast gets you the order.<br />
            Taste gets you the repeat."
          </p>
          <p
            className="text-base tracking-widest uppercase font-semibold"
            style={{ fontFamily: "var(--font-inter)", color: "#F5A623" }}
          >
            — The Swish Truth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
