import Link from "next/link";
import { SectionWithContainer } from "@/src/components/sectionComponants";

export default function ThankYou() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F5]">
      <SectionWithContainer sectionClassName="w-full py-20 text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center">
          <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium">
            Farms by City Focus
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
            Thank you for your enquiry
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            We have received your details. Our team will review your preferred
            dates and get back to you shortly with availability and pricing.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="bg-[#241F1C] hover:bg-black text-[#FAF8F5] px-7 py-3 rounded-full text-sm font-medium transition inline-flex items-center gap-2 shadow-sm hover:shadow"
            >
              <span>Back to Home</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
}
