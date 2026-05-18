import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { brand, navLinks } from "@/lib/constants";

const socialLinks = [
  { label: "Instagram", href: brand.instagram, icon: Instagram },
  { label: "Facebook", href: brand.facebook, icon: Facebook }
];

export function Footer() {
  return (
    <footer className="border-t border-sage/15 bg-warm-white py-14">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div>
            <a
              className="flex items-center gap-4"
              href="/"
            >
              <Image
                alt="Wash & Wags logo"
                className="brand-logo h-16 w-16 rounded-full border border-[var(--card-border)] bg-[var(--glass-strong)] object-contain p-1"
                height={128}
                src={brand.logo}
                width={128}
              />
              <span className="font-display text-4xl font-semibold italic text-sage-dark">
                Wash &amp; Wags
              </span>
            </a>
            <p className="mt-4 max-w-sm text-base leading-7 text-muted">
              Veterinary expertise meets luxury grooming, delivered with warmth
              to your door.
            </p>
            <p className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">
              Serving Central Florida Coast to Coast
            </p>
          </div>

          <div>
            <h3 className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Navigate
            </h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a
                  className="text-sm text-muted transition hover:text-sage-dark"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Contact + Hours
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
              <p>
                <a className="hover:text-sage-dark" href={brand.phoneHref}>
                  {brand.phone}
                </a>
              </p>
              <p>Monday-Friday, 8am-6pm</p>
              <p>Saturday by appointment</p>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    aria-label={social.label}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/12"
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

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-sage/15 pt-6 text-sm text-muted sm:flex-row">
          <p>© 2026 Wash &amp; Wags</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="hover:text-sage-dark" href="/privacy">
              Privacy Policy
            </a>
            <a className="hover:text-sage-dark" href="/join-our-team">
              Join Our Team
            </a>
            <a className="hover:text-sage-dark" href="/services#before-you-book">
              Before You Book
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
