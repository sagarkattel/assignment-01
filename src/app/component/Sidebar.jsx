import React from 'react';
import {TbDashboard} from 'react-icons/tb'
import {BsTag} from 'react-icons/bs';
import {AiOutlineSchedule} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';


const Sidebar = () => {
  return (
    <div className='bg-[#3e81f1] h-[93vh] w-[17%] mx-[37px] my-[23px] rounded-xl flex flex-col text-white px-9 py-5 '>
                <div className='py-7'>
                    <h1 className='font-bold text-2xl'>Board.</h1>
                </div>

                <div className='py-[10px]'>

                    <div className='mb-[25px] flex flex-row'>
                        <span className='justify-center'><TbDashboard size={25}/></span>
                        <span className='ml-3'>Dashboard</span>
                    </div>

                    <div className='mb-[25px] flex flex-row'>
                    <span className='justify-center'><BsTag size={25}/></span>
                        <span className='ml-3'>Transaction</span>
                    </div>

                    <div className='mb-[25px] flex flex-row'>
                    <span className='justify-center'><AiOutlineSchedule size={25} /></span>
                        <span className='ml-3'>Schedules</span>
                    </div>

                    <div className='mb-[25px] flex flex-row'>
                        <span>
                            <BiUserCircle size={25}/>
                        </span>
                        <span className='ml-3'>Users</span>
                    </div>

                    <div className='mb-[25px] flex flex-row'>
                        <span>
                            <FiSettings size={25} />
                        </span>
                        <span className='ml-3'>Setting</span>
                    </div>
                </div>


                <div className='mt-[140px]'>
                    <div className='mb-[10px]'>
                        <span>Help</span>
                    </div>

                    <div>
                        <span>Contact Us</span>
                    </div>
                </div>

            </div>
  )
}


export default Sidebar;
