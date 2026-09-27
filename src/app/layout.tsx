import type { Metadata } from "next";
import { Cairo, Tajawal, Almarai, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GoBodyShop - Fuel Your Ambition | Compléments authentiques",
    template: "%s | GoBodyShop",
  },
  description: "GoBodyShop — Fuel Your Ambition. Protéines, créatine, pre-workout, vitamines — livraison 69 wilayas, paiement à la livraison. المكملات الأصلية في الجزائر.",
  metadataBase: new URL("https://gobodyshop.dz"),
  alternates: {
    canonical: "/",
    languages: { fr: "/?lang=fr", ar: "/?lang=ar" },
  },
  openGraph: {
    title: "GoBodyShop - Compléments authentiques",
    description: "100% authentique - protéines, créatine, vitamines - 69 wilayas",
    locale: "fr_DZ",
    alternateLocale: ["ar_DZ"],
    type: "website",
    siteName: "GoBodyShop",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoBodyShop - Fuel Your Ambition",
    description: "Compléments authentiques — 69 wilayas, paiement à la livraison.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "GoBodyShop", statusBarStyle: "default" },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: { "msapplication-TileColor": "#053842" },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "GoBodyShop",
  slogan: "Fuel Your Ambition",
  url: "https://gobodyshop.dz",
  telephone: "+213673270872",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bougara",
    addressCountry: "DZ",
  },
  sameAs: [
    "https://www.instagram.com/gobody_shop/reels/",
    "https://www.facebook.com/profile.php?id=61559487730066",
  ],
  paymentAccepted: "Cash on Delivery",
  currenciesAccepted: "DZD",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#053842",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // LS-backed locale/cart may diverge from SSR
    <html lang="fr" dir="ltr" suppressHydrationWarning className={`${cairo.variable} ${tajawal.variable} ${almarai.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
      </head>
      <body className="min-h-screen antialiased font-[var(--font-cairo)] bg-[#FFFFFF] text-[#053842]">
        <LanguageProvider>
          <Analytics />
          <Header />
          <CartDrawer />
          <main className="min-h-[60vh] bg-[#FFFFFF]">{children}</main>
          <Footer />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
