"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/src/utils/constent";
import { Container } from "@/src/components/sectionComponants";

const NavigationIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 shrink-0 text-[#EBD9B4]"
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#EBD9B4]"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#EBD9B4]"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LandingFooter = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <footer className="w-full bg-[#211704] text-[#C2B69D] pt-14 pb-8 border-t border-[#3A2406]">
      <Container>
        {/* 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#3A2406] lg:items-center">
          {/* COLUMN 1: BRAND (MOBILE: START ALIGNED & COMPACT LOGO | DESKTOP: CENTER ALIGNED & 170x117) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:items-center lg:text-center">
            <div className="relative w-[125px] h-[86px] sm:w-[140px] sm:h-[96px] lg:w-[170px] lg:h-[117px] mb-3 lg:mx-auto">
              <Image
                src="/images/farms/logo-new-new.png"
                alt="Farms by City Focus"
                fill
                className="object-contain object-left lg:object-center brightness-0 invert opacity-100"
              />
            </div>
            <p
              className="text-[14px] text-[#C2B69D] leading-[150%] max-w-[341px] font-normal text-left lg:text-center"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              A curated collection of premium farmhouses
              <br className="hidden sm:inline" />
              around Gurugram, where every stay becomes
              <br className="hidden sm:inline" />
              an experience worth remembering.
            </p>
          </div>

          {/* COLUMN 2: CRYSTAL FARMHOUSE */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              CRYSTAL FARMHOUSE
            </h4>
            <div
              className="flex items-start gap-2.5 text-[14px] text-[#C2B69D] leading-[150%] font-normal max-w-[318px]"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <NavigationIcon />
              <span>
                Crystal Farm, near Heritage
                <br className="hidden sm:inline" />
                International Xperiential School, Balola,
                <br className="hidden sm:inline" />
                Gurugram, Haryana 122011
              </span>
            </div>
          </div>

          {/* COLUMN 3: SUKOON FARMHOUSE */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              SUKOON FARMHOUSE
            </h4>
            <div
              className="flex items-start gap-2.5 text-[14px] text-[#C2B69D] leading-[150%] font-normal max-w-[318px]"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <NavigationIcon />
              <span>
                A-7, Vatika Complex, PO Dhaula,
                <br className="hidden sm:inline" />
                Karanki Road, Sohna, Gurugram,
                <br className="hidden sm:inline" />
                Haryana 122103
              </span>
            </div>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-[12px] sm:text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              CONTACT
            </h4>
            <div
              className="space-y-3 text-[14px] text-[#C2B69D] font-normal"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <div className="flex items-center gap-2.5">
                <PhoneIcon />
                <Link
                  href={contact.callCta}
                  className="hover:text-[#FFFDF6] transition"
                >
                  {contact.displayPhone || "+91 xxxxx xxxxx"}
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon />
                <Link
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#FFFDF6] transition"
                >
                  {contact.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#C2B69D]/80 gap-4"
          style={{ fontFamily: "var(--font-jost), sans-serif" }}
        >
          <p>© 2026 City Focus. All rights reserved.</p>
          <p>Powered by Fielmente</p>
        </div>
      </Container>
    </footer>
  );
};

export default LandingFooter;