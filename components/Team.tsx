"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { teamMembers } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const profileIcons = [Sparkles, HeartHandshake, ShieldCheck, UsersRound];

export function Team() {
  return (
    <section className="relative overflow-hidden bg-warm-white/70 py-24 sm:py-32">
      <div className="absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-blush/18 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-[360px] w-[360px] rounded-full bg-sage/14 blur-3xl" />

      <div className="section-shell">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="show"
        >
          <div>
            <motion.p className="eyebrow" variants={fadeUp}>
              The people behind the scene
            </motion.p>
            <motion.h2 className="section-heading mt-5" variants={fadeUp}>
              Real hands, familiar faces, and pets who set the tone.
            </motion.h2>
            <motion.p className="mt-6 body-large text-muted" variants={fadeUp}>
              Wash &amp; Wags is still a close-knit team doing personal, mindful
              work. Every appointment reflects the belief that grooming should
              be calm, safe, beautifully finished, and supportive of whole-pet
              wellness.
            </motion.p>
            <motion.div className="mt-8 grid gap-3 sm:grid-cols-3" variants={fadeUp}>
              {[
                "Fear Free pace",
                "One-on-one mobile care",
                "Wellness-minded grooming"
              ].map((item) => (
                <div
                  className="rounded-[20px] border border-[var(--card-border)] bg-[var(--glass-bg)] px-4 py-4 text-sm font-semibold text-charcoal shadow-[0_14px_34px_var(--shadow-color)] backdrop-blur"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="relative min-h-[560px]" variants={fadeUp}>
            <div className="absolute inset-x-10 bottom-0 top-12 rounded-[42px] border border-[var(--card-border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.58),rgba(239,183,220,0.22),rgba(199,213,246,0.32))] shadow-petal backdrop-blur" />
            <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[600px] flex-col justify-center px-4 py-14 sm:px-8">
              <div className="w-fit rounded-full border border-sage/20 bg-cream/70 px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark shadow-card backdrop-blur">
                Small team, big care standard
              </div>

              <div className="mt-5 rounded-[34px] border border-[var(--card-border)] bg-cream/62 p-7 shadow-card backdrop-blur">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">
                  Care standards
                </p>
                <div className="mt-8 grid gap-4">
                  {[
                    "Veterinary-informed awareness",
                    "Fear Free handling pace",
                    "One-on-one mobile appointment flow",
                    "Polished spa finish with personal follow-through"
                  ].map((standard) => (
                    <div className="flex items-center gap-3" key={standard}>
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                        <Sparkles aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold leading-6 text-charcoal">
                        {standard}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-[var(--card-border)] bg-cream/72 p-5 shadow-card backdrop-blur">
                  <HeartHandshake aria-hidden="true" className="h-5 w-5 text-sage-dark" />
                  <p className="mt-3 font-display text-2xl leading-none text-charcoal">
                    Pet-led, not rushed.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Every groom is paced around comfort, temperament, and trust.
                  </p>
                </div>
                <div className="rounded-[28px] border border-[var(--card-border)] bg-cream/72 p-5 shadow-card backdrop-blur">
                  <UsersRound aria-hidden="true" className="h-5 w-5 text-sage-dark" />
                  <p className="mt-3 font-display text-2xl leading-none text-charcoal">
                    Local, personal, mindful.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Built for pets who deserve quieter grooming and families who
                    value trust at the door.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.18 }}
          whileInView="show"
        >
          {teamMembers.map((member, index) => {
            const Icon = profileIcons[index] ?? ShieldCheck;

            return (
              <motion.article key={member.name} variants={fadeUp}>
                <div className="group h-full overflow-hidden rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cream/70 via-blush/16 to-[#C7D5F6]/32">
                    <div className="absolute inset-x-8 bottom-8 h-28 rounded-full bg-sage/14 blur-2xl" />
                    <Image
                      alt={member.alt}
                      className="object-contain object-bottom transition duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      src={member.image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-none text-charcoal">
                      {member.name}
                    </h2>
                    <p className="mt-3 font-label text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">
                      {member.role}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-muted">{member.bio}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
