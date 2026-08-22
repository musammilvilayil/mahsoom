import type { Metadata } from "next";
import "./globals.css";
import "./product-upgrade.css";
import "./skin-health-upgrade.css";
import ProductUpgrade from "./ProductUpgrade";
import SkinHealthUpgrade from "./SkinHealthUpgrade";

export const metadata: Metadata = {
  title: "Mahsoom's Lifestyle Centre | Nutrition, Fitness & Skin Health in Perumpuzha, Kollam",
  description:
    "Mahsoom's Lifestyle Centre in Perumpuzha, Kollam offers personalised nutrition guidance, healthy-weight support, active lifestyle coaching, Herbalife product awareness and HN-Skin Booster skin-health education. WhatsApp +91 90746 77303.",
  keywords: [
    "nutrition club Perumpuzha",
    "nutrition club Kollam",
    "healthy weight coaching Kollam",
    "fitness lifestyle centre Kollam",
    "Herbalife nutrition guidance Kollam",
    "Herbalife Formula 1 Kollam",
    "Herbalife HN Skin Booster Kollam",
    "collagen skin booster Kollam",
    "skin health Perumpuzha",
  ],
  openGraph: {
    title: "Mahsoom's Lifestyle Centre | Perumpuzha, Kollam",
    description: "The Heritage Hub of the Changed People — nutrition, healthy-weight, active lifestyle, product education and skin-health guidance.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SkinHealthUpgrade />
        <ProductUpgrade />
      </body>
    </html>
  );
}
