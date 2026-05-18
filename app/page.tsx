import { BookingBanner } from "@/components/BookingBanner";
import { CoastalExperiences } from "@/components/CoastalExperiences";
import { Hero } from "@/components/Hero";
import { HomeHighlights } from "@/components/HomeHighlights";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="page-fade">
      <Hero />
      <TrustBar />
      <HomeHighlights />
      <HowItWorks />
      <Testimonials />
      <CoastalExperiences />
      <BookingBanner />
    </main>
  );
}
