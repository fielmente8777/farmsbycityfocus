"use client";

import { enCodeText } from "@/src/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();

  if (pathName?.startsWith("/thank-you")) {
    return null;
  }
  return (
    <div className="fixed bottom-6 sm:bottom-8 right-4 lg:right-6 z-20 cursor-pointer">
      <Link
        href={`https://wa.me/${(whatsAppNumber ? whatsAppNumber.replace(/\s+/g, "") : "+91xxxxxxxxxx")}?text=${enCodeText}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
