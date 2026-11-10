"use client";

import { useState } from "react";
import Image from "next/image";
import { farmsData, GalleryItem } from "./pagedata";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const ImageCard = ({
  item,
  className = "",
  overlay,
}: {
  item: GalleryItem;
  className?: string;
  overlay?: React.ReactNode;
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden group shadow-sm bg-[#F6F0E2] cursor-pointer ${className}`}
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

    {/* Badge */}
    <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5">
      <span
        className="bg-white/95 text-[#3A2406] text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full shadow-2xs border border-white/50 backdrop-blur-[2px] block"
        style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
      >
        {item.title.toUpperCase()}
      </span>
    </div>

    {overlay}
  </div>
);

const MosaicBlock = ({
  chunk,
  blockIndex = 0,
  overlayOnLast = false,
  overlayContent,
}: {
  chunk: GalleryItem[];
  blockIndex?: number;
  overlayOnLast?: boolean;
  overlayContent?: React.ReactNode;
}) => {
  const isMirrored = blockIndex % 2 === 1;

  if (chunk.length === 7) {
    if (!isMirrored) {
      return (
        <div className="space-y-3.5 sm:space-y-4">
          {/* Row 1 (4 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
            <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
              <ImageCard item={chunk[0]} className="w-full h-full" />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
              <div className="flex-1 min-h-0">
                <ImageCard item={chunk[1]} className="w-full h-full" />
              </div>
              <div className="flex-1 min-h-0">
                <ImageCard item={chunk[2]} className="w-full h-full" />
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
              <ImageCard item={chunk[3]} className="w-full h-full" />
            </div>
          </div>

          {/* Row 2 (3 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[230px]">
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard item={chunk[4]} className="w-full h-full" />
            </div>
            <div className="sm:col-span-2 lg:col-span-6 h-[220px] sm:h-[240px] lg:h-full">
              <ImageCard item={chunk[5]} className="w-full h-full" />
            </div>
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard
                item={chunk[6]}
                className="w-full h-full"
                overlay={overlayOnLast ? overlayContent : undefined}
              />
            </div>
          </div>
        </div>
      );
    } else {
      // Mirrored layout for odd blocks
      return (
        <div className="space-y-3.5 sm:space-y-4">
          {/* Row 1 (Mirrored) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
            <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
              <ImageCard item={chunk[0]} className="w-full h-full" />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
              <div className="flex-1 min-h-0">
                <ImageCard item={chunk[1]} className="w-full h-full" />
              </div>
              <div className="flex-1 min-h-0">
                <ImageCard item={chunk[2]} className="w-full h-full" />
              </div>
            </div>

            <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
              <ImageCard item={chunk[3]} className="w-full h-full" />
            </div>
          </div>

          {/* Row 2 (Mirrored) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[230px]">
            <div className="sm:col-span-2 lg:col-span-6 h-[220px] sm:h-[240px] lg:h-full">
              <ImageCard item={chunk[4]} className="w-full h-full" />
            </div>
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard item={chunk[5]} className="w-full h-full" />
            </div>
            <div className="lg:col-span-3 h-[200px] sm:h-[220px] lg:h-full">
              <ImageCard
                item={chunk[6]}
                className="w-full h-full"
                overlay={overlayOnLast ? overlayContent : undefined}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  // 6 items
  if (chunk.length === 6) {
    return (
      <div className="space-y-3.5 sm:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
          <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
            <ImageCard item={chunk[0]} className="w-full h-full" />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
            <div className="flex-1 min-h-0">
              <ImageCard item={chunk[1]} className="w-full h-full" />
            </div>
            <div className="flex-1 min-h-0">
              <ImageCard item={chunk[2]} className="w-full h-full" />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
            <ImageCard item={chunk[3]} className="w-full h-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 h-auto sm:h-[240px] lg:h-[230px]">
          <div className="h-[200px] sm:h-full">
            <ImageCard item={chunk[4]} className="w-full h-full" />
          </div>
          <div className="h-[200px] sm:h-full">
            <ImageCard
              item={chunk[5]}
              className="w-full h-full"
              overlay={overlayOnLast ? overlayContent : undefined}
            />
          </div>
        </div>
      </div>
    );
  }

  // 5 items
  if (chunk.length === 5) {
    return (
      <div className="space-y-3.5 sm:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
          <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
            <ImageCard item={chunk[0]} className="w-full h-full" />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
            <div className="flex-1 min-h-0">
              <ImageCard item={chunk[1]} className="w-full h-full" />
            </div>
            <div className="flex-1 min-h-0">
              <ImageCard item={chunk[2]} className="w-full h-full" />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
            <ImageCard item={chunk[3]} className="w-full h-full" />
          </div>
        </div>

        <div className="h-[220px] sm:h-[260px]">
          <ImageCard
            item={chunk[4]}
            className="w-full h-full"
            overlay={overlayOnLast ? overlayContent : undefined}
          />
        </div>
      </div>
    );
  }

  // 4 items
  if (chunk.length === 4) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:h-[440px]">
        <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full">
          <ImageCard item={chunk[0]} className="w-full h-full" />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 h-[320px] lg:h-full">
          <div className="flex-1 min-h-0">
            <ImageCard item={chunk[1]} className="w-full h-full" />
          </div>
          <div className="flex-1 min-h-0">
            <ImageCard item={chunk[2]} className="w-full h-full" />
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3 h-[280px] sm:h-[320px] lg:h-full">
          <ImageCard
            item={chunk[3]}
            className="w-full h-full"
            overlay={overlayOnLast ? overlayContent : undefined}
          />
        </div>
      </div>
    );
  }

  // 3 items
  if (chunk.length === 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {chunk.map((item, idx) => (
          <div key={item.id} className="h-[220px] sm:h-[240px]">
            <ImageCard
              item={item}
              className="w-full h-full"
              overlay={
                overlayOnLast && idx === chunk.length - 1
                  ? overlayContent
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    );
  }

  // 2 items
  if (chunk.length === 2) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {chunk.map((item, idx) => (
          <div key={item.id} className="h-[220px] sm:h-[260px]">
            <ImageCard
              item={item}
              className="w-full h-full"
              overlay={
                overlayOnLast && idx === chunk.length - 1
                  ? overlayContent
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    );
  }

  // 1 item
  return (
    <div className="h-[240px] sm:h-[300px]">
      <ImageCard
        item={chunk[0]}
        className="w-full h-full"
        overlay={overlayOnLast ? overlayContent : undefined}
      />
    </div>
  );
};

const GallerySection = () => {
  const { gallery } = farmsData;
  const [activeTab, setActiveTab] = useState<"all" | "crystal" | "sukoon">(
    "all"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = gallery.items.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  // Map gallery items for featured initial mosaic layout in "All"
  const sukoonPool = gallery.items.find((i) => i.id === "2") || gallery.items[1];
  const crystalPool = gallery.items.find((i) => i.id === "1") || gallery.items[0];
  const crystalBonfire = gallery.items.find((i) => i.id === "3") || gallery.items[2];
  const sukoonGazebo = gallery.items.find((i) => i.id === "4") || gallery.items[3];
  const sukoonGames = gallery.items.find((i) => i.id === "5") || gallery.items[4];
  const sukoonLiving = gallery.items.find((i) => i.id === "6") || gallery.items[5];
  const crystalCabana = gallery.items.find((i) => i.id === "7") || gallery.items[6];

  const featuredInitialItems = [
    sukoonPool,
    crystalPool,
    crystalBonfire,
    sukoonGazebo,
    sukoonGames,
    sukoonLiving,
    crystalCabana,
  ];

  // Chunk array for mosaic rendering
  const chunkArray = (arr: GalleryItem[], size = 7) => {
    const res: GalleryItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const allExpandedChunks = chunkArray(gallery.items, 7);
  const filteredChunks = chunkArray(filteredItems, 7);
  const remainingCount = gallery.items.length - 7;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] py-16 sm:py-24"
      containerClassName=""
    >
      {/* Header & Filter Tabs */}
      <div
        id="gallery-heading"
        className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10"
      >
        <div>
          {/* Tag */}
          <span
            className="block uppercase text-[#8A6A3A] font-medium mb-3 text-center sm:text-left"
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

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-[52px] text-[#3A2406] leading-[108%] text-center sm:text-left"
            style={{
              fontFamily: "'Playfair Display', var(--font-playfair), serif",
              fontWeight: 500,
              lineHeight: "108%",
            }}
          >
            {gallery.title}
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 rounded-full border border-[#DCCFB6] w-fit mx-auto sm:mx-0">
          {(["all", "crystal", "sukoon"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsExpanded(false);
              }}
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

      {/* Photo Grid */}
      {activeTab === "all" ? (
        !isExpanded ? (
          /* Initial Featured Mosaic (7 items) with +More on the 7th card */
          <MosaicBlock
            chunk={featuredInitialItems}
            blockIndex={0}
            overlayOnLast={true}
            overlayContent={
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="absolute inset-0 bg-black/55 hover:bg-black/65 backdrop-blur-[1.5px] transition-all flex flex-col items-center justify-center text-[#FFFDF6] cursor-pointer group/more z-10 p-3 text-center"
              >
                <span
                  className="text-2xl sm:text-3xl font-medium tracking-tight mb-0.5 group-hover/more:scale-110 transition-transform"
                  style={{
                    fontFamily:
                      "'Playfair Display', var(--font-playfair), serif",
                  }}
                >
                  +{remainingCount} More
                </span>
                <span
                  className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium text-[#FFFDF6]/90 px-3 py-1 rounded-full border border-white/30 bg-white/15 mt-1"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  View All
                </span>
              </div>
            }
          />
        ) : (
          /* Expanded: All Images in Mosaic Layout */
          <div className="space-y-3.5 sm:space-y-4 animate-fade-in">
            {allExpandedChunks.map((chunk, idx) => (
              <MosaicBlock key={idx} chunk={chunk} blockIndex={idx} />
            ))}

            {/* Show Less Button */}
            <div className="flex justify-center pt-8 sm:pt-10">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  document
                    .getElementById("gallery-heading")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-full border border-[#3A2406] text-[#3A2406] hover:bg-[#3A2406] hover:text-[#FFFDF6] text-sm font-medium transition cursor-pointer flex items-center gap-2"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                <span>Show Less</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        )
      ) : (
        /* Filtered View: Crystal / Sukoon in Mosaic Layout */
        <div className="space-y-3.5 sm:space-y-4 animate-fade-in">
          {filteredChunks.map((chunk, idx) => (
            <MosaicBlock key={idx} chunk={chunk} blockIndex={idx} />
          ))}
        </div>
      )}
    </SectionWithContainer>
  );
};

export default GallerySection;