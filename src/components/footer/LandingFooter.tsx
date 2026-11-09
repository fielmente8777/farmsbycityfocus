"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/src/utils/constent";
import { Container } from "@/src/components/sectionComponants";
import { AddressIcon, PhoneIcon, MailIcon } from "@/src/utils/icon";

const LandingFooter = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <footer className="w-full bg-[#211704] text-[#C2B69D] pt-14 pb-8 border-t border-[#3A2406]">
      <Container className="fade-up">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-8 pb-12 border-b border-[#3A2406]">
          {/* Brand Info */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="relative w-[130px] h-[90px] sm:w-[145px] sm:h-[100px] lg:w-[165px] lg:h-[114px] mb-3 mx-auto">
              <Image
                src="/images/farms/logo-new-new.png"
                alt="Farms by City Focus"
                fill
                className="object-contain object-center brightness-0 invert opacity-100"
              />
            </div>
            <p
              className="text-[17px] text-[#C2B69D] leading-[150%] max-w-[390px] font-normal text-center"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              A curated collection of premium farmhouses
              <br className="hidden sm:inline" />
              around Gurugram, where every stay becomes
              <br className="hidden sm:inline" />
              an experience worth remembering.
            </p>
          </div>

          {/* Crystal Farmhouse */}
          <div className="space-y-3 shrink-0">
            <h4
              className="text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              CRYSTAL FARMHOUSE
            </h4>
            <div
              className="flex items-start gap-2.5 text-[17px] text-[#C2B69D] leading-[150%] font-normal"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <AddressIcon className="mt-1 shrink-0" />
              <span>
                Crystal Farm, near Heritage
                <br className="hidden sm:inline" />
                International Xperiential School, Balola,
                <br className="hidden sm:inline" />
                Gurugram, Haryana 122011
              </span>
            </div>
          </div>

          {/* Sukoon Farmhouse */}
          <div className="space-y-3 shrink-0">
            <h4
              className="text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              SUKOON FARMHOUSE
            </h4>
            <div
              className="flex items-start gap-2.5 text-[17px] text-[#C2B69D] leading-[150%] font-normal"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <AddressIcon className="mt-1 shrink-0" />
              <span>
                A-7, Vatika Complex, PO Dhaula,
                <br className="hidden sm:inline" />
                Karanki Road, Sohna, Gurugram,
                <br className="hidden sm:inline" />
                Haryana 122103
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 shrink-0">
            <h4
              className="text-[13px] uppercase tracking-[0.24em] text-[#EBD9B4] font-medium leading-none mb-3"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              CONTACT
            </h4>
            <div
              className="space-y-3 text-[17px] text-[#C2B69D] font-normal"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="shrink-0" />
                <Link
                  href={contact.callCta}
                  className="hover:text-[#FFFDF6] transition"
                >
                  {contact.displayPhone || "+91 xxxxx xxxxx"}
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="shrink-0" />
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

        {/* Copyright */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[17px] text-[#C2B69D]/80 gap-4"
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