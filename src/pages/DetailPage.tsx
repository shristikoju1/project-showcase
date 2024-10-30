import { FaGithub, FaVideo } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  githubLink: string;
  liveDemoLink: string;
  description: string[]; 
  image: string;
}

interface DetailPageProps {
  project: Project | undefined;
  onClose: () => void; 
}

const DetailPage: React.FC<DetailPageProps> = ({ project, onClose }) => {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
    onClose(); 
  };

  if (!project || !openModal) {
    return null; 
  }

  return (
    <>
        <div className="overlay" onClick={closeModal}></div>
        <div className="details modal" id="dialog">
      <div className="relative wrapper">
        {/* <RxCross2
          className="absolute w-8 h-8 cursor-pointer top-4 right-4"
          onClick={closeModal}
        /> */}
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <div className="text-left description">
          <ul className="px-10 ml-1 text-left list-disc ">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="links-div">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-indigo-400" />
          </a>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaVideo className="text-indigo-400 " />
          </a>
        </div>
        <img src={project.image} alt={project.title} width="400" height="250" />
      </div>
    </div>


    </>
  );
};

export default DetailPage;
