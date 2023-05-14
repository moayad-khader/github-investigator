import React from "react";
import SearchInput from "../ui/search.input";

interface Props {
    searchInputPlaceholder?: string;
    handleOnChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<Props> = ({
    searchInputPlaceholder,
    handleOnChangeSearchInput,
}) => {
 

    return (
        <header className="fixed top-0 w-full border-b border-gray-200 bg-[#0d1117] border-gray-700">
            <div className="px-3 py-3 lg:px-16 ">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-start">
                        <SearchInput
                            handleOnChange={handleOnChangeSearchInput}
                        />
                    </div>
                    <div className="flex items-center">
                       
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;