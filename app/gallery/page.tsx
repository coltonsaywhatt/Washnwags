import type { Metadata } from "next";
import { BookingBanner } from "@/components/BookingBanner";
import { Gallery } from "@/components/Gallery";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Gallery | Wash & Wags",
  description:
    "See the warm, polished mobile grooming experience Wash & Wags brings to Central Florida pets and their families."
};

export default function GalleryPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="A look at soft coat finishes, relaxed faces, and the curated mobile spa experience that meets pets at home."
        eyebrow="Gallery"
        title="From our salon on wheels."
      />
      <Gallery />
      <BookingBanner />
    </main>
  );
}
