import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="section-shell mb-12">
        <p className="eyebrow">Loved across Central Florida</p>
        <h2 className="section-heading mt-5 max-w-4xl">
          Thoughtful words from dogs, families, and freshly fluffed regulars.
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
        <div className="marquee-track flex w-max gap-5 pr-5">
          {repeatedTestimonials.map((testimonial, index) => (
            <article
              className="w-[min(82vw,380px)] rounded-[22px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm"
              key={`${testimonial.reviewer}-${index}`}
            >
              <StarRating />
              <h3 className="mt-5 font-display text-3xl leading-none text-sage-dark">
                {testimonial.title}
              </h3>
              <p className="mt-5 min-h-[156px] text-base leading-8 text-charcoal">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-sage/14 pt-4">
                <p className="font-display text-2xl italic text-sage-dark">
                  {testimonial.reviewer}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {testimonial.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
