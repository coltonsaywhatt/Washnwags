import Image from "next/image";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand, coastalExperiences } from "@/lib/constants";

export function CoastalExperiences() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--strong-section)] py-24 text-[var(--strong-section-text)] sm:py-32"
      style={{ position: "relative" }}
    >
      <Image
        alt="Dog-friendly coastal path with warm Florida light"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.42]"
        fill
        sizes="100vw"
        src="/generated/coastal-dog-experience.png"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, var(--strong-section) 0%, color-mix(in srgb, var(--strong-section) 82%, transparent) 58%, color-mix(in srgb, var(--strong-section) 22%, transparent) 100%)"
        }}
      />

      <div className="section-shell grid min-h-[420px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-3xl">
          <p className="font-label text-sm font-semibold uppercase tracking-[0.18em] text-cream/76">
            <Compass aria-hidden="true" className="mr-2 inline h-4 w-4" />
            Wash &amp; Wags exclusive
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.8rem,6.8vw,6.8rem)] font-semibold leading-none">
            Luxury Coastal Experiences
          </h2>
          <p className="mt-7 max-w-2xl body-large text-cream/80">
            Curated luxury adventures, wellness experiences, and unforgettable
            moments for dogs and their humans, from beginner SUP sessions to
            styled beach picnics.
          </p>
          <div className="mt-9">
            <Button href={brand.bookingHref} variant="outlineCream">
              Book Your Experience
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {coastalExperiences.slice(0, 4).map((experience) => (
            <article
              className="rounded-[24px] border border-cream/20 bg-cream/12 p-5 shadow-card backdrop-blur"
              key={experience.name}
            >
              <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-cream/64">
                {experience.price}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-cream">
                {experience.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/74">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
