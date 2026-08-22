import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahsoom's Lifestyle Centre | Nutrition, Fitness & Self-Care",
  description:
    "Personalised nutrition, healthy-weight guidance, active lifestyle support and skin self-care at Mahsoom's Lifestyle Centre.",
  keywords: [
    "nutrition club Kerala",
    "healthy weight coaching Kerala",
    "fitness lifestyle centre",
    "Herbalife nutrition guidance",
    "skin care Kerala",
  ],
  openGraph: {
    title: "Mahsoom's Lifestyle Centre",
    description: "The Heritage Hub of the Changed People.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
