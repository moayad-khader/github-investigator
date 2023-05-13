import type { NextPage } from 'next'
import SearchInput from "../common/ui/search.input";



const Home: NextPage = () => {

  return (
   <div className="h-screen w-screen flex flex-col justify-between items-center relative">
    <SearchInput
      onChange={() => {}}

    />
   </div>
  )
}

export default Home
