"use client";

import Link from "next/link";
import { farmsData } from "./pagedata";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { whatsappIcon } from "@/src/utils/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ReviewsSection = () => {
  const { reviews } = farmsData;
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
      {/* HEADER ROW */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          {/* TAG */}
          <span
            className="block uppercase tracking-[0.24em] font-medium mb-3 text-[13px]"
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontWeight: 500,
              color: "#8A6A3A",
              letterSpacing: "0.24em",
              fontSize: "13px",
              lineHeight: "100%",
              textTransform: "uppercase",
            }}
          >
            {reviews.tag}
          </span>

          {/* HEADLINE IN PLAYFAIR DISPLAY */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[52px] text-[#3A2406] leading-[108%]"
            style={{
              fontFamily: "'Playfair Display', var(--font-playfair), serif",
              fontWeight: 500,
              lineHeight: "108%",
              letterSpacing: "0%",
            }}
          >
            <span>Stays worth </span>
            <span className="italic">talking about.</span>
          </h2>
        </div>

        {/* Header Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href={contact.WhatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#DCCFB6] hover:bg-[#FAF7F0] transition flex items-center justify-center shadow-2xs shrink-0"
            title="Chat on WhatsApp"
          >
            {whatsappIcon({ width: 22, height: 22 })}
          </Link>

          <button
            onClick={handleBookNow}
            className="h-11 bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-7 rounded-full text-[15px] font-medium transition flex items-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
          >
            <span>Book Now</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Reviews Slider (Mobile) */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="!pb-10"
        >
          {reviews.items.map((rev) => (
            <SwiperSlide key={rev.id} className="h-auto">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DEC8] shadow-[0_2px_12px_rgba(58,36,6,0.03)] flex flex-col justify-between h-full min-h-[260px] text-left">
                <div>
                  {/* 5 STARS (WARM GOLD) */}
                  <div className="flex items-center gap-1.5 text-[#C6A87D] text-[15px] tracking-[0.2em] mb-4">
                    {"★".repeat(rev.rating)}
                  </div>

                  {/* QUOTE IN PLAYFAIR DISPLAY */}
                  <p
                    className="text-[17px] text-[#3A2406] leading-[145%] font-normal"
                    style={{
                      fontFamily: "'Playfair Display', var(--font-playfair), serif",
                      fontWeight: 400,
                    }}
                  >
                    {rev.quote}
                  </p>
                </div>

                {/* AUTHOR */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#211704] text-[#FFFDF6] flex items-center justify-center font-medium text-sm shrink-0"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4
                      className="text-[15px] font-medium text-[#3A2406] leading-tight"
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {rev.author}
                    </h4>
                    <span
                      className="text-[13px] text-[#7A6B56] font-normal leading-tight block mt-0.5"
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      {rev.property}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Review Cards (Desktop) */}
      <div className="hidden md:grid md:grid-cols-3 gap-5 sm:gap-6 items-start">
        {reviews.items.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DEC8] shadow-[0_2px_12px_rgba(58,36,6,0.03)] flex flex-col hover:shadow-md transition duration-300"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#C6A87D] text-[15px] tracking-[0.2em] mb-5">
                {"★".repeat(rev.rating)}
              </div>

              {/* Quote */}
              <p
                className="text-lg sm:text-[21px] text-[#3A2406] leading-[140%] font-normal"
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair), serif",
                  fontWeight: 400,
                }}
              >
                {rev.quote}
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3.5">
              <div
                className="w-10 h-10 rounded-full bg-[#211704] text-[#FFFDF6] flex items-center justify-center font-medium text-sm shrink-0"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                {rev.author.charAt(0)}
              </div>
              <div>
                <h4
                  className="text-[15px] font-medium text-[#3A2406] leading-tight"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {rev.author}
                </h4>
                <span
                  className="text-[13px] text-[#7A6B56] font-normal leading-tight block mt-0.5"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  {rev.property}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions (Mobile) */}
      <div className="mt-8 flex md:hidden items-center justify-center gap-3">
        <Link
          href={contact.WhatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white border border-[#DCCFB6] hover:bg-[#FAF7F0] transition flex items-center justify-center shadow-2xs shrink-0"
          title="Chat on WhatsApp"
        >
          {whatsappIcon({ width: 22, height: 22 })}
        </Link>

        <button
          onClick={handleBookNow}
          className="h-11 bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-7 rounded-full text-[15px] font-medium transition flex items-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
        >
          <span>Book Now</span>
          <span>→</span>
        </button>
      </div>
    </SectionWithContainer>
  );
};

export default ReviewsSection;