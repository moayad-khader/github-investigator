import React from 'react';
import SearchInput from 'common/ui/search.input';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from 'common/ui/select.input';

interface Props {
    searchInputPlaceholder?: string;
    handleOnChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnChangeDataSource: (value: string) => void;
    dataSource: string;
}

const Header: React.FC<Props> = ({
    searchInputPlaceholder,
    handleOnChangeSearchInput,
    dataSource,
    handleOnChangeDataSource
}) => {


    return (
        <header className="fixed top-0 w-full border-b border-gray-200 bg-[#0d1117] border-gray-700">
            <div className="px-3 py-3 lg:px-16 ">
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-start">
                        <div className='mr-8'>
                            <SearchInput
                                handleOnChange={handleOnChangeSearchInput}
                            />
                        </div>
                   
                        <Select
                            value={dataSource}
                            onValueChange={handleOnChangeDataSource}
                        >
                            <SelectTrigger className="w-1/2 ">
                                <SelectValue placeholder={dataSource}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="repositories">
                                    repositories
                                </SelectItem>
                                <SelectItem value="users">
                                    Users
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;