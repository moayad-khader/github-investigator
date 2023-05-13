import type { NextPage } from 'next'
import Header from '../common/components/header';



const Home: NextPage = () => {
  return (
    <div className="min-h-screen  w-screen flex flex-col justify-between items-center relative bg-gray-800">
      <Header
        handleOnChangeSearchInput={() => {}}
      />
    
    </div>
  )
}

export default Home
