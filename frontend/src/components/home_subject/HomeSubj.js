import React from 'react'
import { Carousel, Button, Card } from 'flowbite-react';
import Test from '../test/Test';
import bio from '../../assets/biology.avif'
import chem from '../../assets/chemistry.avif'
import geo from '../../assets/geography.jpeg'
import eng from '../../assets/english.png'
import hist from '../../assets/history.jpeg'
import math from '../../assets/math.webp'
import rel from '../../assets/religion.jpeg'


const HomeSubj = () => {
  return (
      <div id="home_subj" className="body-custom  w-full h-screen text-white ">

        <div className="flex px-10 grid grid-cols-4  ">
        <div className="flex flex-col col-span-2 w-full h-screen flex justify-center px-[10%]">
              <h1 className="w-[100%] text-center text-4xl font-thin pt-[10%] ">Browse All Subjects</h1>

                <p className="mt-[10%] text-center font-thin">
                  EduBahamas contains a comprehensive list of subjects for both the BGCSE and
                  BJC examinations. Ranging from the languages all the way to
                  business studies - browse all subjects by clicking the button!
                  </p>
                <a href="http://localhost:3000/subjects"><Button className=" mt-[5%] w-[101%]">View All Subjects</Button></a>
              </div> 

          <div className="col-span-2 w-full h-screen mt-[25%]">
            <Test />

                {/* <Carousel className="opacity-80 hover:opacity-100 w-[100%] top-1/5 " indicators={false}>
                  <a className="bg-transparent before:hover:w-0 hover:bg-transparent" href="http://localhost:3000/biology">
                    <div className="flex flex-col items-center realtive w-full ">
                      <img className="w-[500px] h-[500px] rounded-full shadow-md " src={bio} />
                      <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-5xl">Biology</p>
                    </div>
                  </a>
                  <div className="flex flex-col items-center realtive w-full">
                    <img className="w-[500px] h-[500px] rounded-full" src={geo} />
                    <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-5xl">Geography</p>
                  </div>
                  <div className="flex flex-col items-center realtive w-full">
                    <img className="w-[500px] h-[500px] shadow-md rounded-full" src={math} />
                    <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-5xl">Mathematics</p>
                  </div>
                  
                </Carousel> */}
              </div> 

              
              


         </div>
        </div>
  )
}

export default HomeSubj