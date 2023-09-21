// import React from "react";
// import styled from "styled-components";
// import wave from '../assets/wave.png'
// import profile_pic from '../assets/pic.svg'
// import reading from '../assets/reading.svg'
// import 'font-awesome/css/font-awesome.min.css';
// import { AccountBox } from "../components/accountBox";

//  const SignContainer = styled.div`
//     width: 100%;
//     height: vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//  `;

// const SignIn = () => {
//     return (
//             <SignContainer>
//                 <AccountBox />
//             </SignContainer>
            
//       );
      
// };
 
// export default SignIn;

import React from "react";
import './register.css';
import img from '../assets/black_student.jpeg'
import back_arrow from '../assets/back_arrow.png'
import { Link as Linker } from 'react-router-dom';

const signIn = () => {


    return (
        <div className="struct">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 ml-[-180px]">
            
            <div className=" relative mr-[-500px] ml-[300px] w-[100%] h-[100%]">
                <img src={img} className="hidden sm:block rounded-md rounded-tr-none rounded-br-none h-[100%]"/>
                <h2 className="absolute top-2 left-4 font-bold text-white">EduBahamas</h2>

            </div>
            <div className="ml-[10px] relative w-[600px]">
                <form className="bg-white order-2 border border-white mx-20 rounded-md rounded-tl-none rounded-bl-none h-full">
        
                    <h2 className="text-[#1896b9] py-5 mt-[20%] mb-[90px] display-flex justify-center text-center text-4xl font-bold">
                        Sign In
                    </h2>

                    <div className="my-5">
                        {/* <label className="text-gray-600 w-[20%] py-0 my-0 text-[16px]">Email</label> */}
                        <input className="border border-gray-200 shadow-md border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] py-5 px-3 my-0 rounded-md w-[90%]" type="text" placeholder="Email" />
                    </div>

                    <div className="my-5">
                        {/* <label className="text-gray-600 py-0 my-0 w-[25%] text-[16px] ">Password</label> */}
                        <input className="border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] shadow-md  py-5 px-3 my-0 rounded-md w-[90%]" type="password" placeholder="Password" />
                    </div>
                    <div>

                    <button className="w-[90%] bg-[#1896b9] hover:bg-[#1896e9] my-10 mt-[30px] mb-0"> Sign In </button>
                    <Linker className="hover:bg-transparent hover:before:w-0" to="/register">
                        <p className="text-gray-600 my-0 pt-2 ml-[195px] flex flex-col mb-[-20px] text-[12px]  hover:underline">Register</p>
                    </Linker>
                    <Linker className="hover:bg-transparent hover:before:w-0">
                        <h1 className="ml-[310px] mt-[4px] display-inline text-xs text-gray-600 italic hover:underline">Forgot Password?</h1>
                     </Linker>
                    </div>

                    <Linker className="hover:bg-transparent hover:before:w-0" to="/#">
                    <div className="mt-[-20px] flex items-center ml-[20px] mb-[20px] hover:underline">
                        <img src={back_arrow} className=" w-6 "/>
                        <h1 className="text-xs text-gray-600">Return Home</h1> 
                    </div>
                    </Linker>

                </form>
            </div>
        </div>
        </div>
  )
}

export default signIn