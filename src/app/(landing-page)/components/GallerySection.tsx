"use client";

import { useState } from "react";
import Image from "next/image";
import { farmsData, GalleryItem } from "./farmsData";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const ImageCard = ({
  item,
  className = "",
}: {
  item: GalleryItem;
  className?: string;
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden group shadow-sm bg-[#F6F0E2] cursor-pointer ${className}`}
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

    {/* WHITE PILL BADGE */}
    <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5">
      <span
        className="bg-white/95 text-[#3A2406] text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full shadow-2xs border border-white/50 backdrop-blur-[2px] block"
        style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
      >
        {item.title.toUpperCase()}
      </span>
    </div>
  </div>
);

const GallerySection = () => {
  const { gallery } = farmsData;
  const [activeTab, setActiveTab] = useState<"all" | "crystal" | "sukoon">(
    "all"
  );

  const filteredItems = gallery.items.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  // Specific items mapped for the exact Figma 7-image mosaic
  const sukoonPool = gallery.items.find((i) => i.id === "2") || gallery.items[1];
  const crystalPool = gallery.items.find((i) => i.id === "1") || gallery.items[0];
  const crystalBonfire = gallery.items.find((i) => i.id === "3") || gallery.items[2];
  const sukoonGazebo = gallery.items.find((i) => i.id === "4") || gallery.items[3];
  const sukoonGames = gallery.items.find((i) => i.id === "5") || gallery.items[4];
  const sukoonLiving = gallery.items.find((i) => i.id === "6") || gallery.items[5];
  const crystalCabana = gallery.items.find((i) => i.id === "7") || gallery.items[6];

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] py-16 sm:py-24"
      containerClassName=""
    >
      {/* HEADER & FILTER TABS */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          {/* TAG */}
          <span
            className="block uppercase text-[#8A6A3A] font-medium mb-3"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "100%",
              letterSpacing: "0.24em",
              color: "#8A6A3A",
              textTransform: "uppercase",
            }}
          >
            {gallery.tag}
          </span>

          {/* TITLE */}
          <h2
            className="text-3xl sm:text-4xl md:text-[52px] text-[#3A2406] leading-[108%]"
            style={{
              fontFamily: "'Playfair Display', var(--font-playfair), serif",
              fontWeight: 500,
              lineHeight: "108%",
            }}
          >
            {gallery.title}
          </h2>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-full border border-[#DCCFB6] w-fit">
          {(["all", "crystal", "sukoon"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition cursor-pointer ${
                activeTab === tab
                  ? "bg-[#3A2406] text-[#FFFDF6] shadow-2xs"
                  : "text-[#7A6B56] hover:text-[#3A2406]"
              }`}
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              {tab === "all" ? "All" : tab === "crystal" ? "Crystal" : "Sukoon"}
            </button>
          ))}
        </div>
      </div>

      {/* PHOTO GRID */}
      {activeTab === "all" ? (
        <div className="space-y-3.5 sm:space-y-4">
          {/* ROW 1: 5 cols + 4 cols (stacked) + 3 cols = 12 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
            {/* LEFT: SUKOON POOL (Large Landscape) */}
            <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
              <ImageCard item={sukoonPool} className="w-full h-full" />
            </div>

            {/* MIDDLE: 2 STACKED IMAGES */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
              <div className="flex-1 min-h-0">
                <ImageCard item={crystalPool} className="w-full h-full" />
              </div>
              <div className="flex-1 min-h-0">
                <ImageCard item={crystalBonfire} className="w-full h-full" />
              </div>
            </div>

            {/* RIGHT: SUKOON GAZEBO (Tall Vertical) */}
            <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
              <ImageCard item={sukoonGazebo} className="w-full h-full" />
            </div>
          </div>

          {/* ROW 2: 3 cols + 6 cols (Wide) + 3 cols = 12 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[230px]">
            {/* LEFT: SUKOON GAMES */}
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard item={sukoonGames} className="w-full h-full" />
            </div>

            {/* MIDDLE: SUKOON LIVING (Wide Landscape) */}
            <div className="sm:col-span-2 lg:col-span-6 h-[220px] sm:h-[240px] lg:h-full">
              <ImageCard item={sukoonLiving} className="w-full h-full" />
            </div>

            {/* RIGHT: CRYSTAL CABANA */}
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard item={crystalCabana} className="w-full h-full" />
            </div>
          </div>
        </div>
      ) : (
        /* FILTERED VIEW: CLEAN GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="aspect-[4/3]">
              <ImageCard item={item} className="w-full h-full" />
            </div>
          ))}
        </div>
      )}
    </SectionWithContainer>
  );
};

export default GallerySection;