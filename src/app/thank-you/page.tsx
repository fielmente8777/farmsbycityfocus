import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/src/utils/constent";

export const metadata: Metadata = {
  title: "Thank You | Farms by City Focus",
  description:
    "Thank you for your enquiry. Our team will reach you shortly to confirm availability and rates.",
};

export default function ThankYouPage() {
  const visualCollage = (isMobile = false) => (
    <div className={`flex flex-col gap-3.5 sm:gap-4 w-full ${isMobile ? "" : "h-full"}`}>
      {/* Top Wide Image: Poolside Drinks at Dusk */}
      <div
        className={`group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm cursor-pointer ${
          isMobile
            ? "h-[220px] sm:h-[260px]"
            : "flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-0"
        }`}
      >
        <Image
          src="/images/farms/occasion-couples.jpg"
          alt="Poolside drinks at dusk"
          fill
          priority={!isMobile}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Bottom 2 Images */}
      <div
        className={`grid grid-cols-2 gap-3.5 sm:gap-4 w-full shrink-0 ${
          isMobile ? "h-[140px] sm:h-[180px]" : "h-[150px] sm:h-[180px] lg:h-[190px]"
        }`}
      >
        {/* Bottom Left: Bonfire / Lawn Seating */}
        <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm cursor-pointer">
          <Image
            src="/images/farms/gal-sukoon-gazebo.jpg"
            alt="Outdoor lawn and bonfire seating"
            fill
            sizes="(max-width: 1024px) 50vw, 20vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Bottom Right: Gazebo Pavilion */}
        <div className="group relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm cursor-pointer">
          <Image
            src="/images/farms/gal-sukoon-pool.jpg"
            alt="Luxury gazebo pavilion"
            fill
            sizes="(max-width: 1024px) 50vw, 20vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F6F0E2] flex flex-col justify-between">
      {/* Top Header */}
      <header className="w-full bg-[#FFFDF6] border-b border-[#F6F0E2] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-44 sm:h-16 sm:w-52">
              <Image
                src="/images/farms/logo-new-new.png"
                alt="Farms by City Focus"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Phone Badge */}
          <Link
            href={contact.callCta}
            className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2406] transition"
          >
            <FiPhone className="text-sm text-[#3A2406]" />
            <span
              className="bg-[#FAF7F0] hover:bg-[#F6F0E2] text-[#3A2406] font-medium px-3.5 py-1.5 rounded-full border border-[#DCCFB6] transition"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              {contact.displayPhone || "+91 95400 70804"}
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch items-center">
            {/* Left Column: Confirmation Details */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
              {/* Checkmark Icon Badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EBF5ED] flex items-center justify-center mb-6 shadow-2xs">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E824C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Tag */}
              <span
                className="block uppercase text-[#8A6A3A] font-medium mb-3 text-xs sm:text-[13px] tracking-[0.24em]"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                ENQUIRY RECEIVED
              </span>

              {/* Headline */}
              <h1
                className="text-3xl sm:text-4xl md:text-[50px] lg:text-[60px] text-[#3A2406] leading-[110%] mb-4 sm:mb-5"
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair), serif",
                  fontWeight: 500,
                }}
              >
                <span>Thank you. </span>
                <span className="italic">
                  Your <br className="hidden sm:inline" />
                  getaway is in motion.
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-[15px] sm:text-[16px] text-[#6B5E4C] leading-[150%] max-w-xl mb-6 sm:mb-8"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                Our team will reach you on your mobile number to confirm availability
                for your dates and share the best price.
              </p>

              {/* Mobile-only Visual Collage: placed between description and points on mobile */}
              <div className="block lg:hidden w-full mb-8">
                {visualCollage(true)}
              </div>

              {/* Numbered Steps */}
              <div className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-10 w-full max-w-lg">
                {[
                  {
                    num: "1",
                    text: "We check availability for your date and group size.",
                  },
                  {
                    num: "2",
                    text: "You get a quote by call or WhatsApp.",
                  },
                  {
                    num: "3",
                    text: "Confirm your booking and get ready to unwind.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-3.5">
                    <span
                      className="w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full bg-[#3A2406] text-[#FFFDF6] flex items-center justify-center text-[15px] font-normal shrink-0"
                      style={{
                        fontFamily:
                          "'Playfair Display', var(--font-playfair), serif",
                      }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="text-[15px] sm:text-[17px] text-[#3A2406] font-normal leading-snug"
                      style={{ fontFamily: "var(--font-jost), sans-serif" }}
                    >
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-4">
                {/* WhatsApp Button */}
                <Link
                  href={contact.WhatsappCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0F6F47] hover:bg-[#0B5C3A] text-white text-[16px] font-medium shadow-sm hover:shadow transition text-center"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <FaWhatsapp className="text-[18px]" />
                  <span>Can't wait? WhatsApp us</span>
                </Link>

                {/* Back to Home Button */}
                <Link
                  href="/"
                  className="w-full max-w-sm sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-transparent border border-[#3A2406] text-[#3A2406] hover:bg-[#3A2406] hover:text-[#FFFDF6] text-[16px] font-medium transition text-center"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  <span>Back to the farmhouses</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Collage (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-5 w-full h-full flex-col">
              {visualCollage(false)}
            </div>
          </div>
        </div>
      </main>

      {/* Subtle Bottom Bar / Copyright */}
      <footer className="w-full bg-[#FFFDF6] border-t border-[#F6F0E2] py-4 text-center">
        <p
          className="text-xs text-[#8A6A3A]/80 tracking-wider"
          style={{ fontFamily: "var(--font-jost), sans-serif" }}
        >
          © {new Date().getFullYear()} Farms by City Focus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
