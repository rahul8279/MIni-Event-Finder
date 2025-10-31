import React from 'react'
import LocationSearchBar from './SearchBox'


const Header: React.FC = () => {
  return (
    <header className='w-full bg-blue-100 shadow-md  '>
      <div className='max-w-7xl mx-auto py-4 flex justify-between items-center '>
        <h1 className='text-4xl font-bold'><span className='text-neutral-500'>Event Finder</span></h1>
        <LocationSearchBar />
  
      </div>
    </header>
  )
}

export default Header