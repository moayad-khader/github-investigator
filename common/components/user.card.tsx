
import React from "react";

interface Props {
    avatarUrl: string;
    login: string;
    htmlUrl: string;
}

const UserCard: React.FC<Props> = ({
    avatarUrl,
    login,
    htmlUrl
}) => {

    return (
        <div className="p-4 pt-8 rounded-xl border border-gray-700 bg-gray-50 h-auto dark:bg-[#0d1117]">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatarUrl} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{login}</h5>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href={htmlUrl} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;

