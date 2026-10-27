// Business details in one place. Replace the TODO placeholders before launch.

const addressParts = {
  street: "10960 S. Eastern Ave. #104",
  city: "Henderson",
  state: "NV",
  zip: "89052",
};
const address = `${addressParts.street}, ${addressParts.city}, ${addressParts.state} ${addressParts.zip}`;

// Set NEXT_PUBLIC_SITE_URL once there's a custom domain; Vercel's production URL is the fallback
const url =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Katnique Nails",
  url,
  description:
    "Katnique Nails is a welcoming nail salon in Henderson, NV offering manicures, pedicures, gel, dip powder, acrylics and nail art. Beautiful nails should also be healthy nails.",
  phone: "(702) 665-6856",
  phoneHref: "tel:+17026656856",
  address,
  addressParts,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Katnique Nails, ${address}`)}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`,
  bookingUrl: "tel:+17026656856", // TODO: swap for online booking link if you get one
  instagram: "https://www.instagram.com/katniquenails.lv/",
  hours: [
    { days: "Monday", time: "10:00 AM – 7:00 PM" },
    { days: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { days: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { days: "Thursday", time: "10:00 AM – 7:00 PM" },
    { days: "Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

// Photos live in public/images/gallery/. Add a file there and a line here to show it.
export const gallery = [
  { src: "/images/gallery/01.webp", alt: "Copper and burgundy cat-eye almond nails" },
  { src: "/images/gallery/02.webp", alt: "Short square nails with a soft pink ombré and white chevron lines" },
  { src: "/images/gallery/03.webp", alt: "Black cherry stiletto nails with white 3D accent nails and red heart gems" },
  { src: "/images/gallery/04.webp", alt: "Square nude nails with deep purple shimmer French tips" },
  { src: "/images/gallery/05.webp", alt: "Sheer pink almond nails" },
  { src: "/images/gallery/06.webp", alt: "Black and red cat-eye nails with a matching black pedicure" },
  { src: "/images/gallery/07.webp", alt: "Long nude coffin nails with a gold glitter fade" },
  { src: "/images/gallery/08.webp", alt: "Dark green cat-eye stiletto nails" },
  { src: "/images/gallery/09.webp", alt: "Nude nails with black French tips" },
  { src: "/images/gallery/10.webp", alt: "Black and nude nails with ghost and spiderweb Halloween art" },
  { src: "/images/gallery/11.webp", alt: "Almond nails with a sheer-to-plum ombré" },
  { src: "/images/gallery/12.webp", alt: "Black and red cat-eye square nails" },
];

export type Service = {
  name: string;
  price: string;
  detail?: string; // short label after the name, e.g. massage length
  note?: string;
  includes?: string[];
};
export type ServiceGroup = {
  title: string;
  tagline?: string;
  items: Service[];
  footnote?: { title: string; text: string };
  wide?: boolean; // spans the full width of the menu on desktop
};

export const services: ServiceGroup[] = [
  {
    title: "Manicure",
    tagline: "Clean hands · Healthy nails · Everyday beauty",
    items: [
      {
        name: "Classic Manicure",
        price: "$27",
        note: "Grooming of the nails, hand + arm massage and polish.",
      },
      {
        name: "Deluxe Manicure",
        price: "$43",
        note: "Relax your hand, grooming of the nails, exfoliating scrub, extended hand + arm massage, and polish.",
      },
      { name: "Gel Manicure", price: "$45" },
    ],
  },
  {
    title: "Artificial Nails",
    items: [
      { name: "Gel X / Hardgel Full Set", price: "$65" },
      { name: "Gel X / Hardgel Fill", price: "$55" },
      { name: "Acrylic Powder Full Set", price: "$60" },
      { name: "Acrylic Powder Fill", price: "$50" },
      { name: "Dipping Powder", price: "$50" },
      { name: "Dipping Powder w/ Removal", price: "$55" },
    ],
  },
  {
    title: "Kid's Services",
    tagline: "10 years and younger",
    items: [
      { name: "Manicure", price: "$15" },
      { name: "Pedicure", price: "$25" },
      { name: "Gel Manicure", price: "$35" },
      { name: "Gel Pedicure", price: "$40" },
      { name: "Hand or Toes Gel", price: "$25" },
      { name: "Hand or Toes Polish", price: "$15" },
    ],
  },
  {
    title: "Pedicure",
    wide: true,
    tagline: "Relax · Rejuvenate · You deserve it",
    items: [
      {
        name: "Basic Pedicure",
        detail: "5 min massage",
        price: "$35",
        note: "Cuticle care, precise nail trimming, exfoliating scrub, and a soothing lotion massage.",
        includes: ["Exfoliating Scrub", "Lotion Treatment", "Hot Towel", "Add On Callus Treatment +$10"],
      },
      {
        name: "Deluxe Pedicure",
        detail: "7 min massage",
        price: "$55",
        note: "An essential, precision-focused treatment featuring meticulous grooming, exfoliation, a hydrating massage, and a flawlessly clean finish.",
        includes: ["Callus Treatment", "Exfoliating Scrub", "Hot Towel & Mask"],
      },
      {
        name: "Luxury Pedicure",
        detail: "10 min massage",
        price: "$70",
        note: "A softening and smoothing pedicure designed to refine skin texture and restore moisture. Leaves the feet feeling silky, comfortable, and beautifully nourished.",
        includes: ["Callus Treatment", "Exfoliating Scrub", "Hot Stone Therapy", "Paraffin"],
      },
      {
        name: "Royal Pedicure",
        detail: "15 min massage",
        price: "$85",
        note: "Mineral-rich volcanic therapy is designed to deeply restore and warm tired muscles, enhance circulation, and provide grounding comfort. Infused with nourishing minerals, it also helps revitalize the skin.",
        includes: ["Callus Treatment", "Exfoliating Scrub", "Hot Stone Therapy", "15 Minutes Massage", "Hot Towel & Mask"],
      },
    ],
    footnote: { title: "+ $20 for Gel", text: "Add gel polish to any pedicure service for $20." },
  },
  {
    title: "Additional Services",
    wide: true,
    items: [
      { name: "Nail Repair", price: "$10+" },
      { name: "Shiny Buff", price: "$5+" },
      { name: "Nail Design", price: "$5+" },
      { name: "Nail Art Cut Down", price: "$3+" },
      { name: "Regular Polish Change (hand / toes)", price: "$20+" },
      { name: "Gel Polish Change (hand / toes)", price: "$35+" },
      { name: "Nails Take Off without Services", price: "$15+" },
      { name: "French", price: "$10+" },
      { name: "Deep French", price: "$10+" },
      { name: "Cat Eye", price: "$10" },
      { name: "Ombre", price: "$15+" },
      { name: "Chrome", price: "$10" },
      { name: "Length", price: "$5+" },
      { name: "Add On Paraffin", price: "$10+" },
    ],
  },
];
