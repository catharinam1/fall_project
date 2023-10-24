import React, { useState } from 'react';
import './test.css';
import bio from '../../assets/biology.avif'
import geo from '../../assets/geography.jpeg'
import math from '../../assets/math.webp'

const Test = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleChangeItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="body-test">
      <div className="container">
        <input className="input-radio" type="radio" name="slider" id="item-1" checked={selectedItem === 1} />
        <input className="input-radio" type="radio" name="slider" id="item-2" checked={selectedItem === 2} />
        <input className="input-radio" type="radio" name="slider" id="item-3" checked={selectedItem === 3} />

        <div className="cards">
          <label className="card" htmlFor="item-1" id="song-1" onClick={() => handleChangeItem(1)}>
            <img className="img-test w-[400px] h-[400px]" src={geo} alt="Geography" />                      
            <p className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-4xl">Geography</p>

          </label>
          <label className="card" htmlFor="item-2" id="song-2" onClick={() => handleChangeItem(2)}>
            <img className="img-test w-[400px] h-[400px]" src={bio} alt="History" />
            <p className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-4xl">Biology</p>

          </label>
          <label className="card" htmlFor="item-3" id="song-3" onClick={() => handleChangeItem(3)}>
            <img className="img-test w-[400px] h-[400px]" src={math} alt="Math" />
            <p className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-md font-poppins text-4xl">Mathematics</p>

          </label>
        </div>
      </div>
    </div>
  );
};

export default Test;
