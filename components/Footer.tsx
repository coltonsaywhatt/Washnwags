import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { brand, navLinks } from "@/lib/constants";

const socialLinks = [
  { label: "Instagram", href: brand.instagram, icon: Instagram },
  { label: "Facebook", href: brand.facebook, icon: Facebook }
];

export function Footer() {
  return (
    <footer
      className="border-t border-sage/15 bg-warm-white py-7 sm:py-14"
      id="site-footer"
    >
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              className="flex items-center gap-3 sm:gap-4"
              href="/"
            >
              <Image
                alt="Wash & Wags logo"
                className="brand-logo h-14 w-14 object-contain sm:h-20 sm:w-20"
                height={128}
                src={brand.logo}
                width={128}
              />
              <span className="font-display text-3xl font-semibold italic leading-none text-sage-dark sm:text-4xl">
                Wash &amp; Wags
              </span>
            </Link>
            <p className="mt-3 max-w-lg text-sm leading-6 text-muted sm:mt-4 sm:max-w-sm sm:text-base sm:leading-7">
              Veterinary expertise meets luxury grooming, delivered with warmth
              to your door.
            </p>
            <p className="mt-4 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sage-dark sm:mt-5 sm:text-xs">
              Serving Central Florida Coast to Coast
            </p>
          </div>

          <div>
            <h3 className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal sm:text-xs">
              Navigate
            </h3>
            <div className="mt-3 grid gap-2 sm:mt-5 sm:gap-3">
              {navLinks.map((link) => (
                <Link
                  className="text-sm text-muted transition hover:text-sage-dark"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal sm:text-xs">
              Contact + Hours
            </h3>
            <div className="mt-3 space-y-1 text-[0.82rem] leading-5 text-muted sm:mt-5 sm:space-y-3 sm:text-sm sm:leading-7">
              <p>
                <a className="hover:text-sage-dark" href={brand.phoneHref}>
                  {brand.phone}
                </a>
              </p>
              <p>Monday-Friday, 8am-6pm</p>
              <p>Saturday by appointment</p>
            </div>
            <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    aria-label={social.label}
                    className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/12 sm:min-h-11 sm:min-w-11"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-sage/15 pt-4 text-xs text-muted sm:mt-12 sm:flex-row sm:gap-4 sm:pt-6 sm:text-sm">
          <p>(c) 2026 Wash &amp; Wags</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-sage-dark" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-sage-dark" href="/join-our-team">
              Join Our Team
            </Link>
            <Link className="hover:text-sage-dark" href="/services#before-you-book">
              Before You Book
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
