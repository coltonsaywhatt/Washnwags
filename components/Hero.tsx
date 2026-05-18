"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Mesh } from "three";
import { Button } from "@/components/ui/Button";
import { SageBlob } from "@/components/ui/SageBlob";
import { brand, generatedImages } from "@/lib/constants";

const headline = "Luxury Mobile Grooming & Wellness — Delivered to Your Door.";

function FloatingOrb() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock, mouse }, delta) => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.18;
    mesh.current.position.x += (mouse.x * 0.38 - mesh.current.position.x) * 0.05;
    mesh.current.position.y +=
      (mouse.y * 0.24 + Math.sin(clock.elapsedTime * 0.7) * 0.08 - mesh.current.position.y) *
      0.05;
  });

  return (
    <group>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={2.2} position={[3, 3, 4]} />
      <pointLight color="#EFB7DC" intensity={18} position={[-3, -2, 2]} />
      <mesh ref={mesh} scale={[1.32, 1.02, 1.24]}>
        <icosahedronGeometry args={[1.42, 5]} />
        <meshPhysicalMaterial
          clearcoat={0.8}
          color="#A79BF4"
          metalness={0.02}
          opacity={0.46}
          roughness={0.18}
          transparent
          transmission={0.18}
        />
      </mesh>
      <mesh position={[0.56, -0.2, 0.55]} scale={[0.45, 0.34, 0.22]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#EFB7DC" opacity={0.55} transparent />
      </mesh>
      <mesh position={[-0.58, 0.48, 0.38]} scale={[0.22, 0.18, 0.16]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#C8D5F6" opacity={0.44} transparent />
      </mesh>
    </group>
  );
}

function useDesktopCanvas() {
  const [canUseCanvas, setCanUseCanvas] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setCanUseCanvas(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return canUseCanvas;
}

export function Hero() {
  const words = useMemo(() => headline.split(" "), []);
  const canUseCanvas = useDesktopCanvas();

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28"
      id="top"
    >
      <SageBlob className="absolute right-[-140px] top-14 h-[520px] w-[520px] text-sage organic-blob" />
      <div className="absolute bottom-16 left-[-120px] h-72 w-72 rounded-full bg-blush/20 blur-3xl" />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-sage/24 bg-[var(--glass-bg)] px-4 py-2 font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-sage-dark shadow-[0_12px_34px_var(--shadow-color)] backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <Sparkles aria-hidden="true" className="h-4 w-4 text-gold-light" />
            Fear Free Certified &#10022; Vet-Backed
          </motion.div>

          <h1
            aria-label={headline}
            className="display-heading max-w-[780px] text-charcoal"
          >
            {words.map((word, index) => (
              <span aria-hidden="true" key={`${word}-${index}`}>
                <motion.span
                  className="mr-[0.18em] inline-block overflow-hidden align-top"
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.18 + index * 0.08,
                    duration: 0.82,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 max-w-xl body-large text-muted"
            initial={{ opacity: 0, y: 22 }}
            transition={{ delay: 1.1, duration: 0.72, ease: [0.19, 1, 0.22, 1] }}
          >
            Where 10+ years of emergency veterinary expertise meets
            spa-quality care.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            transition={{ delay: 1.26, duration: 0.72, ease: [0.19, 1, 0.22, 1] }}
          >
            <Button href={brand.quoteHref}>Request a Spa Quote</Button>
            <Button href="/services" variant="ghost">
              Explore Services
            </Button>
          </motion.div>

          <motion.a
            animate={{ opacity: 1 }}
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-sage-dark"
            href="/about"
            initial={{ opacity: 0 }}
            transition={{ delay: 1.42, duration: 0.7 }}
          >
            Meet your salon on wheels
            <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </motion.a>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative min-h-[390px] lg:min-h-[620px]"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.42, duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="absolute inset-0 m-auto h-[80%] w-[84%] rounded-[42%_58%_61%_39%/44%_38%_62%_56%] bg-sage/12 organic-blob" />
          <div className="absolute left-10 top-12 h-32 w-32 rounded-full bg-gold-light/18 blur-2xl" />
          <div className="absolute bottom-20 right-8 h-40 w-40 rounded-full bg-blush/26 blur-2xl" />
          <div className="absolute bottom-8 right-0 z-0 hidden h-[44%] w-[72%] overflow-hidden rounded-[34px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-card md:block">
            <Image
              alt="Generated placeholder of a calm freshly groomed dog in a pastel mobile spa"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 80vw"
              src={generatedImages.spaDogHero}
            />
          </div>

          {canUseCanvas ? (
            <Canvas
              camera={{ position: [0, 0, 5.1], fov: 42 }}
              className="relative z-10"
              dpr={[1, 1.75]}
            >
              <FloatingOrb />
            </Canvas>
          ) : (
            <div className="relative z-10 mx-auto mt-4 flex h-[360px] w-[min(100%,360px)] items-center justify-center rounded-[42%_58%_61%_39%/44%_38%_62%_56%] bg-gradient-to-br from-sage/28 via-cream to-blush/36 shadow-glow organic-blob">
              <div className="font-display text-7xl italic text-sage-dark/72">&amp;</div>
            </div>
          )}

          <div className="absolute bottom-8 left-3 z-20 max-w-[230px] rounded-[22px] border border-[var(--card-border)] bg-[var(--glass-strong)] p-4 shadow-card backdrop-blur">
            <p className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sage-dark">
              Central Florida
            </p>
            <p className="mt-2 text-sm leading-6 text-charcoal">
              A calm mobile spa experience from quote to final fluff.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
