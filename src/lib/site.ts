// Business details in one place. Replace the TODO placeholders before launch.

const address = "10960 S. Eastern Ave. #104, Henderson, NV 89052";

export const site = {
  name: "Katnique Nails",
  phone: "(702) 665-6856",
  phoneHref: "tel:+17026656856",
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Katnique Nails, ${address}`)}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`,
  bookingUrl: "tel:+17026656856", // TODO: swap for online booking link if you get one
  instagram: "https://instagram.com/", // TODO
  hours: [
    { days: "Monday", time: "10:00 AM – 7:00 PM" },
    { days: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { days: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { days: "Thursday", time: "10:00 AM – 7:00 PM" },
    { days: "Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "10:00 AM – 7:00 PM" },
  ],
};

// TODO: replace these Unsplash stock photos with real Katnique work
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=900&q=80`;

export const gallery = [
  { src: unsplash("1519014816548-bf5fe059798b"), alt: "Soft pink manicure" },
  { src: unsplash("1754799670312-8e7da8e40ad7"), alt: "Navy, gold and white nail art" },
  { src: unsplash("1604654894610-df63bc536371"), alt: "Black and tortoiseshell nails with a gold ring" },
  { src: unsplash("1607779097040-26e80aa78e66"), alt: "Mauve, white and silver glitter nails" },
  { src: unsplash("1754799670410-b282791342c3"), alt: "White and pink heart nail design" },
  { src: unsplash("1604654894611-6973b376cbde"), alt: "Black manicure with a silver ring" },
  { src: unsplash("1610992015762-45dca7fa3a85"), alt: "Light pink manicured nails" },
  { src: unsplash("1735236007245-9dc6e28bbe56"), alt: "Blue and white nail art" },
];

export type Service ={ name: string; price: string; note?: string };
export type ServiceGroup = { title: string; tagline?: string; items: Service[] };

export const services: ServiceGroup[] = [
  {
    title: "Manicure",
    tagline: "Clean hands · Healthy nails · Everyday beauty",
    items: [
      {
        name: "Classic Manicure",
        price: "$25",
        note: "Grooming of the nails, hand + arm massage and polish.",
      },
      {
        name: "Deluxe Manicure",
        price: "$45",
        note: "Relax your hand, grooming of the nails, exfoliating scrub, paraffin wax, extended hand + arm massage, and polish.",
      },
      { name: "Gel Manicure", price: "$42" },
    ],
  },
  {
    title: "Pedicures",
    tagline: "Relax · Rejuvenate · You deserve it",
    items: [
      {
        name: "Basic Pedicure",
        price: "$35",
        note: "Standard essential foot care focused on hygiene, nail health, cuticle care, precise nail trimming and a soothing lotion massage.",
      },
      {
        name: "Deluxe Pedicure",
        price: "$55",
        note: "Meticulous grooming, exfoliation, hydrating massage and a flawless polish for a clean, refined and beautifully finished look.",
      },
      {
        name: "Collagen Infusion Therapy",
        price: "$70",
        note: "A softening and smoothing pedicure designed to refine skin texture and restore moisture. Leaves feet silky, comfortable, and beautifully refreshed.",
      },
    ],
  },
  {
    title: "Dipping Powder",
    tagline: "Natural look · Strong hold · Long lasting",
    items: [
      { name: "Dipping on Natural Nails", price: "$50" },
      { name: "Dipping on Natural Nails (with take off)", price: "$55" },
      { name: "Dipping with Tip", price: "$60" },
      { name: "French Dipped on Natural Nails", price: "$65" },
      { name: "French Dipped with Tips", price: "$70" },
    ],
  },
  {
    title: "Acrylic Nails",
    tagline: "Stronger nails · Beautiful results",
    items: [
      { name: "Full Set", price: "$50" },
      { name: "Fill-In", price: "$40" },
      { name: "Full Set with Gel", price: "$60" },
      { name: "Fill-In with Gel", price: "$50" },
      { name: "Full Set Ombre", price: "$70" },
      { name: "Fill-In Ombre", price: "$60" },
      { name: "Hybrid Gel Full Set", price: "$65" },
      { name: "Hybrid Gel Fill-In", price: "$57" },
      { name: "Hard Gel Full Set", price: "$65" },
      { name: "Hard Gel Fill-In", price: "$57" },
    ],
  },
  {
    title: "Press On / Gel X",
    tagline: "Instant style · Durable · Flawless",
    items: [{ name: "Gel X Short Nail with Color", price: "$65" }],
  },
  {
    title: "Kids Services",
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
    title: "Extras",
    items: [
      { name: "Nail Repair (with / without services)", price: "$5 / $10" },
      { name: "Nail Design / Art Cut Down", price: "$5 / $5" },
      { name: "Regular Polish Change (hand / toes)", price: "$20" },
      { name: "Gel Polish Change (hand / toes)", price: "$35" },
      { name: "Nails Take Off without Services", price: "$15" },
      { name: "French / Deep French Services", price: "$10 / $15" },
      { name: "Cat Eye / Ombre / Chrome", price: "$15" },
      { name: "Shape / Length / Add-On Paraffin", price: "$5 / $5 / $10" },
      { name: "Rockstar Glitter", price: "$10" },
      { name: "Cuticle Trim", price: "$10" },
      { name: "Shiny Buff", price: "$5" },
      { name: "Matte Top", price: "$5" },
      { name: "Acrylic Big Toe", price: "$10" },
    ],
  },
  {
    title: "Facial",
    items: [
      { name: "Mini Facial", price: "$50" },
      { name: "Deep Facial", price: "$70" },
    ],
  },
];
