import React, { useState } from "react";
import "../scss/style.scss";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import DetailPage from './DetailPage';


const Hero: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenDialog(openDialog === index ? null : index);  // Toggle between open and close
  };

  return (
    <div className="flex md:flex-wrap">
      <header className="z-10 flex flex-col items-center justify-center my-10 border border-black shadow-xl p-14 max-w-max h-1/2">
        <h1 className="text-3xl font-bold text-center">
          Project <br /> <span className="text-indigo-800">Showcase</span>
        </h1>
        <h3 className="mt-1 text-lg text-center">Frontend Intern</h3>
        <p className="text-center">YoungInnovations Pvt. Ltd.</p>
        <p className="font-bold text-center ">Shristi Koju</p>
      </header>

      <main className="flex flex-col mt-5 mb-5 min-w-[60vw] p-8 gap-8 items-end">
        <div className="search-div">
          <input
            type="text"
            id="searchbox"
            placeholder="What are you looking for?"
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded-2xl focus:ring-indigo-500"
          />
        </div>

        {/* Assignment 1 */}
        <section className="transition-transform duration-1000 ease-out transform translate-y-0">
          <div className="relative flex items-center justify-around gap-32 px-6 py-2 border border-gray-300 shadow-lg assignment-card rounded-5xl">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="project-title">Yodora</p>
            <button className="flex items-center justify-center gap-1"
              onClick={() => toggleDetails(1)}
            >
              <span
                className="text-indigo-600 hover:underline"
              >
                More
              </span>

              <IoIosArrowDropdownCircle
                className="self-center text-3xl text-center cursor-pointer"
              />
            </button>
          </div>

          {/* Conditionally render DetailPage based on openDialog */}

        </section>

      </main>
      {openDialog === 1 && <DetailPage />}


    </div>
  );

};


export default Hero;
