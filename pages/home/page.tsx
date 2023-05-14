import type { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from 'common/components/header';
import RepositoryCard from 'common/components/repository.card';
import Skeleton from 'common/components/skeleton';
import { IRepository } from 'store/Repository/repository.types';
import { IUser } from 'store/User/user.types';
import helpers from 'helpers/helpers';

interface Props {
  repositories: Array<IRepository>,
  users: Array<IUser>,
  getAllRepositories(query: string): void,
  resetRepositories(): void,
  getAllUsers(query: string): void,
  resetUsers(): void
}

const Home: NextPage<Props> = ({
  repositories,
  users,
  getAllRepositories,
  getAllUsers,
  resetRepositories,
  resetUsers
}) => {

  const [dataSource, setDataSource] = useState('repositories');
  const [searchTerms, setSearchTerms] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOnChangeSearchInput = useCallback(helpers.debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerms(c => query)
    if(!Boolean(query)){
      resetRepositories();
      resetUsers();
      return null;
    }
    setLoading((c) => true);
    if (dataSource === 'repositories')
       return getAllRepositories(query);  
    return getAllUsers(query);  
  }), [setLoading, setSearchTerms]);

  
  const handleOnChangeDataSource = useCallback((value: string) => {
        setDataSource(c => value);
        if(!Boolean(searchTerms)){
          resetRepositories();
          resetUsers();
          return null;
        }
        setLoading((c) => true);
        if (value === 'repositories')
          return getAllRepositories(searchTerms);  
        return getAllUsers(searchTerms);  
  }, [ 
    setLoading,
    setDataSource, 
    searchTerms
  ]);

  useEffect(() => {
    if (loading) {
      setLoading((c) => false);
    }
  }, [users, repositories, setLoading]);

  console.log("rendered", users)

  return (
    <div className="min-h-screen  w-screen flex flex-col justify-between items-center relative bg-gray-800">
      <Header
        handleOnChangeSearchInput={handleOnChangeSearchInput}
        handleOnChangeDataSource={handleOnChangeDataSource}
        dataSource = {dataSource}
      />
      {
        loading ?
        <Skeleton />
        :
          <div className="grid grid-cols-4 gap-4 p-6 pt-24">
            {
              repositories.map(
                repository =>
                  <RepositoryCard
                    key={repository.node_id}
                    fullName={repository.full_name}
                    language={repository.language}
                    stargazersCount={repository.stargazers_count}
                    description={repository.description}
                    htmlUrl={repository.html_url}
                  />
              )
            }
          </div> 
      }
    </div>
  )
}

export default Home
