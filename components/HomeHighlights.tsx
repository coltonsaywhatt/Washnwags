"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Images,
  Scissors,
  Sparkles,
  UsersRound
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { homeRoutes } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const icons = [HeartHandshake, UsersRound, Scissors, Images, Sparkles];

export function HomeHighlights() {
  return (
    <section className="bg-warm-white/68 py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          className="mb-12 max-w-4xl"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="show"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Explore Wash &amp; Wags
          </motion.p>
          <motion.h2 className="section-heading mt-5" variants={fadeUp}>
            A complete mobile wellness experience, now organized around the way
            families choose care.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="show"
        >
          {homeRoutes.map((route, index) => {
            const Icon = icons[index] ?? HeartHandshake;

            return (
              <motion.a href={route.href} key={route.href} variants={fadeUp}>
                <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-glow">
                  <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[clamp(1.65rem,3vw,2.25rem)] leading-none text-charcoal">
                    {route.label}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {route.description}
                  </p>
                  <span className="mt-7 inline-flex items-center text-sm font-semibold text-sage-dark">
                    Visit page
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </Card>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
