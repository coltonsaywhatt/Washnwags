import Image from "next/image";
import { Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/constants";

export function ArtisticGroomingCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-warm-white/76 py-20 sm:py-28"
      id="artistic-grooming"
    >
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-blush/18 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-powder-blue/18 blur-3xl" />

      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="relative min-h-[440px] overflow-hidden rounded-[8px] bg-charcoal shadow-card sm:min-h-[540px]">
          <Image
            alt="White poodle with pastel pink, purple, and blue artistic color grooming"
            className="h-full w-full object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            src="/artistic/creative-groom.webp"
          />
        </div>

        <div>
          <p className="eyebrow">
            <Palette aria-hidden="true" className="mr-2 inline h-4 w-4" />
            Artistic Grooming
          </p>
          <h2 className="section-heading mt-5 text-balance">
            Pet-safe color design for pups with big personalities.
          </h2>
          <p className="mt-6 max-w-2xl body-large text-muted">
            From soft pastel ears and dreamy ombre blends to custom hearts,
            stars, and full creative transformations, every look is designed
            around your pup&apos;s coat, comfort, and personality.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Pet-safe creative color",
              "Custom placement and styling",
              "Photoshoots, holidays, and events",
              "Calm one-on-one mobile spa care"
            ].map((detail) => (
              <div
                className="flex items-center gap-3 rounded-[8px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-4 text-sm font-semibold leading-6 text-charcoal shadow-card backdrop-blur"
                key={detail}
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                  <Sparkles aria-hidden="true" className="h-4 w-4" />
                </span>
                {detail}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/artistic-grooming-color-design">
              Explore Color Design
            </Button>
            <Button href={brand.bookingHref} variant="ghost">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
