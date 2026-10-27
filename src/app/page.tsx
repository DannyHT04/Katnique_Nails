import Image from "next/image";
import { gallery, services, site, type Service } from "@/lib/site";
import { nailSalonJsonLd } from "@/lib/structured-data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#salon", label: "Salon" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

const promises = [
  "Healthy nails first",
  "Sterilized tools",
  "Single-use files & buffers",
  "Never rushed",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nailSalonJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Promises />
        <Salon />
        <Services />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-greige/40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-script text-3xl text-wood">
          Katnique <span className="font-serif text-lg tracking-[0.3em] text-taupe">NAILS</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-charcoal/80 transition hover:text-gold-deep"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          className="eyebrow rounded-full bg-charcoal px-5 py-2.5 text-cream transition hover:bg-wood"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="slat-wall relative overflow-hidden">
      {/* soft cove-light glow along the top, like the ceiling LEDs */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold-soft/40 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="text-center md:text-left">
          <p className="eyebrow text-gold-soft">Good Nails · Brighter Days</p>
          <h1 className="neon mt-4 font-script text-7xl leading-none sm:text-8xl">Katnique</h1>
          <p className="mt-2 font-serif text-2xl tracking-[0.4em] text-cream">NAILS</p>
          <p className="mx-auto mt-6 max-w-md text-lg text-cream/85 md:mx-0">
            Beautiful, welcoming, personal, and never rushed. Because beautiful nails should also
            be healthy nails.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={site.bookingUrl}
              className="eyebrow rounded-full bg-gold px-7 py-3.5 text-charcoal transition hover:bg-gold-soft"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="eyebrow rounded-full border border-cream/50 px-7 py-3.5 text-cream transition hover:border-gold-soft hover:text-gold-soft"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-gold-soft/20 blur-2xl" />
          <Image
            src="/images/wash-station.webp"
            alt="Katnique Nails wash station with a wood slat wall and Good Vibes Only neon sign"
            width={1200}
            height={1600}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 448px, calc(100vw - 32px)"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-gold-soft/30 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <p className="eyebrow text-taupe">About Us</p>
          <h2 className="mt-3 font-serif text-5xl text-charcoal">Meet Katnique</h2>
          <p className="mt-6 font-serif text-2xl italic leading-snug text-wood">
            Beauty brought us to nails. Caring for people made us stay.
          </p>
          <Image
            src="/images/katnique-sign.webp"
            alt="Katnique Nails sign above the nail color selection table"
            width={1600}
            height={1200}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="mt-10 w-full rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-charcoal/85 md:col-span-3">
          <p>
            Welcome to Katnique Nails, a close-knit team of nail professionals who genuinely love
            what we do. Beauty has always been something we&apos;ve loved, but over the years
            we&apos;ve discovered that doing nails is about so much more than creating something
            beautiful.
          </p>
          <p>
            For us, beautiful nails should also be healthy nails. We want every client who sits in
            our chairs to feel confident knowing that we care about the health of your natural
            nails just as much as we care about making them look amazing.
          </p>
          <p>
            Katnique Nails is a reflection of everything we believe a nail experience should be:
            beautiful, welcoming, personal, and never rushed. We love getting to know our clients,
            hearing your stories, sharing laughs, and creating a space where you can relax and
            enjoy a little time for yourself.
          </p>
          <p>
            Many clients first come to us for their nails, but the relationships we build along
            the way are what make this work so special to us.
          </p>
          <p>
            Whether you love something timeless and elegant or you want to have a little fun with
            your nails, our goal is for you to leave feeling beautiful, confident, cared for, and
            excited to come back.
          </p>
          <div className="border-t border-greige pt-6">
            <p>
              Welcome to Katnique Nails. We can&apos;t wait to meet you and create something
              beautiful together.
            </p>
            <p className="mt-4 font-script text-4xl text-wood">The Katnique Nails Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promises() {
  return (
    <section className="bg-linen">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {promises.map((p) => (
          <li key={p} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-taupe text-cream">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="eyebrow text-charcoal">{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Salon() {
  return (
    <section id="salon" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28">
      <div className="text-center">
        <p className="eyebrow text-taupe">Our Salon</p>
        <h2 className="mt-3 font-serif text-5xl">Come Relax With Us</h2>
      </div>
      <div className="mt-12 grid gap-4 md:h-[520px] md:grid-cols-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 md:aspect-auto">
          <Image
            src="/images/salon-floor.webp"
            alt="Katnique Nails salon floor with pedicure chairs, manicure tables and a wall of polish colors"
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:aspect-auto">
          <Image
            src="/images/pedicure-chairs.webp"
            alt="Row of massage pedicure chairs along the wood slat wall"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="text-center">
        <p className="eyebrow text-taupe">Beautiful Nails · Confidence · Community</p>
        <h2 className="mt-3 font-serif text-5xl">Services &amp; Pricing</h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/75">
          Every service begins with a little care for your natural nails.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((group) => (
          <article
            key={group.title}
            className={`rounded-2xl border border-greige/60 bg-white/60 p-7 shadow-sm ${
              group.wide ? "md:col-span-2 lg:col-span-3 lg:p-9" : ""
            }`}
          >
            <h3 className="font-serif text-3xl text-wood">{group.title}</h3>
            {group.tagline && (
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-taupe">
                {group.tagline}
              </p>
            )}
            {group.items.some((item) => item.includes) ? (
              <TierList items={group.items} />
            ) : (
              <ul className={`mt-5 ${group.wide ? "gap-x-12 md:columns-2 lg:columns-3" : ""}`}>
                {group.items.map((item) => (
                  <li key={item.name} className="mb-3.5 break-inside-avoid">
                    <PriceRow item={item} />
                    {item.note && (
                      <p className="mt-1 text-sm leading-snug text-charcoal/75">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {group.footnote && (
              <div className="mt-6 rounded-xl bg-linen px-4 py-3 text-center">
                <p className="font-serif text-2xl text-wood">{group.footnote.title}</p>
                <p className="text-sm text-charcoal/75">{group.footnote.text}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function PriceRow({ item }: { item: Service }) {
  return (
    <div className="flex items-baseline gap-3">
      <span>{item.name}</span>
      <span className="flex-1 translate-y-[-4px] border-b border-dotted border-greige" />
      <span className="whitespace-nowrap font-medium text-gold-deep">{item.price}</span>
    </div>
  );
}

// Side-by-side tiers (e.g. pedicures), with what's included pinned to the bottom of each
function TierList({ items }: { items: Service[] }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex flex-col rounded-xl border border-greige/50 bg-cream/70 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="font-serif text-xl leading-tight text-charcoal">{item.name}</p>
            <p className="text-lg font-medium text-gold-deep">{item.price}</p>
          </div>
          {item.detail && <p className="mt-1 text-sm text-taupe">{item.detail}</p>}
          {item.note && <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal/80">{item.note}</p>}
          {item.includes && (
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {item.includes.map((inc) => (
                <li
                  key={inc}
                  className="rounded-full bg-linen px-3 py-1 text-[0.8rem] text-charcoal/85"
                >
                  {inc}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="eyebrow text-gold-soft">Our Work</p>
          <h2 className="mt-3 font-serif text-5xl text-cream">Nail Gallery</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Timeless and elegant, or a little bit of fun.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-gold-soft underline-offset-8 hover:underline"
          >
            See our latest nail art on Instagram @katniquenails.lv →
          </a>
        </p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-10 rounded-3xl bg-linen p-6 sm:p-12 md:grid-cols-2">
        <div className="flex w-fit max-w-full flex-col">
          <p className="eyebrow text-taupe">Visit Us</p>
          <h2 className="mt-3 font-serif text-4xl">Find Katnique</h2>
          <p className="mt-4 text-charcoal/80">{site.address}</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-wood underline underline-offset-4 hover:text-gold-deep"
          >
            Get directions
          </a>
          <iframe
            src={site.mapEmbedUrl}
            title={`Map to ${site.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-6 min-h-64 w-0 flex-1 min-w-full rounded-2xl border border-greige/70"
          />
        </div>
        <div className="flex flex-col gap-10 md:pt-16">
          <div>
            <p className="eyebrow text-taupe">Hours</p>
            <dl className="mt-5 space-y-3">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between gap-4 border-b border-greige/70 pb-2"
                >
                  <dt>{h.days}</dt>
                  <dd className="text-charcoal/75">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow text-taupe">Appointments</p>
            <p className="mt-5 text-charcoal/80">
              Walk-ins welcome when we have a chair open. We recommend booking ahead so we never
              have to rush.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="eyebrow rounded-full bg-charcoal px-6 py-3.5 text-center text-cream transition hover:bg-wood"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="slat-wall">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-12 text-center sm:px-6">
        <p className="neon font-script text-5xl">Katnique</p>
        <p className="font-serif italic text-cream/80">Beautiful nails. Healthy nails. ♡</p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-cream/40 px-4 py-2 text-sm text-cream transition hover:border-gold-soft hover:text-gold-soft"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
          </svg>
          @katniquenails.lv
        </a>
        <p className="mt-4 text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
