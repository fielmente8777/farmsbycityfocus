"use client";

import { farmsData } from "./farmsData";
import { FiUsers } from "react-icons/fi";
import { Container } from "@/src/components/sectionComponants";

const PoolLadderIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v18" />
    <path d="M18 3v18" />
    <path d="M6 7h12" />
    <path d="M6 12h12" />
    <path d="M6 17h12" />
  </svg>
);

const BedIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7v14" />
    <path d="M21 11v10" />
    <path d="M3 15h18" />
    <path d="M3 11h18a2 2 0 0 1 2 2v2" />
    <path d="M7 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

const LockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const iconMap = {
  users: <FiUsers className="text-2xl text-[#E2D6C1]" />,
  pool: <PoolLadderIcon />,
  home: <BedIcon />,
  shield: <LockIcon />,
};

const KeyHighlights = () => {
  const { highlights } = farmsData;

  return (
    <section className="w-full bg-[#3A2406] text-[#FFFDF6] py-7 sm:py-8">
      <Container className="!max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 justify-between">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 sm:gap-4 justify-start md:justify-center"
            >
              <div className="shrink-0 text-[#E2D6C1]">
                {iconMap[item.iconType as keyof typeof iconMap]}
              </div>
              <div className="flex flex-col text-left">
                <span
                  className="text-base sm:text-lg font-medium tracking-tight text-[#FFFDF6] leading-snug"
                  style={{ fontFamily: "'Playfair Display', var(--font-playfair), serif" }}
                >
                  {item.title}
                </span>
                <span
                  className="text-xs text-[#E2D6C1]/85 font-normal mt-0.5"
                  style={{ fontFamily: "var(--font-jost), sans-serif" }}
                >
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyHighlights;
