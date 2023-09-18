import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';
import Smallcard from '../component/Smallcard';
import Bargraph from '../component/Bargraph';
import Topproduct from '../component/Topproduct';

const Dashboard = () => {
    return (
        <div className='flex flex-row'>
            <Sidebar />

            <div className='flex flex-col ml-[20px]  w-[73%] h-[120vh] my-[23px] rounded-xl '>
                <Navbar />

                <Smallcard />


                <Bargraph />

                <Topproduct />

                {/* <div className='h-[200px] mt-[90px]'></div> */}


            </div>


        </div>
    )
}

export default Dashboard;
