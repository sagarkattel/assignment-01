'use client';
import React, { useState } from 'react';
import Basicform from './Basicform';
import Socialform from './Socialform';

const Formmodal = ({ isVisible, onClose }) => {
  const [showSocialform, setShowSocialform] = useState(false);

  const handleSocialForm = () => {
    setShowSocialform(!showSocialform);
  };

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 background-blur-md flex justify-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] h-[400px] flex flex-col">
        <div className="bg-white p-2 rounded-md h-[1200px] flex flex-col">
          <div className="flex flex-row p-3">
            <div className="font-bold text-xl">Add New Profile</div>
            <div className="ml-auto">
              <button onClick={() => onClose()}>X</button>
            </div>
          </div>

          <div className="flex flex-row p-5 font-bold px-[100px]">
            <div className="">Basic</div>
            <div className="ml-auto">Social</div>
          </div>
          {!showSocialform ? <Basicform showSocialform={handleSocialForm} /> : <Socialform showSocialform={handleSocialForm}/>}
        </div>
      </div>
    </div>
  );
};

export default Formmodal;
