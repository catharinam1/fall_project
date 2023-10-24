import React, {useState} from "react";
import register from '../../assets/register.svg'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link as Linker } from 'react-router-dom';
import axios from "axios";


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
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegistration = () => {
        axios.post("localhost:8080/api/v1/register", formData) // Replace with your backend endpoint URL
          .then((response) => {
            // Handle the successful response (e.g., redirect to a login page)
            console.log("Registration successful", response.data);
          })
          .catch((error) => {
            // Handle registration failure (e.g., display an error message)
            console.error("Registration failed", error);
          });
    };

    return (
        <div className="struct">
        <a href="http://localhost:3000">
            <h2 className="absolute top-4 left-7 font-bold text-[#1896b9] text-[25px]">EduBahamas</h2>
        </a>
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 bg-gray-100 flex items-center">

            <div className="flex flex-col items-center justify-center text-center w-[100%]">
                <form  className="2xl:py-5 md:py-5 w-full">
        
                             <h2 className="text-[#1896b9] md:pt-[10%] 2xl:pt-[5%] pb-[10%] display-flex justify-center items-center text-center md:text-4xl 2xl:text-5xl font-bold">
                                 Register
                             </h2>
        
                            <div className="flex w-full mb-[-2%]">
                                <div className="my-5 w-[48%]">
                                    <input className="ring ring-transparent ml-[42%] border-none outline-none focus:shadow-[gray] shadow-md py-5 px-3 my-0 rounded-md" type="text" placeholder="First Name" />
                                </div>

                                <div className="my-5 w-[48%]">
                                    <input className= "ml-[7%] border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md " type="text" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="my-5">
                            <input
                                className="border border-gray-200 shadow-md py-5 px-3 my-0 rounded-md"
                                type="text"
                                placeholder="Email"
                                style={{ outline: "none" }}
                            />   
                            </div>
        
                              <div className="my-5">
                                  <input className="border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md " type="password" placeholder="Password" />
                              </div>
        
                              <div className="my-5">
                                  <input className="border border-gray-200 outline-none focus:shadow-[gray] shadow-md py-5 my-0 rounded-md" type="password" placeholder="Re-type Password" />
                              </div>
        
                              {/* <div className="my-5 flex w-[50%]"> */}
                                  {/* <FloatingLabel lablel ="Label" variant ="filled"/> */}
                                  {/* <input className=" border border-gray-200 outline-none focus:shadow-[gray] shadow-md py-5 my-0 rounded-md" type="password" placeholder="Re-type Password" />
                                  <input className=" border border-gray-200 outline-none focus:shadow-[gray] shadow-md py-5 my-0 rounded-md" type="password" placeholder="Re-type Password" />

                              </div> */}


                              <div className="flex justify-center items-center grid grid-cols-2 mt-[-15px] w-full">
                                  <div className="ml-[40%] my-5 w-[55%]">
                                      <select className="text-gray-400 border border-gray-200 border-r-0 shadow-md py-2 rounded-md flex justify-content w-full px-2" id="school" value={selectedOption} onChange={handleOptionChange}>
                                          <option value="">Select a school</option>
                                          <option value="i">Individual</option>
                                          <option value="qc">Queen's College</option>
                                          <option value="ka">Kingsway Academy</option>
                                          <option value="sac">St. Augustine's College</option>
                                          <option value="sta">St. Andrew's School</option>
                                          <option value="gen">Genesis Academy</option>
                                      </select>
                         
                                  </div>
        
                                  <div className="ml-[5%] my-5 w-[55%] text-gray-400">
                                      <select className="text-gray-400 border border-gray-200 py-2 shadow-md rounded-md flex justify-content w-full px-2" id="country" value={selectedOption2} onChange={handleOptionChange2}>
                                          <option value="">Student or Teacher</option>
                                          <option className="text-black-600" value="student">Student</option>
                                          <option value="teacher">Educator</option>
                                      </select>
                                  </div>
                              </div>


                            
                              <div className="flex justify-center items-center">
                                  
                              <button id="button-custom" className="w-[60%] bg-[#1896b9] hover:bg-[#126e87] rounded-md 2xl:mt-[70px] md:mt-[40px] text-[14px]" onClick={handleRegistration}> Register </button>
                    
                            </div>
                            <Linker className="hover:bg-transparent hover:before:w-0" to="/signIn">
                                <p className="text-gray-600 mt-[30px] flex justify-center items-center text-[14px] hover:underline">Already have an account? &nbsp; <b>Sign In</b></p>
                            </Linker>
                          </form>
            </div>
            <div className="flex justify-center items-center text-center w-[100%] h-[100%] bg-[#1896b9]">            
                <img src={register} className="hidden sm:block md:w-[550px] 2xl:w-[700px]" />
            </div>
        </div>
        </div>
  )
}

export default Register

