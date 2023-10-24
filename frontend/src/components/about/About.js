import React, { useState, useEffect, useRef } from 'react';
import reading from '../../assets/reading.svg'
import './about.css';

const About = () => {
  const ref = useRef(null);
  
  return (
    <div
      // className={`filter-blur ${isIntersecting ? 'filter-unblur' : ''}`}
      ref={ref}>    
    <div id="about" className="w-full md:h-[700px] 2xl:h-[900px] bg-white py-20 2xl:py-40 px-4 flex items-center">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="2xl:w-[700px] 2xl:ml-[-100px] w-[500px]" src={reading} />
            <div className="flex flex-col justify-center">
                <p className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 bg-clip-text font-bold">ABOUT EDUBAHAMAS</p>
                <h1 className="md:text-3xl sm:text-2xl font-bold py-2 2xl:mb-[40px]">A Bahamian Online Learning Platform</h1>
                <p className="text-[grey] 2xl:w-[650px]">
                EduBahamas is your comprehensive destination for preparing for 
                the BGCSE and BJC exams in the Bahamas. As we continue to 
                refine and expand our platform in the beta stage, our commitment 
                to providing top-notch resources remains unwavering. 
                <br/>Whether you're a student striving for excellence or a dedicated 
                teacher, EduBahamas is here to support your educational journey. 
                With our platform, students can conveniently monitor their 
                progress on a per-subject basis, ensuring they're 
                well-prepared for their exams.
                Meanwhile, teachers have the power to create virtual 
                classrooms, enabling them to access invaluable data 
                analytics and track the progress of every student under 
                their guidance. <br/><br />Join us on EduBahamas as we empower 
                learners and educators alike on the path to academic success.
                </p>
                <button id="button-custom" className=" bg-[#54b3d6] w-[200px] rounded-md font-medium my-5 2xl:mt-[60px] mx-auto md:mx-[0]">Contact Us</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About