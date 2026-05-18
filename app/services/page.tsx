import type { Metadata } from "next";
import { BeforeYouBook } from "@/components/BeforeYouBook";
import { BookingBanner } from "@/components/BookingBanner";
import { PageIntro } from "@/components/PageIntro";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Wash & Wags Spa & Wellness Menu",
  description:
    "Explore Wash & Wags baseline grooming, wellness upgrades, artistic color design, and luxury coastal experiences in Central Florida."
};

export default function ServicesPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="Choose from baseline grooming, comfort-focused wellness upgrades, pet-safe artistic color design, and curated dog-friendly coastal experiences."
        eyebrow="Services"
        title="The Spa & Wellness Menu"
      />
      <Services />
      <BeforeYouBook />
      <BookingBanner />
    </main>
  );
}
