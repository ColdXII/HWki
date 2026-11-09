import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavLinks } from "@/components/nav-links";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

/** Set NEXT_PUBLIC_SITE_URL in production, e.g. https://hwki.example.com */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const siteName = "HWki";
const siteTitle = "HWki — Horizon Walker Wiki";
const siteDescription =
  "Horizon Walker database and guides: Vanguards, weapons, traits, stigma sets, gifts, redeem codes, builds, and skills.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Horizon Walker",
    "HWki",
    "Horizon Walker wiki",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  // Prefer a real OG image under public/ when you have one, e.g. /og.png
  // openGraph.images / twitter.images can be set per-page or here.
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
    { media: "(prefers-color-scheme: light)", color: "#0b0b12" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-primary"
            >
              HWki
            </Link>
            <NavLinks />
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
