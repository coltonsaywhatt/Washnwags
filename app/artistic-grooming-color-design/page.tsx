import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  HeartHandshake,
  Palette,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  WandSparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { artisticServices, brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Artistic Grooming & Color Design | Wash & Wags",
  description:
    "Pet-safe artistic grooming and color design from Wash & Wags, including pastel blends, color pop accents, custom designs, and full creative transformations."
};

const designNotes = [
  {
    title: "Custom looks",
    description:
      "No two creative grooms are the same. We design around coat type, personality, comfort level, and your inspiration.",
    icon: Palette
  },
  {
    title: "Safety first",
    description:
      "Creative color is only offered when it is a good fit for your pet, with gentle handling and pet-safe products.",
    icon: ShieldCheck
  },
  {
    title: "Event-ready finish",
    description:
      "A polished option for birthdays, holidays, photoshoots, weddings, special events, and social media moments.",
    icon: Camera
  }
];

const colorMoments = [
  {
    label: "Color story 01",
    title: "Pastel ears",
    description: "Soft pink, lavender, blue, and purple accents for a playful signature.",
    color: "from-[#f9b3dc] to-[#b8d7ff]"
  },
  {
    label: "Color story 02",
    title: "Ombre legs",
    description: "Dreamy blended placement that gives fluffy coats extra dimension.",
    color: "from-[#b9d9ff] to-[#d9b7ff]"
  },
  {
    label: "Color story 03",
    title: "Custom marks",
    description: "Hearts, stars, themed shapes, and photo-ready creative details.",
    color: "from-[#ffe3f4] to-[#c8bbff]"
  }
];

const perfectFor = [
  "Poodles and doodles",
  "Light-colored coats",
  "Birthdays and holidays",
  "Photoshoots and weddings",
  "Special events",
  "Big-personality pups"
];

export default function ArtisticGroomingColorDesignPage() {
  return (
    <main className="page-fade">
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-charcoal text-cream">
        <Image
          alt="White poodle with pastel pink, purple, and blue artistic color grooming"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center]"
          fill
          priority
          sizes="100vw"
          src="/artistic/creative-groom.webp"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,9,50,0.94)_0%,rgba(37,20,95,0.76)_44%,rgba(37,20,95,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />

        <div className="section-shell flex min-h-[92vh] items-center pb-24 pt-32">
          <div className="max-w-3xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-cream/76">
              Where grooming meets art
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.05rem,8vw,8.2rem)] font-semibold leading-[0.88] text-balance">
              Artistic Grooming &amp; Color Design
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-cream/82">
              Pet-safe artistic grooming designed to turn your pup into a
              walking masterpiece, from soft pastel blends and custom color
              placement to bold creative transformations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={brand.bookingHref} variant="outlineCream">
                Book Color Design
              </Button>
              <Button href="#artistic-menu" variant="cream">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div>
              <p className="eyebrow">Designed for your pup</p>
              <h2 className="section-heading mt-5 text-balance">
                Color placement, comfort, and coat type all matter.
              </h2>
            </div>
            <p className="max-w-3xl body-large text-muted lg:justify-self-end">
              We work with your pup&apos;s coat, temperament, and the look you have
              in mind, whether that is pastel ears, a dreamy ombre, or a bold
              statement design.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {colorMoments.map((moment) => (
              <article
                className="relative min-h-[204px] overflow-hidden rounded-[8px] border border-[var(--card-border)] bg-charcoal p-6 shadow-card"
                key={moment.title}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${moment.color} opacity-90`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.58),transparent_22%),radial-gradient(circle_at_72%_70%,rgba(255,255,255,0.34),transparent_26%)]" />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/76 text-sage-dark shadow-card backdrop-blur">
                    <Sparkles aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-sage-dark/70">
                    {moment.label}
                  </span>
                </div>
                <div className="relative mt-6">
                  <h3 className="font-display text-[clamp(1.85rem,3vw,2.5rem)] leading-none text-sage-dark">
                    {moment.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-charcoal/76">
                    {moment.description}
                  </p>
                </div>
              </article>
            ))}

            {designNotes.map((note) => {
              const Icon = note.icon;

              return (
                <article
                  className="min-h-[204px] rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-6 shadow-card backdrop-blur"
                  key={note.title}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="mt-6">
                    <h3 className="font-display text-[clamp(1.65rem,2.6vw,2.25rem)] leading-none text-charcoal">
                      {note.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {note.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-warm-white/76 py-20 sm:py-28">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blush/18 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-powder-blue/18 blur-3xl" />
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[440px] overflow-hidden rounded-[8px] bg-charcoal shadow-card sm:min-h-[560px]">
            <Image
              alt="Pastel artistic groom on a white poodle in a mobile grooming studio"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              src="/artistic/creative-groom.webp"
            />
          </div>

          <div>
            <p className="eyebrow">
              <Camera aria-hidden="true" className="mr-2 inline h-4 w-4" />
              Perfect for photoshoots &amp; events
            </p>
            <h2 className="section-heading mt-5 text-balance">
              A creative finish for the moments you want to remember.
            </h2>
            <p className="mt-6 body-large text-muted">
              Artistic grooming is especially fun for pets with light-colored
              coats, fluffy styling, or a personality that deserves a signature
              look.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {perfectFor.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-4 text-sm font-semibold leading-6 text-charcoal shadow-card backdrop-blur"
                  key={item}
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                    <PartyPopper aria-hidden="true" className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[var(--strong-section)] py-20 text-[var(--strong-section-text)] sm:py-28"
        id="artistic-menu"
      >
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blush/16 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sage/16 blur-3xl" />

        <div className="section-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-cream/68">
                Artistic grooming menu
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.6rem,5.5vw,5.9rem)] font-semibold leading-[0.92] text-balance">
                From subtle color pops to full creative transformations.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-cream/74 lg:justify-self-end">
              Starting rates vary by coat condition, coat type, age,
              temperament, customization, and the detail required for the look.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {artisticServices.map((service) => (
              <article
                className="group flex min-h-[330px] flex-col rounded-[8px] border border-cream/14 bg-cream/[0.07] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cream/30 hover:bg-cream/[0.1]"
                key={service.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-cream/12 px-4 py-2 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream/74">
                    {service.price}
                  </span>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-cream/18 bg-cream/10 text-cream">
                    <WandSparkles aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[clamp(1.75rem,2.7vw,2.45rem)] font-semibold leading-[0.98] text-cream">
                  {service.name}
                </h3>
                <p className="mt-5 flex-1 text-sm leading-7 text-cream/72">
                  {service.description}
                </p>
                <div className="mt-7 h-px w-12 bg-sage transition duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="eyebrow">One-on-one color planning</p>
            <h2 className="section-heading mt-5 text-balance">
              Every design starts with the pet in front of us.
            </h2>
          </div>
          <div className="rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-6 shadow-card backdrop-blur sm:p-8">
            <p className="body-large text-muted">
              We choose color placement, timing, and intensity around your
              pet&apos;s coat condition, handling comfort, age, and the look you
              want to create. If creative color is not the best fit, we will
              recommend a safer grooming plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={brand.bookingHref}>Book Color Design</Button>
              <Button href={brand.textHref} variant="ghost">
                <HeartHandshake aria-hidden="true" className="mr-2 h-4 w-4" />
                Text {brand.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
