import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURELIA JEWELS | Crafted to be Remembered",
  description:
    "High-end luxury jewellery maison. Discover the 2026 High Jewellery collection crafted around light, proportion, and quiet expression.",
  keywords: [
    "Aurelia Jewels",
    "Luxury Jewellery",
    "High Jewellery",
    "Diamond Necklace",
    "Bespoke Bridal Jewellery",
    "18K Gold Jewellery",
  ],
  openGraph: {
    title: "AURELIA JEWELS — Crafted to be Remembered",
    description:
      "A luxury jewellery campaign editorial. Jewels designed around light, proportion and quiet expression.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F1EA] text-[#171513] font-sans antialiased selection:bg-[#11100E] selection:text-[#F5F1EA]">
        {children}
      </body>
    </html>
  );
}
