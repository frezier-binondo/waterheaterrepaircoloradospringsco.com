import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { SITE_NAME, PHONE_NUMBER, FORMATTED_PHONE, SITE_URL } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Water Heater Repair in Colorado Springs, CO",
    template: "%s",
  },
  description: "Prompt, certified water heater repair, replacement, and tankless maintenance across Colorado Springs, Fountain, Manitou Springs, and El Paso County. Call (456) 789-0123 for immediate 24/7 dispatch.",
  keywords: [
    "water heater repair Colorado Springs",
    "emergency water heater repair Colorado Springs",
    "tankless water heater repair Colorado Springs",
    "hot water heater installation Colorado Springs",
    "water heater replacement Colorado Springs CO",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Water Heater Repair in Colorado Springs, CO | 24/7 Local Dispatch",
    description: "Fast water heater repair and installation across Colorado Springs. Certified local technicians for gas, electric, and tankless systems.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": SITE_NAME,
    "image": `${SITE_URL}/images/img-6-technician-portrait.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+14567890123",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pikes Peak Ave",
      "addressLocality": "Colorado Springs",
      "addressRegion": "CO",
      "postalCode": "80903",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.833881,
      "longitude": -104.821363
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Colorado Springs" },
      { "@type": "City", "name": "Fountain" },
      { "@type": "City", "name": "Security-Widefield" },
      { "@type": "City", "name": "Cimarron Hills" },
      { "@type": "City", "name": "Manitou Springs" },
      { "@type": "City", "name": "Monument" }
    ],
    "sameAs": [
      "https://maps.app.goo.gl/tVdCkUpzTeZaG4Ne9"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased bg-white text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
