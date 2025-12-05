"use client";

import Socials from "@/components/Socials";

const FooterSection = () => {
  // JS sendEmail() function
  const sendEmail = () => {
    window.open("mailto:johnmarkalmanza.work@gmail.com", "_blank");
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center px-8 py-10 text-center bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      {/* HEADER */}
      <div className="max-w-xl mb-6 mt-12">
        <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
          Let's Work Together
        </h2>
        <p className="text-white/80 text-base sm:text-xl md:text-lg lg:text-xl leading-relaxed">
          Have an idea, project, or opportunity?
        </p>
      </div>

      {/* EMAIL BUTTON */}
      <div className="mb-6">
        <button
          onClick={sendEmail}
          className="bg-zinc-900 border border-zinc-800 text-white text-base sm:text-xl md:text-sm lg:text-base font-medium px-6 py-3 rounded-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
        >
          Send an email
        </button>
      </div>

      {/* SOCIALS */}
      <div className="text-white/80 text-base sm:text-xl md:text-base lg:text-base">
        More of a social person?
      </div>
      <Socials />
    </section>
  );
};

export default FooterSection;