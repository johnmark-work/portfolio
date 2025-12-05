"use client";

import Script from "next/script";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Particle Background */}
      <div id="particles-js" className="absolute inset-0"></div>

      {/* Load local particles.js library */}
      <Script src="/particles.min.js" strategy="beforeInteractive" />

      {/* Load your custom particle config */}
      <Script src="/particles.js" strategy="afterInteractive" />

      {/* Content section */}
      <div>
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mt-12">JOHN MARK ALMANZA</h2>
        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl mt-1">INFORMATION TECHNOLOGY</p>
      </div>
    </section>
  );
};

export default Hero;