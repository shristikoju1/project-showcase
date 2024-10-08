import React, { useState } from "react";
import "../scss/style.scss";
import DetailPage from "./DetailPage";
import { projects } from "../data/ProjectDetails";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

const Hero: React.FC = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setOpenProject(openProject === id ? null : id);
  };

  const closeDetails = () => {
    setOpenProject(null);
  };

  const selectedProject = projects.find((p) => p.id === openProject);

  return (
    <div className="relative flex-wrap items-center justify-center sm:flex">
      <Header />
      <main className="flex flex-col my-4 min-w-[60vw] p-8 gap-8 items-end">
        <SearchBar />
        <ProjectCard openProject={openProject} toggleDetails={toggleDetails} />
      </main>

      {/* Conditionally render DetailPage if a project is selected */}
      {selectedProject && <DetailPage project={selectedProject} onClose={closeDetails} />}
    </div>
  );
};

export default Hero;
