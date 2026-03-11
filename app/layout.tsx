import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL ?? "http://localhost:3000";
const normalizedSiteUrl = siteUrl.startsWith("http")
  ? siteUrl
  : `https://${siteUrl}`;

const metadataBase = (() => {
  try {
    return new URL(normalizedSiteUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
})();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: "M&A.i — AI-Powered Due Diligence",
  description: "Transform weeks of due diligence into hours. M&A.i analyzes thousands of documents instantly, delivering institutional-grade reports.",
  openGraph: {
    title: "M&A.i — AI-Powered Due Diligence",
    description:
      "Transform weeks of due diligence into hours. M&A.i analyzes thousands of documents instantly, delivering institutional-grade reports.",
    url: normalizedSiteUrl,
    siteName: "M&A.i",
    type: "website",
    images: [
      {
        url: "/social-preview-simple.png",
        width: 1200,
        height: 630,
        alt: "M&A.i — AI-Powered Due Diligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&A.i — AI-Powered Due Diligence",
    description:
      "Transform weeks of due diligence into hours. M&A.i analyzes thousands of documents instantly, delivering institutional-grade reports.",
    images: [
      {
        url: "/social-preview-simple.png",
        width: 1200,
        height: 630,
        alt: "M&A.i — AI-Powered Due Diligence",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
