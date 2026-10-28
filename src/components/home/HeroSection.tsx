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
    <main className="flex h-[calc(100svh-78px)] min-h-0 w-full flex-col overflow-hidden bg-white">
      {/* HERO VIDEO */}
      <section
        aria-label="Industrial IoT introduction"
        className="relative min-h-0 w-full flex-1 overflow-hidden bg-slate-950"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/industrial-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/15" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl">
              <h1 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-4xl md:text-[44px] lg:text-[52px]">
                Connecting Industries.
                <br />
                <span className="font-bold text-[#FDE047]">
                  Powering Industrial IoT.
                </span>
              </h1>

              {/* Learn More Button */}
              <div className="mt-6 sm:mt-7">
                <Link
                  href="/about-us"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#FDE047] px-6 text-sm font-semibold text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Learn More
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-1"
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
        className="flex h-[88px] shrink-0 items-center border-t border-slate-200 bg-white px-3 sm:h-[100px] sm:px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-2 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mb-3 sm:text-[11px]">
            Our Valued Clients
          </h2>

          <div className="grid grid-cols-7 items-center gap-2 sm:gap-5 lg:gap-8">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="relative h-6 w-full sm:h-8 lg:h-9"
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