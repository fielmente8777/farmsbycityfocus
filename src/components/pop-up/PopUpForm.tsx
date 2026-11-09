"use client";

import { useWebContext } from "@/src/context-api/WebContext";
import { MdClose } from "react-icons/md";
import BookingForm from "@/src/app/(landing-page)/components/BookingForm";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();

  if (!isOpenFormPopUp) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="max-w-lg w-full bg-[#FFFDF6] relative rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#F6F0E2]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#3A2406]/70 font-medium block">
              Farms by City Focus
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#3A2406] mt-1">
              Plan Your Farmhouse Stay
            </h3>
          </div>
          <button
            onClick={() => setIsOpenFormPopUp(false)}
            className="p-1 rounded-full text-[#3A2406]/60 hover:text-[#3A2406] hover:bg-[#F6F0E2] transition cursor-pointer text-xl"
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
