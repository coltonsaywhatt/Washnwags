"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, Home, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const valuePoints = [
  {
    title: "Focused appointments",
    description:
      "Your pet has the space, time, and attention to settle in without a busy salon floor or rotating kennel schedule.",
    icon: Leaf
  },
  {
    title: "Trained eyes",
    description:
      "Veterinary-informed handling helps us notice comfort signals, coat changes, and stress cues before they become bigger problems.",
    icon: HeartPulse
  },
  {
    title: "Doorstep calm",
    description:
      "The spa comes to your driveway, cutting out car rides and giving your pet a quieter path from appointment to fresh finish.",
    icon: Home
  }
];

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-warm-white pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-sage/10" />
      <div className="pointer-events-none absolute right-[-180px] top-14 h-[360px] w-[360px] rounded-full border border-sage/14 bg-sage/8 sm:right-[-120px] sm:h-[460px] sm:w-[460px]" />
      <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
        <div>
          <p className="eyebrow">About Wash &amp; Wags</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.85rem,6.2vw,6.4rem)] font-semibold leading-[0.98] text-charcoal text-balance">
            A calmer way to groom at home.
          </h1>
        </div>
        <div className="max-w-xl lg:pb-2">
          <p className="body-large text-muted">
            A mobile spa for pets who need patience, familiar surroundings, and
            a polished finish without the salon rush.
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-sage/15 pt-5 text-sm leading-6 text-sage-dark">
            <Sparkles aria-hidden="true" className="h-4 w-4 flex-none text-gold-light" />
            <span>One-on-one care, thoughtful handling, and a quieter groom.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      className="relative overflow-hidden bg-cream/55 py-16 sm:py-24"
      id="story"
    >
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <motion.div
          className="relative mx-auto w-full max-w-[680px] lg:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_28px_80px_rgba(37,20,95,0.13)] sm:rounded-[30px] lg:aspect-[0.86/1]">
            <Image
              alt="Wash and Wags mobile grooming spa interior with a grooming table and playful pup photo backdrop"
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              src="/about/mobile-spa-interior.jpg"
              unoptimized
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:pl-2"
          initial="hidden"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          viewport={{ once: true, amount: 0.28 }}
          whileInView="show"
        >
          <motion.p className="eyebrow flex items-center gap-2" variants={fadeUp}>
            <Leaf aria-hidden="true" className="h-4 w-4" />
            Calm care, polished results
          </motion.p>
          <motion.h2
            className="section-heading mt-5 max-w-2xl text-charcoal"
            variants={fadeUp}
          >
            Designed for pets who need a gentler pace.
          </motion.h2>
          <motion.p className="mt-7 body-large text-muted" variants={fadeUp}>
            Wash &amp; Wags was created for families who want grooming to feel
            personal, steady, and thoughtfully handled from start to finish.
            Each appointment is paced around your pet&apos;s coat, comfort, and
            confidence.
          </motion.p>
          <motion.p className="mt-5 text-base leading-8 text-muted" variants={fadeUp}>
            Instead of moving dogs through a crowded salon routine, we bring a
            prepared mobile setup to you. That means fewer transitions, less
            noise, and a groomer who can stay present with the pet in front of
            them.
          </motion.p>
          <motion.div
            className="mt-8 rounded-[8px] border border-sage/16 bg-white/72 p-5 shadow-[0_16px_44px_rgba(37,20,95,0.08)] backdrop-blur"
            variants={fadeUp}
          >
            <div className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-base leading-8 text-muted">
                Our veterinary-informed background supports safer handling for
                anxious, senior, sensitive, and first-time grooming pets.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="section-shell mt-14 grid gap-4 md:grid-cols-3">
        {valuePoints.map((point) => {
          const Icon = point.icon;

          return (
            <motion.article
              className="rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-6 shadow-card backdrop-blur"
              initial="hidden"
              key={point.title}
              variants={fadeUp}
              viewport={{ once: true, amount: 0.24 }}
              whileInView="show"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-[clamp(1.65rem,2.7vw,2.3rem)] leading-none text-charcoal">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {point.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
