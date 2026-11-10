"use client";

import { useWebContext } from "@/src/context-api/WebContext";
import { MdClose } from "react-icons/md";
import BookingForm from "@/src/components/forms/BookingForm";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();

  if (!isOpenFormPopUp) return null;

  return (
    <section
      onClick={() => setIsOpenFormPopUp(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl w-full bg-[#FFFDF6] relative rounded-3xl shadow-2xl p-5 sm:p-6 border border-[#F6F0E2] transition-all"
      >
        <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#F6F0E2]">
          <div>
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-[#8A6A3A] font-medium block"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              Farms by City Focus
            </span>
            <h3
              className="text-lg sm:text-xl text-[#3A2406] mt-0.5"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              Plan Your Farmhouse Stay
            </h3>
          </div>
          <button
            onClick={() => setIsOpenFormPopUp(false)}
            className="w-8 h-8 rounded-full text-[#3A2406]/60 hover:text-[#3A2406] hover:bg-[#F6F0E2] transition flex items-center justify-center cursor-pointer text-lg"
            aria-label="Close form"
          >
            <MdClose />
          </button>
        </div>

        <BookingForm isModal={true} />
      </div>
    </section>
  );
};

export default PopUpForm;
