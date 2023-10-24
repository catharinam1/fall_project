import React from 'react'
import Outline from './Outline';
import Modules from './Modules';
const Content = ({unit_num, unit_title, about_info}) => {

    const biologyUnitOne = [
        {
          title: "Ecosystems",
          content: [
            { name: "Mangrove Ecosystems", link: "/mangrove" },
            { name: "Coral Reef Ecosystems", link: "/coral-reef" },
            { name: "Rocky Shores", link: "/rocky-shores" },
            { name: "Sandy Beaches", link: "/sandy-beaches" },
            { name: "Pine Forests or Coppice or Drought-Resistant Woodland ", link: "/woodland" },
          ],
        },
        {
          title: "Pollution",
          content: [
            { name: "Air Pollution", link: "/air-pollution" },
            { name: "Land Pollution", link: "/land-pollution" },
            { name: "Water Pollution", link: "/water-pollution" },
            { name: "Ozone Depletion & Global Climate Change", link: "/climate-change" },
          ],
        },
        {
            title: "Biodiversity",
            content: [
              { name: "Biodiversity", link: "/biodiversity" },
              { name: "National Parks and Protected Areas", link: "/protected-areas" },
              { name: "Fisheries Management", link: "/fisheries" },
            ],
          },
      ];

      const biologyUnitTwo = [
        {
          title: "Cells",
          content: [
            { name: "Cells", link: "/cells" },
          ],
        },
        {
            title: "Cell Biology & Genetic Fundamentals",
            content: [
              { name: "Transport in Cells", link: "/cells" },
              { name: "Structure of Cells", link: "/cells" },
              { name: "Genetics", link: "/cells" },
              { name: "Monohybrid Inheritance", link: "/cells" },
            ],
          },
          {
            title: "Biotechnology & Genetic Variation",
            content: [
              { name: "Nucelic Acids", link: "/cells" },
              { name: "Genetic Engineering", link: "/cells" },
              { name: "Variation", link: "/cells" },
            ],
          },
      ];

      const biologyUnitThree = [
        {
          title: "Plant Anatomy & Local Adaptions",
          content: [
            { name: "Feeding in Animals", link: "/cells" },
            { name: "Agriculture", link: "/cells" },
            { name: "Fishing", link: "/cells" },
          ],
        },
        {
            title: "Plant Transport & Processes",
            content: [
                { name: "Nutrients in Food", link: "/cells" },
                { name: "Photosynthesis", link: "/cells" },
                { name: "Respiration vs Photosynthesis", link: "/cells" },
                { name: "Mineral Requirements for Plants", link: "/cells" },
            ],
            },
            {
            title: "Plant Growth & Reproduction",
            content: [
                { name: "Food Safety", link: "/cells" },
                { name: "Food Additives", link: "/cells" },
                { name: "Role of Microbes in Food Production", link: "/cells" },
            ],
            },
      ];

      const biologyUnitFour = [
        {
          title: "Plant Anatomy & Local Adaptions",
          content: [
            { name: "Structure of root, stem and leaf", link: "/cells" },
            { name: "Adaptions of root, stem and leaf", link: "/cells" },
          ],
        },
        {
            title: "Plant Transport & Processes",
            content: [
                { name: "Transport in Plants", link: "/cells" },
                { name: "Transpiration", link: "/cells" },
                { name: "Translocation", link: "/cells" },
                { name: "Excretion in Plants", link: "/cells" },
            ],
            },
            {
            title: "Plant Growth & Reproduction",
            content: [
                { name: "Tropism", link: "/cells" },
                { name: "Asexual Reproduction", link: "/cells" },
                { name: "Sexual Reproduction", link: "/cells" },
                { name: "Asexual Reproduction vs Sexual Reproduction", link: "/cells" },
            ],
            },
      ];

      const biologyUnitFive = [
        {
          title: "Cellular ATP and Human Respiratory System",
          content: [
            { name: "Respiration - Aerobic & Anaerobic", link: "/cells" },
            { name: "Economic Importance", link: "/cells" },
            { name: "ATP", link: "/cells" },
            { name: "Human Respiratory System", link: "/cells" },
          ],
        },
        {
            title: "Excretion & Homeostasis",
            content: [
                { name: "Blood & Circulatory System", link: "/cells" },
                { name: "Lympathic System", link: "/cells" },
                { name: "Blood, Lymph, Tissue Fluid", link: "/cells" },
                { name: "Excretion", link: "/cells" },
                { name: "Homeostasis", link: "/cells" },
            ],
            },
            {
            title: "Body Systems and Senses",
            content: [
                { name: "Reproduction in Humans", link: "/cells" },
                { name: "Growth and Development", link: "/cells" },
                { name: "Population Growth", link: "/cells" },
                { name: "Sexual Transmitted Infections", link: "/cells" },
                { name: "Endocrine System", link: "/cells" },
                { name: "Nervous System", link: "/cells" },
                { name: "Sense Organs", link: "/cells" },
                { name: "Effector Organs", link: "/cells" },
            ],
            },
      ];

    let unit_arg;
    if (unit_num == 0) {
      unit_arg = [{
        title: "Body Systems and Senses",
        content: [
            { name: "Reproduction in Humans", link: "/cells" },
            { name: "Growth and Development", link: "/cells" },
            { name: "Population Growth", link: "/cells" },
            { name: "Sexual Transmitted Infections", link: "/cells" },
            { name: "Endocrine System", link: "/cells" },
            { name: "Nervous System", link: "/cells" },
            { name: "Sense Organs", link: "/cells" },
            { name: "Effector Organs", link: "/cells" },
        ],
        },];
    } else if (unit_num == 1) {
        unit_arg = biologyUnitOne;
    } else if (unit_num == 2) {
        unit_arg = biologyUnitTwo;
    } else if (unit_num == 3) {
        unit_arg = biologyUnitThree;
    } else if (unit_num == 4) {
        unit_arg = biologyUnitFour;
    } else if (unit_num == 5) {
        unit_arg = biologyUnitFive;
    }

  return (
    <div className="h-screen">
        <h1 className="pt-4 text-3xl font-bold">Unit {unit_num}: {unit_title}</h1>
        <div className="flex flex-col py-5">
            <div className="w-[90%] bg-white px-5 py-5 rounded-md">
                <h1 className="text-xl">About This Unit</h1>
                <p className="text-sm pt-2 text-gray-600">
                    {about_info}
                </p>
            </div>
              <Modules dynamic_modules={unit_arg} /> 
              
        </div>
    </div>
  )
}

export default Content