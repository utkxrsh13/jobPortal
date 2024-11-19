import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
       <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-500 font-medium '>No.1 Job Hunt website
       </span> 
       <h1 className=' gap-20 text-5xl font-bold'>Search,Apply & Get your <span className='text-blue-700'>Dream Job</span></h1>
       <p className='my-3  font-medium'>Your gateway to limitless career opportunities, connecting talent and ambition through a sleek, <br /> user-friendly platform for every industry and job type.
       
         </p>

         <div
         className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full gap-4 mx-auto '
         >
          <input type="text"
          placeholder='find  your dream job '
          className=' my-auto outline-none border-none w-full'
          />
          <Button className="rounded-r-full bg-blue-600">
            <Search className='h-5 w-5 ' />
          </Button>
         </div>
         </div>
    </div>
    
  )
}

export default HeroSection
