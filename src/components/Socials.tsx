"use client";

const Socials = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: "/assets/socials/linkedin.svg",
      link: "https://www.linkedin.com/in/john-mark-almanza",
    },

    {
      name: "Facebook",
      icon: "/assets/socials/facebook.svg",
      link: "https://www.facebook.com/JMA1119",
    },

    {
      name: "GitHub",
      icon: "/assets/socials/github.svg",
      link: "https://github.com/johnmark-work",
    },
  ];

  return (
    <div className="flex justify-center gap-2 mt-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-transparent p-2 flex items-center justify-center"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="rounded-full w-9 sm:w-10 md:w-9 lg:w-9 h-9 sm:h-10 md:h-9 lg:h-9 object-contain transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;