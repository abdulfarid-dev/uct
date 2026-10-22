import Image from "next/image";

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
    <main className="flex h-[calc(100svh-80px)] min-h-0 w-full flex-col overflow-hidden bg-white">
      {/* HERO VIDEO: takes all remaining space */}
      <section
        aria-label="Industrial IoT hero video"
        className="relative min-h-0 w-full flex-1 overflow-hidden bg-black"
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
      </section>

      {/* CLIENT LOGOS: always visible at the bottom */}
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