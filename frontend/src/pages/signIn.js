import React from "react";
import './register.css';
import img from '../assets/black_student.jpeg'
import back_arrow from '../assets/back_arrow.png'
import login from '../assets/login.svg'
import login1 from '../assets/login1.svg'
import { Link as Linker } from 'react-router-dom';

const signIn = () => {


    return (
        <div className="struct">
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 bg-gray-100 flex justify-center items-center">
                <h2 className="absolute top-4 left-7 font-bold text-[#1896b9] text-[25px]">EduBahamas</h2>
            <div className=" w-[100%] h-[100%]">
                {/* <img src={img} className="hidden sm:block rounded-md rounded-tr-none rounded-br-none h-[100%]"/> */}
                
                <img src={login} className="hidden sm:block mt-[200px] ml-[150px] md:w-[500px] 2xl:w-[700px]" />

            </div>
            <div className="ml-[10px] relative w-[600px] ">
                <form className="bg-gray-100 rounded-md 2xl:ml-[100px] md:ml-[80px]">
        
                    <h2 className="text-[#1896b9] py-5 mt-[10%] mb-[90px] display-flex justify-center text-center text-4xl font-bold">
                        Sign In
                    </h2>

                    <div className="my-5">
                        {/* <label className="text-gray-600 w-[20%] py-0 my-0 text-[16px]">Email</label> */}
                        <input className="border border-gray-200 shadow-md border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[gray] py-5 px-3 my-0 rounded-md w-[90%]" type="text" placeholder="Email address" />
                    </div>

                    <div className="my-5">
                        {/* <label className="text-gray-600 py-0 my-0 w-[25%] text-[16px] ">Password</label> */}
                        <input className="border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md w-[90%]" type="password" placeholder="Password" />
                    </div>
                    <div>

                    <button className="w-[90%] bg-[#1896b9] hover:bg-[#126e87] my-10 mt-[30px] mb-0 text-[14px]"> Sign In </button>
                    
                    <Linker className="hover:bg-transparent hover:before:w-0">
                        <h1 className="flex justify-center items-center mt-[20px] display-inline text-[12px] text-gray-500 hover:underline">Forgot Password?</h1>
                     </Linker>
                    </div>


                    {/* <Linker className="hover:bg-transparent hover:before:w-0" to="/#">
                    <div className="mt-[-20px] flex items-center ml-[20px] mb-[20px] hover:underline">
                        <img src={back_arrow} className=" w-6 "/>
                        <h1 className="text-xs text-gray-600">Return Home</h1> 
                    </div>
                    </Linker> */}

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
