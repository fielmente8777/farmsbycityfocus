"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fallback for environments without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-up").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(".fade-up:not(.visible)");
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-check after layout stabilization & dynamic content render
    const t1 = setTimeout(observeAll, 150);
    const t2 = setTimeout(observeAll, 500);

    // Watch for dynamically added DOM elements (e.g. Swiper, tabs)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

