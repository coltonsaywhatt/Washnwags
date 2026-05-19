"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Sparkles,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { brand, navLinks } from "@/lib/constants";

const mobileSocialLinks = [
  { label: "Instagram", href: brand.instagram, icon: Instagram },
  { label: "Facebook", href: brand.facebook, icon: Facebook }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-sage/14 bg-[rgba(248,243,255,0.92)] shadow-[0_8px_28px_rgba(37,20,95,0.08)] backdrop-blur-md"
          : "border-b border-sage/10 bg-[rgba(248,243,255,0.74)] backdrop-blur-sm"
      ].join(" ")}
    >
      <nav className="section-shell flex min-h-[76px] items-center justify-between gap-3 sm:gap-6">
        <Link
          aria-label="Wash & Wags home"
          className="flex min-w-0 items-center gap-3"
          href="/"
        >
          <Image
            alt="Wash & Wags logo"
            className="brand-logo h-12 w-12 flex-none object-contain sm:h-14 sm:w-14"
            height={96}
            priority
            src={brand.logo}
            width={96}
          />
          <span className="truncate pb-1 font-display text-[clamp(1.34rem,6vw,2.02rem)] font-semibold italic leading-[1.12] text-sage-dark">
            Wash &amp; Wags
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative text-sm font-medium transition hover:text-sage-dark",
                  isActive ? "text-sage-dark" : "text-charcoal"
                ].join(" ")}
                href={link.href}
                key={link.href}
              >
                {link.label}
                <span
                  className={[
                    "absolute -bottom-2 left-0 h-px w-full origin-left bg-sage transition-transform duration-300 group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0"
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={brand.textHref} variant="ghost">
            <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
            Text Us
          </Button>
          <Button href={brand.bookingHref}>Book Now</Button>
        </div>

        <div className="flex flex-none items-center gap-2 lg:hidden">
          <button
            aria-expanded={isOpen}
            aria-label="Open navigation menu"
            className="group relative inline-flex min-h-11 min-w-11 items-center justify-center overflow-hidden rounded-full border border-sage/20 bg-cream/82 text-charcoal shadow-[0_10px_24px_rgba(37,20,95,0.1)] backdrop-blur-sm transition hover:border-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            onClick={() => setIsOpen(true)}
            type="button"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-blush/20 via-transparent to-sage/20 opacity-0 transition group-hover:opacity-100" />
            <Menu aria-hidden="true" className="relative h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="no-scrollbar fixed inset-0 z-[90] h-dvh overflow-x-hidden overflow-y-auto bg-cream px-3 py-2 lg:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(239,183,220,0.34),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(167,155,244,0.30),transparent_30%),linear-gradient(145deg,var(--cream),var(--warm-white))]" />

            <motion.div
              animate={{ y: 0, scale: 1, opacity: 1 }}
              className="no-scrollbar relative mx-auto flex max-h-[calc(100dvh-16px)] max-w-[520px] flex-col overflow-x-hidden overflow-y-auto rounded-[30px] border border-[var(--card-border)] bg-[var(--glass-bg)] p-3 shadow-[0_28px_90px_var(--shadow-color)] backdrop-blur-2xl"
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              initial={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-sage/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blush/22 blur-3xl" />

              <div className="relative flex items-center justify-between gap-4">
                <Link
                  className="flex min-w-0 items-center gap-3"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    alt="Wash & Wags logo"
                    className="brand-logo h-14 w-14 flex-none object-contain"
                    height={112}
                    src={brand.logo}
                    width={112}
                  />
                  <div className="min-w-0">
                    <span className="block truncate pb-1 font-display text-[1.56rem] font-semibold italic leading-[1.12] text-sage-dark min-[390px]:text-[1.72rem]">
                      Wash &amp; Wags
                    </span>
                    <span className="mt-1 block truncate font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted min-[390px]:text-[0.66rem]">
                      Mobile Spa Menu
                    </span>
                  </div>
                </Link>
                <button
                  aria-label="Close navigation menu"
                  className="inline-flex min-h-11 min-w-11 flex-none items-center justify-center rounded-full border border-sage/25 bg-[var(--glass-strong)] text-charcoal shadow-[0_12px_32px_var(--shadow-color)] transition hover:border-sage hover:text-sage-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mt-3 rounded-[22px] border border-[var(--card-border)] bg-[var(--glass-strong)] p-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sage/16 text-sage-dark">
                    <Sparkles aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sage-dark">
                      Fear Free - Vet-backed
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-5 text-muted min-[390px]:text-sm">
                      Luxury mobile grooming, delivered calmly to your door.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate="show"
                className="relative mt-3 grid content-start gap-2"
                initial="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.08
                    }
                  }
                }}
              >
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <motion.div
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "group flex min-h-[46px] items-center justify-between rounded-[18px] border px-3 transition min-[390px]:min-h-[52px] min-[390px]:rounded-[20px] min-[390px]:px-4",
                        isActive
                          ? "border-sage/35 bg-sage/15 text-sage-dark shadow-[0_14px_34px_var(--shadow-color)]"
                          : "border-transparent bg-[var(--glass-bg)] text-charcoal hover:border-sage/25 hover:bg-[var(--glass-strong)]"
                      ].join(" ")}
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -14 },
                        show: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link
                        className="flex min-h-[46px] w-full items-center justify-between gap-3 min-[390px]:min-h-[52px]"
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted min-[390px]:text-[0.68rem]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="truncate font-display text-[clamp(1.45rem,7.4vw,2.12rem)] font-semibold leading-none">
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 flex-none opacity-55 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="relative mt-3 grid grid-cols-2 gap-2">
                {mobileSocialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sage/20 bg-[var(--glass-bg)] text-sm font-semibold text-sage-dark transition hover:border-sage hover:bg-sage/10"
                      href={social.href}
                      key={social.label}
                      onClick={() => setIsOpen(false)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {social.label}
                    </a>
                  );
                })}
              </div>

              <div className="relative mt-2 grid gap-2 rounded-[22px] border border-[var(--card-border)] bg-[var(--glass-strong)] p-2 shadow-[0_14px_42px_var(--shadow-color)]">
                <Button
                  className="w-full"
                  href={brand.bookingHref}
                  onClick={() => setIsOpen(false)}
                >
                  <CalendarDays aria-hidden="true" className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
                <Button
                  className="w-full"
                  href={brand.textHref}
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                >
                  <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
                  Text {brand.phone}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
