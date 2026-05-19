import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageCTA } from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Gallery | Wash & Wags",
  description:
    "See the warm, polished mobile grooming experience Wash & Wags brings to Central Florida pets and their families."
};

export default function GalleryPage() {
  return (
    <main className="page-fade">
      <Gallery />
      <PageCTA variant="gallery" />
    </main>
  );
}
