import React from 'react'
import { Navbar } from '../components';
import bio from '../assets/biology.avif'
import lit from '../assets/literature.jpeg'
import hist from '../assets/history.jpeg'
import phys from '../assets/physics.jpeg'

const Subjects = () => {
  return (
    <div>
      <Navbar />

      <div className="px-20 py-20">
        <p className="font-extralight text-white text-6xl">View Subjects</p>
      </div>

      <div className="grid grid-cols-4 py-5 ml-10">

        <div className="w-[400px] bg-black text-white ml-10 mb-10 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.8] hover:opacity-[1]" src={bio}/>
          <h1 className="font-extralight text-xl">Biology</h1>
        </div>

        <div className="w-[400px] bg-black text-white ml-5 mb-10 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.8] hover:opacity-[1]" src={hist}/>
          <h1 className="font-extralight text-xl">History</h1>
        </div>

        <div className="w-[400px] bg-black text-white mb-10 ml-2 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.8] hover:opacity-[1]" src={lit}/>
          <h1 className="font-extralight text-lg">Literature</h1>
        </div>

        <div className="w-[400px] bg-black text-white mb-10 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.8] hover:opacity-[1]" src={phys}/>
          <h1 className="font-extralight text-lg">Physics</h1>
        </div>

        <div className="w-[400px] bg-black text-white ml-10 mb-10 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.7] hover:opacity-[1]" src={bio}/>
          <h1 className="font-extralight text-lg">Biology</h1>
        </div>

        <div className="w-[400px] bg-black text-white mb-10 ml-5 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.7] hover:opacity-[1]" src={bio}/>
          <h1 className="font-extralight text-xl">Biology</h1>
        </div>

        <div className="w-[400px] bg-black text-white  mb-10 ml-2 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.7] hover:opacity-[1]" src={bio}/>
          <h1 className="font-extralight text-xl">Biology</h1>
        </div>

        <div className="w-[400px] bg-black text-white mb-10 rounded-md pb-5 text-center">
          <img className=" rounded-md pb-5 w-[400px] h-[250px] opacity-[0.7] hover:opacity-[1]" src={bio}/>
          <h1 className="font-extralight text-xl">Biology</h1>
        </div>
      </div> 

  </div>
  )
}

export default Subjects