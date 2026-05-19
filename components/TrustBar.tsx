"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function TrustBar() {
  return (
    <section
      aria-label="Wash and Wags credentials"
      className="border-y border-sage/15 bg-cream/82 py-8"
      id="trust"
    >
      <motion.div
        animate="show"
        className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        variants={staggerContainer}
      >
        {trustStats.map((stat, index) => (
          <motion.div
            className="relative flex min-h-16 items-center justify-center px-4 text-center"
            key={stat}
            variants={fadeUp}
          >
            {index > 0 ? (
              <span className="absolute left-0 hidden h-10 w-px bg-sage/28 lg:block" />
            ) : null}
            <p className="font-label text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-charcoal">
              {stat}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
