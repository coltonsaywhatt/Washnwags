import { ArtisticGroomingCTA } from "@/components/ArtisticGroomingCTA";
import { CoastalExperiences } from "@/components/CoastalExperiences";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PageCTA } from "@/components/PageCTA";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="page-fade">
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ArtisticGroomingCTA />
      <CoastalExperiences />
      <PageCTA variant="home" />
    </main>
  );
}
