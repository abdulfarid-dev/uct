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
    <main className="flex h-[calc(100svh-78px)] min-h-0 w-full flex-col overflow-hidden bg-white">
      {/* Hero video with fixed overlay heading */}
      <section
        aria-label="Industrial IoT introduction"
        className="relative min-h-0 w-full flex-1 overflow-hidden bg-slate-950"
      >
        {/* Background video */}
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

        {/* Dark overlay for heading readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-slate-950/10" />

        {/* Fixed heading overlay — does not move with the video */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl">
              <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px]">
                Connecting{" "}
                <span className="text-[#65D6C5]">Industries.</span>
                <br />
                Simplifying Monitoring.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos — visible in the same viewport */}
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