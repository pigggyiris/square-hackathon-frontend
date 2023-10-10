import { FiSearch } from "react-icons/fi";
import CustomButton from "./CustomButton";

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="relative mt-[3px] flex h-[60px] justify-between px-4 py-2 md:px-6 xl:px-8">
      <div className="flex flex-grow items-center rounded-full bg-fall-50 bg-opacity-75 text-fall-800 dark:bg-fall-900 dark:text-white">
        <p className="pl-3 pr-2 text-xl">
          <FiSearch className="h-4 w-4 text-fiord-400 dark:text-white" />
        </p>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Ask me..."
          className=" min-w-0 flex-grow rounded-full bg-fall-50 bg-opacity-75 px-2 text-sm font-medium text-fall-700 outline-none placeholder:!text-fiord-400 dark:bg-fall-900 dark:text-white dark:placeholder:!text-white"
        />
      </div>
      <CustomButton label="Ask!" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
