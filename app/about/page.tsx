import type { Metadata } from "next";
import { About } from "@/components/About";
import { BookingBanner } from "@/components/BookingBanner";
import { PageIntro } from "@/components/PageIntro";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About Wash & Wags | Vet-Backed Luxury Mobile Grooming",
  description:
    "Learn the Wash & Wags approach to Fear Free, vet-backed luxury mobile grooming and wellness care in Central Florida."
};

export default function AboutPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="Grooming is more than a haircut. It is an essential part of your pet's health, comfort, and happiness."
        eyebrow="About Wash & Wags"
        title="Veterinary expertise meets warm, spa-quality mobile care."
      />
      <About />
      <TrustBar />
      <Testimonials />
      <BookingBanner />
    </main>
  );
}
