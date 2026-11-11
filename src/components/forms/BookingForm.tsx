"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "@/src/hooks/useBookingForm";
import { getDateInputLimits } from "@/src/hooks/getDateInputLimits";
import { IoIosArrowDown } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { countries } from "@/src/utils/constent";
import { useWebContext } from "@/src/context-api/WebContext";

interface BookingFormProps {
  isModal?: boolean;
}

const guestOptions = [
  "10 - 12",
  "12 - 15",
];

const occasionOptions = [
  "Weekend Getaway",
  "Birthdays Party",
  "Family Gatherings",
  // "Friends' get-togethers",
  "Corporate Events",
  "Couple Escapes",
  "Other",
];

const farmhouseOptions = [
  "Crystal Farmhouse (4 BHK)",
  "Sukoon Farmhouse (3 BHK)",
];

const BookingForm: React.FC<BookingFormProps> = ({ isModal = false }) => {
  const { setIsOpenFormPopUp } = useWebContext();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
      if (isModal) {
        setIsOpenFormPopUp(false);
      }
    },
  });

  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });
  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    }
    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    }
  };

  return (
    <div id="booking-form" className="w-full">
      <form
        onSubmit={handleSubmit}
        className={
          isModal
            ? "w-full"
            : "w-full bg-[#FFFDF6] sm:bg-transparent rounded-[28px] sm:rounded-none p-5 sm:p-0 shadow-[0_-8px_25px_rgba(0,0,0,0.16),0_20px_40px_rgba(0,0,0,0.18)] sm:shadow-none border border-[#EBE2D0] sm:border-none relative z-30"
        }
      >
        {/* Mobile Header */}
        {!isModal && (
          <div className="sm:hidden mb-5">
            <h3
              className="text-[28px] text-[#2B1B04] leading-tight font-medium"
              style={{
                fontFamily: "'Playfair Display', var(--font-playfair), serif",
                fontWeight: 500,
              }}
            >
              Check availability
            </h3>
            <p
              className="text-[13px] text-[#7A6B56] mt-1 font-normal"
              style={{ fontFamily: "var(--font-jost), sans-serif" }}
            >
              Free quote · no payment needed to enquire
            </p>
          </div>
        )}

        <div
          className={`grid ${
            isModal
              ? "grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 items-end"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.25fr_1.2fr_0.85fr_1.2fr_1.42fr_1.1fr] gap-2.5 sm:gap-3 xl:gap-3.5 items-end"
          }`}
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              YOUR NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className={`w-full bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl text-sm text-[#3A2406] placeholder:text-[#9C8E7B] focus:outline-none transition ${
                isModal ? "h-[42px] px-3 py-2" : "h-[48px] px-3.5 py-2.5"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-[10px]">{errors.name}</span>
            )}
          </div>

          {/* Mobile Number Field */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              MOBILE NUMBER
            </label>
            <div
              className={`flex items-center bg-white border border-[#DCCFB6] focus-within:border-[#3A2406] rounded-xl overflow-hidden transition ${
                isModal ? "h-[42px]" : "h-[48px]"
              }`}
            >
              <div className="relative h-full shrink-0 border-r border-[#DCCFB6] bg-transparent flex items-center px-2.5">
                <span className="text-xs sm:text-sm text-[#9C8E7B] font-medium pointer-events-none flex items-center gap-1 shrink-0">
                  {formData.countryCode || "+91"}
                  <IoIosArrowDown className="text-[#9C8E7B] text-[10px]" />
                </span>
                <select
                  name="countryCode"
                  value={formData.countryCode || "+91"}
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  title="Select country code"
                >
                  {countries.map((c, i) => (
                    <option key={`${c.name}-${i}`} value={c.code} className="text-[#3A2406]">
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile"
                required
                className="w-full bg-transparent px-3 py-2 text-sm text-[#3A2406] placeholder:text-[#9C8E7B] focus:outline-none h-full"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-[10px]">{errors.phone}</span>
            )}
          </div>

          {/* Check-in & Check-out Field */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              CHECK-IN & OUT
            </label>
            <div className="relative flex items-center">
              <DatePicker
                wrapperClassName="w-full"
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="dd / mm / yyyy"
                className={`w-full bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl text-sm text-[#3A2406] placeholder:text-[#9C8E7B] focus:outline-none transition pr-9 ${
                  isModal ? "h-[42px] px-3 py-2" : "h-[48px] px-3.5 py-2.5"
                }`}
                dateFormat="dd/MM/yyyy"
              />
              <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9C8E7B] pointer-events-none text-base" />
            </div>
            {errors.checkIn && (
              <span className="text-red-500 text-[10px]">
                {errors.checkIn}
              </span>
            )}
          </div>

          {/* Guests Field */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              GUESTS
            </label>
            <div className="relative">
              <select
                name="guests"
                value={formData.guests || "10 - 12"}
                onChange={handleChange}
                className={`w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl text-sm text-[#9C8E7B] focus:outline-none transition cursor-pointer pr-6 ${
                  isModal ? "h-[42px] px-3 py-2" : "h-[48px] px-3.5 py-2.5"
                }`}
              >
                {guestOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-[#3A2406]">
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C8E7B] pointer-events-none text-sm" />
            </div>
          </div>

          {/* Occasion Field */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              OCCASION
            </label>
            <div className="relative">
              <select
                name="occasion"
                value={formData.occasion || "Weekend getaway"}
                onChange={handleChange}
                className={`w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl text-sm text-[#9C8E7B] focus:outline-none transition cursor-pointer pr-6 ${
                  isModal ? "h-[42px] px-3 py-2" : "h-[48px] px-3.5 py-2.5"
                }`}
              >
                {occasionOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-[#3A2406]">
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C8E7B] pointer-events-none text-xs" />
            </div>
          </div>

          {/* Farmhouse Selection */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              FARMHOUSE
            </label>
            <div className="relative">
              <select
                name="farmhouse"
                value={formData.farmhouse || "Sukoon Farmhouse (3 BHK)"}
                onChange={handleChange}
                className={`w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl text-sm text-[#9C8E7B] focus:outline-none transition cursor-pointer pr-6 ${
                  isModal ? "h-[42px] px-3 py-2" : "h-[48px] px-3.5 py-2.5"
                }`}
              >
                {farmhouseOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-[#3A2406]">
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C8E7B] pointer-events-none text-xs" />
            </div>
          </div>

          {/* Submit Action */}
          <div
            className={`flex flex-col gap-1 text-left ${
              isModal ? "sm:col-span-2 mt-1" : ""
            }`}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] rounded-full px-5 text-sm font-medium transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer shadow-md hover:shadow-lg ${
                isModal ? "h-[44px]" : "h-[48px] py-2.5"
              }`}
            >
              <span>{isSubmitting ? "Sending..." : "Book Now"}</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-2.5 text-center text-[11px] text-[#8C7E6A] font-normal"
          style={{ fontFamily: "var(--font-jost), sans-serif" }}
        >
          By submitting, you agree to be contacted by City Focus about your
          enquiry.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
