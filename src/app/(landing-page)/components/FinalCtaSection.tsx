"use client";

import Image from "next/image";
import Link from "next/link";
import { farmsData } from "./farmsData";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { Container } from "@/src/components/sectionComponants";

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

const LeafIcon = () => (
  <div className="flex justify-center mb-4">
    <Image
      src="/images/farms/leaf-icon.png"
      alt="Leaf Icon"
      width={34}
      height={46}
      className="w-[34px] h-[46px] object-contain brightness-0 invert opacity-90"
    />
  </div>
);

const FinalCtaSection = () => {
  const { finalCta } = farmsData;
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
    <section className="relative w-full min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center overflow-hidden text-center text-[#FFFDF6] py-20 sm:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={finalCta.bgImage}
          alt="Your private farmhouse weekend"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Vignette Gradients */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/60" />
      </div>

      {/* Content */}
      <Container className="fade-up relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Leaf Icon */}
          <LeafIcon />

          {/* Headline */}
          <h2
            className="text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] text-[#FFFDF6] tracking-[-0.01em] leading-[115%] sm:leading-[108%] font-medium"
            style={{
              fontFamily: "'Playfair Display', var(--font-playfair), serif",
              fontWeight: 500,
            }}
          >
            {/* Mobile Headline */}
            <span className="sm:hidden block">Your people. Your pool.</span>
            <span className="sm:hidden block italic mt-1">Your weekend.</span>

            {/* Desktop Headline */}
            <span className="hidden sm:inline">Your people. Your pool. </span>
            <span className="hidden sm:inline italic">Your</span>
            <span className="hidden sm:block italic">weekend.</span>
          </h2>

          {/* Subtitle */}
          <p
            className="mt-4 sm:mt-5 text-[14px] sm:text-[17px] text-[#E2D6C1] leading-[150%] sm:leading-[160%] max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
          >
            {/* Mobile Subtitle */}
            <span className="sm:hidden block">
              Planning around winter weekends or New Year&apos;s Eve?
            </span>
            <span className="sm:hidden block">
              Enquire early to lock in your date.
            </span>

            {/* Desktop Subtitle */}
            <span className="hidden sm:inline">
              Planning around winter weekends or New Year&apos;s Eve? Enquire early
              <span className="block sm:inline"> to lock in your date.</span>
            </span>
          </p>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
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
              className="h-12 bg-[#FFFDF6] hover:bg-[#F6F0E2] text-[#3A2406] px-8 rounded-full text-[15px] font-medium transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer font-[family-name:var(--font-jost)]"
            >
              <span>Book Now</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCtaSection;