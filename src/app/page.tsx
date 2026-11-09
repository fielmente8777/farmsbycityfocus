import HeroSection from "./(landing-page)/components/HeroSection";
import KeyHighlights from "./(landing-page)/components/KeyHighlights";
import CollectionSection from "./(landing-page)/components/CollectionSection";
import OccasionsSection from "./(landing-page)/components/OccasionsSection";
import AmenitiesSection from "./(landing-page)/components/AmenitiesSection";
import ComparisonSection from "./(landing-page)/components/ComparisonSection";
import GallerySection from "./(landing-page)/components/GallerySection";
import BookingStepsSection from "./(landing-page)/components/BookingStepsSection";
import ReviewsSection from "./(landing-page)/components/ReviewsSection";
import FaqSection from "./(landing-page)/components/FaqSection";
import FinalCtaSection from "./(landing-page)/components/FinalCtaSection";
import ScrollReveal from "@/src/components/common/ScrollReveal";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF6] text-[#3A2406] font-sans antialiased overflow-x-hidden">
      {/* Scroll Reveal Animation Manager */}
      <ScrollReveal />

      {/* 1. HERO WITH LUXURY BOOKING BAR */}
      <HeroSection />

      {/* 2. STATS & KEY HIGHLIGHTS RIBBON */}
      <KeyHighlights />

      {/* 3. THE COLLECTION (CRYSTAL & SUKOON FARMHOUSES) */}
      <CollectionSection />

      {/* 4. MADE FOR THE MOMENTS THAT MATTER (6 OCCASIONS) */}
      <OccasionsSection />

      {/* 5. AMENITIES (INDOORS AND OUT) */}
      <AmenitiesSection />

      {/* 6. FIND YOUR FIT: COMPARISON TABLE */}
      <ComparisonSection />

      {/* 7. GALLERY: TAKE A LOOK AROUND */}
      <GallerySection />

      {/* 8. BOOKING MADE SIMPLE (3 STEPS) */}
      <BookingStepsSection />

      {/* 9. GUEST REVIEWS */}
      <ReviewsSection />

      {/* 10. FAQS */}
      <FaqSection />

      {/* 11. FINAL CTA BANNER */}
      <FinalCtaSection />
    </main>
  );
}
