import React, {useState} from "react";
import './register.css';
import img from '../assets/black_student.jpeg'
import back_arrow from '../assets/back_arrow.png'
import login from '../assets/login.svg'
import register from '../assets/register.svg'
import login1 from '../assets/login1.svg'
import { Link as Linker } from 'react-router-dom';
import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
  } from "@material-tailwind/react";

const Register = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    // Function to handle the option change
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value);
    };


    return (
        <div className="struct">
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 bg-gray-100 flex items-center">
                <h2 className="absolute top-4 left-7 font-bold text-[#1896b9] text-[25px]">EduBahamas</h2>
            <div className="w-[100%] h-[100%]">
                {/* <img src={img} className="hidden sm:block rounded-md rounded-tr-none rounded-br-none h-[100%]"/> */}
                
                <img src={register} className="hidden sm:block md:mt-[200px] md:ml-[90px] 2xl:mt-[300px] 2xl:ml-[150px] md:w-[550px] 2xl:w-[750px]" />

            </div>
            <div className="md:w-[700px] 2xl:w-[900px]">
                <form  className="md:ml-[-120px] 2xl:ml-[-20px] py-5">
        
                             <h2 className="text-[#1896b9] pb-[40px] mt-[30px] md:mb-[20px] 2xl:mb-[40px] display-flex justify-center text-center text-4xl font-bold">
                                 Register
                             </h2>
        
                             <div className="grid grid-cols-2 w-[100%] my-[-35px] 2xl:mx-[20px] mx-[-10px] px-[50px]">
                                 <div className="my-5">
                                     {/* <label className="text-gray-600 py-0 my-0 w-[30%] text-[16px] ">First Name</label> */}
                                     <input className="md:ml-[125px] 2xl:ml-[115px] border border-gray-200 outline-none focus:shadow-[gray] shadow-md py-5 px-3 rounded-md 2xl:w-[250px] md:w-[232px]" type="text" placeholder="First Name" />
                                  </div>
                                  <div className="my-5">
                                      {/* <label className="text-gray-600 py-0 my-0 w-[30%] text-[16px] ">Last Name</label> */}
                                      <input className="2xl:ml-[4px] md:ml-[24px] border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 rounded-md 2xl:w-[250px] md:w-[232px]" type="text" placeholder="Last Name" />
                                  </div>
                              </div>
        
                              <div className="my-0">
                                  {/* <label className="text-gray-600 w-[20%] py-0 my-0 text-[16px]">Email</label> */}
                                  <input className="border border-gray-200 shadow-md outline-none focus:shadow-[gray] py-5 px-3 rounded-md" type="text" placeholder="Email" />
                              </div>
        
        
                              <div className="my-5">
                                  {/* <label className="text-gray-600 py-0 my-0 w-[25%] text-[16px] ">Password</label> */}
                                  <input className="border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md " type="password" placeholder="Password" />
                              </div>
        
                              <div className="my-5">
                                  {/* <label className="text-gray-600 py-0 my-0 w-[38%] text-[16px]"> Re-Enter Password</label> */}
                                  <input className="border border-gray-200 focus:shadow-[gray] shadow-md outline-none py-5 my-0 " type="password" placeholder="Re-type Password" />
                              </div>
        
                              <div className="grid grid-cols-2 my-[-15px] mx-auto w-[60%]">
                                  <div className="my-5  2xl:w-[30%] ">
                                      {/* <label className="text-gray-600 py-0 my-0 text-[16px] w-[60%]"> Select School </label> */}
                                      <select className="border border-gray-200 border-r-0 shadow-md py-2 md:w-[255px] 2xl:w-[250px] rounded-md flex justify-content 2xl:mx-auto px-2" id="country" value={selectedOption} onChange={handleOptionChange}>
                                          <option value="">Select a school</option>
                                          <option value="i">Individual</option>
                                          <option value="qc">Queen's College</option>
                                          <option value="ka">Kingsway Academy</option>
                                          <option value="sac">St. Augustine's College</option>
                                          <option value="sta">St. Andrew's School</option>
                                          <option value="gen">Genesis Academy</option>
                                      </select>
                                  </div>
        
                                  <div className="my-5 2xl:w-[30%] ml-2">
                                      {/* <label className="text-gray-600 py-0 my-0 text-[16px] w-[35%] ml-[0px]"> Role </label> */}
                                      <select className="border border-gray-200 md:w-[220px] 2xl:w-[250px] py-2 shadow-md rounded-md flex justify-content md:ml-[20px] 2xl:ml-[20px] 2xl:mx-auto px-2" id="country" value={selectedOption2} onChange={handleOptionChange2}>
                                          <option value="">Select a role</option>
                                          <option value="student">Student</option>
                                          <option value="teacher">Teacher</option>
                                      </select>
                                  </div>
                              </div>


                            
                              <div>
                                  
                              <button className="w-[60%] bg-[#1896b9] hover:bg-[#126e87] 2xl:mt-[70px] md:mt-[40px] text-[14px]"> Register </button>
                    
                            {/* <Linker className="hover:bg-transparent hover:before:w-0">
                                <h1 className="flex justify-center items-center mt-[20px] display-inline text-[12px] text-gray-500 hover:underline">Forgot Password?</h1>
                            </Linker> */}
                            </div>


                            {/* <Linker className="hover:bg-transparent hover:before:w-0" to="/#">
                            <div className="mt-[-20px] flex items-center ml-[20px] mb-[20px] hover:underline">
                                <img src={back_arrow} className=" w-6 "/>
                                <h1 className="text-xs text-gray-600">Return Home</h1> 
                            </div>
                            </Linker> */}

                            <Linker className="hover:bg-transparent hover:before:w-0" to="/signIn">
                                <p className="text-gray-600 mt-[30px] flex justify-center items-center text-[14px] hover:underline">Already have an account? &nbsp; <b>Sign In</b></p>
                            </Linker>
                          </form>
            </div>
        </div>
        </div>
  )
}

export default Register

