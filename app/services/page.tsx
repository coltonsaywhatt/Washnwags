import type { Metadata } from "next";
import { BeforeYouBook } from "@/components/BeforeYouBook";
import { PageCTA } from "@/components/PageCTA";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Wash & Wags Spa & Wellness Menu",
  description:
    "Explore Wash & Wags baseline grooming, wellness upgrades, artistic color design, and luxury coastal experiences in Central Florida."
};

export default function ServicesPage() {
  return (
    <main className="page-fade">
      <Services />
      <BeforeYouBook />
      <PageCTA variant="services" />
    </main>
  );
}
