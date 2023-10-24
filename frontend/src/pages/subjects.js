<<<<<<< HEAD
import React, {useState } from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> 2082d47 (Updated FrontEnd)
import { Navbar } from '../components';
import bio from '../assets/biology.avif'
import lit from '../assets/literature.jpeg'
import hist from '../assets/history.jpeg'
import phys from '../assets/physics.jpeg'
<<<<<<< HEAD
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Subjects = () => {
=======
import rel from '../assets/religion.jpeg'
import eng from '../assets/english.png'
import chem from '../assets/chemistry.avif'
import com from '../assets/commerce.jpeg'
import geo from '../assets/geography.jpeg'
import math from '../assets/math.webp'
import acc from '../assets/accounting.jpeg'

const Subjects = () => {
  const [isGray, setIsGray] = useState(true);

  useEffect(() => {
    // Automatically change the card color from gray to its original color after 3 seconds
    const timer = setTimeout(() => {
      setIsGray(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer to avoid memory leaks

  }, []); 
  
>>>>>>> 2082d47 (Updated FrontEnd)
  const [isHoveredBio, setIsHoveredBio] = useState(false);
  const [isHoveredHist, setIsHoveredHist] = useState(false);
  const [isHoveredLit, setIsHoveredLit] = useState(false);
  const [isHoveredPhys, setIsHoveredPhys] = useState(false);
<<<<<<< HEAD
=======
  const [isHoveredRE, setIsHoveredRE] = useState(false);
  const [isHoveredEng, setIsHoveredEng] = useState(false);
  const [isHoveredCom, setIsHoveredCom] = useState(false);
  const [isHoveredChem, setIsHoveredChem] = useState(false);
  const [isHoveredGeo, setIsHoveredGeo] = useState(false);
  const [isHoveredMath, setIsHoveredMath] = useState(false);
  const [isHoveredAcc, setIsHoveredAcc] = useState(false);
  const [isHoveredComS, setIsHoveredComS] = useState(false);
>>>>>>> 2082d47 (Updated FrontEnd)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two slides at a time
    slidesToScroll: 1,
  };
  return (
    <div>
      <Navbar />
<<<<<<< HEAD

=======
>>>>>>> 2082d47 (Updated FrontEnd)
      <div className="px-20 py-20">
        <p className="font-extralight text-white text-6xl">View Subjects</p>
      </div>

<<<<<<< HEAD
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-0 mx-20">

        <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white rounded-md mb-10 pb-2 text-center relative"
        onMouseEnter={() => setIsHoveredBio(true)}
        onMouseLeave={() => setIsHoveredBio(false)}>
=======
      <div class="flex grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-0 mx-20 2xl:w-[95%] lg:w-[92%] w-[80%]">

        <div className="lg:w-[80%] md:w-[60%] xs:w-[20%] bg-black text-white rounded-md mb-10 pb-2 text-center relative">
>>>>>>> 2082d47 (Updated FrontEnd)
          {isHoveredBio && (
            <div className="absolute md:top-[80px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
                <p className="mb-1 2xl:text-green-500 lg:text-green-400 lg:text-xs text-blue-400 font-light text-sm">
                  In Progress (40%)
                </p>


              <div className="h-2 bg-white mt-1 rounded-md">  
                <div className="h-full w-1/2 bg-green-600 rounded-md"></div>
              </div>
<<<<<<< HEAD
              <p className="ml-[140px] 2xl:mt-[-15px] md:mt-[-15px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
            </div>
            
          )}
          <div className={`image-container relative ${isHoveredBio ? 'z-10' : 'z-0'}`}>
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={bio}/>
          </div>
          <hr className="mt-[-20px]"/>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <h1 className="font-extralight text-xl pt-4">Biology</h1>
        </div>

        <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white rounded-md mb-10 pb-2 text-center relative"
        onMouseEnter={() => setIsHoveredHist(true)}
        onMouseLeave={() => setIsHoveredHist(false)}>
=======
              <p className="ml-[100px] 2xl:mt-[-15px] md:mt-[-15px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
            </div>
            
          )}
          <div className={`image-container relative ${isHoveredBio ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredBio(true)}
                          onMouseLeave={() => setIsHoveredBio(false)}>
            <a className="bg-transparent before:hover:w-0 hover:bg-transparent hover:before:w-0 hover:before:content-none" 
              href="http://localhost:3000/biology">
            
            <img className={` rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px] `} 
                              src={bio}/>
            </a>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[40%] h-[1px] bg-green-600"></div>
          </div>
          <h1 className="font-extralight text-xl pt-3 pb-1">Biology</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mb-10 pb-2 text-center relative">
>>>>>>> 2082d47 (Updated FrontEnd)
          {isHoveredHist && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
                <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
                  Not Started
                </p>
<<<<<<< HEAD
              <p className="ml-[140px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
            </div>
            
          )}
          <div className={`image-container relative ${isHoveredHist ? 'z-10' : 'z-0'}`}>
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={hist}/>
          </div>
          <hr className="mt-[-20px]"/>
          <h1 className="font-extralight text-xl pt-4">History</h1>
        </div>

        <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white rounded-md mb-10 pb-2 text-center relative"
        onMouseEnter={() => setIsHoveredLit(true)}
        onMouseLeave={() => setIsHoveredLit(false)}>
=======
              <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
            </div>
            
          )}
          <div className={`image-container relative ${isHoveredHist ? 'z-10' : 'z-0'}`} 
                          onMouseEnter={() => setIsHoveredHist(true)}
                          onMouseLeave={() => setIsHoveredHist(false)}>
            <img className="hover:cursor-pointer   rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={hist}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          <h1 className="font-extralight text-xl pt-3 pb-1 pb-1">History</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mb-10 pb-2 text-center relative">
>>>>>>> 2082d47 (Updated FrontEnd)
          {isHoveredLit && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Not Started
            </p>
<<<<<<< HEAD
          <p className="ml-[140px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredLit ? 'z-10' : 'z-0'}`}>
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={lit}/>
          </div>
          <hr className="mt-[-20px]"/>
          <h1 className="font-extralight text-xl pt-4">Literature</h1>
        </div>

        <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white rounded-md mb-10 pb-2 text-center relative"
        onMouseEnter={() => setIsHoveredPhys(true)}
        onMouseLeave={() => setIsHoveredPhys(false)}>
=======
          <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredLit ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredLit(true)}
                          onMouseLeave={() => setIsHoveredLit(false)}>
            <img className=" hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={lit}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          <h1 className="font-extralight text-xl pt-3 pb-1 pb-1">Literature</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mb-10 pb-2 text-center relative">
>>>>>>> 2082d47 (Updated FrontEnd)
          {isHoveredPhys && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Not Started
            </p>
<<<<<<< HEAD
          <p className="ml-[140px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredPhys ? 'z-10' : 'z-0'}`}>
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={phys}/>
          </div>
          <hr className="mt-[-20px]"/>
          <h1 className="font-extralight text-xl pt-4">Physics</h1>
        </div>
          
        {/* <Slider {...settings}> */}
          <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white mb-10 rounded-md pb-5 text-center">
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.7] hover:opacity-[1]
                            transition-transform duration-300 ease-in-out transform hover:-translate-y-4" 
                            src={bio}/>
            <hr className="mt-[-20px]"/>
            <h1 className="font-extralight text-lg pt-4">Biology</h1>
          </div>

          <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white mb-10 rounded-md pb-5 text-center">
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.7] hover:opacity-[1]
                            transition-transform duration-300 ease-in-out transform hover:-translate-y-4" 
                            src={bio}/>
            <hr className="mt-[-20px]"/>
            <h1 className="font-extralight text-xl pt-4">Biology</h1>
          </div>

          <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white  mb-10 rounded-md pb-5 text-center">
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.7] hover:opacity-[1]
                            transition-transform duration-300 ease-in-out transform hover:-translate-y-4" 
                            src={bio}/>
            <hr className="mt-[-20px]"/>
            <h1 className="font-extralight text-xl pt-4">Biology</h1>
          </div>

          <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white mb-10 rounded-md pb-5 text-center">
            <img className=" rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.7] hover:opacity-[1]
                            transition-transform duration-300 ease-in-out transform hover:-translate-y-4" 
                            src={bio}/>
            <hr className="mt-[-20px]"/>
            <h1 className="font-extralight text-xl pt-4">Biology</h1>
            </div>
