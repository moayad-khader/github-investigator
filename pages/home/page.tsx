import type { NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';
import Header from 'common/components/header';
import RepositoryCard from 'common/components/repository.card';
import { IRepository } from 'store/Repository/repository.types';
import helpers from 'helpers/helpers';

interface Props {
    repositories: Array<IRepository>,
    getAllRepositories(query:string): void
}

const Home: NextPage<Props> = ({
    repositories,
    getAllRepositories
}) => {

    const [dataToFetch, setDataToFetch] = useState('repositories');
    const [page, setPage] = useState(1);

    const handleOnChangeSearchInput = useCallback(helpers.debounce((event:React.ChangeEvent<HTMLInputElement>) => {
        if(dataToFetch === 'repositories')
            return getAllRepositories(event.target.value);
    }),[]);



    
  return (
    <div className="min-h-screen  w-screen flex flex-col justify-between items-center relative bg-gray-800">
      <Header
        handleOnChangeSearchInput={handleOnChangeSearchInput}
      />
      <div className="grid grid-cols-4 gap-4 p-4 pt-16">
        {
            repositories.map(
                repository =>
                    <RepositoryCard
                        key = {repository.node_id}
                        fullName = {repository.full_name}
                        language = {repository.language}
                        stargazersCount = {repository.stargazers_count}
                        description  = {repository.description}
                        htmlUrl = {repository.html_url}
                    />
            )
        }
    </div>

    </div>
  )
}

export default Home
