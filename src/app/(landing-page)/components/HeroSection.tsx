"use client";

import Image from "next/image";
import { farmsData } from "./farmsData";
import BookingForm from "./BookingForm";
import { Container } from "@/src/components/sectionComponants";
import { FiUsers } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { GiCampfire } from "react-icons/gi";
import { MdOutlineSoupKitchen } from "react-icons/md";

const HeroSection = () => {
  const { hero } = farmsData;

  const pillIcons = [
    <FiUsers key="users" className="text-sm opacity-90" />,
    <IoWaterOutline key="pool" className="text-base opacity-90" />,
    <GiCampfire key="bonfire" className="text-base opacity-90" />,
    <MdOutlineSoupKitchen key="kitchen" className="text-base opacity-90" />,
  ];

  return (
    <div className="w-full">
      {/* 1. FULL-WIDTH HERO IMAGE BANNER (Exact Figma height 780px on desktop, min-h-[100svh] on mobile) */}
      <section className="relative w-full min-h-[100svh] sm:min-h-0 sm:h-[780px] py-12 sm:py-0 flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE - FULL BLEED EDGE TO EDGE */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.bgImage}
            alt="Private farmhouse in Gurugram with pool"
            fill
            priority
            className="object-cover object-center"
          />
          {/* VIGNETTE GRADIENTS */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
        </div>

        {/* HERO INNER CONTENT */}
        <Container className="relative z-10 text-center !max-w-6xl">
          <div className="w-full mx-auto">
            {/* SUBTITLE */}
            <p
              className="text-[11px] sm:text-[13px] tracking-[0.2em] sm:tracking-[0.25em] text-[#EBD9B4] uppercase font-medium mb-3 sm:mb-5 max-w-[280px] sm:max-w-none mx-auto"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              PRIVATE FARMHOUSE STAYS · <br className="sm:hidden" />
              GURGAON & SOHNA
            </p>

            {/* HEADLINE */}
            <h1
              className="text-[32px] sm:text-5xl md:text-[60px] lg:text-[70px] text-[#FFFDF6] tracking-[-0.01em] leading-[110%] sm:leading-[104%] font-medium"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              <span className="block md:whitespace-nowrap">
                Private farmhouses in{" "}
                <br className="sm:hidden" />
                Gurugram,
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

            {/* DESCRIPTION */}
            <p
              className="mt-3.5 sm:mt-4 max-w-[340px] sm:max-w-5xl mx-auto text-[14px] sm:text-[20px] text-[#FFFDF6] leading-[150%] sm:leading-[160%]"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
              }}
            >
              Two premium stays for 25+ guests, private pool, sprawling lawns, bonfire evenings and a fully equipped kitchen. Just your{" "}
              <span className="sm:block">people, and nobody else.</span>
            </p>

            {/* 4 FEATURE PILLS (MOBILE: 2x2 GRID | DESKTOP: FLEX ROW) */}
            <div className="mt-5 sm:mt-7 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-[340px] sm:max-w-none mx-auto">
              {hero.pills.map((pill, idx) => (
                <span
                  key={pill}
                  className="h-[38px] sm:h-[42px] px-3 sm:px-4 py-1.5 sm:py-[9px] rounded-full border border-white/40 bg-white/10 backdrop-blur-[2px] text-[#FFFDF6] flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs text-[13px] sm:text-[15px] font-normal leading-none tracking-normal"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <span className="text-[#FFFDF6] text-sm sm:text-base shrink-0">{pillIcons[idx]}</span>
                  <span className="whitespace-nowrap">{pill}</span>
                </span>
              ))}
            </div>

            {/* COLLECTION CAPTION */}
            <p
              className="mt-5 text-[12px] sm:text-[14px] text-[#E2D6C1] tracking-[0.04em] leading-[140%] sm:leading-none font-normal max-w-[300px] sm:max-w-none mx-auto"
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

      {/* 2. BOOKING FORM BAR (Sits directly on light cream background without outer box as in Figma) */}
      <section className="w-full bg-[#FFFDF6] py-7 sm:py-8 lg:py-9">
        <Container className="!max-w-[1380px] px-4 sm:px-6">
          <BookingForm />
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
