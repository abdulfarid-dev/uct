import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const clientLogos = [
  { name: "Client 1", src: "/images/leading_1.webp" },
  { name: "Client 2", src: "/images/leading_2.webp" },
  { name: "Client 3", src: "/images/leading_4.webp" },
  { name: "Client 4", src: "/images/leading_7.webp" },
  { name: "Client 5", src: "/images/leading_6.webp" },
  { name: "Client 6", src: "/images/leading_13.webp" },
  { name: "Client 7", src: "/images/leading_14.webp" },
];

export default function HeroSection() {
  return (
    <main className="flex h-[calc(100svh-72px)] min-h-0 w-full flex-col overflow-hidden bg-white lg:h-[calc(100svh-78px)]">
      {/* HERO VIDEO */}
      <section
        aria-label="Industrial IoT introduction"
        className="relative min-h-0 w-full flex-1 overflow-hidden bg-slate-950"
      >
        <video
          className="absolute inset-0 h-full w-full object-contain md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/industrial-hero.mp4" type="video/mp4" />
        </video>

        {/* Readability overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/30 to-transparent" />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="max-w-4xl">
              <h1 className="text-[25px] font-semibold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl md:text-[44px] lg:text-[52px]">
                Connecting Industries.
                <br />
                <span className="font-bold text-[#FDE047]">
                  Powering Industrial IoT.
                </span>
              </h1>

              <div className="mt-5 sm:mt-7">
                <Link
                  href="/about-us"
                  className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#FDE047] px-5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 sm:h-11 sm:px-6"
                >
                  Learn More
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section
        id="industries"
        aria-label="Our valued clients"
        className="flex h-[78px] shrink-0 items-center border-t border-slate-200 bg-white px-2 sm:h-[100px] sm:px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-2 text-center text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:mb-3 sm:text-[11px]">
            Our Valued Clients
          </h2>

          <div className="grid grid-cols-7 items-center gap-1 sm:gap-5 lg:gap-8">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="relative h-5 min-w-0 w-full sm:h-8 lg:h-9"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="14vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}