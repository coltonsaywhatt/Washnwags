import type { Metadata } from "next";
import { BookingBanner } from "@/components/BookingBanner";
import { PageIntro } from "@/components/PageIntro";
import { Team } from "@/components/Team";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Team | Wash & Wags",
  description:
    "Meet the care philosophy behind Wash & Wags, combining emergency veterinary experience, Fear Free handling, and luxury grooming."
};

export default function OurTeamPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="A small local team redefining grooming as a luxurious, spa-like wellness experience rooted in Fear Free handling and veterinary-informed care."
        eyebrow="Our Team"
        title="The people behind the scene."
      >
        <Button href="/join-our-team">Join Our Team</Button>
      </PageIntro>
      <Team />
      <TrustBar />
      <BookingBanner />
    </main>
  );
}
