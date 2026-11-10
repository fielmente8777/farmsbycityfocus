"use client";

import Image from "next/image";
import Link from "next/link";
import { farmsData } from "./pagedata";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import {
  whatsappIcon,
  poolIcon,
  lawnIcon,
  kitchenIcon,
  guestIcon,
  bonfireIcon,
  barbecueIcon,
  gazeboIcon,
  gameIcon,
  backyardIcon,
} from "@/src/utils/icon";

const amenityIcons: Record<string, React.ReactNode> = {
  "Private swimming pool": poolIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Spacious lawns": lawnIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Fully equipped kitchen": kitchenIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Stays for 25+ guests": guestIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Bonfire seating": bonfireIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Barbecue sitting area": barbecueIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Gazebo": gazeboIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Outdoor games area": gameIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
  "Backyard": backyardIcon({ width: 24, height: 24, color: "#3A2406", strokeWidth: "1.5" }),
};

const AmenitiesSection = () => {
  const { amenities } = farmsData;
  const { setIsOpenFormPopUp } = useWebContext();

  const handleBookNow = () => {
    setIsOpenFormPopUp(true);
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] py-16 sm:py-24"
      containerClassName=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        {/* Featured Image (Desktop) */}
        <div className="hidden lg:block lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden shadow-sm bg-[#F6F0E2] group cursor-pointer">
          <Image
            src={amenities.mainImage}
            alt="Farmhouse amenities and dining"
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Amenities List */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Tag */}
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
              {amenities.tag}
            </span>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[52px] text-[#3A2406] leading-[108%]"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 500,
                lineHeight: "108%",
                letterSpacing: "0%",
              }}
            >
              Everything for a perfect
              <span className="block mt-1">
                stay, <span className="italic">indoors and out.</span>
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-4 text-[16px] text-[#6B5F4C] leading-[160%]"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
            >
              {amenities.description}
            </p>

            {/* Featured Image (Mobile) */}
            <div className="block lg:hidden my-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm bg-[#F6F0E2]">
              <Image
                src={amenities.mainImage}
                alt="Farmhouse amenities and dining"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="mt-2 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {amenities.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E8DEC8] rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shadow-[0_2px_10px_rgba(58,36,6,0.03)] hover:shadow-md transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#F6F0E2] flex items-center justify-center text-[#3A2406] shrink-0">
                  {amenityIcons[item.title] || (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3A2406]" />
                  )}
                </div>

                {/* Text and Badge */}
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[14px] sm:text-[15px] font-medium text-[#3A2406] leading-tight block truncate"
                    style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
                  >
                    {item.title}
                  </span>

                  {item.property === "Both" ? (
                    <span
                      className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full bg-[#3A2406] text-white mt-1.5"
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      BOTH
                    </span>
                  ) : item.property === "Crystal" ? (
                    <span
                      className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full border border-[#8A6A3A] text-[#3A2406] bg-transparent mt-1.5"
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      CRYSTAL
                    </span>
                  ) : (
                    <span
                      className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full border border-[#8A6A3A] text-[#3A2406] bg-transparent mt-1.5"
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      SUKOON
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Actions */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
              <Link
                href={contact.WhatsappCta}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#DCCFB6] hover:bg-[#FAF7F0] transition flex items-center justify-center shadow-2xs shrink-0"
                title="Chat on WhatsApp"
              >
                {whatsappIcon({ width: 22, height: 22 })}
              </Link>

              <button
                onClick={handleBookNow}
                className="w-auto sm:flex-1 h-12 bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-7 sm:px-6 rounded-full text-[15px] font-medium transition flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)] whitespace-nowrap"
              >
                <span>Book Now</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AmenitiesSection;