import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanierungssprint25 – Ihr Haus in 25 Tagen komplett saniert",
  description: "Professionelle Haussanierung in nur 25 Tagen. Von der Planung bis zur Schlüsselübergabe – alles aus einer Hand. Schnell, zuverlässig, hochwertig.",
  keywords: ["Haussanierung", "Sanierung", "Renovierung", "25 Tage", "Komplettsanierung", "Modernisierung"],
  authors: [{ name: "Sanierungssprint25" }],
  openGraph: {
    title: "Sanierungssprint25 – Ihr Haus in 25 Tagen komplett saniert",
    description: "Professionelle Haussanierung in nur 25 Tagen. Schnell, zuverlässig, hochwertig.",
    url: "https://www.sanierungssprint25.de",
    siteName: "Sanierungssprint25",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
