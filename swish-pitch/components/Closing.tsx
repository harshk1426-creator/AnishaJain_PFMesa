"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Closing() {
  return (
    <section className="relative bg-[#1A1A1A] py-40 md:py-56 px-6 overflow-hidden">
      {/* Background food image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.5)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#F5A623] text-sm font-semibold tracking-[0.3em] uppercase mb-12"
        >
          The Pitch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(4rem,11vw,10rem)] font-bold text-white leading-none mb-12 tracking-tight"
        >
          Let's build
          <br />
          <span className="text-[#C8321A] italic">this.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-xl md:text-2xl max-w-xl leading-relaxed mb-16"
        >
          I'm Arpita Ambekar. I want to build the Swish brand from the inside —
          turning a delivery promise into a brand people actually love.
        </motion.p>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-3">
            <div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
                Applying for
              </p>
              <p className="text-white font-semibold text-lg">
                Brand Manager — Swish
              </p>
            </div>
            <div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
                Name
              </p>
              <p className="text-white font-semibold text-lg">Arpita Ambekar</p>
            </div>
            <div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
                Contact
              </p>
              <p className="text-[#F5A623] font-semibold text-lg">
                arpita@email.com
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 bg-[#C8321A] text-white px-8 py-4 rounded-full font-semibold text-lg w-fit cursor-pointer group hover:bg-[#a82515] transition-colors duration-200"
          >
            <span>Start the conversation</span>
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
            />
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-white/20 text-xs tracking-[0.2em] uppercase"
        >
          Order Already. — A brand pitch deck by Arpita Ambekar
        </motion.p>
      </div>
    </section>
  );
}
