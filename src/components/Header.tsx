"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = ["HOME", "PROJECTS", "TOOLBOX", "CERTIFICATES", "CONTACT"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const [activePill, setActivePill] = useState({ left: 0, width: 0, height: 0, top: 0 });

  // Icon mapping for mobile
  const iconMap: Record<string, string> = {
    home: "/assets/headers/home.svg",
    projects: "/assets/headers/projects.svg",
    toolbox: "/assets/headers/toolbox.svg",
    certificates: "/assets/headers/certificates.svg",
    contact: "/assets/headers/contact.svg",
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const link of navLinks) {
        const id = link.toLowerCase().replace(" ", "");
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update desktop active pill
  useEffect(() => {
    if (!desktopNavRef.current) return;
    const linkElements = Array.from(desktopNavRef.current.children) as HTMLElement[];
    const activeLink = linkElements.find((el) => el.dataset.id === activeSection);
    if (activeLink) {
      const navHeight = desktopNavRef.current.offsetHeight;
      const verticalPadding = 4;
      const horizontalPadding = 8;

      setActivePill({
        left: activeLink.offsetLeft - horizontalPadding,
        width: activeLink.offsetWidth + horizontalPadding * 2,
        height: navHeight - verticalPadding * 2,
        top: verticalPadding,
      });
    }
  }, [activeSection]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-3 left-0 w-screen px-2 z-50 md:left-1/2 md:w-auto md:px-0 md:transform md:-translate-x-1/2">
      {/* Desktop Navbar */}
      <nav
        ref={desktopNavRef}
        className="hidden md:flex gap-4 relative px-2.5 py-2.5 bg-black/70 backdrop-blur-md rounded-full"
      >
        {navLinks.map((link) => {
          const id = link.toLowerCase().replace(" ", "");
          return (
            <button
              key={link}
              data-id={id}
              onClick={() => handleScrollTo(id)}
              className="relative text-white text-sm font-semibold px-3 py-1 cursor-pointer transition-colors duration-200 hover:text-blue-400"
            >
              {link}
            </button>
          );
        })}

        {/* Active pill */}
        <span
          className="absolute bg-white/20 rounded-full transition-all duration-300"
          style={{
            left: activePill.left,
            width: activePill.width,
            height: activePill.height,
            top: activePill.top,
          }}
        />
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden justify-center gap-6 sm:gap-10 relative bg-black/70 backdrop-blur-md rounded-full px-4 py-2 w-full sm:w-[60%] sm:mx-auto">
        {navLinks.map((link) => {
          const id = link.toLowerCase().replace(" ", "");
          const isActive = activeSection === id;

          return (
            <button
              key={link}
              onClick={() => handleScrollTo(id)}
              className="relative flex flex-col items-center text-white cursor-pointer transition-colors duration-200 hover:text-blue-400"
            >
              <img
                src={iconMap[id]}
                alt={`${link} icon`}
                className="w-6 h-6 mb-1"
              />
              {/* Show text only if active */}
              {isActive && <span className="text-sm font-semibold">{link}</span>}
            </button>
          );
        })}
      </nav>
    </header>
  );
}