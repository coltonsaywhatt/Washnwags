import { AlertCircle, CheckCircle2 } from "lucide-react";
import { beforeYouBookPolicies } from "@/lib/constants";

export function BeforeYouBook() {
  return (
    <section className="bg-cream py-24 sm:py-32" id="before-you-book">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Before You Book</p>
          <h2 className="section-heading mt-5">
            Everything you need to know before confirming your appointment.
          </h2>
          <p className="mt-6 body-large text-muted">
            Wash &amp; Wags creates a calm, safe, elevated grooming experience
            for pets and their people. These policies protect the time, care,
            and individualized attention each appointment requires.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {beforeYouBookPolicies.map((policy) => (
            <article
              className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm"
              key={policy.title}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                <AlertCircle aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-none text-charcoal">
                {policy.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {policy.description}
              </p>
              <ul className="mt-5 space-y-3">
                {policy.details.map((detail) => (
                  <li className="flex gap-3 text-sm leading-6 text-charcoal" key={detail}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 flex-none text-sage-dark"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
