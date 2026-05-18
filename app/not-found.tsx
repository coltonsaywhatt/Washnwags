import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Home, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found | Wash & Wags",
  description:
    "This Wash & Wags page wandered off, but luxury mobile grooming and wellness care is still right here.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <main className="page-fade relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute left-[-140px] top-24 h-80 w-80 rounded-full bg-blush/24 blur-3xl" />
      <div className="absolute bottom-10 right-[-180px] h-[460px] w-[460px] rounded-full bg-sage/18 blur-3xl" />

      <section className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--glass-bg)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sage-dark shadow-[0_14px_34px_var(--shadow-color)] backdrop-blur">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              404 · Lost leash
            </div>

            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.2rem,7vw,7.4rem)] font-semibold leading-none text-charcoal text-balance">
              This pup wandered off the page.
            </h1>

            <p className="mt-7 max-w-xl body-large text-muted">
              The page you are looking for may have moved, but the mobile spa is
              still right here with calm, vet-backed care and freshly fluffed
              tails.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/">
                <Home aria-hidden="true" className="mr-2 h-4 w-4" />
                Return Home
              </Button>
              <Button href="/services" variant="ghost">
                View Services
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <a
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-sm font-semibold text-sage-dark transition hover:text-charcoal"
              href={brand.textHref}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Text {brand.phone}
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-blush/24 via-sage/14 to-[var(--powder-blue)]/24 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-3 shadow-[0_24px_70px_var(--shadow-color)] backdrop-blur">
              <Image
                alt="Happy freshly groomed dog in a lavender spa robe beside a 404 sign"
                className="aspect-[1596/986] w-full rounded-[26px] object-cover"
                height={986}
                priority
                sizes="(min-width: 1024px) 54vw, calc(100vw - 32px)"
                src="/generated/404-spa-dog.png"
                width={1596}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
