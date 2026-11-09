"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { farmsData } from "./farmsData";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const amenityIcons: Record<string, React.ReactNode> = {
  "Private swimming pool": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20V8a4 4 0 0 1 4-4 4 4 0 0 1 4 4v12" />
      <path d="M7 11h8" />
      <path d="M7 16h8" />
    </svg>
  ),
  "Spacious lawns": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M12 15v6" />
      <path d="M8 21h8" />
    </svg>
  ),
  "Fully equipped kitchen": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h12v3H6z" />
      <path d="M6 14a4 4 0 0 1-2-3.5 4 4 0 0 1 6-3.5 4 4 0 0 1 8 0 4 4 0 0 1 6 3.5 4 4 0 0 1-2 3.5" />
    </svg>
  ),
  "Stays for 25+ guests": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "Bonfire seating": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4c1 3-1 5 1 8 1-2 2-3 2-5 3 3 3 7 0 9.5a6 6 0 0 1-6 0C6 14 6 10 9 7c0 2 1 3 3-3z" />
      <path d="M5 20l14-2" />
      <path d="M5 18l14 2" />
    </svg>
  ),
  "Barbecue sitting area": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11a7 7 0 0 0 14 0H5z" />
      <path d="M8 18l-2 3" />
      <path d="M16 18l2 3" />
      <path d="M7 18h10" />
      <path d="M9 4v2" />
      <path d="M12 4v2" />
      <path d="M15 4v2" />
    </svg>
  ),
  "Gazebo": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-6 9 6H3z" />
      <path d="M6 10v9" />
      <path d="M18 10v9" />
      <path d="M4 19h16" />
      <path d="M9 13h6v6H9z" />
    </svg>
  ),
  "Outdoor games area": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="16" cy="8" r="1.2" fill="currentColor" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <circle cx="8" cy="16" r="1.2" fill="currentColor" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
    </svg>
  ),
  "Backyard": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4a2 2 0 0 1 4 0v16H6z" />
      <path d="M14 4a2 2 0 0 1 4 0v16h-4z" />
      <path d="M2 9h20" />
      <path d="M2 15h20" />
    </svg>
  ),
};

const AmenitiesSection = () => {
  const { amenities } = farmsData;
  const { setIsOpenFormPopUp } = useWebContext();

  const handleBookNow = () => {
    const formElem = document.getElementById("booking-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsOpenFormPopUp(true);
    }
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] py-16 sm:py-24"
      containerClassName=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        {/* LEFT FEATURED IMAGE (DESKTOP ONLY: UNTOUCHED) */}
        <div className="hidden lg:block lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden shadow-sm bg-[#F6F0E2] group cursor-pointer">
          <Image
            src={amenities.mainImage}
            alt="Farmhouse amenities and dining"
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* RIGHT AMENITIES LIST */}
        <div className="lg:col-span-7 flex flex-col justify-between">
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
              {amenities.tag}
            </span>

            {/* HEADING */}
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

            {/* DESCRIPTION */}
            <p
              className="mt-4 text-[16px] text-[#6B5F4C] leading-[160%]"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
            >
              {amenities.description}
            </p>

            {/* FEATURED IMAGE (MOBILE ONLY: BELOW HEADING & DESCRIPTION, ABOVE POINTS) */}
            <div className="block lg:hidden my-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm bg-[#F6F0E2]">
              <Image
                src={amenities.mainImage}
                alt="Farmhouse amenities and dining"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 9 AMENITIES GRID + 10th SLOT (CTA) */}
          <div className="mt-2 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {amenities.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E8DEC8] rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shadow-[0_2px_10px_rgba(58,36,6,0.03)] hover:shadow-md transition duration-300"
              >
                {/* ICON CIRCLE */}
                <div className="w-12 h-12 rounded-full bg-[#F6F0E2] flex items-center justify-center text-[#3A2406] shrink-0">
                  {amenityIcons[item.title] || (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3A2406]" />
                  )}
                </div>

                {/* TEXT & BADGE */}
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

            {/* 10TH SLOT: WHATSAPP + BOOK NOW BUTTONS */}
            <div className="flex items-center gap-3">
              <Link
                href={contact.WhatsappCta}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-[#DCCFB6] text-[#25D366] hover:bg-[#FAF7F0] transition flex items-center justify-center text-xl shadow-2xs shrink-0"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </Link>

              <button
                onClick={handleBookNow}
                className="flex-1 h-12 bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-6 rounded-full text-[15px] font-medium transition flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
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