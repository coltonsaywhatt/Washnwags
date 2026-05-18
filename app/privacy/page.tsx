import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { BookingBanner } from "@/components/BookingBanner";
import { PageIntro } from "@/components/PageIntro";
import { brand } from "@/lib/constants";

const policySections = [
  {
    title: "Information We Collect",
    body:
      "When you contact, text, book, or request services from Wash & Wags, we may collect details such as your name, phone number, address or service area, pet information, appointment preferences, and messages you send to us."
  },
  {
    title: "How We Use Information",
    body:
      "We use information to respond to inquiries, schedule appointments, provide mobile grooming and wellness services, personalize care for your pet, send appointment-related communication, and improve the client experience."
  },
  {
    title: "Pet Care Information",
    body:
      "Pet age, coat condition, temperament, health notes, behavioral needs, and service history may be used to support safe, comfort-focused grooming. This information helps us pace appointments and identify when additional care, breaks, or service adjustments may be needed."
  },
  {
    title: "Payments and Booking",
    body:
      "Online booking and payment tools may be handled by third-party platforms, including Square. Those providers process information under their own privacy and security practices."
  },
  {
    title: "Sharing Information",
    body:
      "We do not sell personal information. We may share limited information with service providers who help us operate the business, comply with legal obligations, protect safety, or complete requested services."
  },
  {
    title: "Photos and Social Media",
    body:
      "With permission, we may use pet photos, grooming results, or appointment content for social media, portfolio, gallery, or marketing purposes. You can ask us not to use your pet's image at any time."
  },
  {
    title: "Data Care",
    body:
      "We take reasonable steps to keep client and pet information organized and protected. No method of electronic communication or storage is perfectly secure, so sensitive health or payment information should be shared only through appropriate booking or payment channels."
  },
  {
    title: "Your Choices",
    body:
      "You may request updates, corrections, or deletion of your client information when legally and operationally possible. Appointment records may be retained when needed for business, safety, tax, or legal purposes."
  }
];

export const metadata: Metadata = {
  title: "Privacy Policy | Wash & Wags",
  description:
    "Read the Wash & Wags privacy policy for luxury mobile grooming and wellness clients in Central Florida."
};

export default function PrivacyPage() {
  return (
    <main className="page-fade">
      <PageIntro
        description="How Wash & Wags collects, uses, and protects client and pet information for mobile grooming, wellness, booking, and communication."
        eyebrow="Privacy Policy"
        title="Privacy, handled with the same care as the appointment."
      />

      <section className="bg-warm-white/70 py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-10 rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-sage-dark">
                  Effective Date
                </p>
                <p className="mt-2 font-display text-3xl leading-none text-charcoal">
                  May 18, 2026
                </p>
              </div>
              <a
                className="text-sm font-semibold text-sage-dark transition hover:text-charcoal"
                href={brand.textHref}
              >
                Questions? Text {brand.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {policySections.map((section) => (
              <article
                className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-card backdrop-blur-sm"
                key={section.title}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/14 text-sage-dark">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="font-display text-[clamp(1.55rem,3vw,2.25rem)] leading-none text-charcoal">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingBanner />
    </main>
  );
}
