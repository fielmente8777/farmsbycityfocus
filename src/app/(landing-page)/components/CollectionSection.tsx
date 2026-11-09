"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { farmsData, FarmhouseCard } from "./farmsData";
import { FiMapPin, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useWebContext } from "@/src/context-api/WebContext";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const FarmhouseCardItem = ({ card }: { card: FarmhouseCard }) => {
  const [activeImage, setActiveImage] = useState(card.mainImage);
  const { setIsOpenFormPopUp } = useWebContext();

  const handleBookNow = () => {
    const formElem = document.getElementById("booking-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsOpenFormPopUp(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi City Focus Team, I am interested in booking ${card.name}. Please share details and availability.`
  );

  return (
    <div className="bg-white rounded-3xl border border-[#EBD9B4]/60 shadow-[0_4px_24px_rgba(58,36,6,0.06)] hover:shadow-[0_8px_30px_rgba(58,36,6,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* IMAGERY CONTAINER (Exact 10px spacing from card border) */}
      <div className="p-[10px] pb-0">
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#F6F0E2] group cursor-pointer">
          <Image
            src={activeImage}
            alt={card.name}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          {/* BADGE (White pill with dark text) */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#3A2406] text-[11px] uppercase tracking-wider font-medium px-3.5 py-1.5 rounded-full border border-stone-200/50 shadow-xs font-[family-name:var(--font-jost)] z-10">
            {card.badge}
          </div>
        </div>

        {/* 3 THUMBNAILS ROW */}
        <div className="grid grid-cols-3 gap-[10px] mt-[10px]">
          {card.thumbs.map((thumb, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(thumb)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition cursor-pointer group ${
                activeImage === thumb
                  ? "border-[#3A2406]"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={thumb}
                alt={`${card.name} thumbnail ${i + 1}`}
                fill
                className="object-cover group-hover:scale-112 transition-transform duration-500 ease-out"
              />
            </button>
          ))}
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="px-5 sm:px-6 lg:px-7 pt-0 pb-5 sm:pb-6 lg:pb-7 flex-1 flex flex-col justify-between">
        <div>
          {/* TITLE (Exact 32px spacing from thumbnails) */}
          <h3
            className="mt-8 text-2xl sm:text-[38px] font-medium text-[#3A2406] tracking-normal leading-[110%]"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
            }}
          >
            {card.name}
          </h3>

          {/* LOCATION */}
          <div
            className="mt-2 flex items-center gap-2 text-[15px] text-[#7A6B56] font-normal leading-[150%] tracking-normal"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
          >
            <FiMapPin className="shrink-0 text-[#7A6B56] text-sm" />
            <span>{card.location}</span>
          </div>

          {/* TAGLINE */}
          <p
            className="mt-3 text-[20px] text-[#3A2406] font-medium italic leading-[140%] tracking-normal"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            {card.tagline}
          </p>

          {/* FEATURE PILLS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {card.pills.map((pill) => (
              <span
                key={pill}
                className="bg-[#F6F0E2] text-[#3A2406] text-[14px] px-3.5 py-2 rounded-xl font-normal leading-none tracking-normal border border-[#EBD9B4]/40"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 400,
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="border-t border-[#EBD9B4]/50 my-4" />

          {/* CHECKLIST (2 COLUMNS) */}
          <div
            className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[16px] text-[#3A2406] font-normal leading-[150%] tracking-normal"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 400,
            }}
          >
            {card.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <FiCheck className="shrink-0 text-[#3A2406] text-sm stroke-[2.5]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* BEST FOR */}
          <p
            className="mt-3.5 text-[15px] leading-[150%] tracking-normal"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
            }}
          >
            <span className="font-medium text-[#3A2406]">Best for:</span>{" "}
            <span className="font-normal text-[#6B5F4C]">{card.bestFor}</span>
          </p>
        </div>

        {/* CARD FOOTER */}
        <div>
          <div className="border-t border-[#EBD9B4]/50 my-4" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs sm:text-sm text-[#7A6B56] font-normal font-[family-name:var(--font-jost)] shrink-0">
                From
              </span>
              <span
                className="bg-[#EEDEC5] text-[#3A2406] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[20px] sm:text-[26px] font-medium leading-[120%] tracking-normal border border-[#E0CFB5] inline-flex items-center whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 500,
                }}
              >
                {card.price}
              </span>
              <span className="text-xs sm:text-sm text-[#7A6B56] font-normal font-[family-name:var(--font-jost)] shrink-0 whitespace-nowrap">
                / night
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                href={`https://wa.me/+91xxxxxxxxxx?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-[#DCCFB6] text-[#25D366] hover:bg-[#FAF7F0] transition flex items-center justify-center text-xl shadow-2xs shrink-0"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </Link>

              <button
                onClick={handleBookNow}
                className="flex-1 sm:flex-initial bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)] h-10 whitespace-nowrap"
              >
                <span>Book Now</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionSection = () => {
  const { collection } = farmsData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] py-16 sm:py-24"
      containerClassName="!max-w-7xl"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-14">
        <div>
          <span
            className="text-[13px] uppercase tracking-[0.24em] text-[#8A6A3A] font-medium block mb-3 leading-none"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
          >
            {collection.tag}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-[52px] text-[#3A2406] tracking-normal leading-[108%] font-medium"
            style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 500 }}
          >
            Two farmhouses.{" "}
            <span
              className="italic"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              One
            </span>
            <span
              className="block italic"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              standard of luxury.
            </span>
          </h2>
        </div>

        <p
          className="max-w-[440px] text-[17px] text-[#6B5F4C] font-normal leading-[160%] tracking-normal"
          style={{
            fontFamily: "var(--font-jost), sans-serif",
            fontWeight: 400,
          }}
        >
          {collection.description}
        </p>
      </div>

      {/* 2 PROPERTY CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {collection.farmhouses.map((card) => (
          <FarmhouseCardItem key={card.id} card={card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CollectionSection;
