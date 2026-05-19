import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartHandshake,
  Mail,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/PageIntro";
import { generatedImages } from "@/lib/constants";

const teamEmail = "washnwags.co@gmail.com";
const emailHref = `mailto:${teamEmail}?subject=Joining%20the%20Wash%20%26%20Wags%20team`;

const introSteps = [
  "We are a tiny-but-mighty mobile grooming studio built on luxury, wellness, Fear Free handling, and mindful care.",
  "Right now it is just the two of us, plus a lot of dog hair, but we are in the process of expanding.",
  "If you are a career-oriented groomer or veterinary technician who reads our purpose and thinks, \"This is exactly how I want to care for pets,\" we want to hear from you."
];

const buildingPoints = [
  "A spa-like, calming experience for pets",
  "Fear Free, low-stress handling",
  "Health, comfort, and long-term quality of life",
  "Local, personal, mindful care"
];

const candidates = [
  {
    title: "Experienced pet groomers",
    description:
      "For groomers who value quality over speed, polished coat work, patient handling, and a quieter one-on-one appointment flow.",
    icon: Scissors
  },
  {
    title: "Veterinary technicians",
    description:
      "For ER, GP, or veterinary-care professionals who want to blend medical awareness with grooming, behavior, wellness, and client education.",
    icon: Stethoscope
  }
];

const applicationItems = [
  "A short introduction about you",
  "Your grooming or vet tech experience",
  "Portfolio or photos of your work, if grooming",
  "Why our purpose and wellness approach resonated with you"
];

export const metadata: Metadata = {
  title: "Join Our Team | Wash & Wags",
  description:
    "Connect with Wash & Wags if you are a career-oriented groomer or veterinary technician aligned with luxury mobile grooming, Fear Free handling, and wellness-focused care."
};

export default function JoinOurTeamPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="We are not building a high-volume grooming shop. We are building a slower, more personal mobile spa where comfort, coat care, behavior, and whole-pet wellness shape every appointment."
        eyebrow="Join Our Team"
        title="For groomers and vet techs who want care to feel different."
      >
        <Button href={emailHref}>
          Email Us
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </PageIntro>

      <section className="bg-warm-white/70 py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="grid gap-4">
              {introSteps.map((step, index) => (
                <article
                  className="grid gap-5 rounded-[8px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-card backdrop-blur-sm sm:grid-cols-[4rem_1fr] sm:p-6"
                  key={step}
                >
                  <div className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-8 text-charcoal">{step}</p>
                </article>
              ))}
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] shadow-petal">
              <Image
                alt="Gentle groomer care in a calm pastel mobile spa"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={generatedImages.groomerCare}
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[8px] border border-white/40 bg-[rgba(251,248,255,0.78)] p-5 shadow-card backdrop-blur">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-sage-dark">
                  Fewer pets per day
                </p>
                <p className="mt-2 text-sm leading-6 text-charcoal">
                  More time, attention, and wellness poured into each pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="eyebrow">What we are building</p>
              <h2 className="section-heading mt-5 text-balance">
                Grooming as calm, spa-like wellness care.
              </h2>
              <p className="mt-6 body-large text-muted">
                At Wash &amp; Wags, grooming is not a quick in-and-out service.
                It is a thoughtful experience rooted in trust, comfort, and
                long-term quality of life.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {buildingPoints.map((point) => (
                <div
                  className="rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-5 shadow-[0_14px_34px_var(--shadow-color)] backdrop-blur"
                  key={point}
                >
                  <Sparkles aria-hidden="true" className="h-5 w-5 text-sage-dark" />
                  <p className="mt-5 text-sm font-semibold leading-7 text-charcoal">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white/70 py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="eyebrow">Who we would love to connect with</p>
              <h2 className="section-heading mt-5 text-balance">
                Quality-first pet people with a wellness mindset.
              </h2>
              <p className="mt-6 body-large text-muted">
                If you geek out over coat care, behavior, enrichment,
                nutrition, anatomy, and Fear Free handling, you are our kind of
                human.
              </p>
            </div>

            <div className="grid gap-5">
              {candidates.map((candidate) => {
                const Icon = candidate.icon;

                return (
                  <article
                    className="rounded-[8px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm"
                    key={candidate.title}
                  >
                    <div className="flex gap-5">
                      <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-[clamp(1.55rem,3vw,2.2rem)] leading-none text-charcoal">
                          {candidate.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {candidate.description}
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

      <section className="bg-[var(--strong-section)] py-20 text-[var(--strong-section-text)] sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-cream/64">
                Not officially hiring
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,5.1rem)] font-semibold leading-none text-balance">
                But the right person could change our timeline.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-cream/72">
                We do not technically have capacity to bring on a full team
                member today. If you feel aligned with our mission and can see
                yourself growing with us, reach out anyway. Knowing there is a
                great fit waiting in the wings might be exactly what helps us
                expand sooner.
              </p>
            </div>

            <div className="rounded-[8px] border border-cream/14 bg-cream/[0.065] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur">
              <div className="mb-7 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/18 bg-cream/10">
                  <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
                  Please send us
                </p>
              </div>
              <div className="grid gap-4">
                {applicationItems.map((item) => (
                  <div className="flex gap-3" key={item}>
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-sage"
                    />
                    <p className="text-sm leading-7 text-cream/78">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={emailHref} variant="cream">
                  <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button href="/about" variant="outlineCream">
                  Read Our Purpose
                </Button>
              </div>
              <p className="mt-5 text-sm leading-6 text-cream/56">{teamEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
