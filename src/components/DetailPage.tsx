import { FaGithub } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";

const DetailPage = () => {
  return (

    <div className="p-8 mt-4 border border-gray-300 shadow-lg details rounded-2xl animate-dialog wrapper dialog">

      <h1 className="mb-4 text-2xl">Details</h1>
      <p>Here is an address book created using shell scripting.</p>
      <div className="flex gap-4 mt-4 links-div">
        <a
          href="https://github.com/shristikoju1/YIPL-FigmaDesign"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaGithub  className="text-xl text-indigo-400" />
        </a>
        <a
          href="https://yodora-qpggmdfaa-shristikoju1s-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaVideo className="text-xl text-indigo-400" />
        </a>
      </div>
      <img
        src="assets/assignment1.png"
        alt="Assignment 1"
        width="200"
        height="150"
        className="mt-4"
      />

    </div>
  );
};

export default DetailPage;
