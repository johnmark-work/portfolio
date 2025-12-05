"use client";
import React, { useEffect } from "react";

// Global declaration
declare global {
  interface Window {
    modalOpen?: boolean;
  }
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  provider: string;
  image: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  provider,
  image,
}) => {
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

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE PREVIEW */}
        <img
          src={image}
          alt={title}
          className="object-contain max-w-[90vw] max-h-[70vh] rounded-t-lg shadow-2xl"
        />

        {/* Details */}
        <div className="flex items-center justify-between bg-gray-50 w-full border-t border-gray-200 p-4 rounded-b-lg text-left">
          <div>
            <h3 className="font-semibold text-xs sm:text-xl md:text-base lg:text-lg text-black">
              <span>{title}</span>
              <span className="text-gray-600 font-medium"> - {provider}</span>
            </h3>
          </div>

          <button
            onClick={onClose}
            className="font-medium bg-zinc-950 border border-zinc-800 text-white text-sm px-4 py-2 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;