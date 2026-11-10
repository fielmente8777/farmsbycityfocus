"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import { useWebContext } from "@/src/context-api/WebContext";
import { contact } from "@/src/utils/constent";
import { Container } from "@/src/components/sectionComponants";

const LandingNavbar = () => {
  const pathName = usePathname();
  const { setIsOpenFormPopUp } = useWebContext();

  if (pathName?.startsWith("/thank-you")) {
    return null;
  }

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpenFormPopUp(true);
  };

  return (
    <header className="w-full bg-[#FFFDF6] border-b border-[#F6F0E2] sticky top-0 z-40 transition-all duration-300">
      <Container>
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-36 sm:h-14 sm:w-40">
              <Image
                src="/images/farms/logo-new-new.png"
                alt="Farms by City Focus"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center">
            <Link
              href={contact.callCta}
              aria-label="Call Us"
              className="w-11 h-11 rounded-full border border-[#DCCFB6] bg-transparent flex items-center justify-center text-[#3A2406] hover:bg-[#F6F0E2]/50 transition"
            >
              <FiPhone className="text-[18px] text-[#3A2406]" />
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
            {/* Phone Button */}
            <Link
              href={contact.callCta}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2406] transition tracking-wide"
            >
              <FiPhone className="text-sm text-[#3A2406]" />
              <span className="bg-[#F6F0E2] text-[#3A2406] font-medium px-3 py-1.5 rounded-lg border border-[#F6F0E2]">
                {contact.displayPhone || "+91 xxxxx xxxxx"}
              </span>
            </Link>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="bg-[#3A2406] hover:bg-[#211704] text-[#FFFDF6] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default LandingNavbar;
