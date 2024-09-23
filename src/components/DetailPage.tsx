import { FaGithub } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import classNames from 'classnames';

const linkStyles = classNames(
  'transition-transform duration-300 ease-in-out',
  'border border-transparent rounded-full',
  'px-1 py-0.5 hover:-translate-y-0.5',
  'relative inline-block',
  'after:block after:absolute after:bg-blue-500',
  'after:h-[2px] after:w-0 after:left-1/2',
  'after:-bottom-[5px] after:transition-all',
  'after:duration-300 hover:after:w-full hover:after:left-0'
);

const DetailPage = () => {
  return (
    <div className="bg-transparent z-12 flex justify-center items-center h-[100vh] w-[100vw]">
          <div className="p-8 mt-4 border border-gray-300 shadow-lg details rounded-2xl animate-dialog wrapper dialog">

<h1 className="mb-4 text-2xl">Details</h1>
<p>Here is an address book created using shell scripting.</p>
<div className="flex gap-4 mt-4 text-3xl links-div">
  <a
    href="https://github.com/shristikoju1/YIPL-FigmaDesign"
    target="_blank"
    rel="noopener noreferrer"
    className={linkStyles}

  >
      <FaGithub  className="text-xl text-indigo-400" />
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
  src="assets/assignment1.png"
  alt="Assignment 1"
  width="200"
  height="150"
  className="mt-4"
/>

</div>
    </div>


  );
};

export default DetailPage;
