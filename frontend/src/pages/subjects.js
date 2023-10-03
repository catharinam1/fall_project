import React, {useState } from 'react'
import { Navbar } from '../components';
import bio from '../assets/biology.avif'
import lit from '../assets/literature.jpeg'
import hist from '../assets/history.jpeg'
import phys from '../assets/physics.jpeg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Subjects = () => {
  const [isHoveredBio, setIsHoveredBio] = useState(false);
  const [isHoveredHist, setIsHoveredHist] = useState(false);
  const [isHoveredLit, setIsHoveredLit] = useState(false);
  const [isHoveredPhys, setIsHoveredPhys] = useState(false);
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

      <div className="px-20 py-20">
        <p className="font-extralight text-white text-6xl">View Subjects</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-0 mx-20">

        <div className="2xl:w-[400px] lg:w-[300px] w-[250px] bg-black text-white rounded-md mb-10 pb-2 text-center relative"
        onMouseEnter={() => setIsHoveredBio(true)}
        onMouseLeave={() => setIsHoveredBio(false)}>
          {isHoveredBio && (
            <div className="absolute md:top-[80px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
                <p className="mb-1 2xl:text-green-500 lg:text-green-400 lg:text-xs text-blue-400 font-light text-sm">
                  In Progress (40%)
                </p>


              <div className="h-2 bg-white mt-1 rounded-md">  
                <div className="h-full w-1/2 bg-green-600 rounded-md"></div>
              </div>
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
          {isHoveredHist && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
                <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
                  Not Started
                </p>
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
          {isHoveredLit && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Not Started
            </p>
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
          {isHoveredPhys && (
            <div className="absolute md:top-[90px] pl-3 pt-2 2xl:top-[180px] text-center z-0">
              
            <p className="mb-1 2xl:mt-[10px] 2xl:text-gray-400 lg:text-gray-400 text-xs text-blue-400 font-light">
              Not Started
            </p>
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
            {/* </Slider> */}
        </div> 
      

  </div>
  )
}

export default Subjects