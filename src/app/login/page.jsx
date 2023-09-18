import React from 'react';

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { BiLogoDiscord } from 'react-icons/bi';
import Image from 'next/image';


const Login = () => {
    return (
        <div className='flex w-screen bg-[#f5f5f5] h-screen'>
            <div className='bg-[#3e81f1] h-screen w-[45%] relative flex flex-col justify-between'>
                <span className='text-white font-bold z-10 mt-10 ml-10'>LOGO</span>
                <span className='text-white font-bold text-5xl z-10 ml-[160px]'>Board.</span>
                <div className='flex flex-row justify-center mb-[30px] ml-[-120px]'>
                    <span className='text-white font-bold  z-10 mt-90 '><AiFillGithub size={30} /></span>
                    <span className='text-white font-bold text-xl z-10 mt-90 pl-6 '><AiFillTwitterCircle size={30} /></span>
                    <span className='text-white font-bold text-xl z-10 mt-90 pl-6'><AiFillLinkedin size={30} /></span>
                    <span className='text-white font-bold text-xl z-10 mt-90 pl-6'><BiLogoDiscord size={30} /></span>
                </div>
                <div className='bg-[#3e81f1] h-full w-full transform -skew-x-12 absolute top-0 right-0'></div>
            </div>
            <div className='bg-[#f5f5f5] w-[40%]  -skew-x-12 h-full'>
                <div className=' ml-[90px] h-[90%] skew-x-12 skew-y-0 flex flex-col p-5 mt-[1rem] pl-[50px] w-[530px]'>
                    <div className='flex flex-col mt-9 '>
                        <span className='text-black font-bold text-2xl'>Sign In</span>
                        <span className='text-black mb-5 text-sm'>Sign in to your account</span>
                        <div className='flex flex-row'>
                            <span className='bg-[#f8faff] text-sm'><button
                                className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 ">
                                <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" width={10} height={10}/>
                                <span className=''>Sign in with Google</span>
                            </button></span>

                            <span className='bg-[#f8faff] pl-1 text-sm'><button
                                className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 ">
                                <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" width={10} height={10}/>
                                <span className=''>Sign in with apple</span>
                            </button></span>
                        </div>
                    </div>

                    <form action="" className='flex flex-col bg-[#f8faff] p-5 my-10 h-[18rem] rounded-lg w-[27rem] mt-4'>
                        <div className=''>
                            <label className='text-sm '>Email address</label>
                            <input type="email" placeholder="Email" className='rounded-lg h-10 px-3 mx-1 w-full mt-2 bg-gray-300 text-xm' />
                        </div>

                        <div className='my-[15px]'>

                            <label className='text-sm'>Password</label>
                            <input type="password" placeholder="Password" className='rounded-lg h-10 px-3 mx-1 w-full mt-2 bg-gray-300 text-xm' />
                        </div>

                        <div className='text-blue-600 mb-5 text-xs'>
                            <a href="#">
                                Forget Password?
                            </a>
                        </div>

                        <button
                            type="button"
                            className="text-white bg-[#3e81f1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Sign In
                        </button>



                    </form>
                    <div className='pl-[25px] text-gray-500 text-xs'>Dont have an account? <a href="" className='text-blue-500'>Register here</a></div>


                </div>
            </div>
        </div>
    );
};

export default Login;
