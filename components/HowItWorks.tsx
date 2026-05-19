import { ClipboardList, PawPrint, Truck } from "lucide-react";
import { howItWorksSteps } from "@/lib/constants";

const icons = {
  quote: ClipboardList,
  van: Truck,
  paw: PawPrint
};

export function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--strong-section)] py-20 text-[var(--strong-section-text)] sm:py-24"
      id="how-it-works"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cream/18" />
      <div className="pointer-events-none absolute -right-24 top-14 h-72 w-72 rounded-full bg-sage/18 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-blush/12 blur-3xl" />

      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-xl">
            <p className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-cream/66">
              How it works
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.35rem,4.7vw,4.9rem)] font-semibold leading-[0.96] text-balance">
              From doorstep to spa-fresh in three calm steps.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-cream/68">
              A polished mobile grooming flow with clear prep, one-on-one care,
              and a calm handoff at home.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {howItWorksSteps.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];

              return (
                <article
                  className="group relative overflow-hidden rounded-[8px] border border-cream/14 bg-cream/[0.065] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cream/28 hover:bg-cream/[0.095] sm:min-h-[310px] sm:p-6"
                  key={item.step}
                >
                  <div className="mb-9 flex items-center justify-between gap-4">
                    <span className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-cream/54">
                      Step {item.step}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/18 bg-cream/10 text-cream transition group-hover:border-sage/40 group-hover:bg-sage/20">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="relative z-10 max-w-[12rem] font-display text-[clamp(1.75rem,2.6vw,2.45rem)] font-semibold leading-[0.98]">
                      {item.title}
                    </h3>
                    <p className="relative z-10 mt-5 text-sm leading-7 text-cream/70">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 h-px bg-cream/12">
                    <div className="h-px w-10 bg-sage transition duration-300 group-hover:w-20" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-cream/12 pt-5 text-sm text-cream/58 sm:grid-cols-3">
          <p>Quote details set the care plan.</p>
          <p>Mobile setup keeps the appointment quiet.</p>
          <p>Final handoff happens at your door.</p>
        </div>
      </div>
    </section>
  );
}
