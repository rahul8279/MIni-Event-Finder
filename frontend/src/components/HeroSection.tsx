import React from 'react'


const array = [1, 2, 3, 4, 5, 6];
const HeroSection: React.FC = () => {
  return (
    <main className='w-full overflow-hidden bg-[#FCF9EA] '>
      <section className='md:max-w-7xl mx-auto py-10 flex flex-col gap-8 '>
       <div className='flex flex-col gap-3'>
         <h2 className='md:text-3xl text-2xl text-center font-bold text-sky-600'>Find the perfect event for you</h2>
        <p className='md:max-w-4xl w-xl px-2 mx-auto text-gray-500 text-[17px] font-medium text-center'>Event Finder is a free-to-use event search engine, helping you find events and things to do, in and around your local area.
          We have created this resource to provide you with a range of entertainment options, so you never struggle for something to entertain the kids, yourself, or your friends
          Learn more about our mission, or about us.</p>
       </div>
        <div className='flex justify-evenly flex-wrap gap-4 wrap-anywhere overflow-x-hidden  py-3 rounded-2xl'>
        
          {
            array.map((item) => (
              <div className='w-[32%] p-4  rounded-2xl  flex flex-col gap-2 border hover:scale-105  transition-all ease-in-out duration-300 border-gray-300 shadow-lg'>
                <h2 className='text-2xl font-bold'>Event Title</h2>
                <p className='text-neutral-600 font-normal'>Event Description goes here. This is a brief overview of what the event is about.</p>
                <p className='text-blue-500'>Location: Event Location</p>
                <p className='text-gray-500'>Date: Event Date</p>
                <div className='flex w-[70%]  gap-6 '>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
                  <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default HeroSection