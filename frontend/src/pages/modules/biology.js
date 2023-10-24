import React, { useState, useEffect } from 'react';
import { Navbar, Content, Overview } from '../../components'
import bio from '../../assets/biology.avif'

const Biology = () => {

    const [unitStates, setUnitStates] = useState([false, false]);
    const [selectedUnit, setSelectedUnit] = useState({ index: 0, title: 'Biology' });

    // Function to handle the click event for a specific unit
    const handleUnitClick = (index, title, about_info) => {
      // Create a new array with all false values
      const newUnitStates = new Array(unitStates.length).fill(false);
      // Set the click state of the clicked unit to true
      newUnitStates[index] = true;
      setUnitStates(newUnitStates);
      setSelectedUnit({ index, title, about_info });
    };

    useEffect(() => {
      // Set the initial unit state when the component is loaded
      const newUnitStates = new Array(unitStates.length).fill(false);
      newUnitStates[0] = true;
      setUnitStates(newUnitStates);
    }, []);

  return (
    <div>
        <Navbar />
        <div className="bg-white w-full" >
        <div className="grid grid-cols-5">
            <div className="col-span-1 text-sm">
              <div
                className={`w-full h-[80px] ${unitStates[0] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
                onClick={() => handleUnitClick(0, "Biology", 
                )}
                >
                    <div className="flex">
                      <div>
                        <img className="brightness-150 mr-4 w-10 h-10 rounded-full overflow-hidden" src={bio}/>
                      </div>
                      <div>
                        <h1 className="text-gray-500 text-lg">BGCSE BIOLOGY</h1>
                        <p className="text-gray-500 text-xs">5 UNITS</p>
                      </div>
                    </div>
                    
                </div>
                
                <div
                className={`w-full h-[80px] ${unitStates[1] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
                onClick={() => handleUnitClick(1, "Environmental Biology", 
                "In the Environmental Biology unit, students will study various ecosystems in The Bahamas, including mangroves, coral reefs, rocky shores, sandy beaches, and inland forests. They'll also examine environmental issues such as pollution, ozone depletion, global climate change, biodiversity, and conservation efforts, including marine reserves and species protection.")}
                >
                    <p className="text-gray-500">UNIT ONE</p>
                    <p>Environmental Biology</p>
                </div>
                <div className="bg-white w-full h-[5px]">
                      <div className="bg-green-500 w-[100%] h-[5px]">
                          
                      </div>
                </div>
                <div
                className={`w-full h-[80px] ${unitStates[2] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
                onClick={() => handleUnitClick(2, "Cell Biology & Genetics",
                "In this unit, students will explore the fascinating world of Cell Biology and Genetics. They will distinguish between Prokaryotes and Eukaryotes, examine cell organelles, and learn about cellular specialization and enzyme activity. The unit also covers reproduction in simple organisms, diffusion, osmosis, active transport, nucleic acids, genetic engineering, and genetic variation.")}
                >
                    <p className="text-gray-500">UNIT TWO</p>
                    <p>Cell Biology & Genetics</p>
                </div>
                <div className="bg-white w-[100%] h-[5px]">
                      <div className="bg-green-500 w-[100%] h-[5px]">
                          
                      </div>
                </div>
                <div
              className={`w-full h-[80px] ${unitStates[3] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
              onClick={() => handleUnitClick(3, "Nutrition & Food Supply",
              "Unit three covers a wide range of topics, from animal feeding and agriculture to fishing, aquaculture, nutrients in food, photosynthesis, respiration, mineral requirements for plants, food safety, food additives, and the role of microbes in food production.")}
            >
                    <p className="text-gray-500">UNIT THREE</p>
                    <p>Nutrition & Food Supply</p>
                </div>
                <div className="bg-gray-200 w-[100%] h-[5px]">
                      <div className="bg-green-500 w-[20%] h-[5px]">
                          
                      </div>
                </div>
                <div
              className={`w-full h-[80px] ${unitStates[4] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
              onClick={() => handleUnitClick(4, "Plant Anatomy & Physiology",
              "Unit Four focuses on plant biology, covering topics such as plant structures, adaptations, transport mechanisms, excretion, tropism, and various aspects of plant reproduction, including both asexual and sexual methods.")}
            >
                    <p className="text-gray-500">UNIT FOUR</p>
                    <p>Plant Anatomy & Physiology</p>
                </div>
                <div className="bg-white w-full h-[5px]">
                      <div className="bg-gray-200 w-full h-[5px]">
                          
                      </div>
                </div>
                <div
              className={`w-full h-[80px] ${unitStates[5] ? 'bg-[#f0f0f0]' : 'hover:bg-[#f0f0f0]'} px-5 pt-5`}
              onClick={() => handleUnitClick(5, "Animal Anatomy & Physiology",
              "In the Animal Anatomy and Physiology unit, students will explore various facets of the human body and its functions. Topics include respiration, the circulatory system, lymphatics, reproduction, growth, population dynamics, and more. Students will delve into the intricacies of ATP, the respiratory system, excretion, homeostasis, and the endocrine and nervous systems.")}
            >
                    <p className="text-gray-500">UNIT FIVE</p>
                    <p>Animal Anatomy & Physiology</p>
                </div>
                <div className="bg-white w-full h-[5px]">
                      <div className="bg-gray-200 w-full h-[5px]">
                          
                      </div>
                </div>
            </div>
            
            <div className="col-span-4 bg-[#f0f0f0] px-5 py-5 h-[calc(100vh-100px)] overflow-y-auto" >
            {selectedUnit.index !== 0 ? (
              <Content unit_num={selectedUnit.index} unit_title={selectedUnit.title} about_info={selectedUnit.about_info} />
            ) : (
              /* What to render when the condition is false (i.e., else block) */
              <Overview/>
            )}
            </div>
        </div>
        </div>


    </div>
  )
}

export default Biology