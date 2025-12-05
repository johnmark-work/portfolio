"use client";
import React, { useState, useEffect } from "react";

// Global declaration
declare global {
  interface Window {
    modalOpen?: boolean;
  }
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tools: string[];
  slides: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  tools,
  slides,
}) => {
  const [current, setCurrent] = useState(0);

  // Scroll-lock logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.modalOpen = true;
    } else {
      document.body.style.overflow = "";
      window.modalOpen = false;
    }

    return () => {
      document.body.style.overflow = "";
      window.modalOpen = false;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handleDotClick = (index: number) => setCurrent(index);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-0"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE SECTION */}
        <div
          className="relative w-full md:w-[70%] lg:w-[70%] h-full lg:h-full shrink-0 cursor-pointer flex items-stretch justify-stretch"
          onClick={handleNext}
        >
          <img
            src={slides[current]}
            alt={`${title} slide ${current + 1}`}
            className="w-full h-full object-contain"
          />

          {/* DOT INDICATORS */}
          <div className="absolute bottom-3 flex gap-2 justify-center w-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDotClick(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-black scale-110"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="w-full md:w-[30%] lg:w-[30%] shrink-0 bg-gray-50 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base sm:text-xl md:text-sm lg:text-lg flex items-center gap-1">
              {title}
            </h3>

            <p className="text-sm sm:text-lg md:text-xs lg:text-sm mt-2">
              {description}
            </p>

            {/* TOOLS */}
            <div className="mt-4">
              <p className="font-bold text-base sm:text-xl md:text-sm lg:text-lg mb-1">
                Tools:
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-600 font-medium text-xs sm:text-base md:text-xs lg:text-xs px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="font-medium bg-zinc-950 border border-zinc-800 text-white text-sm px-4 py-2 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;