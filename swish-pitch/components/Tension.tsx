"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function Tension() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.2 },
    }),
  };

  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#FAF7F2" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="text-5xl md:text-7xl font-bold italic mb-12 leading-tight"
          style={{ fontFamily: "var(--font-fraunces)", color: "#1A1A1A" }}
        >
          The Hesitation Moment.
        </motion.h2>

        <motion.blockquote
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="border-l-4 pl-8 mb-12 py-2"
          style={{ borderColor: "#C8321A" }}
        >
          <p
            className="text-2xl md:text-3xl leading-relaxed"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
          >
            Will it come late?<br />
            Will it come cold?<br />
            Is it even worth ordering?
          </p>
        </motion.blockquote>

        <motion.p
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="text-2xl md:text-3xl font-bold leading-snug"
          style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
        >
          That hesitation is the gap.{" "}
          <span style={{ color: "#C8321A" }}>And it's worth billions.</span>
        </motion.p>
      </div>
    </section>
  );
}
