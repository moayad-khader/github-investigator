import { Search } from "lucide-react";
import React from "react";

interface Props {
  placeholder?: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  onChange,
}) => {
  const handleOnChange = (e:any) => {
    onChange(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault;
      }}
      className="flex relative w-full text-white/50"
    >
      <button disabled className="absolute inset-y-0 left-2 text-white/25 ">
        <Search size={20} />
      </button>
      <input
        type="search"
        className="peer py-2 pl-8 w-full bg-transparent border-2 border-white/25 rounded-lg focus:border-white/70 focus:ring-0"
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
      />
    </form>
  );
};

export default SearchInput;