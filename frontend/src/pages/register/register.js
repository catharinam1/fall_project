import React, {useState} from "react";
import register from '../../assets/register.svg'
import './register.css';
import { Link as Linker } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import axios from "axios";

const Register = () => {

    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showBlankError, setShowBlankError] = useState(false);

    let navigate = useNavigate();

    const schools = [
        { value: 'i', label: 'Individual / No School' },
        { value: 'genesis', label: 'Genesis Academy' },
        { value: 'ka', label: 'Kingsway Academy' },
        { value: 'qc', label: 'Queen\'s College' },
        { value: 'sac', label: 'St. Augustine\'s College' },
        { value: 'sta', label: 'St. Andrew\'s School' },      
      ]

      const handleSchoolSelect = (selectedOption) => {
        setFormData({
          ...formData,
          school: selectedOption,
        });
      };

      const roles = [
        { value: 'educator', label: 'Educator' },
        { value: 'student', label: 'Student' },
      ]

      const handleRoleSelect = (selectedOption) => {
        setFormData({
          ...formData,
          role: selectedOption,
        });
      };

      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        school: "",
        role: "",
      });

      const handleInputChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData({
          ...formData,
          [fieldName]: value,
        });
      };
      
      const handleRegister = () => {
        if (formData.password !== formData.password2) {
          setShowPasswordError(true);
        } else if (formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.password === "" || formData.school === "" || formData.alert === "") {
          setShowBlankError(true);
        } else {
          setShowPasswordError(false);
          const dataToSend = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              password: formData.password,
              school: formData.school ? formData.school.value : "",
              role: formData.role ? formData.role.value : "",
          };

          console.log(dataToSend);

          setShowBlankError(false);

          axios.post("http://localhost:8080/api/v1/register", dataToSend, {
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then((response) => {
            if ( response.data === "Email already exists") {
              setShowEmailError(true);
            } else {
              navigate("/user-dashboard");
            }
          })
          
          
        }
    };

    return (
        <div className="struct">
        <a href="http://localhost:3000">
            <h2 className="absolute top-4 left-7 font-bold text-[#1896b9] text-[25px]">EduBahamas</h2>
        </a>
        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 bg-gray-100 flex items-center">

            <div className="flex flex-col items-center justify-center text-center w-[100%]">
                <form  className="2xl:py-5 md:py-5 w-full">
                  {showPasswordError && (
                      <Alert className="w-[80%] ml-[10%] mt-[5%]" color="failure" icon={HiInformationCircle} onDismiss={() => setShowPasswordError(false)}>
                        Passwords do not match
                      </Alert>
                    )}

                    {showEmailError && (
                      <Alert className="w-[80%] ml-[10%] mt-[5%]" color="failure" icon={HiInformationCircle} onDismiss={() => setShowEmailError(false)}>
                        Email already exists
                      </Alert>
                    )}

                    {showBlankError && (
                      <Alert className="w-[80%] ml-[10%] mt-[5%]" color="failure" icon={HiInformationCircle} onDismiss={() => setShowBlankError(false)}>
                        Missing information. Please fill out all sections
                      </Alert>
                    )}

                    <h2 className="text-[#1896b9] pt-[5%] pb-[2%] 2xl:pb-[10%] display-flex justify-center items-center text-center md:text-4xl 2xl:text-5xl font-bold">
                        Register
                    </h2>

                  <div className="flex w-full mb-[-2%]">
                      <div className="my-5 w-[48%]">
                          <input className="text-black focus:ring-transparent ml-[42%] border-none outline-none focus:shadow-[gray] shadow-md py-5 px-3 my-0 rounded-md" type="text" placeholder="First Name" 
                                value={formData.firstName} onChange={(e) => handleInputChange(e, "firstName")} />                                 
                      </div>

                      <div className="my-5 w-[48%]">
                          <input className= "focus:ring-transparent ml-[7%] border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md " type="text" placeholder="Last Name"
                              value={formData.lastName} onChange={(e) => handleInputChange(e, "lastName")} />                                 
                      </div>
                  </div>

                  <div className="my-5">
                  <input
                      className="focus:ring-transparent border border-gray-200 focus:shadow-[gray] shadow-md py-5 px-3 my-0 rounded-md"
                      type="text" placeholder="Email" style={{ outline: "none" }}
                      value={formData.email} onChange={(e) => handleInputChange(e, "email")}
                  />   
                  </div>

                    <div className="my-5">
                        <input className="focus:ring-transparent border border-gray-200 outline-none focus:shadow-[gray] shadow-md  py-5 px-3 my-0 rounded-md " type="password" placeholder="Password"
                          value={formData.password} onChange={(e) => handleInputChange(e, "password")} />
                    </div>

                    <div className="my-5">
                        <input className="focus:ring-transparent border border-gray-200 outline-none focus:shadow-[gray] shadow-md py-5 my-0 rounded-md" type="password" placeholder="Re-type Password" 
                        value={formData.password2} onChange={(e) => handleInputChange(e, "password2")} />
                    </div>

                    <div className="flex justify-center items-center grid grid-cols-2 mt-[-15px] w-full">
                        <div className="ml-[40%] my-5 w-[55%] text-left">
                            <label className=" text-gray-500 ">Select a School:</label>
                            <Select options={schools} isSearchable isClearable
                              value={formData.school} onChange={handleSchoolSelect} />
                        </div>

                        <div className="ml-[5%] my-5 w-[55%] text-left">
                            <label className="text-gray-500">Select a Role:</label>
                            <Select className="outline-none border-none" options={roles} isSearchable isClearable
                            value={formData.role} onChange={handleRoleSelect} />
                        </div>
                    </div>

                  
                    <div className="flex justify-center items-center">
                        
                    <button type="button" onClick={handleRegister} id="button-custom" className="w-[60%] bg-[#1896b9] hover:bg-[#126e87] rounded-md 2xl:mt-[70px] md:mt-[40px] text-[14px]">Register</button>
          
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

