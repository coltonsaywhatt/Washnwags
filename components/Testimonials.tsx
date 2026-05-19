"use client";

import { useRef, useState, type PointerEvent } from "react";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ scrollLeft: 0, x: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    setIsDragging(true);
    dragStartRef.current = {
      scrollLeft: scroller.scrollLeft,
      x: event.clientX
    };
    scroller.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!isDragging || !scroller) {
      return;
    }

    const dragDistance = event.clientX - dragStartRef.current.x;
    scroller.scrollLeft = dragStartRef.current.scrollLeft - dragDistance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    setIsDragging(false);

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="section-shell mb-12">
        <p className="eyebrow">Loved across Central Florida</p>
        <h2 className="section-heading mt-5 max-w-4xl">
          Thoughtful words from dogs, families, and freshly fluffed regulars.
        </h2>
      </div>

      <div className="section-shell">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-cream to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-cream to-transparent sm:block" />
          <div
            aria-label="Client testimonials"
            className={[
              "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pr-6",
              "cursor-grab scroll-smooth active:cursor-grabbing sm:gap-5",
              isDragging ? "select-none" : ""
            ].join(" ")}
            onPointerCancel={stopDragging}
            onPointerDown={handlePointerDown}
            onPointerLeave={(event) => {
              if (isDragging) {
                stopDragging(event);
              }
            }}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            ref={scrollerRef}
          >
            {testimonials.map((testimonial) => (
              <article
                className="flex w-[min(86vw,360px)] flex-none snap-center flex-col rounded-[8px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-card backdrop-blur-sm sm:w-[360px] sm:snap-start sm:p-6 lg:w-[380px]"
                key={testimonial.reviewer}
              >
                <StarRating />
                <h3 className="mt-5 font-display text-[clamp(1.65rem,7vw,2rem)] leading-none text-sage-dark">
                  {testimonial.title}
                </h3>
                <p className="mt-5 min-h-[132px] flex-1 text-[0.96rem] leading-7 text-charcoal sm:min-h-[156px] sm:text-base sm:leading-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-sage/14 pt-4">
                  <p className="font-display text-2xl italic leading-none text-sage-dark">
                    {testimonial.reviewer}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {testimonial.context}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
