import React from "react";
import './register/register.css';
import { Link as Linker } from 'react-router-dom';

const signIn = () => {


    return (
        <div className="struct">
            <a href="http://localhost:3000">
                <h2 className="absolute top-4 left-7 font-bold text-[white] text-[25px]">EduBahamas</h2>
            </a>
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 bg-gray-100 flex justify-center items-center">

            <div className=" flex flex-col justify-center items-center text-center w-[100%] h-[100%] bg-[#1896b9]">
                <p className="hidden sm:block text-gray-100 font-poppins">Nice To See You Again</p>
                <h1 className="hidden sm:block md:w-[500px] 2xl:w-[700px] text-gray-100 md:text-6xl 2xl:text-8xl font-poppins">Welcome Back</h1>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-[100%]">
                <form className="bg-gray-100 rounded-md w-[60%]">
        
                    <h2 className="text-[#1896b9] py-5 mt-[10%] mb-[90px] display-flex justify-center text-center text-4xl font-bold">
                        Sign In
                    </h2>

                    <div className="my-5">
                        <input className="focus:ring-transparent border border-gray-200 shadow-md border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[gray] py-5 px-3 my-0 rounded-md w-[90%]" type="text" placeholder="Email address" />
                    </div>

                    <div className="my-5">
                        <input className="focus:ring-transparent border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md w-[90%]" type="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-[100%]">

                    <button id="button-custom" className="rounded-md w-[90%] bg-[#1896b9] hover:bg-[#126e87] my-10 mt-[30px] text-[14px] text-white"> Sign In </button>
                    
                    <Linker className="hover:bg-transparent hover:before:w-0">
                        <h1 className=" display-inline text-[12px] text-gray-500 hover:underline">Forgot Password?</h1>
                     </Linker>
                    </div>

                    <Linker className="hover:bg-transparent hover:before:w-0" to="/register">
                        <p className="text-gray-600 mt-[10px] flex justify-center items-center text-[14px] hover:underline">Don't have an account? &nbsp; <b>Register Now</b></p>
                    </Linker>

                </form>
            </div>
        </div>
        </div>
  )
}

export default signIn