=======
          <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p>
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredPhys ? 'z-10' : 'z-0'}`}
                        onMouseEnter={() => setIsHoveredPhys(true)}
                        onMouseLeave={() => setIsHoveredPhys(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={phys}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          <h1 className="font-extralight text-xl pt-3 pb-1 pb-1">Physics</h1>
        </div>
          
        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredRE && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Coming Soon
            </p>
          {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredRE ? 'z-10' : 'z-0'}`} 
                          onMouseEnter={() => setIsHoveredRE(true)}
                          onMouseLeave={() => setIsHoveredRE(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={rel}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          <h1 className="font-extralight text-xl pt-3 pb-1 pb-1">Religious Studies</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredEng && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Coming Soon
            </p>
          {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredEng ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredEng(true)}
                          onMouseLeave={() => setIsHoveredEng(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={eng}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <h1 className="font-extralight text-xl pt-3 pb-1">English Language</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredCom && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Coming Soon
            </p>
          {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
        </div>
            
          )}
          <div className={`image-container relative ${isHoveredCom ? 'z-10' : 'z-0'}`}
                           onMouseEnter={() => setIsHoveredCom(true)}
                           onMouseLeave={() => setIsHoveredCom(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={com}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <h1 className="font-extralight text-xl pt-3 pb-1">Commerce</h1>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredChem && (
           <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
           <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
             Coming Soon
           </p>
         {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
       </div>
            
          )}
          <div className={`image-container relative ${isHoveredChem ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredChem(true)}
                          onMouseLeave={() => setIsHoveredChem(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={chem}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <p className="font-extralight pt-3 pb-1 text-xl">Chemistry</p>
        </div>

      

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredAcc && (
           <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
           <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
             Coming Soon
           </p>
         {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
       </div>
            
          )}
          <div className={`image-container relative ${isHoveredAcc ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredAcc(true)}
                          onMouseLeave={() => setIsHoveredAcc(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={acc}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <p className="font-extralight pt-3 pb-1 text-xl">Bookkeeping & Accounts</p>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredMath && (
           <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
           <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
             Coming Soon
           </p>
         {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
       </div>
            
          )}
          <div className={`image-container relative ${isHoveredMath ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredMath(true)}
                          onMouseLeave={() => setIsHoveredMath(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={math}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          {/* <p className="mt-[-42px] text-green-400">In Progress</p> */}
          <p className="font-extralight pt-3 pb-1 text-xl">Mathematics</p>
        </div>

        <div className="lg:w-[80%] md:w-[60%] bg-black text-white rounded-md mt-2 mb-10 pb-2 text-center relative">
          {isHoveredGeo && (
           <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
           <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
             Coming Soon
           </p>
         {/* <p className="ml-[100px] md:mt-[-20px] text-xs 2xl:w-[400px] lg:w-[200px] w-[100px] font-extralight absolute">Exam: BGCSE</p> */}
       </div>
            
          )}
          <div className={`image-container relative ${isHoveredGeo ? 'z-10' : 'z-0'}`}
                          onMouseEnter={() => setIsHoveredGeo(true)}
                          onMouseLeave={() => setIsHoveredGeo(false)}>
            <img className="hover:cursor-pointer    rounded-md pb-5 2xl:w-[400px] 2xl:h-[250px] lg:w-[300px] lg:h-[150px] w-[250px] h-[100px] opacity-[0.8] hover:opacity-[1]
                              transition-transform duration-300 ease-in-out transform hover:-translate-y-[45px]" 
                              src={geo}/>
          </div>
          <div className="w-full h-[1px] mt-[-20px] bg-white">
            <div className="w-[0%] h-[1px] bg-green-600"></div>
          </div>
          <p className="font-extralight pt-3 pb-1 text-xl">Geography</p>
        </div>
>>>>>>> 2082d47 (Updated FrontEnd)
            {/* </Slider> */}
        </div> 
      

  </div>
  )
}

export default Subjects