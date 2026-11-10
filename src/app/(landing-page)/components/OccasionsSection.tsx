"use client";

import Image from "next/image";
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

const LeafIcon = () => (
  <div className="flex justify-center mb-4">
    <Image
      src="/occassion-leaf.png"
      alt="Occasion Leaf"
      width={34}
      height={46}
      priority
      className="w-[34px] h-[46px] object-contain"
    />
  </div>
);

const OccasionsSection = () => {
  const { occasions } = farmsData;
  const { setIsOpenFormPopUp } = useWebContext();

  const handleBookNow = () => {
    setIsOpenFormPopUp(true);
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#F6F0E2] py-16 sm:py-24"
      containerClassName="text-center"
    >
      {/* Leaf Icon */}
      <LeafIcon />

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
        {occasions.tag}
      </span>

      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-[52px] text-[#3A2406] text-center mx-auto"
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontWeight: 500,
          lineHeight: "108%",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        <span>One farmhouse, </span>
        <span className="italic">endless</span>
        <span className="block italic">reasons to gather.</span>
      </h2>

      {/* Mobile Slider */}
      <div className="mt-8 block sm:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="!pb-10"
        >
          {occasions.items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-sm text-left">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2406]/95 via-[#3A2406]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3
                    className="text-xl font-medium text-[#FFFDF6]"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 500,
                      lineHeight: "115%",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-1.5 text-[14px] leading-[140%]"
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontWeight: 400,
                      color: "#F0E6D4",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="mt-12 sm:mt-16 hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {occasions.items.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group text-left cursor-default"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2406]/95 via-[#3A2406]/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
              <h3
                className="text-xl sm:text-[28px] font-medium text-[#FFFDF6]"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 500,
                  lineHeight: "110%",
                  letterSpacing: "0%",
                }}
              >
                {item.title}
              </h3>
              <p
                className="mt-1.5 text-[15px]"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#F0E6D4",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 flex items-center justify-center gap-3">
        <Link
          href={contact.WhatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white border border-[#DCCFB6] hover:bg-[#FAF7F0] transition flex items-center justify-center shadow-2xs"
          title="Chat on WhatsApp"
        >
          {whatsappIcon({ width: 22, height: 22 })}
        </Link>

        <button
          onClick={handleBookNow}
          className="bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] px-7 py-3 rounded-full text-sm font-medium transition flex items-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
        >
          <span>Book Now</span>
          <span>→</span>
        </button>
      </div>
    </SectionWithContainer>
  );
};

export default OccasionsSection;
