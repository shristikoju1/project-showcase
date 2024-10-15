import React, { useRef, useState } from "react";
import { projects } from "../data/ProjectDetails";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface ProjectCardProps {
  openProject: number | null;
  toggleDetails: (id: number) => void;
  projects: typeof projects;
  searchTerm: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ openProject, toggleDetails, projects, searchTerm }) => {

  // let searchRef = useRef<HTMLInputElement>(null);
  // const [searchTerm, setSearchTerm] = useState("");


   const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm)
  );
  
  return (
    <div className="flex flex-col gap-6">
      {filteredProjects.map((project) => (
        <section
          key={project.id}
          className={`transition-transform duration-1000 ease-out transform ${
            openProject === project.id ? "translate-y-2" : "translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between gap-6 px-6 assignment-card">
            <h2 className="text-xl font-bold">{project.projectNumber}</h2>
            <p className="project-title">{project.title}</p>
            <button
              className="flex items-center justify-center gap-3"
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
