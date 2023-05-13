import React from "react";
import SearchInput from "../ui/search.input";

interface Props {
    searchInputPlaceholder?: string;
    handleOnChangeSearchInput: (value: string) => void;
}

const Header: React.FC<Props> = ({
    searchInputPlaceholder,
    handleOnChangeSearchInput,
}) => {
 

    return (
        <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-[#0d1117] dark:border-gray-700">
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