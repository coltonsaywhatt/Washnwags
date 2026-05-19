"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Check, PawPrint } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  artisticServices,
  baselineServices,
  coastalExperiences,
  wellnessServices
} from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const tabs = [
  { id: "baseline", label: "Baseline Services", services: baselineServices },
  { id: "wellness", label: "Wellness Upgrades", services: wellnessServices },
  { id: "artistic", label: "Artistic Grooming", services: artisticServices },
  { id: "experiences", label: "Coastal Experiences", services: coastalExperiences }
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Services() {
  const [activeTab, setActiveTab] = useState<TabId>("baseline");

  const activeGroup = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab]
  );

  return (
    <section className="bg-warm-white/76 py-24 sm:py-32" id="services">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="show"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            The Spa &amp; Wellness Menu
          </motion.p>
          <motion.h2 className="section-heading mt-5" variants={fadeUp}>
            Every detail chosen for comfort, coat health, and calm.
          </motion.h2>
        </motion.div>

        <div
          aria-label="Service types"
          className="mx-auto mt-10 grid max-w-5xl gap-2 rounded-[28px] border border-sage/20 bg-cream/68 p-1.5 shadow-[0_10px_30px_rgba(44,44,44,0.05)] sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                aria-selected={isActive}
                className={[
                  "relative min-h-[54px] overflow-hidden rounded-full border px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
                  isActive
                    ? "border-sage bg-sage-dark text-white shadow-[0_16px_34px_rgba(37,20,95,0.22)]"
                    : "border-transparent bg-white/34 text-charcoal hover:border-sage/25 hover:bg-white/62 hover:text-sage-dark"
                ].join(" ")}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                type="button"
              >
                {isActive ? (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(135deg,rgba(129,113,216,0.96),rgba(37,20,95,0.98))]"
                    layoutId="service-tab-pill"
                    transition={{ duration: 0.42, ease: [0.19, 1, 0.22, 1] }}
                  />
                ) : null}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isActive ? (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/18">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                  ) : null}
                  <span>{tab.label}</span>
                </span>
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-1 block font-label text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/68"
                  >
                    Selected
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            animate="show"
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            exit={{ opacity: 0, y: 18 }}
            initial="hidden"
            key={activeTab}
            variants={staggerContainer}
          >
            {activeGroup.services.map((service) => (
              <motion.div key={service.name} variants={fadeUp}>
                <Card className="group flex h-full flex-col border-t-4 border-t-sage/70 bg-cream/74 p-6 transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-glow">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/12 text-sage-dark">
                    <PawPrint aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[clamp(1.45rem,2.4vw,2rem)] leading-tight text-charcoal">
                    {service.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <div className="mt-7">
                    <span className="inline-flex rounded-full bg-sage/14 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.14em] text-sage-dark">
                      {service.price}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center text-sm leading-7 text-muted">
          &#10024; Prices are starting rates - final cost varies by coat
          condition/type, age, temperament, customization, location, and
          requested add-ons.
        </p>

        {activeTab === "artistic" ? (
          <div className="mt-8 flex justify-center">
            <Button href="/artistic-grooming-color-design">
              View Artistic Grooming &amp; Color Design
            </Button>
          </div>
        ) : null}

        {activeTab === "experiences" ? (
          <div className="mt-8 flex justify-center">
            <Button href="/luxury-coastal-experiences">
              View Luxury Coastal Experiences
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
