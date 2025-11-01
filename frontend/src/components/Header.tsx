import React from 'react'
import LocationSearchBar from './SearchBox'


const Header: React.FC = () => {
  return (
    <header className='w-full bg-[#BADFDB] shadow-md  '>
      <div className='max-w-7xl mx-auto py-4 flex justify-between items-center'>
        <h1 className='md:text-4xl font-bold text-[#05339C]'><span>Event Finder</span></h1>
        <LocationSearchBar />
      </div>
    </header>
  )
}

export default Header