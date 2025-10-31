import React from 'react'

const HeroSection : React.FC = () => {
  return (
   <main className='w-full'>
    <section className='max-w-6xl mx-auto py-10'>
     <div className='flex justify-evenly flex-wrap gap-4 wrap-anywhere'>
        <div className='w-[40%] p-4  rounded-2xl  flex flex-col gap-2 border hover:scale-105  transition-all ease-in-out duration-300 border-gray-300 shadow-lg'>
         <img src="" alt="" />
          <h2 className='text-xl font-semibold'>Event Title</h2>
          <p className='text-neutral-600'>Event Description goes here. This is a brief overview of what the event is about.</p>
          <p className='text-blue-500'>Location: Event Location</p>
          <p className='text-gray-500'>Date: Event Date</p>
          <div className='flex w-[70%]  gap-6 '>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
          </div>
        </div>
            <div className='w-[40%]  rounded-2xl p-4 flex flex-col gap-2 border border-gray-300 shadow-lg'>
         <img src="" alt="" />
          <h2 className='text-xl font-semibold'>Event Title</h2>
          <p className='text-neutral-600'>Event Description goes here. This is a brief overview of what the event is about.</p>
          <p className='text-blue-500'>Location: Event Location</p>
          <p className='text-gray-500'>Date: Event Date</p>
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
          </div>
        </div>
            <div className='w-[40%]  rounded-2xl p-4 flex flex-col gap-2 border border-gray-300 shadow-lg'>
         <img src="" alt="" />
          <h2 className='text-xl font-semibold'>Event Title</h2>
          <p className='text-neutral-600'>Event Description goes here. This is a brief overview of what the event is about.</p>
          <p className='text-blue-500'>Location: Event Location</p>
          <p className='text-gray-500'>Date: Event Date</p>
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
          </div>
        </div>
            <div className='w-[40%]  rounded-2xl p-4 flex flex-col gap-2 border border-gray-300 shadow-lg'>
         <img src="" alt="" />
          <h2 className='text-xl font-semibold'>Event Title</h2>
          <p className='text-neutral-600'>Event Description goes here. This is a brief overview of what the event is about.</p>
          <p className='text-blue-500'>Location: Event Location</p>
          <p className='text-gray-500'>Date: Event Date</p>
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
          </div>
        </div>
            <div className='w-[40%]  rounded-2xl p-4 flex flex-col gap-2 border border-gray-300 shadow-lg'>
         <img src="" alt="" />
          <h2 className='text-xl font-semibold'>Event Title</h2>
          <p className='text-neutral-600'>Event Description goes here. This is a brief overview of what the event is about.</p>
          <p className='text-blue-500'>Location: Event Location</p>
          <p className='text-gray-500'>Date: Event Date</p>
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>Learn More</button>
            <button className='bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition'>Registration</button>
          </div>
        </div>
     </div>
    </section>
   </main>
  )
}

export default HeroSection