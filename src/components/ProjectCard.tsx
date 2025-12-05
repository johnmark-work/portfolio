"use client";
import React from "react";

interface ProjectCardProps {
  image: string;
  onClick: () => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full bg-transparent shadow-sm border border-zinc-200 rounded-sm overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer ${className}`}
    >
      {/* Full-size image */}
      <img
        src={image}
        alt="Project image"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
      />
    </div>
  );
};

export default ProjectCard;