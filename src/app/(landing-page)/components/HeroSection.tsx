"use client";

import Image from "next/image";
import { farmsData } from "./farmsData";
import BookingForm from "./BookingForm";
import { Container, SectionWithContainer } from "@/src/components/sectionComponants";
import { guestIcon, poolIcon, bonfireIcon, kitchenIcon } from "@/src/utils/icon";

const HeroSection = () => {
  const { hero } = farmsData;

  const pillIcons = [
    <span key="guest" className="shrink-0">{guestIcon()}</span>,
    <span key="pool" className="shrink-0">{poolIcon()}</span>,
    <span key="bonfire" className="shrink-0">{bonfireIcon()}</span>,
    <span key="kitchen" className="shrink-0">{kitchenIcon()}</span>,
  ];

  return (
    <div className="w-full">
      {/* Hero Image Banner */}
      <section className="relative w-full pt-24 pb-20 xs:pt-28 xs:pb-24 min-h-[500px] xs:min-h-[520px] sm:min-h-0 sm:py-0 sm:h-[780px] flex flex-col justify-end sm:justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.bgImage}
            alt="Private farmhouse in Gurugram with pool"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <Container className="fade-up relative z-10 text-left sm:text-center">
          <div className="w-full mx-0 sm:mx-auto">
            {/* Subtitle */}
            <p
              className="text-[11px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.25em] text-[#EBD9B4] uppercase font-medium mb-3 sm:mb-5 whitespace-nowrap sm:whitespace-normal max-w-none sm:mx-auto"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              <span className="sm:hidden">PRIVATE FARMHOUSES · GURGAON & SOHNA</span>
              <span className="hidden sm:inline">
                PRIVATE FARMHOUSE STAYS · GURGAON & SOHNA
              </span>
            </p>

            {/* Headline (Mobile) */}
            <h1
              className="sm:hidden text-[26px] xs:text-[28px] text-[#FFFDF6] tracking-[-0.01em] leading-[115%] font-medium text-left"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              <span className="block">Private farmhouses</span>
              <span className="block">
                <span>in Gurugram, </span>
                <span
                  className="italic text-[#EBD9B4]"
                  style={{
                    fontFamily: "'Playfair Display', var(--font-playfair), serif",
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  with a
                </span>
              </span>
              <span
                className="block italic text-[#EBD9B4] whitespace-nowrap mt-0.5"
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair), serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                pool all to yourselves.
              </span>
            </h1>

            {/* Headline (Desktop) */}
            <h1
              className="hidden sm:block text-5xl md:text-[60px] lg:text-[70px] text-[#FFFDF6] tracking-[-0.01em] leading-[104%] font-medium"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              <span className="block md:whitespace-nowrap">
                Private farmhouses{" "}
                <br className="sm:hidden" />
                in Gurugram,
              </span>
              <span
                className="block italic text-[#EBD9B4] md:whitespace-nowrap mt-1"
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair), serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                with a pool all to{" "}
                <br className="sm:hidden" />
                yourselves.
              </span>
            </h1>

            {/* Description */}
            <p
              className="hidden sm:block mt-3.5 sm:mt-4 max-w-[340px] sm:max-w-5xl mx-auto text-[14px] sm:text-[20px] text-[#FFFDF6] leading-[150%] sm:leading-[160%]"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
              }}
            >
              Two premium stays for 25+ guests, private pool, sprawling lawns, bonfire evenings and a fully equipped kitchen. Just your{" "}
              <span className="sm:block">people, and nobody else.</span>
            </p>

            {/* Feature Pills */}
            <div className="mt-4 sm:mt-7 flex flex-wrap items-center justify-start sm:justify-center gap-1.5 xs:gap-2 sm:gap-3 max-w-[350px] sm:max-w-none mx-0 sm:mx-auto">
              {hero.pills.map((pill, idx) => (
                <span
                  key={pill}
                  className="h-[32px] sm:h-[42px] px-3.5 sm:px-4 py-1.5 sm:py-[9px] rounded-full border border-white/30 bg-white/10 backdrop-blur-[2px] text-[#FFFDF6] flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs text-[12px] sm:text-[15px] font-normal leading-none tracking-normal"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <span className="text-[#FFFDF6] text-sm sm:text-base shrink-0 hidden sm:inline">
                    {pillIcons[idx]}
                  </span>
                  <span className="whitespace-nowrap">{pill}</span>
                </span>
              ))}
            </div>

            {/* Collection Caption */}
            <p
              className="hidden sm:block mt-5 text-[12px] sm:text-[14px] text-[#E2D6C1] tracking-[0.04em] leading-[140%] sm:leading-none font-normal max-w-[300px] sm:max-w-none mx-auto"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
              }}
            >
              A City Focus collection · Crystal Farmhouse &{" "}
              <br className="sm:hidden" />
              Sukoon Farmhouse
            </p>
          </div>
        </Container>
      </section>

      {/* Booking Form Bar */}
      <section className="w-full -mt-12 sm:mt-0 bg-transparent sm:bg-[#FFFDF6] pb-8 sm:py-8 lg:py-9 relative z-20">
        <Container className="px-3.5 sm:px-6 lg:px-8">
          <div className="fade-up delay-150">
            <BookingForm />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
