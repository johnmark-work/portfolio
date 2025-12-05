"use client";
import { useState } from "react";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col py-6 px-6 md:px-12 lg:px-16 bg-zinc-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
    >
      {/* Header */}
      <div className="text-center mt-14 mb-4">
        <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">
          One Project Five Ways
        </h2>
        <p className="text-black/80 text-base sm:text-lg md:text-lg lg:text-lg mt-1">
          My contributions across different development roles
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-auto mb-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex justify-center w-full sm:w-[47%] md:w-[30%] lg:w-[30%] h-[29vh] sm:h-[22vh] md:h-[28vh] lg:h-[32vh]"
          >
            <ProjectCard
              image={project.image}
              onClick={() => setSelectedProject(project)}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          tools={selectedProject.tools}
          slides={selectedProject.slides}
        />
      )}
    </section>
  );
};

export default ProjectsSection;