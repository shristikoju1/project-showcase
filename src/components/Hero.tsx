import React, { useState, useRef } from "react";
import "../scss/style.scss";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import DetailPage from './DetailPage';

const Hero: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let timeoutId: NodeJS.Timeout | undefined;

  const toggleDetails = (index: number) => {
    setOpenDialog(openDialog === index ? null : index);  // Toggle between open and close
  };

  const handleSearch = () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const searchItem = inputRef.current?.value.trim().toLowerCase();
      console.log(`Search term is: ${searchItem}`);

      const assignmentCards = document.querySelectorAll('.assignment-card');
      assignmentCards.forEach(function (card) {
        const title = card.querySelector(".project-title")?.textContent?.toLowerCase();
        if (title && title.includes(searchItem || "")) {
          card.classList.remove("hide-search");
          console.log('remove hide');
        } else {
          card.classList.add("hide-search");
          console.log('hide');
        }
      });

    }, 500);
  }

  return (
    <div className="relative flex items-center justify-center md:flex-wrap">
      {/* Conditionally render the overlay when openDialog is open */}
      {openDialog !== null && <div className="overlay"></div>}

      <header className="flex flex-col items-center justify-center my-10 border border-black shadow-xl p-14 max-w-max h-1/2">
        <h1 className="text-3xl font-bold text-center">
          Project <br /> <span className="text-indigo-800">Showcase</span>
        </h1>
        <h3 className="text-center">Frontend Intern</h3>
        <p className="text-center">YoungInnovations Pvt. Ltd.</p>
        <p className="font-bold text-center">Shristi Koju</p>
      </header>

      <main className="flex flex-col my-4 min-w-[60vw] p-8 gap-8 items-end">
        <div className="search-div">
          <input
            type="text"
            id="searchbox"
            ref={inputRef}
            placeholder="What are you looking for?"
            autoComplete="off"
            className="w-full p-2 border border-gray-300 rounded-2xl focus:ring-indigo-500"
            onInput={handleSearch}
          />
        </div>

        {/* Project 1 */}
        <section className="transition-transform duration-1000 ease-out transform translate-y-0">
          <div className="relative flex items-center justify-around gap-32 px-6 py-2 border border-gray-300 shadow-lg assignment-card rounded-5xl">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="project-title">Figma: Yodora</p>
            <button
              className="flex items-center justify-center gap-1"
              onClick={() => toggleDetails(1)}
            >
              <span className="text-indigo-600 hover:underline">More</span>
              <IoIosArrowDropdownCircle className="self-center text-3xl text-center cursor-pointer" />
            </button>
          </div>
        </section>

        {/* Project 2 */}
        <section className="transition-transform duration-1000 ease-out transform translate-y-0">
          <div className="relative flex items-center justify-around gap-32 px-6 py-2 border border-gray-300 shadow-lg assignment-card rounded-5xl">
            <h2 className="text-xl font-bold">Project 2</h2>
            <p className="project-title">Evogym</p>
            <button
              className="flex items-center justify-center gap-1"
              onClick={() => toggleDetails(1)}
            >
              <span className="text-indigo-600 hover:underline">More</span>
              <IoIosArrowDropdownCircle className="self-center text-3xl text-center cursor-pointer" />
            </button>
          </div>
        </section>
      </main>

      {/* Conditionally render DetailPage and overlay */}
      {openDialog !== null && <div id="overlay" className="active"></div>}
      {openDialog === 1 && <DetailPage />}
    </div>
  );
};

export default Hero;
