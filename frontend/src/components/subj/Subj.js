import React from 'react';
import { Link as Linker } from 'react-router-dom';

const Subj = () => {
  return (
    <div id="subj" className="w-full h-full py-20 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            {/* <img className="w-[500px]" src={reading} /> */}
            <div className="flex flex-col justify-center">
                {/* <p className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 bg-clip-text font-bold">ABOUT EDUBAHAMAS</p> */}
                <h1 className="md:text-3xl sm:text-2xl font-bold py-2 text-white">Explore Subjects</h1>
                <p className="text-[white]">
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
                <Linker to="/subjects">
                    <button className="bg-[#54b3d6] w-[200px] rounded-md font-medium my-5 mx-auto md:mx-[0]">View All Subjects</button>
                </Linker>
            </div>
            <div>
                <p className="text-white">Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Subj