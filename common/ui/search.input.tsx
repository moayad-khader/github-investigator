import { SearchIcon } from '../icons';
import React from "react";

interface Props {
  placeholder?: string;
  handleOnChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  handleOnChange,
}) => {

  return (
    <form>
      <div className="lg:w-96 relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input 
          type="search" 
          id="default-search"
          className="py-2 block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Search or jump to..." 
          onChange={handleOnChange}
        />
      </div>
    </form>
  );
};

export default SearchInput;