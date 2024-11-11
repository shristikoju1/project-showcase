import React, { useRef, useState } from "react";
import "../scss/style.scss";
import DetailPage from "./DetailPage";
import { projects } from "../data/ProjectDetails";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";

const Hero: React.FC = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const toggleDetails = (id: number) => {
    setOpenProject(openProject === id ? null : id);
  };

  const closeDetails = () => {
    setOpenProject(null);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term); 
  };

  const selectedProject = projects.find((p) => p.id === openProject);

  return (
    <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 grid-rows-auto">
      <div className="pl-5 md:row-span-2">
        <div className="md:fixed">
          <Header />
        </div>
      </div>
      <main className="flex flex-col gap-8 p-8 md:my-4 ">
        {/* Pass searchRef and searchTerm correctly */}
        <SearchBar onSearch={handleSearch} searchRef={searchRef} />
        <ProjectCard openProject={openProject} toggleDetails={toggleDetails} searchTerm={searchTerm} projects={projects} />
      </main>

      {/* Conditionally render DetailPage if a project is selected */}
      {selectedProject && (
        <DetailPage project={selectedProject} onClose={closeDetails} />
      )}
    </div>
  );
};

export default Hero;
