import type { Metadata } from "next";
import { BookingBanner } from "@/components/BookingBanner";
import { MembershipPlans } from "@/components/MembershipPlans";
import { PageIntro } from "@/components/PageIntro";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Memberships | Wash & Wags",
  description:
    "Explore Pawfect Essentials, Pawsh Pup & Wellness, Luxury Coat & Wellness, and Platinum Pup VIP Wellness monthly plans from Wash & Wags."
};

export default function MembershipsPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="Monthly plans combine recurring full-service grooming, wellness therapies, member discounts, and VIP extras for pets who benefit from a consistent rhythm."
        eyebrow="Memberships"
        title="Exclusive membership programs."
      />
      <MembershipPlans />
      <Testimonials />
      <BookingBanner />
    </main>
  );
}
