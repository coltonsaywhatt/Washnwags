import type { Metadata } from "next";
import { About, AboutHero } from "@/components/About";
import { PageCTA } from "@/components/PageCTA";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "About Wash & Wags | Vet-Backed Luxury Mobile Grooming",
  description:
    "Learn how Wash & Wags delivers calm, one-on-one mobile grooming with veterinary-informed handling and a polished spa experience at home."
};

export default function AboutPage() {
  return (
    <main className="page-fade">
      <AboutHero />
      <About />
      <TrustBar />
      <Testimonials />
      <PageCTA variant="about" />
    </main>
  );
}
