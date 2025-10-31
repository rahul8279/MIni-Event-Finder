import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home : React.FC = () => {
  return (
    <div className='w-screen '>
      <div className='w-full flex flex-col '>
        <Header />
      <HeroSection />
      </div>
    </div>
  )
}

export default Home