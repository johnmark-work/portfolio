"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/sections/ProjectsSection";
import TechStack from "@/components/TechStack";
import CertificatesSection from "@/sections/CertificatesSection";
import FooterSection from "@/sections/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Page() {
  const router = useRouter();

  // Force reload logic
  useEffect(() => {
    // Detect if the page was reloaded
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navigation?.type === "reload") {
      // Force reload to home page
      window.location.href = "/";
    }
  }, []);

  // 1-section-per-scroll feature (Desktop only)
  useEffect(() => {
    // Collect all <section> elements
    const sections = Array.from(document.querySelectorAll("section"));
    let scrolling = false; // Prevent multiple scrolls during smooth scroll

    // Handle mouse wheel
    const handleWheel = (e: WheelEvent) => {
      const width = window.innerWidth;

      // Only enable on 1024 resolution screens (desktop)
      if (width >= 1024) {

        if (window.modalOpen) return; // Ignore scrolling when modal is open

        e.preventDefault(); // Prevent normal scrolling

        if (scrolling) return; // Ignore if already scrolling

        scrolling = true;

        // Determine the section currently closest to top of viewport
        // This ensures nav link jumps sync correctly
        let closestIndex = 0;
        let minDistance = Infinity;
        sections.forEach((section, index) => {
          const distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        let nextSection = closestIndex;

        // Scroll down
        if (e.deltaY > 0 && closestIndex < sections.length - 1) {
          nextSection = closestIndex + 1;
        }
        // Scroll up
        else if (e.deltaY < 0 && closestIndex > 0) {
          nextSection = closestIndex - 1;
        }

        // Smooth scroll to the calculated section
        sections[nextSection].scrollIntoView({ behavior: "smooth" });

        // Allow next scroll after smooth scroll finishes (~800ms)
        setTimeout(() => {
          scrolling = false;
        }, 800);
      }
    };

    // Add wheel listener
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array = run once on mount

  return (
  <>
    {/* Loading Screen */}
    <LoadingScreen />
    
    <div className="scroll-smooth">
      {/* Navigation bar */}
      <Header />

      {/* Sections */}
      <Hero />
      <ProjectsSection />
      <TechStack />
      <CertificatesSection />
      <FooterSection />
    </div>
  </>
  );
}