"use client";

import { motion } from "framer-motion";

export default function Positioning() {
  return (
    <section className="bg-[#FAF7F2] py-40 md:py-56 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#C8321A] text-sm font-semibold tracking-[0.3em] uppercase mb-16"
        >
          The Positioning
        </motion.p>

        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold text-[#1A1A1A] leading-tight"
          >
            Fast gets you
            <br />
            the order.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold text-[#C8321A] italic leading-tight"
          >
            Taste gets you
            <br />
            the repeat.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-[#1A1A1A]/40 text-sm tracking-[0.3em] uppercase"
        >
          — The Swish Brand Positioning
        </motion.p>

        {/* Supporting image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 rounded-3xl overflow-hidden aspect-[16/7] max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1400&q=80"
            alt="Fresh delicious food"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(1.2) brightness(0.9)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
