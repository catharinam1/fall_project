import React from 'react'
import 'tailwindcss/tailwind.css';
import 'font-awesome/css/font-awesome.min.css';
import Typed from 'react-typed';

const Homepage = () => {
  return (
    <div className="text-white mt-[-50px]">
      <div className="w-full h-screen max-w-[800px] mx-auto
                      text-center flex flex-col justify-center">
        <p className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 bg-clip-text font-bold p-2">EMBRACE LEARNING WITH US</p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">Learn with EduBahamas</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-1xl text-xl font-bold">Study, Learn and Practice For </p>
          <Typed className="text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-blue-600 bg-clip-text 
          md:text-2xl sm:text-1xl text-xl font-bold  pl-2" strings={[
            "BGSCE and BJC", "Sciences", "Mathematics", "History"]}
            typeSpeed={100}
            backSpeed={70}
            loop
            />
        </div>
        {/* <button className="bg-blue-600 w-[200px] rounded-md font-medium my-6 mx-auto my-20">Start Learning</button> */}
        <button className="mt-[60px] bg-blue-600 mx-auto py-2 flex justify-center items-center w-[200px]">Start Learning</button>
      </div>
    </div>
  )
}

export default Homepage
