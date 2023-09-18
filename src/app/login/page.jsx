'use client';
import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { BiLogoDiscord } from 'react-icons/bi';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex w-screen bg-[#f5f5f5] h-screen">
      <div className="bg-[#3e81f1] h-screen w-[45%] relative flex flex-col justify-between">
        <span className="text-white font-bold z-10 mt-10 ml-10">LOGO</span>
        <span className="text-white font-bold text-5xl z-10 ml-[160px]">Board.</span>
        <div className="flex flex-row justify-center mb-[30px] ml-[-120px]">
          <span className="text-white font-bold  z-10 mt-90 ">
            <AiFillGithub size={30} />
          </span>
          <span className="text-white font-bold text-xl z-10 mt-90 pl-6 ">
            <AiFillTwitterCircle size={30} />
          </span>
          <span className="text-white font-bold text-xl z-10 mt-90 pl-6">
            <AiFillLinkedin size={30} />
          </span>
          <span className="text-white font-bold text-xl z-10 mt-90 pl-6">
            <BiLogoDiscord size={30} />
          </span>
        </div>
        <div className="bg-[#3e81f1] h-full w-full transform -skew-x-12 absolute top-0 right-0"></div>
      </div>
      <div className="bg-[#f5f5f5] w-[40%]  -skew-x-12 h-full">
        <div className=" ml-[90px] h-[90%] skew-x-12 skew-y-0 flex flex-col p-5 mt-[1rem] pl-[50px] w-[530px]">
          <div className="flex flex-col mt-9 ">
            <span className="text-black font-bold text-2xl">Sign In</span>
            <span className="text-black mb-5 text-sm">Sign in to your account</span>
            <div className="flex flex-row">
              <span className="bg-[#f8faff] text-sm">
                <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 ">
                  <Image
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                    width={10}
                    height={10}
                  />
                  <span className="">Sign in with Google</span>
                </button>
              </span>

              <span className="bg-[#f8faff] pl-1 text-sm">
                <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 30 30"
                  >
                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                  </svg>
                  <span className="">Sign in with apple</span>
                </button>
              </span>
            </div>
          </div>

          <form
            action=""
            className="flex flex-col bg-[#f8faff] p-5 my-10 h-[18rem] rounded-lg w-[27rem] mt-4"
          >
            <div className="">
              <label className="text-sm ">Email address</label>
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg h-10 px-3 mx-1 w-full mt-2 bg-gray-300 text-xm"
              />
            </div>

            <div className="my-[15px]">
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="rounded-lg h-10 px-3 mx-1 w-full mt-2 bg-gray-300 text-xm"
              />
            </div>

            <div className="text-blue-600 mb-5 text-xs">
              <a href="#">Forget Password?</a>
            </div>
            <Link href="/dashboard">
            <button
              type="button"
              className="text-white bg-[#3e81f1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              
            >
            Sign In
            </button>
            </Link>
          </form>
          <div className="pl-[25px] text-gray-500 text-xs">
            Dont have an account?{' '}
            <a href="" className="text-blue-500">
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
