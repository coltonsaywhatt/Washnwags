"use client";

import { useCallback, useEffect, useRef } from "react";
import { ChevronsDown, Mouse, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/constants";

const headline = "Luxury Mobile Dog Spa, Delivered.";
const words = headline.split(" ");

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const pendingProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const tunnelScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.025, 1.055]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -34]);

  const getSectionScrollProgress = useCallback(() => {
    const section = sectionRef.current;

    if (!section) {
      return 0;
    }

    const rect = section.getBoundingClientRect();
    const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));

    return progress;
  }, []);

  const seekToScrollProgress = useCallback(
    (progress: number) => {
      const video = videoRef.current;

      if (!video || prefersReducedMotion) {
        return;
      }

      pendingProgressRef.current = Math.min(1, Math.max(0, progress));

      if (animationFrameRef.current !== null) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;

        const activeVideo = videoRef.current;
        const duration = durationRef.current || activeVideo?.duration || 0;

        if (!activeVideo || !Number.isFinite(duration) || duration <= 0) {
          return;
        }

        const targetTime = pendingProgressRef.current * duration;

        if (Math.abs(activeVideo.currentTime - targetTime) > 0.016) {
          activeVideo.currentTime = targetTime;
        }
      });
    },
    [prefersReducedMotion]
  );

  const syncVideoToScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      return;
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      seekToScrollProgress(getSectionScrollProgress());
    });
  }, [getSectionScrollProgress, seekToScrollProgress]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const syncDuration = () => {
      durationRef.current = Number.isFinite(video.duration) ? video.duration : 0;
      seekToScrollProgress(getSectionScrollProgress());
    };

    video.pause();

    if (prefersReducedMotion) {
      video.currentTime = 0;
      return;
    }

    syncDuration();
    video.addEventListener("loadedmetadata", syncDuration);
    video.addEventListener("durationchange", syncDuration);
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", syncDuration);
      video.removeEventListener("durationchange", syncDuration);
    };
  }, [getSectionScrollProgress, prefersReducedMotion, seekToScrollProgress]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    syncVideoToScroll();
    window.addEventListener("scroll", syncVideoToScroll, { passive: true });
    window.addEventListener("resize", syncVideoToScroll);

    return () => {
      window.removeEventListener("scroll", syncVideoToScroll);
      window.removeEventListener("resize", syncVideoToScroll);
    };
  }, [prefersReducedMotion, syncVideoToScroll]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      aria-label="Wash and Wags luxury mobile grooming hero"
      className="relative isolate min-h-[280vh] bg-[#120b32] motion-reduce:min-h-screen"
      id="top"
      ref={sectionRef}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#120b32] pt-24 text-white">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            scale: prefersReducedMotion ? 1 : tunnelScale
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="h-full w-full object-cover"
              data-scroll-scrubbed-video
              muted
              playsInline
              preload="auto"
              ref={videoRef}
            >
              <source src="/hero/bubble-tunnel-scrub.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(18,11,50,0.9)_0%,rgba(18,11,50,0.58)_38%,rgba(18,11,50,0.14)_72%,rgba(18,11,50,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#120b32]/82 via-[#120b32]/24 to-transparent" />

        <motion.div
          className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-10 pb-16 lg:grid-cols-[0.92fr_1.08fr]"
          style={{
            y: prefersReducedMotion ? 0 : copyY
          }}
        >
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/13 px-4 py-2 font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-gold-light" />
              Wash &amp; Wags Mobile Spa
            </div>

            <h1
              aria-label={headline}
              className="font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.9] text-white"
            >
              {words.map((word, index) => (
                <span aria-hidden="true" key={`${word}-${index}`}>
                  <span className="mr-[0.16em] inline-block align-top">
                    {word}
                  </span>
                  {index < words.length - 1 ? " " : null}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-xl text-[clamp(1.08rem,1rem+0.42vw,1.34rem)] leading-8 text-white/82">
              Luxury grooming, wellness, and calm coat care delivered to your
              driveway with a bubble-soft, vet-backed touch.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={brand.quoteHref}>Request a Spa Quote</Button>
              <Button href="/services" variant="ghost">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#ead9a7]/55 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.30),rgba(234,217,167,0.14)_34%,rgba(22,12,50,0.58)_74%)] p-[7px] shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
              <div
                aria-hidden="true"
                className="absolute inset-[-18px] rounded-full bg-[radial-gradient(circle,rgba(234,217,167,0.26),transparent_66%)] blur-xl"
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/22 bg-[#170d34]/42 p-2 shadow-[inset_0_0_32px_rgba(255,255,255,0.08)]">
                <div className="flex h-[94%] w-[94%] items-center justify-center rounded-full border border-[#ead9a7]/42 bg-[linear-gradient(145deg,rgba(255,250,238,0.82),rgba(232,220,196,0.58))] p-0.5 shadow-[0_12px_34px_rgba(0,0,0,0.20)]">
                  <Image
                    alt="Wash & Wags logo"
                    className="h-full w-full rounded-full object-cover"
                    height={176}
                    priority
                    src={brand.logo}
                    width={176}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.a
          className="absolute bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/24 bg-white/14 px-4 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
          href="#trust"
        >
          <Mouse aria-hidden="true" className="h-4 w-4 text-gold-light" />
          Scroll to scrub
          <ChevronsDown aria-hidden="true" className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
