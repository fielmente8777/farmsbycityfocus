"use client";

import Link from "next/link";
import { farmsData } from "./farmsData";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 512 512"
    width="22"
    height="22"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
  >
    <circle cx="260" cy="250" r="180" fill="white" />
    <path
      fill="#25D366"
      d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"
    />
  </svg>
);

const BookingStepsSection = () => {
  const { bookingSteps } = farmsData;
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
      sectionClassName="w-full bg-[#3A2406] text-[#FFFDF6] py-16 sm:py-24 border-y border-[#3A2406]"
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
              color: "#EBD9B4",
              letterSpacing: "0.24em",
              fontSize: "13px",
              lineHeight: "100%",
              textTransform: "uppercase",
            }}
          >
            {bookingSteps.tag}
          </span>

          {/* HEADLINE IN PLAYFAIR DISPLAY */}
          <h2
            className="text-[25px] xs:text-[27px] sm:text-4xl lg:text-[52px] text-[#FFFDF6] leading-[115%] sm:leading-[108%]"
            style={{
              fontFamily: "'Playfair Display', var(--font-playfair), serif",
              fontWeight: 500,
              letterSpacing: "0%",
            }}
          >
            {/* Mobile Headline */}
            <span className="sm:hidden block">From enquiry to poolside</span>
            <span className="sm:hidden block italic font-medium mt-1">in three steps.</span>

            {/* Desktop Headline */}
            <span className="hidden sm:inline">From enquiry to poolside </span>
            <span className="hidden sm:inline italic font-medium">in</span>
            <span className="hidden sm:block italic font-medium">three steps.</span>
          </h2>
        </div>

        {/* Desktop Header Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href={contact.WhatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-transparent border border-[#EBD9B4]/60 hover:bg-white/10 transition flex items-center justify-center shrink-0"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon />
          </Link>

          <button
            onClick={handleBookNow}
            className="h-12 bg-[#FFFDF6] hover:bg-[#F6F0E2] text-[#3A2406] px-7 rounded-full text-[15px] font-medium transition flex items-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
          >
            <span>Book Now</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* 3 STEPS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {bookingSteps.steps.map((step) => (
          <div
            key={step.number}
            className="p-5 sm:p-8 rounded-2xl bg-white/[0.04] border border-[#EBD9B4]/20 flex flex-col justify-start sm:justify-between hover:bg-white/[0.07] transition duration-300 min-h-0 sm:min-h-[220px]"
          >
            {/* STEP NUMBER */}
            <div
              className="text-3xl sm:text-[38px] text-[#EBD9B4] mb-3 sm:mb-6 font-medium leading-none"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              {step.number}
            </div>

            {/* STEP TITLE & DESCRIPTION */}
            <div>
              <h3
                className="text-xl sm:text-[22px] font-medium text-[#FFFDF6] leading-snug"
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair), serif",
                  fontWeight: 500,
                }}
              >
                {step.title}
              </h3>
              <p
                className="mt-3 text-[14px] sm:text-[15px] text-[#F6F0E2]/80 leading-[160%]"
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontWeight: 400,
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Actions */}
      <div className="mt-8 flex md:hidden items-center justify-center gap-3">
        <Link
          href={contact.WhatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-transparent border border-[#EBD9B4]/60 hover:bg-white/10 transition flex items-center justify-center shrink-0"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </Link>

        <button
          onClick={handleBookNow}
          className="h-12 bg-[#FFFDF6] hover:bg-[#F6F0E2] text-[#3A2406] px-7 rounded-full text-[15px] font-medium transition flex items-center gap-2 shadow-sm hover:shadow cursor-pointer font-[family-name:var(--font-jost)]"
        >
          <span>Book Now</span>
          <span>→</span>
        </button>
      </div>
    </SectionWithContainer>
  );
};

export default BookingStepsSection;