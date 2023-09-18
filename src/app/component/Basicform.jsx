
'use client';

import React, { useState } from 'react'

const Basicform = ({showSocialform}) => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');

    const handleNext=()=>{
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('phone',phone);
        showSocialform();
    }
    
  return (
    <div className='px-5  h-[400px]'>
            <form action="" >
              <label htmlFor="" className="block mt-8 mb-2 text-sm font-medium leading-tight">Enter Name*</label>
              <input type="text" name='uname' placeholder='Eg. John Doe' className='border-2 rounded-md p-2 w-full' value={name} onChange={(e)=>setName(e.target.value)}/>

              <label htmlFor="" className="block mt-8 mb-2 text-sm font-medium leading-tight">Enter Email*</label>
              <input type="email" name='email' placeholder='Eg. John@xyz.com' className='border-2 rounded-md p-2 w-full' value={email} onChange={(e)=>setEmail(e.target.value)}/>

              <label htmlFor="" className="block mt-8 mb-2 text-sm font-medium leading-tight">Enter Phone*</label>
              <input type="phone" name='phone' placeholder='Eg. 9832374844' className='border-2 rounded-md p-2 w-full' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              <div className='mt-6'>
              <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[475px]' onClick={handleNext}>Next</button>
              </div>
            </form>
          </div>
  )
}

export default Basicform