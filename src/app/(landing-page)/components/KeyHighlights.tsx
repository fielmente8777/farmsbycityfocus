"use client";

import { farmsData } from "./farmsData";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { guestIcon, poolIcon, bedIcon, farmIcon } from "@/src/utils/icon";

const iconMap = {
  users: guestIcon({ width: 34, height: 34, color: "#E2CDA2", strokeWidth: "1.84167" }),
  pool: poolIcon({ width: 34, height: 34, color: "#E2CDA2", strokeWidth: "1.84167" }),
  home: bedIcon({ width: 34, height: 34, color: "#E2CDA2" }),
  shield: farmIcon({ width: 34, height: 34, color: "#E2CDA2" }),
};

const KeyHighlights = () => {
  const { highlights } = farmsData;

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="w-full bg-[#FFFDF6] md:bg-[#3A2406] text-[#FFFDF6] py-5 sm:py-7 md:py-8"
      containerClassName=""
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-between">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#3A2406] rounded-[18px] p-4 sm:p-5 flex flex-col justify-center text-left md:bg-transparent md:rounded-none md:p-0 md:flex-row md:items-center md:gap-3.5 md:justify-center min-h-[96px] md:min-h-0"
          >
            <div className="hidden md:block shrink-0 text-[#E2D6C1]">
              {iconMap[item.iconType as keyof typeof iconMap]}
            </div>
            <div className="flex flex-col text-left">
              <span
                className="text-[19px] sm:text-base md:text-lg font-medium tracking-tight text-[#FFFDF6] leading-tight"
                style={{ fontFamily: "'Playfair Display', var(--font-playfair), serif" }}
              >
                {item.title === "4 BHK & 3 BHK" ? (
                  <>
                    <span className="md:hidden">4 & 3 BHK</span>
                    <span className="hidden md:inline">4 BHK & 3 BHK</span>
                  </>
                ) : item.title === "Entire farmhouse" ? (
                  <>
                    <span className="md:hidden">Entire farm</span>
                    <span className="hidden md:inline">Entire farmhouse</span>
                  </>
                ) : (
                  item.title
                )}
              </span>
              <span
                className="text-[12px] sm:text-xs text-[#E2D6C1]/85 font-normal mt-1 md:mt-0.5 leading-snug"
                style={{ fontFamily: "var(--font-jost), sans-serif" }}
              >
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default KeyHighlights;
