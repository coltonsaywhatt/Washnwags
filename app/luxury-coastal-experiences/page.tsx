import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  Check,
  Compass,
  Dog,
  HeartHandshake,
  Sparkles,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand, coastalExperiences } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Luxury Coastal Experiences | Wash & Wags",
  description:
    "Dog-friendly Florida coastal experiences from Wash & Wags, including sunset paddleboarding, beach picnics, dog mom retreats, and custom celebrations."
};

const principles = [
  "Beginner-friendly experiences",
  "Private and small curated groups",
  "Luxury aesthetics and content-worthy moments",
  "Designed for connection, confidence, and adventure"
];

const imageGallery = [
  {
    src: "/coastal/sunset.webp",
    alt: "Golden dog in a spa towel on a paddleboard at sunset",
    label: "Sunset SUP"
  },
  {
    src: "/coastal/picnic-2.webp",
    alt: "Dog mom beach retreat picnic with a golden dog at sunset",
    label: "Dog Mom Retreat"
  },
  {
    src: "/coastal/picnic.webp",
    alt: "Styled dog beach picnic with flowers, treats, towels, and coastal decor",
    label: "Beach Picnic"
  }
];

const experienceIcons = [Waves, Sparkles, Camera, Dog, HeartHandshake, Compass];

export default function LuxuryCoastalExperiencesPage() {
  return (
    <main className="page-fade">
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-charcoal text-cream">
        <Image
          alt="Dog-friendly sunset paddleboarding experience in Florida"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/coastal/sunset.webp"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,9,50,0.88)_0%,rgba(37,20,95,0.68)_48%,rgba(37,20,95,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

        <div className="section-shell flex min-h-[92vh] items-center pb-24 pt-32">
          <div className="max-w-3xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-cream/76">
              Wash &amp; Wags exclusive
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.2rem,8vw,8.4rem)] font-semibold leading-[0.88] text-balance">
              Luxury Coastal Experiences
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-cream/82">
              Curated dog-friendly Florida adventures for pups and their humans:
              sunset paddleboarding, styled beach picnics, dog mom retreats,
              coastal date nights, birthdays, proposals, and content-worthy
              memories.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={brand.experienceHref} variant="outlineCream">
                Book Your Experience
              </Button>
              <Button href="#experience-menu" variant="cream">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow">For dogs + their humans</p>
              <h2 className="section-heading mt-5 text-balance">
                Meaningful memories beyond the ordinary.
              </h2>
              <p className="mt-6 body-large text-muted">
                Every experience is intentionally personalized around comfort,
                calm energy, aesthetic detail, and the kind of moment you will
                actually want to remember.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div
                  className="flex min-h-24 items-center gap-4 rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-5 shadow-card backdrop-blur"
                  key={principle}
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                    <Check aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-charcoal">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-charcoal shadow-card">
              <Image
                alt={imageGallery[1].alt}
                className="h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={imageGallery[1].src}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {imageGallery.slice(0, 1).concat(imageGallery.slice(2)).map((image) => (
                <div
                  className="relative min-h-[200px] overflow-hidden rounded-[8px] bg-charcoal shadow-card"
                  key={image.src}
                >
                  <Image
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    fill
                    sizes="(min-width: 1024px) 38vw, 50vw"
                    src={image.src}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/82 px-3 py-1.5 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sage-dark backdrop-blur">
                    {image.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[var(--strong-section)] py-20 text-[var(--strong-section-text)] sm:py-28"
        id="experience-menu"
      >
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-blush/18 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-64 w-64 rounded-full bg-sage/18 blur-3xl" />
        <div className="section-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
            <div>
              <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-cream/66">
                Experience menu
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5.2vw,5.4rem)] font-semibold leading-[0.92] text-balance">
                Coastal days, styled around your pup.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-cream/74 lg:justify-self-end">
              Choose a beginner-friendly SUP session, a paddle-and-pamper day,
              a styled picnic, or a custom celebration. Experiences start at the
              listed rate and vary by customization, group size, coat needs,
              location, requested add-ons, and overall session details.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coastalExperiences.map((experience, index) => {
              const Icon = experienceIcons[index] ?? Sparkles;

              return (
                <article
                  className="group flex min-h-[320px] flex-col rounded-[8px] border border-cream/14 bg-cream/[0.07] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cream/30 hover:bg-cream/[0.1]"
                  key={experience.name}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-cream/12 px-4 py-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream/74">
                      {experience.price}
                    </span>
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-cream/18 bg-cream/10 text-cream">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-8 max-w-[16rem] font-display text-[clamp(1.9rem,3vw,2.65rem)] font-semibold leading-[0.98] text-cream">
                    {experience.name}
                  </h3>
                  <p className="mt-5 flex-1 text-sm leading-7 text-cream/72">
                    {experience.description}
                  </p>
                  <div className="mt-7 h-px w-12 bg-sage transition duration-300 group-hover:w-24" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm-white/76 py-20 sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[480px] overflow-hidden rounded-[8px] shadow-card">
            <Image
              alt="Styled dog-friendly beach picnic with pup treats and flowers"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              src="/coastal/picnic.webp"
            />
          </div>
          <div>
            <p className="eyebrow">Personalized details</p>
            <h2 className="section-heading mt-5 text-balance">
              Built for connection, confidence, and adventure.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Dog charcuterie + pup cups",
                "Matching accessories or bandanas",
                "Flowers, candles, and aesthetic decor",
                "Photo and content opportunities",
                "Personalized celebration styling",
                "Luxury bath and blowout add-ons"
              ].map((detail) => (
                <div
                  className="rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-5 text-sm font-semibold leading-6 text-charcoal shadow-card backdrop-blur"
                  key={detail}
                >
                  {detail}
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Button href={brand.experienceHref}>Book Your Experience</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
