
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.uniconvergetech.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UniConverge Technologies | Industrial Connectivity Solutions",
    template: "%s | UniConverge Technologies",
  },
  description:
    "Explore industrial connectivity, Ethernet I/O, wireless I/O and Industrial IoT solutions from UniConverge Technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "UniConverge Technologies",
    title: "UniConverge Technologies | Industrial Connectivity Solutions",
    description:
      "Industrial connectivity and IoT solutions for real-world applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
