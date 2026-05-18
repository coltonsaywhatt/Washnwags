"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { clipReveal, fadeUp } from "@/lib/animations";
import { generatedImages } from "@/lib/constants";

export function About() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="story">
      <div className="absolute right-4 top-12 hidden text-sage/30 lg:block">
        <BotanicalSprig />
      </div>

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative"
          initial="hidden"
          variants={clipReveal}
          viewport={{ once: true, amount: 0.34 }}
          whileInView="show"
        >
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[30px] border border-sage/24" />
          <div className="relative overflow-hidden rounded-[30px] shadow-petal">
            <Image
              alt="A cared-for dog resting calmly after a luxury mobile grooming appointment"
              className="h-full w-full object-cover"
              height={840}
              priority={false}
              sizes="(min-width: 1024px) 46vw, 92vw"
              src={generatedImages.groomerCare}
              width={900}
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:pl-8"
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
            Veterinary expertise meets luxury grooming
          </motion.p>
          <motion.h2
            className="section-heading mt-5 max-w-2xl text-charcoal"
            variants={fadeUp}
          >
            Where veterinary expertise meets luxury grooming.
          </motion.h2>
          <motion.p className="mt-7 body-large text-muted" variants={fadeUp}>
            At Wash &amp; Wags, grooming is more than just a haircut. It is an
            essential part of your pet&apos;s health and happiness. With over 10
            years of emergency veterinary medicine, our Fear Free practice
            prioritizes safety, comfort, and compassion.
          </motion.p>
          <motion.p className="mt-5 text-base leading-8 text-muted" variants={fadeUp}>
            The mobile spa model brings uninterrupted care directly to your
            door, reducing stress while giving each pet the time and attention
            needed for coat health, skin comfort, and a polished finish.
          </motion.p>
          <motion.blockquote
            className="mt-9 border-l border-sage/38 pl-6 font-display text-[clamp(1.6rem,3vw,2.35rem)] italic leading-tight text-sage-dark"
            variants={fadeUp}
          >
            &ldquo;Grooming is more than a haircut - it&apos;s essential
            care.&rdquo;
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

function BotanicalSprig() {
  return (
    <svg
      aria-hidden="true"
      className="h-64 w-64"
      fill="none"
      viewBox="0 0 180 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88 204C93 155 88 97 58 28"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M63 72C35 57 26 37 31 18c26 6 43 22 32 54ZM79 109C49 105 32 91 28 70c30-2 50 10 51 39ZM88 151c-31 1-51-11-58-32 31-6 54 5 58 32ZM83 84c28-11 38-31 35-52-27 4-45 20-35 52ZM91 127c30-6 45-23 47-44-29 0-49 15-47 44ZM93 170c29 2 50-10 58-30-30-7-54 4-58 30Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
