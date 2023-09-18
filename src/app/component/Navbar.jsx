import React from 'react'
import {IoNotificationsOutline} from 'react-icons/io5';
import {BiSolidUserCircle} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='h-[70px] w-full bg-[#ffffff] flex flex-row py-4'>
            <div>
                <span className='font-bold text-2xl'>Dashboard</span>
            </div>

            <div className='ml-auto flex flex-row gap-4'>
                <span className='flex flex-row'><input type="search" name="search" placeholder='Search...' className='rounded pl-2 py-[3px] w-[11rem] h-[30px] border-2'/><AiOutlineSearch size={25} className=" ml-[-30px] pl-[5px]"/></span>
                <span className='cursor-pointer'><IoNotificationsOutline size={25}/></span>
                <span className='cursor-pointer'><BiSolidUserCircle size={26}/></span>
            </div>
        </div>
    )
}

export default Navbar;