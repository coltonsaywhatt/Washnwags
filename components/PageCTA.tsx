import {
  CalendarHeart,
  Camera,
  HeartHandshake,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/constants";

type CTAButton = {
  href: string;
  label: string;
  variant?: "sage" | "ghost" | "cream" | "outlineCream";
  icon?: LucideIcon;
};

type PageCTAConfig = {
  eyebrow: string;
  title: string;
  body: string;
  icon: LucideIcon;
  primary: CTAButton;
  secondary?: CTAButton;
  details: string[];
  tone: "light" | "deep" | "blush";
};

const ctas = {
  home: {
    eyebrow: "Driveway spa care",
    title: "Ready for calmer mobile grooming?",
    body:
      "Tell us about your pet, your goals, and your schedule. We will help shape the right mobile spa visit from there.",
    icon: CalendarHeart,
    primary: { href: brand.quoteHref, label: "Request a Spa Quote" },
    secondary: { href: brand.textHref, label: `Text ${brand.phone}`, variant: "ghost", icon: MessageCircle },
    details: ["Mobile service", "Vet-backed handling", "Luxury coat care"],
    tone: "blush"
  },
  about: {
    eyebrow: "Care with a point of view",
    title: "Meet the calmer side of grooming.",
    body:
      "One-on-one handling, a quieter appointment rhythm, and polished results brought straight to your home.",
    icon: HeartHandshake,
    primary: { href: brand.quoteHref, label: "Start with a Quote" },
    secondary: { href: "/services", label: "View Services", variant: "ghost" },
    details: ["Comfort-led pacing", "Coat health focus", "At-home convenience"],
    tone: "light"
  },
  services: {
    eyebrow: "Choose the right spa path",
    title: "Find the right spa visit.",
    body:
      "From baseline grooming to wellness upgrades and special finishes, we will help match the service to what your pet actually needs.",
    icon: Sparkles,
    primary: { href: brand.quoteHref, label: "Request a Service Quote" },
    secondary: { href: brand.textHref, label: "Ask a Question", variant: "outlineCream", icon: MessageCircle },
    details: ["Baseline grooming", "Wellness upgrades", "Creative options"],
    tone: "deep"
  },
  gallery: {
    eyebrow: "From gallery to driveway",
    title: "Want this finish at home?",
    body:
      "Share your pet's coat type, temperament, and grooming goals, and we will guide you toward the right appointment.",
    icon: Camera,
    primary: { href: brand.bookingHref, label: "Book a Grooming Visit" },
    secondary: { href: "/services", label: "Explore Services", variant: "ghost" },
    details: ["Soft coat finishes", "Relaxed faces", "Polished details"],
    tone: "blush"
  },
  memberships: {
    eyebrow: "Make care automatic",
    title: "Keep coat care on rhythm.",
    body:
      "Memberships keep coat care on schedule with recurring service, member savings, and elevated extras for pets who thrive on consistency.",
    icon: PawPrint,
    primary: { href: brand.bookingHref, label: "Start a Membership" },
    secondary: { href: brand.textHref, label: "Text Us First", variant: "outlineCream", icon: MessageCircle },
    details: ["Monthly rhythm", "Member savings", "VIP options"],
    tone: "deep"
  },
  team: {
    eyebrow: "A better grooming standard",
    title: "Grow with a calmer grooming team.",
    body:
      "Whether you are booking care or exploring a future with us, Wash & Wags is shaped by high standards and low-stress handling.",
    icon: Users,
    primary: { href: "/join-our-team", label: "Join Our Team" },
    secondary: { href: brand.bookingHref, label: "Book Now", variant: "ghost" },
    details: ["Fear Free mindset", "Luxury service", "Local growth"],
    tone: "light"
  },
  privacy: {
    eyebrow: "Questions before you book?",
    title: "Need clarity before booking?",
    body:
      "If you have questions about booking, pet photos, client details, or appointment communication, text us before your visit.",
    icon: ShieldCheck,
    primary: { href: brand.textHref, label: `Text ${brand.phone}`, icon: MessageCircle },
    secondary: { href: brand.bookingHref, label: "Book Now", variant: "ghost" },
    details: ["Clear communication", "Pet info care", "Booking support"],
    tone: "light"
  }
} satisfies Record<string, PageCTAConfig>;

type PageCTAProps = {
  variant: keyof typeof ctas;
};

const toneClasses: Record<PageCTAConfig["tone"], string> = {
  light: "bg-cream text-charcoal",
  deep: "bg-[var(--strong-section)] text-[var(--strong-section-text)]",
  blush: "bg-warm-white text-charcoal"
};

const panelClasses: Record<PageCTAConfig["tone"], string> = {
  light: "border-sage/18 bg-warm-white/70 text-muted",
  deep: "border-cream/14 bg-cream/[0.07] text-cream/70",
  blush: "border-blush/28 bg-cream/72 text-muted"
};

const eyebrowClasses: Record<PageCTAConfig["tone"], string> = {
  light: "text-sage-dark",
  deep: "text-cream/64",
  blush: "text-sage-dark"
};

const iconClasses: Record<PageCTAConfig["tone"], string> = {
  light: "border-sage/18 bg-sage/12 text-sage-dark",
  deep: "border-cream/18 bg-cream/10 text-gold-light",
  blush: "border-blush/28 bg-blush/18 text-sage-dark"
};

function renderButton(button: CTAButton, fallbackVariant: CTAButton["variant"]) {
  const Icon = button.icon;

  return (
    <Button href={button.href} variant={button.variant ?? fallbackVariant}>
      {Icon ? <Icon aria-hidden="true" className="mr-2 h-4 w-4" /> : null}
      {button.label}
    </Button>
  );
}

export function PageCTA({ variant }: PageCTAProps) {
  const cta = ctas[variant];
  const Icon = cta.icon;
  const isDeep = cta.tone === "deep";

  return (
    <section className={`relative isolate overflow-hidden py-14 sm:py-16 ${toneClasses[cta.tone]}`} id="book">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="section-shell relative z-10">
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="flex items-start gap-4">
            <span
              className={`inline-flex h-11 w-11 flex-none items-center justify-center rounded-[8px] border ${iconClasses[cta.tone]}`}
            >
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className={`font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${eyebrowClasses[cta.tone]}`}>
                {cta.eyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,3.5vw,3.85rem)] font-semibold leading-[0.98] text-balance">
                {cta.title}
              </h2>
            </div>
          </div>

          <div className={`rounded-[8px] border p-5 shadow-[0_18px_52px_rgba(0,0,0,0.10)] backdrop-blur sm:p-6 ${panelClasses[cta.tone]}`}>
            <p className="max-w-3xl text-sm leading-7 sm:text-base">{cta.body}</p>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {cta.details.map((detail) => (
                <div
                  className={`rounded-[8px] border px-3 py-2 text-xs font-semibold sm:text-sm ${
                    isDeep
                      ? "border-cream/12 bg-cream/[0.06] text-cream/74"
                      : "border-sage/14 bg-white/46 text-sage-dark"
                  }`}
                  key={detail}
                >
                  {detail}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {renderButton(cta.primary, isDeep ? "cream" : "sage")}
              {cta.secondary ? renderButton(cta.secondary, isDeep ? "outlineCream" : "ghost") : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
