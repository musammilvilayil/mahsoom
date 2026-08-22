import type { Metadata } from "next";
import "./globals.css";
import "./product-upgrade.css";
import ProductUpgrade from "./ProductUpgrade";

export const metadata: Metadata = {
  title: "Mahsoom's Lifestyle Centre | Nutrition, Fitness & Skin Care in Perumpuzha, Kollam",
  description:
    "Mahsoom's Lifestyle Centre in Perumpuzha, Kollam offers personalised nutrition guidance, healthy-weight support, active lifestyle coaching, Herbalife product awareness and skin self-care guidance. WhatsApp +91 90746 77303.",
  keywords: [
    "nutrition club Perumpuzha",
    "nutrition club Kollam",
    "healthy weight coaching Kollam",
    "fitness lifestyle centre Kollam",
    "Herbalife nutrition guidance Kollam",
    "Herbalife Formula 1 Kollam",
    "Herbalife product awareness Kollam",
    "skin care Perumpuzha",
    "Vritilife skin care Kollam",
  ],
  openGraph: {
    title: "Mahsoom's Lifestyle Centre | Perumpuzha, Kollam",
    description: "The Heritage Hub of the Changed People — nutrition, healthy-weight, active lifestyle, product education and skin self-care guidance.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProductUpgrade />
      </body>
    </html>
  );
}
