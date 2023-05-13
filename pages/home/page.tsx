import type { NextPage } from 'next'
import Header from 'common/components/header';
import { IRepository } from 'store/Repository/repository.types';

interface Props {
    repositories: Array<IRepository>,
    getAllRepositories(query:string): void
}

const Home: NextPage<Props> = ({
    repositories,
    getAllRepositories
}) => {
  return (
    <div className="min-h-screen  w-screen flex flex-col justify-between items-center relative bg-gray-800">
      <Header
        handleOnChangeSearchInput={() => {}}
      />
    
    </div>
  )
}

export default Home
