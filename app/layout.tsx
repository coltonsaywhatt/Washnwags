import type { Metadata } from "next";
import { DM_Sans, Jost, Playfair_Display } from "next/font/google";
import { LocalBusinessJsonLd } from "next-seo";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { brand } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: "Wash & Wags | Luxury Mobile Dog Grooming & Wellness | Central Florida",
  description:
    "Fear Free, vet-backed luxury mobile grooming delivered to your door. Serving Central Florida. Book your spa experience today.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Wash & Wags | Luxury Mobile Dog Grooming & Wellness",
    description:
      "Veterinary expertise meets spa-quality mobile grooming for Central Florida dogs and their humans.",
    url: brand.siteUrl,
    siteName: "Wash & Wags",
    images: [
      {
        url: "/og-wash-wags.svg",
        width: 1200,
        height: 630,
        alt: "Wash & Wags luxury mobile dog grooming"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash & Wags | Luxury Mobile Dog Grooming & Wellness",
    description:
      "Fear Free, vet-backed luxury mobile grooming delivered to your door in Central Florida.",
    images: ["/og-wash-wags.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${jost.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const stored = window.localStorage.getItem("wash-wags-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : systemDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`
          }}
        />
        <LocalBusinessJsonLd
          address="Central Florida, FL, US"
          areaServed={[
            {
              geoMidpoint: {
                latitude: "28.5383",
                longitude: "-81.3792"
              },
              geoRadius: "150 mi"
            }
          ]}
          description="Fear Free, vet-backed luxury mobile grooming and wellness delivered to your door in Central Florida."
          id={`${brand.siteUrl}/#localbusiness`}
          images={[`${brand.siteUrl}/og-wash-wags.svg`]}
          name={brand.name}
          openingHours={[
            {
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00"
            },
            {
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "15:00"
            }
          ]}
          priceRange="$$-$$$"
          sameAs={[brand.instagram, brand.facebook]}
          telephone="+18134449211"
          type="LocalBusiness"
          url={brand.siteUrl}
          useAppDir
        />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
