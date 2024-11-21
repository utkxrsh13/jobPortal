import React from 'react'
// import { Link } from 'react-router-dom'
import { Popover } from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';
import store from '@/Redux/Store';
// import { useSelector } from 'react-redux'; 

const Navbar = () => {
  const user = false;
  // const [user]=useSelector(store=>store.auth);
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl'>

        <div>
          <h1 className='text-2xl font-bold'>Career <span className=' text-red-600'>Vista</span></h1>
        </div>
        <div className='flex items-center gap-12 '>
          <ul className='flex gap-5 font-medium items-center'>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to={'/Jobs'}>Jobs</Link></li>
            <li> <Link to={'/browse'}>Browse</Link></li>
            
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"> <Button variant="outline " className="mt-1">login</Button></Link>
               
               <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#8243ee] mt-1" >Signup</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className=" mt-2 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='flex  gap-4 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Premium member</h4>
                      <h3 className='text-sm text-muted-foreground'>you got the oppurtunity</h3>
                    </div>
                  </div>
                  <div className='flex flex-col  text-gray-700'>
                    <div className=' mt-2 flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link"><Link to="/Profile">view profile</Link></Button>
                    </div>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button variant="link">logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )

          }



        </div>

      </div>

    </div>
  )
}

export default Navbar
