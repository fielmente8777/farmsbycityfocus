"use client";

import { useState } from "react";
import Link from "next/link";
import { farmsData } from "./farmsData";
import { FaWhatsapp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const FaqSection = () => {
  const { faqs } = farmsData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#F6F0E2] py-16 sm:py-24"
      containerClassName=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN: TITLE & ACTIONS */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
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
            {faqs.tag}
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
            <span>Questions, </span>
            <span className="block italic">answered.</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="mt-4 text-[15px] sm:text-[16px] text-[#6B5F4C] leading-[160%] max-w-sm"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
          >
            {faqs.description}
          </p>

          {/* Actions (Desktop) */}
          <div className="mt-8 hidden lg:flex flex-wrap items-center gap-3">
            <Link
              href={contact.WhatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BE5A] text-white px-5 py-2.5 rounded-full text-sm font-medium transition inline-flex items-center gap-2 shadow-xs font-[family-name:var(--font-jost)]"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp us</span>
            </Link>

            <Link
              href={contact.callCta}
              className="bg-transparent hover:bg-black/5 text-[#3A2406] border border-[#8A6A3A] px-6 py-2.5 rounded-full text-sm font-medium transition inline-flex items-center justify-center font-[family-name:var(--font-jost)]"
            >
              <span>Call us</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: ACCORDION CARDS */}
        <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
          {faqs.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E8DEC8] p-5 sm:p-6 transition-all duration-300 shadow-[0_2px_10px_rgba(58,36,6,0.02)]"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span
                    className="text-[15px] sm:text-[16px] font-medium text-[#3A2406] leading-snug group-hover:opacity-85 transition"
                    style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#3A2406] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <FiChevronDown className="text-lg" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 pr-4">
                    <p
                      className="text-[14px] sm:text-[15px] text-[#6B5F4C] font-normal leading-[160%]"
                      style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Actions (Mobile) */}
          <div className="pt-4 flex lg:hidden flex-wrap items-center justify-center gap-3">
            <Link
              href={contact.WhatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BE5A] text-white px-5 py-2.5 rounded-full text-sm font-medium transition inline-flex items-center gap-2 shadow-xs font-[family-name:var(--font-jost)]"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp us</span>
            </Link>

            <Link
              href={contact.callCta}
              className="bg-transparent hover:bg-black/5 text-[#3A2406] border border-[#8A6A3A] px-6 py-2.5 rounded-full text-sm font-medium transition inline-flex items-center justify-center font-[family-name:var(--font-jost)]"
            >
              <span>Call us</span>
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;