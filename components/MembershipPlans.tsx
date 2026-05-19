"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { brand, membershipPlans } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function MembershipPlans() {
  return (
    <section className="relative isolate overflow-hidden bg-blush/48 py-20 sm:py-28">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sage/18 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-cream/50 blur-3xl" />
      <div className="section-shell">
        <motion.div
          className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="show"
        >
          {membershipPlans.map((plan, index) => {
            const isVip = index === membershipPlans.length - 1;

            return (
              <motion.div key={plan.name} variants={fadeUp}>
                <Card
                  data-membership-card={plan.name}
                  className={[
                    "group relative flex h-full min-h-[590px] flex-col overflow-hidden rounded-[8px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow",
                    isVip
                      ? "border-sage/40 bg-[linear-gradient(160deg,rgba(251,248,255,0.92),rgba(215,195,255,0.46))]"
                      : "bg-cream/78"
                  ].join(" ")}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sage via-blush to-powder-blue" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/16 text-sage-dark">
                      <Sparkles aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-sage/20 bg-[var(--glass-bg)] px-3 py-1.5 font-label text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-sage-dark">
                      {index === 0 ? "Essential" : isVip ? "VIP" : `Tier 0${index + 1}`}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-display text-[clamp(1.35rem,1.8vw,1.9rem)] leading-none text-charcoal">
                      {plan.name}
                    </h2>
                    <div className="mt-5 flex items-end gap-2">
                      <p className="font-display text-[clamp(2.35rem,3.2vw,3.6rem)] leading-none text-sage-dark">
                        {plan.price}
                      </p>
                      <p className="pb-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                        {plan.cadence}
                      </p>
                    </div>
                    <p className="mt-5 min-h-[78px] text-[0.82rem] leading-6 text-muted">
                      {plan.audience}
                    </p>
                  </div>

                  <div className="my-6 h-px bg-sage/18" />

                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.perks.map((perk) => (
                      <li className="flex gap-2.5 text-[0.79rem] leading-5 text-charcoal" key={perk}>
                        <Check
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 flex-none text-sage-dark"
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-7 w-full" href={brand.bookingHref}>
                    Book Now
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative z-10 mt-8 rounded-[8px] border border-sage/16 bg-cream/64 p-5 text-center text-sm leading-7 text-muted shadow-card backdrop-blur">
          Membership pricing is designed around consistent care, predictable
          wellness support, and the time needed to groom pets safely without
          rushing.
        </div>
      </div>
    </section>
  );
}
