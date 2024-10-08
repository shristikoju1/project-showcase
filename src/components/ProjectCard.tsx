import React from "react";
import { projects } from "../data/ProjectDetails";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface ProjectCardProps {
  openProject: number | null;
  toggleDetails: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ openProject, toggleDetails }) => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <section
          key={project.id}
          className={`transition-transform duration-1000 ease-out transform ${
            openProject === project.id ? "translate-y-2" : "translate-y-0"
          }`}
        >
          <div className="relative flex items-center justify-between gap-32 px-6 py-2 border border-gray-300 shadow-lg assignment-card rounded-5xl">
            <h2 className="text-xl font-bold">{project.projectNumber}</h2>
            <p className="font-semibold project-title">{project.title}</p>
            <button
              className="flex items-center justify-center gap-1"
              onClick={() => toggleDetails(project.id)}
            >
              <span className="text-indigo-600 hover:underline">More</span>
              <IoIosArrowDropdownCircle className="self-center text-3xl text-center cursor-pointer" />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectCard;
