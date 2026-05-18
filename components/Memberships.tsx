"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Memberships() {
  return (
    <section className="bg-blush/72 py-24 sm:py-32">
      <motion.div
        className="section-shell grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]"
        initial="hidden"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.32 }}
        whileInView="show"
      >
        <div>
          <motion.p className="eyebrow text-charcoal/74" variants={fadeUp}>
            Recurring care, beautifully managed
          </motion.p>
          <motion.h2 className="section-heading mt-5" variants={fadeUp}>
            Exclusive Membership Programs
          </motion.h2>
          <motion.p className="mt-7 body-large text-charcoal/72" variants={fadeUp}>
            Choose from Pawfect Essentials, Pawsh Pup &amp; Wellness, Luxury Coat
            &amp; Wellness, and Platinum Pup VIP Wellness. Each monthly plan
            blends grooming consistency with member-only wellness perks.
          </motion.p>
        </div>

        <motion.a
          className="sparkle-field group relative block overflow-hidden rounded-[28px] border border-cream/48 bg-cream/54 p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cream/70"
          href="/memberships"
          variants={fadeUp}
        >
          <div className="relative z-10 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage/18 text-sage-dark">
                <CalendarHeart aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-none text-charcoal">
                View Memberships
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-muted">
                Monthly programs start at $175 and scale up to weekly
                full-service grooming, therapy rotations, and VIP wellness
                extras.
              </p>
            </div>
            <span className="inline-flex min-h-11 items-center justify-center self-start rounded-full bg-[var(--button-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-fg)] shadow-[0_14px_36px_var(--shadow-color)] transition duration-300 group-hover:bg-[var(--button-hover)] sm:self-center">
              Explore
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
