import React from 'react'
import {CgInsertAfterR} from 'react-icons/cg';
import {BsTags} from 'react-icons/bs';
import {AiOutlineLike} from 'react-icons/ai';
import {LuUsers2} from 'react-icons/lu';
import {IoIosArrowDown} from 'react-icons/io';

const Smallcard = () => {
    return (
        <div className='h-[120px] w-full bg-[#ffffff] flex flex-row py-3 gap-4'>
            <div className='bg-[#ffffff] border-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-1 rounded-lg py-2 pl-4 flex flex-col'>
                <span className='rounded-full bg-[#7fcd93] h-7 w-7 text-white px-[5px] py-[5px]'><CgInsertAfterR size={18}/></span>
                <span>Total Revenues</span>
                <div className='flex flex-row'>
                <span className='font-bold'>$8,23,823</span>
                <span className='ml-auto bg-[#ddecdf] font-bold rounded-xl mr-2 px-[7px] py-[3px] text-green-300 h-6 text-sm'>+2.5%</span>
                </div>
            </div>
            <div className='bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-1 flex-1 rounded-lg py-2 pl-4 flex flex-col'>
            <span className='rounded-full bg-[#debf85] h-7 w-7 text-white px-[5px] py-[5px]'>
                <BsTags size={18}/>
            </span>
                <span>Total Transaction</span>
                <div className='flex flex-row'>
                <span className='font-bold'>23,823</span>
                <span className='ml-auto bg-[#ddecdf] font-bold rounded-xl mr-2 px-[7px] py-[3px] text-green-300 h-6 text-sm'>+1.7%</span>
                </div>
            </div>
            <div className='bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-1 flex-1 rounded-lg py-2 pl-4 flex flex-col'>
            <span className='rounded-full bg-[#eca4a4] h-7 w-7 text-white px-[5px] py-[5px]'><AiOutlineLike size={18}/></span>
                <span>Total Likes</span>
                <div className='flex flex-row'>
                <span className='font-bold'>3,823</span>
                <span className='ml-auto bg-[#ddecdf] font-bold rounded-xl mr-2 px-[7px] py-[3px] text-green-300 h-6 text-sm'>+1.4%</span>
                </div>
            </div>
            <div className='bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-1 flex-1 rounded-lg py-2 pl-4 flex flex-col'>
            <span className='rounded-full bg-[#a9b0e5] h-7 w-7 text-white px-[5px] py-[5px]'><LuUsers2 size={18}/></span>
                <span>Total Users</span>
                <div className='flex flex-row'>
                <span className='font-bold'>33,823</span>
                <span className='ml-auto bg-[#ddecdf] font-bold rounded-xl mr-2 px-[7px] py-[3px] text-green-300 h-6 text-sm'>+4.2%</span>
                </div>
            </div>
        </div>
    )
}

export default Smallcard