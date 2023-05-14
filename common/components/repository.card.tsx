
import React from "react";

interface Props {
    fullName: string,
    language: string,
    stargazersCount: number,
    description: string,
    htmlUrl: string
}

const RepositoryCard: React.FC<Props> = ({
    fullName,
    language,
    stargazersCount,
    description,
    htmlUrl
}) => {
    const descriptionText = description?.length > 40 ? description.slice(0,40).concat(" ..."):description
    return (
        <div className="p-4 rounded-xl border border-gray-700 bg-gray-50 h-auto dark:bg-[#0d1117] shadow-xl">
        <div className="flex justify-between items-center">
            <a target="_blank" className="text-white font-bold hover:text-blue-400" href={htmlUrl}>{fullName}</a>
         
        </div>
        <p className="text-sm text-gray-400">{descriptionText}</p>
        <div className="mt-3 flex items-center gap-5">
            <p className="text-sm text-gray-400">🔴 {language}</p>
            <a href="#" className="text-sm text-gray-400">⭐ {stargazersCount}</a>
        </div>
    </div>
    );
};

export default RepositoryCard;

