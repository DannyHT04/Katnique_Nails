import { site } from "@/lib/site";

// "10:00 AM" -> "10:00"
function to24h(time: string) {
  const [, h, m, ampm] = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i) ?? [];
  if (!h) return undefined;
  const hour = (Number(h) % 12) + (ampm.toUpperCase() === "PM" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${m}`;
}

// schema.org NailSalon listing so search engines can show address, phone and hours
export function nailSalonJsonLd() {
  const openingHoursSpecification = site.hours.flatMap(({ days, time }) => {
    const [opens, closes] = time.split(/[–-]/).map((t) => to24h(t.trim()));
    return opens && closes ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes }] : [];
  });

  return {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    image: `${site.url}/images/salon-wide.webp`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressParts.street,
      addressLocality: site.addressParts.city,
      addressRegion: site.addressParts.state,
      postalCode: site.addressParts.zip,
      addressCountry: "US",
    },
    hasMap: site.mapsUrl,
    sameAs: [site.instagram],
    potentialAction: {
      "@type": "ReserveAction",
      target: site.bookingUrl,
      name: "Book an appointment",
    },
    openingHoursSpecification,
  };
}
