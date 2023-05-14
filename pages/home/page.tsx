import type { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Header from 'common/components/header';
import RepositoryCard from 'common/components/repository.card';
import UserCard from 'common/components/user.card';
import Skeleton from 'common/components/skeleton';
import { IRepository } from 'store/Repository/repository.types';
import { IUser } from 'store/User/user.types';
import helpers from 'helpers/helpers';
import uuid from 'react-uuid';

interface Props {
  repositories: Array<IRepository>,
  users: Array<IUser>,
  getAllRepositories(query: string, page: number): void,
  resetRepositories(): void,
  getAllUsers(query: string, page: number): void,
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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const query = event.target.value;
    setPage(2);
    setSearchTerms(query)
    if (!Boolean(query)) {
      resetRepositories();
      resetUsers();
      return null;
    }
    setLoading(true);
    if (dataSource === 'repositories')
      return getAllRepositories(query, 1);
    return getAllUsers(query, 1);
  }), [setLoading, setSearchTerms, dataSource, setPage]);


  const handleOnChangeDataSource = useCallback((value: string) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    console.log("value", value)
    setDataSource(value);
    setPage(2);
    if (
      !Boolean(searchTerms)
    ) {
      return null;
    }
    setLoading(true);
    if (value === 'repositories')
      return getAllRepositories(searchTerms, 1);
    return getAllUsers(searchTerms, 1);
  }, [
    setLoading,
    setDataSource,
    searchTerms,
    setPage
  ]);


  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      if (dataSource === 'repositories') {
        getAllRepositories(searchTerms, page);
      }
      else{
        getAllUsers(searchTerms, page);
      }
    }
    setPage(prevPage => page + 1)
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [users, repositories, setLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchTerms,page])

  return (
    <div className="min-h-screen  w-screen flex flex-col justify-between items-center relative bg-gray-800" >
      <Header
        handleOnChangeSearchInput={handleOnChangeSearchInput}
        handleOnChangeDataSource={handleOnChangeDataSource}
        dataSource={dataSource}
      />
      {
        loading ?
          <Skeleton />
          : <div className="grid grid-cols-4 gap-4 p-8 pt-24 w-full">
          {
            dataSource === "repositories" ?
              repositories.map(
                repository =>
                  <RepositoryCard
                    key={uuid()}
                    fullName={repository.full_name}
                    language={repository.language}
                    stargazersCount={repository.stargazers_count}
                    description={repository.description}
                    htmlUrl={repository.html_url}
                  />
              ) : users.map(
                user =>
                  <UserCard
                    key={uuid()}
                    avatarUrl={user.avatar_url}
                    login={user.login}
                    htmlUrl={user.html_url}
                  />
              )
          }
        </div>
      }
      
    </div>
  )
}

export default Home
