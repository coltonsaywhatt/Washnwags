import type { Metadata } from "next";
import { ArrowRight, HeartHandshake, Scissors, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/PageIntro";
import { brand } from "@/lib/constants";

const roles = [
  {
    title: "Mobile Groomer",
    description:
      "For experienced groomers who value quality over rushing, calm handling, polished finishes, and one-on-one mobile appointments.",
    icon: Scissors
  },
  {
    title: "Grooming Assistant",
    description:
      "For detail-minded support pros who can help with prep, bathing, coat care, organization, cleanliness, and appointment flow.",
    icon: HeartHandshake
  },
  {
    title: "Client Experience Support",
    description:
      "For warm communicators who can help with inquiries, scheduling, route support, client follow-through, and brand-level hospitality.",
    icon: Sparkles
  }
];

const values = [
  "Fear Free, patient handling",
  "Respect for seniors, cats, anxious pets, and medically fragile pets",
  "Clean, organized, professional mobile-spa standards",
  "Calm communication with clients and teammates",
  "A wellness-first mindset that treats grooming as essential care"
];

export const metadata: Metadata = {
  title: "Join Our Team | Wash & Wags",
  description:
    "Join the Wash & Wags team and help redefine luxury mobile pet grooming and wellness care in Central Florida."
};

export default function JoinOurTeamPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="We are looking for passionate, like-minded people who want to elevate the way pets are cared for and help redefine grooming as a calm, wellness-oriented experience."
        eyebrow="Join Our Team"
        title="Help us raise the standard for mobile pet care."
      >
        <Button href={brand.textHref}>
          Start the Conversation
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </PageIntro>

      <section className="bg-warm-white/70 py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="eyebrow">Who fits here</p>
              <h2 className="section-heading mt-5">
                Kind hands, high standards, and a steady presence.
              </h2>
              <p className="mt-6 body-large text-muted">
                Wash &amp; Wags is not built around rushed appointments. Our
                team members should care deeply about pet comfort, safe handling,
                clean work, polished results, and the kind of client experience
                that earns long-term trust.
              </p>
            </div>

            <div className="grid gap-5">
              {roles.map((role) => {
                const Icon = role.icon;

                return (
                  <article
                    className="rounded-[26px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm"
                    key={role.title}
                  >
                    <div className="flex gap-5">
                      <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-[clamp(1.55rem,3vw,2.2rem)] leading-none text-charcoal">
                          {role.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-start">
            <div>
              <p className="eyebrow">Care culture</p>
              <h2 className="section-heading mt-5">
                The work is personal, precise, and pet-led.
              </h2>
            </div>
            <div className="rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-sage-dark" />
              <p className="mt-4 text-sm leading-7 text-muted">
                Interested applicants can text us a short introduction, grooming
                or animal-care background, availability, and why Wash &amp; Wags
                feels like the right fit.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div
                className="rounded-[22px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-5 text-sm font-semibold leading-6 text-charcoal shadow-[0_14px_34px_var(--shadow-color)] backdrop-blur"
                key={value}
              >
                {value}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href={brand.textHref}>Text {brand.phone}</Button>
            <Button href={brand.instagram} variant="ghost">
              Message on Instagram
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
