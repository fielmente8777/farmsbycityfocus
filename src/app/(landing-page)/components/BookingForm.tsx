"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "@/src/hooks/useBookingForm";
import { getDateInputLimits } from "@/src/hooks/getDateInputLimits";
import { IoIosArrowDown } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";

interface BookingFormProps {
  isModal?: boolean;
}

const guestOptions = [
  "21 - 30",
  "10 - 20",
  "20 - 25",
  "25+ guests",
  "Help me choose",
];

const occasionOptions = [
  "Weekend getaway",
  "Birthdays & celebrations",
  "Family gatherings",
  "Friends' get-togethers",
  "Corporate offsites",
  "Couple escapes",
  "Other",
];

const farmhouseOptions = [
  "Help me choose",
  "Crystal Farmhouse (4 BHK)",
  "Sukoon Farmhouse (3 BHK)",
];

const BookingForm: React.FC<BookingFormProps> = ({ isModal = false }) => {
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
            ? "bg-white rounded-2xl shadow-[0_4px_24px_rgba(58,36,6,0.06)] border border-[#E8DEC8] p-5"
            : "w-full"
        }
      >
        <div
          className={`grid ${
            isModal
              ? "grid-cols-1 gap-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1.25fr_0.9fr_1.35fr_1.35fr_1.15fr] gap-3 sm:gap-3.5 items-end"
          }`}
        >
          {/* 1. YOUR NAME */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              YOUR NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="w-full bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl px-3.5 py-2.5 text-sm text-[#3A2406] placeholder:text-[#9C8E7B] focus:outline-none transition h-[48px]"
            />
            {errors.name && (
              <span className="text-red-500 text-[10px]">{errors.name}</span>
            )}
          </div>

          {/* 2. MOBILE NUMBER */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              MOBILE NUMBER
            </label>
            <div className="flex items-center bg-white border border-[#DCCFB6] focus-within:border-[#3A2406] rounded-xl overflow-hidden transition h-[48px]">
              <span className="px-3 text-xs sm:text-sm text-[#7A6B56] font-medium border-r border-[#DCCFB6] bg-[#FAF7F0] h-full flex items-center shrink-0">
                +91
              </span>
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

          {/* 3. CHECK-IN & OUT */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              CHECK-IN & OUT
            </label>
            <div className="relative flex items-center">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="dd / mm / yyyy"
                className="w-full bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl px-3.5 py-2.5 text-sm text-[#3A2406] placeholder:text-[#9C8E7B] focus:outline-none transition h-[48px] pr-9"
                dateFormat="dd/MM/yyyy"
              />
              <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-base" />
            </div>
            {errors.checkIn && (
              <span className="text-red-500 text-[10px]">
                {errors.checkIn}
              </span>
            )}
          </div>

          {/* 4. GUESTS */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              GUESTS
            </label>
            <div className="relative">
              <select
                name="guests"
                value={formData.guests || "21 - 30"}
                onChange={handleChange}
                className="w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl px-3.5 py-2.5 text-sm text-[#3A2406] focus:outline-none transition cursor-pointer pr-8 h-[48px]"
              >
                {guestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-sm" />
            </div>
          </div>

          {/* 5. OCCASION */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              OCCASION
            </label>
            <div className="relative">
              <select
                name="occasion"
                value={formData.occasion || "Weekend getaway"}
                onChange={handleChange}
                className="w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl px-3.5 py-2.5 text-sm text-[#3A2406] focus:outline-none transition cursor-pointer pr-8 h-[48px]"
              >
                {occasionOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs" />
            </div>
          </div>

          {/* 6. FARMHOUSE */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[11px] uppercase tracking-[0.16em] text-[#7A6B56] font-medium font-[family-name:var(--font-jost)]">
              FARMHOUSE
            </label>
            <div className="relative">
              <select
                name="farmhouse"
                value={formData.farmhouse || "Help me choose"}
                onChange={handleChange}
                className="w-full appearance-none bg-white border border-[#DCCFB6] focus:border-[#3A2406] rounded-xl px-3.5 py-2.5 text-sm text-[#3A2406] focus:outline-none transition cursor-pointer pr-8 h-[48px]"
              >
                {farmhouseOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs" />
            </div>
          </div>

          {/* 7. SUBMIT BUTTON */}
          <div className="flex flex-col gap-1.5 text-left">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3A2406] hover:opacity-95 text-[#FFFDF6] rounded-full px-5 py-2.5 text-sm font-medium transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer shadow-md hover:shadow-lg h-[48px]"
            >
              <span>{isSubmitting ? "Sending..." : "Book Now"}</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* DISCLAIMER TEXT */}
        <p
          className="mt-3.5 text-center text-[12px] text-[#8C7E6A] font-normal"
          style={{ fontFamily: "var(--font-jost), sans-serif" }}
        >
          *By submitting, you agree to be contacted by City Focus about your
          enquiry.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
