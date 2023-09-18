'use client';
import React, { useState } from 'react';

const Socialform = ({showSocialform}) => {
    const [warning,setWarning]=useState("");

    const [instaid,setInstaid]=useState("");

    const [ytid,setYtid]=useState("");

    const handleSubmit=()=>{
        if (!localStorage.getItem('name') || !localStorage.getItem('email') || !localStorage.getItem('phone')) {
            setWarning("Fill all the Compulsary input")
        return ;
        }
        
        localStorage.setItem("instaid",instaid);
        localStorage.setItem('ytid',ytid); 
        window.location.reload();
    }

  return (
    <div className="px-5  h-[350px]">
      <form action="">
        <label htmlFor="" className="block mt-8 mb-2 text-sm font-medium leading-tight">
          Instagram Link (Optional)
        </label>
        <input
          type="text"
          name="instaid"
          placeholder="Eg. instagram.com/username"
          className="border-2 rounded-md p-2 w-full"
          value={instaid}
          onChange={(e)=>setInstaid(e.target.value)}
        />

        <label htmlFor="" className="block mt-8 mb-2 text-sm font-medium leading-tight">
        Youtube Link (Optional)
        </label>
        <input
          type="text"
          name="ytid"
          placeholder="Eg. youtube.com/username"
          className="border-2 rounded-md p-2 w-full"
          value={ytid}
          onChange={(e)=>setYtid(e.target.value)}
        />
        {warning&&
        <div className='text-red-500'>{warning}</div>
}
        <div className="mt-6 flex flex-row gap-2 ml-[390px]">
          <button onClick={()=>showSocialform()}
            
            className="text-black font-bold py-2 px-4 rounded border-2 "
          >
            Back
          </button>
          <button
          type="button"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Done
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Socialform;
