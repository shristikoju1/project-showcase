import { useRef } from "react";

const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const searchItem = inputRef.current?.value.trim().toLowerCase();
        const assignmentCards = document.querySelectorAll('.assignment-card');
        assignmentCards.forEach(function (card) {
          const title = card.querySelector(".project-title")?.textContent?.toLowerCase();
          if (title && title.includes(searchItem || "")) {
            card.classList.remove("hide-search");
          } else {
            card.classList.add("hide-search");
          }
        });
      };
    
  return (
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
  );
};

export default SearchBar;
