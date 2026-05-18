"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Gallery() {
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
            &amp; Wags brings to your driveway.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid auto-rows-[230px] gap-5 md:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.18 }}
          whileInView="show"
        >
          {galleryImages.map((image) => (
            <motion.a
              className={[
                "group relative overflow-hidden rounded-[24px] bg-sage/10 shadow-card",
                image.span
              ].join(" ")}
              href={image.src}
              key={image.src}
              style={{ position: "relative" }}
              target="_blank"
              variants={fadeUp}
            >
              <Image
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                src={image.src}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-blush/0 font-label text-sm font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition duration-300 group-hover:bg-blush/38 group-hover:opacity-100">
                View
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
