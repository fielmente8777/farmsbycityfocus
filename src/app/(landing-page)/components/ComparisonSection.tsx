"use client";

import Link from "next/link";
import { farmsData } from "./pagedata";
import { FiCheck } from "react-icons/fi";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { whatsappIcon } from "@/src/utils/icon";

const ComparisonSection = () => {
  const { comparison } = farmsData;
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
        {comparison.tag}
      </span>

      {/* Heading */}
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

      {/* Comparison Table */}
      <div className="mt-8 sm:mt-12 max-w-[958px] mx-auto bg-white rounded-2xl border border-[#E2D6C1] shadow-[0_4px_24px_rgba(58,36,6,0.04)] overflow-hidden text-left">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-[#3A2406]">
                <th
                  className="py-3.5 sm:py-5 px-2.5 sm:px-8 text-[11px] sm:text-[13px] uppercase tracking-wider sm:tracking-[0.2em] text-[#E2D6C1] font-medium w-[28%] sm:w-[26%]"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  FEATURE
                </th>
                <th
                  className="py-3.5 sm:py-5 px-2.5 sm:px-8 text-[13px] sm:text-[22px] font-medium text-[#FFFDF6] leading-tight w-[36%] sm:w-[37%]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Crystal <span className="block sm:inline">Farmhouse</span>
                </th>
                <th
                  className="py-3.5 sm:py-5 px-2.5 sm:px-8 text-[13px] sm:text-[22px] font-medium text-[#FFFDF6] leading-tight w-[36%] sm:w-[37%]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Sukoon <span className="block sm:inline">Farmhouse</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBD9B4]/30 text-[12px] xs:text-[13px] sm:text-[16px] text-[#3A2406]">
              {comparison.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[#FFFDF6]" : "bg-[#F7F2E7]/80"}
                >
                  <td
                    className="py-3 sm:py-5 px-2.5 sm:px-8 font-medium text-[#3A2406] text-[12px] xs:text-[13px] sm:text-[16px] align-top sm:align-middle leading-[135%] sm:leading-normal"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="py-3 sm:py-5 px-2.5 sm:px-8 text-[#4A3E2D] text-[12px] xs:text-[13px] sm:text-[16px] font-normal leading-[135%] sm:leading-[150%] align-top sm:align-middle break-words"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.crystal === "Yes" ? (
                      <span className="inline-flex items-center gap-1 sm:gap-2 text-[#3A2406]">
                        <FiCheck className="text-[#2E7D32] text-sm sm:text-lg stroke-[2.5] shrink-0" />
                        <span>Yes</span>
                      </span>
                    ) : (
                      row.crystal
                    )}
                  </td>
                  <td
                    className="py-3 sm:py-5 px-2.5 sm:px-8 text-[#4A3E2D] text-[12px] xs:text-[13px] sm:text-[16px] font-normal leading-[135%] sm:leading-[150%] align-top sm:align-middle break-words"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {row.sukoon === "Yes" ? (
                      <span className="inline-flex items-center gap-1 sm:gap-2 text-[#3A2406]">
                        <FiCheck className="text-[#2E7D32] text-sm sm:text-lg stroke-[2.5] shrink-0" />
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

export default ComparisonSection;
