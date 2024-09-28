import { FaGithub } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import classNames from "classnames";
import Yodora from "../assets/yodora.png";

const linkStyles = classNames(
  "transition-transform duration-300 ease-in-out",
  "border border-transparent rounded-full",
  "px-2 py-1 hover:-translate-y-0.5",
  "relative inline-block",
  "after:block after:absolute after:bg-blue-400",
  "after:h-[2px] after:w-0 after:left-1/2",
  "after:-bottom-[5px] after:transition-all",
  "after:duration-300 hover:after:w-full hover:after:left-0"
);

const DetailPage = () => {
  return (
      <div className="details animate-dialog" id="dialog">
      <div className="wrapper">
        <h1 className="text-2xl font-bold">Details</h1>
        <p>Here is an landing page built based on the figma design.</p>
        <div className="flex gap-4 text-3xl links-div">
          <a
            href="https://github.com/shristikoju1/YIPL-FigmaDesign"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            <FaGithub className="text-xl text-indigo-400" />
          </a>
          <a
            href="https://yodora-qpggmdfaa-shristikoju1s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            <FaVideo className="text-xl text-indigo-400" />
          </a>
        </div>
        <img
          src={Yodora}
          alt="Project 1"
          width="350"
          height="300"
          className=""
        />
      </div>
      </div>
  );
};

export default DetailPage;
