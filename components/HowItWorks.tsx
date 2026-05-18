"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, PawPrint, Truck } from "lucide-react";
import { howItWorksSteps } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  quote: ClipboardList,
  van: Truck,
  paw: PawPrint
};

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const ctx = gsap.context(() => {
      const match = gsap.matchMedia();

      match.add("(min-width: 768px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".how-panel");

        gsap.to(track, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: () => `+=${track.offsetWidth}`,
            invalidateOnRefresh: true
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="overflow-hidden bg-[var(--strong-section)] py-20 text-[var(--strong-section-text)] md:py-0"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="section-shell py-0 md:min-h-screen md:py-0">
        <div className="flex flex-col justify-center gap-8 md:min-h-screen">
          <div className="max-w-3xl pt-2 md:pt-20">
            <p className="font-label text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
              How it works
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.3rem,5.6vw,5.8rem)] font-semibold leading-none">
              From doorstep to spa-fresh in three calm steps.
            </h2>
          </div>

          <div className="md:w-[300vw]" ref={trackRef}>
            <div className="grid gap-5 md:flex md:gap-0">
              {howItWorksSteps.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];

                return (
                  <article
                    className="how-panel relative min-h-[360px] overflow-hidden rounded-[24px] border border-cream/16 bg-cream/[0.08] p-8 md:flex md:w-screen md:max-w-[calc(100vw-32px)] md:flex-col md:justify-center md:rounded-none md:border-0 md:bg-transparent md:p-12 lg:p-20"
                    key={item.step}
                  >
                    <span className="pointer-events-none absolute -right-4 top-0 font-display text-[8rem] font-semibold leading-none text-cream/10 md:right-[10%] md:text-[13rem]">
                      {item.step}
                    </span>
                    <div className="relative z-10 max-w-xl">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-cream/26 bg-cream/10">
                        <Icon aria-hidden="true" className="h-7 w-7" />
                      </div>
                      <h3 className="mt-8 font-display text-[clamp(2rem,4vw,4rem)] font-semibold leading-none">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-lg leading-8 text-cream/78">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
