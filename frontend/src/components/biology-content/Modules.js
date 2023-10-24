import React from 'react';
import Outline from './Outline';

const Modules = ({ dynamic_modules }) => {
    return (
        <div>
          {dynamic_modules.map((module, index) => (
            <div className="mt-[2%] w-[90%] bg-white px-5 py-5 rounded-md">
                <Outline title={module.title} items={module.content} />
            </div>
            
          ))}
          
        </div>
        
    );
}

export default Modules;
