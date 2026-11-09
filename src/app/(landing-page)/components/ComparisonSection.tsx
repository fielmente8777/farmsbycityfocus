"use client";

import Link from "next/link";
import { farmsData } from "./farmsData";
import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";

const ComparisonSection = () => {
  const { comparison } = farmsData;
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
      sectionClassName="w-full bg-[#F6F0E2] py-16 sm:py-24"
      containerClassName="text-center"
    >
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
        {comparison.tag}
      </span>

      {/* HEADING */}
      <h2
        className="text-3xl sm:text-4xl md:text-[52px] text-[#3A2406] text-center mx-auto"
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontWeight: 500,
          lineHeight: "108%",
          letterSpacing: "0%",
        }}
      >
        <span>Crystal </span>
        <span className="italic">or Sukoon?</span>
      </h2>

      {/* TABLE CONTAINER */}
      <div className="mt-12 max-w-[958px] mx-auto bg-white rounded-2xl border border-[#E2D6C1] shadow-[0_4px_24px_rgba(58,36,6,0.04)] overflow-hidden text-left">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#3A2406]">
                <th
                  className="py-5 px-6 sm:px-8 text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-[#E2D6C1] font-medium w-[26%]"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  FEATURE
                </th>
                <th
                  className="py-5 px-6 sm:px-8 text-lg sm:text-[22px] font-medium text-[#FFFDF6] w-[37%]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Crystal Farmhouse
                </th>
                <th
                  className="py-5 px-6 sm:px-8 text-lg sm:text-[22px] font-medium text-[#FFFDF6] w-[37%]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Sukoon Farmhouse
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBD9B4]/30 text-sm text-[#3A2406]">
              {comparison.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[#FFFDF6]" : "bg-[#F7F2E7]/80"}
                >
                  <td
                    className="py-4 sm:py-5 px-6 sm:px-8 font-medium text-[#3A2406] text-[14px] sm:text-[15px]"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-4 sm:py-5 px-6 sm:px-8 text-[#4A3E2D] text-[14px] sm:text-[15px] font-normal leading-[150%]"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.crystal === "Yes" ? (
                      <span className="inline-flex items-center gap-2 text-[#3A2406]">
                        <FiCheck className="text-[#2E7D32] text-lg stroke-[2.5]" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      row.crystal
                    )}
                  </td>
                  <td
                    className="py-4 sm:py-5 px-6 sm:px-8 text-[#4A3E2D] text-[14px] sm:text-[15px] font-normal leading-[150%]"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.sukoon === "Yes" ? (
                      <span className="inline-flex items-center gap-2 text-[#3A2406]">
                        <FiCheck className="text-[#2E7D32] text-lg stroke-[2.5]" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      row.sukoon
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-12 flex items-center justify-center gap-3">
        <Link
          href={contact.WhatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-white border border-[#DCCFB6] text-[#25D366] hover:bg-[#FAF7F0] transition flex items-center justify-center text-xl shadow-2xs"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
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

export default ComparisonSection;
