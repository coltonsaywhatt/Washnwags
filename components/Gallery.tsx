"use client";

import { motion } from "framer-motion";
import { ExternalLink, Instagram, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { brand, instagramGalleryPosts } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface InstagramPost {
  id: string;
  caption: string;
  imageUrl: string;
  isVideo: boolean;
  permalink: string;
}

interface InstagramResponse {
  posts?: InstagramPost[];
}

function getInstagramShortcode(permalink: string) {
  const [, shortcode = permalink] = permalink.match(/\/(?:p|reel)\/([^/]+)/) ?? [];

  return shortcode;
}

export function Gallery() {
  const fallbackPosts = useMemo<InstagramPost[]>(
    () =>
      instagramGalleryPosts.map((permalink) => {
        const shortcode = getInstagramShortcode(permalink);

        return {
          id: shortcode,
          caption: "Wash & Wags Instagram post",
          imageUrl: `/api/instagram/image/${shortcode}`,
          isVideo: true,
          permalink
        };
      }),
    []
  );
  const [posts, setPosts] = useState<InstagramPost[]>(fallbackPosts);

  useEffect(() => {
    const controller = new AbortController();

    async function loadInstagramPosts() {
      const response = await fetch("/api/instagram/recent", {
        cache: "no-store",
        signal: controller.signal
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as InstagramResponse;

      if (data.posts?.length) {
        setPosts(data.posts);
      }
    }

    loadInstagramPosts().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    });

    return () => controller.abort();
  }, []);

  return (
    <section className="bg-warm-white/70 py-24 sm:py-32" id="gallery">
      <div className="section-shell">
        <motion.div
          className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="show"
        >
          <div>
            <motion.p className="eyebrow" variants={fadeUp}>
              From Our Salon on Wheels
            </motion.p>
            <motion.h2
              className="section-heading mt-5 max-w-3xl"
              variants={fadeUp}
            >
              Fresh coats, soft finishes, calm faces.
            </motion.h2>
          </div>
          <motion.p
            className="max-w-md text-base leading-7 text-muted"
            variants={fadeUp}
          >
            A glimpse at the polished, low-stress grooming experience Wash
            &amp; Wags brings to your driveway, pulled from our latest Instagram
            moments.
          </motion.p>
        </motion.div>

        <div
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {posts.map((post) => (
            <a
              aria-label={`View ${post.caption} on Instagram`}
              className="group relative block aspect-[9/16] overflow-hidden rounded-[24px] border border-sage-dark/10 bg-sage/10 shadow-card"
              href={post.permalink}
              key={post.id}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={post.caption}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={post.imageUrl}
                unoptimized={
                  post.imageUrl.startsWith("/api/") ||
                  post.imageUrl.startsWith("http")
                }
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-sage-dark/78 via-sage-dark/24 to-transparent p-4 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
                  {post.isVideo ? (
                    <Play aria-hidden="true" size={13} fill="currentColor" />
                  ) : (
                    <Instagram aria-hidden="true" size={14} />
                  )}
                  Instagram
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage-dark shadow-card transition group-hover:scale-105">
                  <ExternalLink aria-hidden="true" size={18} />
                </span>
              </span>
            </a>
          ))}
        </div>

        <motion.a
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full bg-sage-dark px-6 py-3 font-label text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-card transition hover:bg-button-bg focus:outline-none focus:ring-2 focus:ring-sage-dark focus:ring-offset-2 focus:ring-offset-warm-white"
          href={brand.instagram}
          rel="noreferrer"
          target="_blank"
          variants={fadeUp}
        >
          <Instagram aria-hidden="true" size={18} strokeWidth={2.2} />
          Open Instagram
        </motion.a>
      </div>
    </section>
  );
}
