import { FaGithub } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  image: string;
}

interface DetailPageProps {
  project: Project | undefined;
  onClose: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ project }) => {

  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
    onClose();
  }

  if (!project || !openModal) {
    return null; // If no project is passed, return null
  }

  return (
    <div className="details modal" id="dialog">
      <div className="relative wrapper">
        <RxCross2 className="absolute top-0 right-0 w-8 h-8 cursor-pointer" onClick={closeModal}/>
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p>{project.description}</p>
        <div className="links-div">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-indigo-400" />
          </a>
          <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
            <FaVideo className="text-indigo-400 " />
          </a>
        </div>
        <img src={project.image} alt={project.title} width="350" height="300" />
      </div>
    </div>
  );
};

export default DetailPage;
