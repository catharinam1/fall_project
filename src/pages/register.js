import React, {useState} from "react";
import './register.css';
import img from '../assets/black_student.jpeg'
import back_arrow from '../assets/back_arrow.png'
import { Link as Linker } from 'react-router-dom';

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
        <div className="grid md:grid-cols-2 sm:grid-cols-1 ml-[-180px]">
            
            <div className=" relative mr-[-500px] ml-[300px] w-[100%] h-[100%]">
                <img src={img} className="hidden sm:block rounded-md rounded-tr-none rounded-br-none h-[100%]"/>
                <h2 className="absolute top-2 left-4 font-bold text-white">EduBahamas</h2>

            </div>
            <div className="ml-[-75px] relative">
                <form  className="bg-white order-2 border border-white mx-20 rounded-md rounded-tl-none rounded-bl-none">
        
                    <h2 className="text-[#1896b9] py-5 mt-[30px] mb-[40px] display-flex justify-center text-center text-4xl font-bold">
                        Register
                    </h2>

                    <div className="grid grid-cols-2 w-[100%] w-full my-[-15px]">
                        <div className="my-5">
                            {/* <label className="text-gray-600 py-0 my-0 w-[30%] text-[16px] ">First Name</label> */}
                            <input className="ml-[90px] border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] shadow-md py-5 px-3 my-0 rounded-md w-[65%]" type="text" placeholder="First Name" />
                        </div>
                        <div className="my-5">
                            {/* <label className="text-gray-600 py-0 my-0 w-[30%] text-[16px] ">Last Name</label> */}
                            <input className="ml-[10px] border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] shadow-md  py-5 px-3 my-0 rounded-md w-[65%]" type="text" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="my-5">
                        {/* <label className="text-gray-600 w-[20%] py-0 my-0 text-[16px]">Email</label> */}
                        <input className="border border-gray-200 shadow-md border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] py-5 px-3 my-0 rounded-md w-[70%]" type="text" placeholder="Email" />
                    </div>


                    <div className="my-5">
                        {/* <label className="text-gray-600 py-0 my-0 w-[25%] text-[16px] ">Password</label> */}
                        <input className="border border-gray-200 border-t-0 border-l-0 border-r-0 outline-none focus:shadow-[#1896b9] shadow-md  py-5 px-3 my-0 rounded-md w-[70%]" type="password" placeholder="Password" />
                    </div>

                    <div className="my-5">
                        {/* <label className="text-gray-600 py-0 my-0 w-[38%] text-[16px]"> Re-Enter Password</label> */}
                        <input className="border border-gray-200 focus:shadow-[#1896b9] shadow-md border-t-0 border-l-0 border-r-0 outline-none py-5 my-0 w-[70%]" type="password" placeholder="Re-type Password" />
                    </div>

                    <div className="grid grid-cols-2 w-[100%] my-[-15px]">
                        <div className="my-5">
                            {/* <label className="text-gray-600 py-0 my-0 text-[16px] w-[60%]"> Select School </label> */}
                            <select className="border border-gray-200 border-t-0 border-l-0 border-r-0 ml-[90px] w-[70%] shadow-md py-2 rounded-md flex justify-content mx-auto px-2" id="country" value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Select a school</option>
                                <option value="i">Individual</option>
                                <option value="qc">Queen's College</option>
                                <option value="ka">Kingsway Academy</option>
                                <option value="sac">St. Augustine's College</option>
                                <option value="sta">St. Andrew's School</option>
                                <option value="gen">Genesis Academy</option>
                            </select>
                        </div>

                        <div className="my-5">
                            {/* <label className="text-gray-600 py-0 my-0 text-[16px] w-[35%] ml-[0px]"> Role </label> */}
                            <select className="border border-gray-200 border-t-0 border-l-0 border-r-0 ml-[30px] w-[180px] py-2 shadow-md rounded-md flex justify-content mx-auto px-2" id="country" value={selectedOption2} onChange={handleOptionChange2}>
                                <option value="">Select a role</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                    <button className="w-[70%] bg-[#1896b9] hover:bg-[#1896e9] my-10 mt-[90px] mb-0"> Register Now </button>
                    <Linker className="hover:bg-transparent hover:before:w-0" to="/signIn">
                        <p className="text-gray-600 my-0 pt-2 ml-[260px] flex flex-col mb-[-20px] text-[12px]  hover:underline">Sign In Now</p>
                    </Linker>
                    </div>
                    <Linker className="hover:bg-transparent hover:before:w-0" to="/#">
                    <div className="pb-5 flex items-center ml-[85px] mb-[20px] hover:underline">
                        <img src={back_arrow} className=" left-[100px] w-6 "/>
                        <h1 className="text-xs text-gray-600">Return Home</h1>
                    </div>
                    </Linker>
                </form>
            </div>
        </div>
        </div>
        // <div className=" w-full-[1240px] py-16 text-white px-4 bg-yellow-600">
        //     <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 bg-white py-10 ">
        //         <div className="lg:col-span-2 py-2 px-4 bg-blue-600">
        //             <h1>PICTURE</h1>
        //         </div>
        //         <div className="bg-red-600 py-2 px-4">
        //             <h1> LOGIN FORM </h1>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Register;
