"use client";

const tools = [
  { name: "GitHub", icon: "/assets/techstack/github.svg" },
  { name: "OnlyOffice", icon: "/assets/techstack/onlyoffice.svg" },
  { name: "Mattermost", icon: "/assets/techstack/mattermost.svg" },
  { name: "Figma", icon: "/assets/techstack/figma.svg" },
  { name: "Tailwind CSS", icon: "/assets/techstack/tailwindcss.svg" },
  { name: "JavaScript", icon: "/assets/techstack/javascript.svg" },
  { name: "React", icon: "/assets/techstack/react.svg" },
  { name: "TypeScript", icon: "/assets/techstack/typescript.svg" },
  { name: "Next.js", icon: "/assets/techstack/nextdotjs.svg" },
  { name: "Git", icon: "/assets/techstack/git.svg" },
  { name: "Vercel", icon: "/assets/techstack/vercel.svg" },
  { name: "Node.js", icon: "/assets/techstack/nodedotjs.svg" },
  { name: "Express.js", icon: "/assets/techstack/express.svg" },
  { name: "MySQL", icon: "/assets/techstack/mysql.svg" },
  { name: "Swagger", icon: "/assets/techstack/swagger.svg" },
  { name: "Postman", icon: "/assets/techstack/postman.svg" },
];

const TechStack = () => {
  return (
    <section
      id="toolbox"
      className="min-h-screen flex flex-col py-8 px-6 md:px-12 lg:px-16 bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      {/* HEADER */}
      <div className="text-center mt-auto mb-6">
        <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl text-white font-bold">My Digital Toolbox</h2>
        <p className="text-white/80 text-base sm:text-lg md:text-lg lg:text-lg mt-2">
          Tools and technologies I use
        </p>
      </div>

      {/* GRID */}
      <div className="flex flex-wrap justify-center gap-4 mb-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl shadow-md w-[8.5vh] sm:w-[22%] md:w-[10%] lg:w-[10.3%] h-[10vh] sm:h-[14vh] md:h-[18vh] lg:h-[18vh] transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
            <p className="hidden sm:block text-xs sm:text-sm md:text-xs lg:text-xs text-center text-white mb-2">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;