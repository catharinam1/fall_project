<<<<<<< HEAD
import React from 'react'
import { Navbar, CarouselDefault } from '../components';

const PastPapers = () => {
  return (
    <div>
       
        <Navbar />
        
        <div className="text-white h-screen flex flex-col items-center justify-center">
            <p className="text-4xl">Past Papers</p>
            <p className="text-6xl">Coming Soon</p>
            <img src="https://cdn-icons-png.flaticon.com/512/3866/3866319.png"/>
            
        </div>
        
         
        
    </div>
  )
}

export default PastPapers
=======
import React from 'react';
import { Navbar, Pastpaperbox } from '../components';
import { Button, Dropdown } from 'flowbite-react';
import bio from '../assets/biology.avif'
import lit from '../assets/literature.jpeg'
import hist from '../assets/history.jpeg'
import phys from '../assets/physics.jpeg'
import rel from '../assets/religion.jpeg'
import eng from '../assets/english.png'
import chem from '../assets/chemistry.avif'
import com from '../assets/commerce.jpeg'
import geo from '../assets/geography.jpeg'
import math from '../assets/math.webp'
import acc from '../assets/accounting.jpeg'

const PastPapers = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col px-[5%]">

        <div className="mt-[5%] pb-20 font-extralight text-white xl:text-6xl">
          <p >View Past Papers</p>
        </div>

        <div className="flex items-center justify-center text-white font-poppins w-[100%] ">

          <div className="flex flex-col w-[50%] ">

            <h1 className=" text-lg">View By Year</h1>
              <div className="flex grid grid-cols-4">
                  <Pastpaperbox title_subj="2023" desc="year"/>
                  <Pastpaperbox title_subj="2022" desc="year"/>
                  <Pastpaperbox title_subj="2021" desc="year"/>
                  <Pastpaperbox title_subj="2020" desc="year"/>
                  <Pastpaperbox title_subj="2019" desc="year"/>
                  <Pastpaperbox title_subj="2018" desc="year"/>
                  <Pastpaperbox title_subj="2017" desc="year"/>
                  <Pastpaperbox title_subj="2016" desc="year"/>
                  <Pastpaperbox title_subj="2015" desc="year"/>
                  <Pastpaperbox title_subj="2014" desc="year"/>
                  <Pastpaperbox title_subj="2013" desc="year"/>
                  <Pastpaperbox title_subj="2012" desc="year"/>
                  <Pastpaperbox title_subj="2011" desc="year"/>
                  <Pastpaperbox title_subj="2010" desc="year"/>
                  <Pastpaperbox title_subj="2009" desc="year"/>
                  <Pastpaperbox title_subj="2008" desc="year"/>
              </div>

            </div>

            <div className="ml-[10%] w-[50%]">

              <h1 className="text-lg">View By Subject</h1>
              <div className="flex grid grid-cols-3">
                  <Pastpaperbox title_subj="Accounting" desc={com}/>
                  <Pastpaperbox title_subj="Biology" desc={bio}/>
                  <Pastpaperbox title_subj="Chemistry" desc={phys}/>
                  <Pastpaperbox title_subj="Commerce" desc={hist}/>
                  <Pastpaperbox title_subj="English" desc={chem}/>
                  <Pastpaperbox title_subj="Geography" desc={lit}/>
                  <Pastpaperbox title_subj="History" desc={rel}/>
                  <Pastpaperbox title_subj="Literature" desc={geo}/>
                  <Pastpaperbox title_subj="Mathematics" desc={math}/>
                  <Pastpaperbox title_subj="Physics" desc={eng}/>     
                  <Pastpaperbox title_subj="Religion" desc={acc}/>
                  <Pastpaperbox title_subj="Spanish" desc={acc}/>
              </div>
            </div>
          
        </div>
        </div>
</div>
  );
};

export default PastPapers;
>>>>>>> 2082d47 (Updated FrontEnd)
