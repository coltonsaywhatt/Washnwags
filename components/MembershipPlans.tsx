"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { brand, membershipPlans } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function MembershipPlans() {
  return (
    <section className="bg-blush/58 py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          className="grid gap-5 lg:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="show"
        >
          {membershipPlans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <Card className="flex h-full flex-col bg-cream/74 p-7">
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/16 text-sage-dark">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.55rem)] leading-none text-charcoal">
                  {plan.name}
                </h2>
                <div className="mt-5 flex items-end gap-2">
                  <p className="font-display text-[clamp(2.5rem,5vw,4.6rem)] leading-none text-sage-dark">
                    {plan.price}
                  </p>
                  <p className="pb-2 font-label text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                    {plan.cadence}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{plan.audience}</p>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.perks.map((perk) => (
                    <li className="flex gap-3 text-sm leading-6 text-charcoal" key={perk}>
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-none text-sage-dark"
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8" href={brand.bookingHref}>
                  Book Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
