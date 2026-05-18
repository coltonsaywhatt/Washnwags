import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SageBlob } from "@/components/ui/SageBlob";
import { brand } from "@/lib/constants";

export function BookingBanner() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32" id="book">
      <SageBlob className="absolute -left-28 top-8 h-[420px] w-[420px] text-sage organic-blob" />
      <div className="section-shell relative z-10 text-center">
        <p className="eyebrow">Book your mobile spa visit</p>
        <h2 className="mx-auto mt-5 max-w-5xl font-display text-[clamp(2.45rem,5.6vw,5.9rem)] font-semibold leading-none text-charcoal text-balance">
          Ready to Elevate Grooming from Routine Chore to Luxury Experience?
        </h2>
        <p className="mx-auto mt-7 max-w-2xl body-large text-muted">
          Prioritizing the health, comfort, and happiness of your pet.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={brand.bookingHref}>Book Now</Button>
          <Button href={brand.textHref} variant="ghost">
            <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
            Text {brand.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
