import {RefObject} from 'react';
interface SearchBarProps {
  onSearch: (searchTerm: string) => void; 
  searchRef: RefObject<HTMLInputElement>;
}
let timeoutId: NodeJS.Tomeout | undefined;


const SearchBar = ({ onSearch, searchRef }: SearchBarProps) => {

  const handleSearch = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const searchItem = searchRef.current?.value.trim().toLowerCase() || "";
      onSearch(searchItem); // Pass the search term to the parent component
  
    },700)
  };

  return (
    <div className="search-div">
      <input
        type="text"
        id="searchbox"
        ref={searchRef}
        placeholder="What are you looking for?"
        autoComplete="off"
        className="w-full p-2 border border-gray-300 rounded-2xl focus:ring-indigo-500"
        onInput={handleSearch}
        
      />
    </div>
  );
};

export default SearchBar;
