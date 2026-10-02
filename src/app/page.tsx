import Image from "next/image";
import { gallery, services, site } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
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
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Promises />
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
              className="eyebrow text-charcoal/80 transition hover:text-gold"
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
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-3 rounded-[2rem] bg-gold-soft/20 blur-2xl" />
          <Image
            src="/images/station.webp"
            alt="Katnique Nails wash station with warm lighting, wood slat wall and polish shelves"
            width={1312}
            height={1199}
            preload
            className="relative rounded-[1.75rem] border border-gold-soft/30 shadow-2xl"
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
            src="/images/entry.webp"
            alt="Katnique Nails entry wall with framed leaf prints and seating"
            width={358}
            height={454}
            className="mt-10 hidden w-full rounded-2xl object-cover md:block"
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

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="text-center">
        <p className="eyebrow text-taupe">Beautiful Nails · Confidence · Community</p>
        <h2 className="mt-3 font-serif text-5xl">Services &amp; Pricing</h2>
        <p className="mx-auto mt-4 max-w-xl text-charcoal/70">
          Every service begins with a little care for your natural nails.
        </p>
      </div>
      <div className="mt-14 gap-6 md:columns-2 lg:columns-3">
        {services.map((group) => (
          <article
            key={group.title}
            className="mb-6 break-inside-avoid rounded-2xl border border-greige/60 bg-white/60 p-7 shadow-sm"
          >
            <h3 className="font-serif text-3xl text-wood">{group.title}</h3>
            {group.tagline && (
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-taupe">
                {group.tagline}
              </p>
            )}
            <ul className="mt-5 space-y-3.5">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <span>{item.name}</span>
                    <span className="flex-1 translate-y-[-4px] border-b border-dotted border-greige" />
                    <span className="whitespace-nowrap font-medium text-gold">{item.price}</span>
                  </div>
                  {item.note && (
                    <p className="mt-1 text-sm leading-snug text-charcoal/60">{item.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
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
            className="eyebrow text-gold-soft underline-offset-8 hover:underline"
          >
            See our latest nail art on Instagram →
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
            className="mt-3 inline-block text-sm text-wood underline underline-offset-4 hover:text-gold"
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
                  <dd className="text-charcoal/70">{h.time}</dd>
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
        <p className="mt-4 text-xs text-cream/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
