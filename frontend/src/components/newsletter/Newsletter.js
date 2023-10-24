import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-1">Want to stay updated on new features and subjects?</h1>
                <p>Sign up for our bi-weekly newsletter to never miss an update! We are always adding new resources!</p>
            </div>
            <div className="my-0">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-[-5px]">
                    <input className=" mr-0 py-5 flex w-full rounded-md rounded-tr-none rounded-br-none text-black" type="email" placeholder="Enter Email"/>
                    <button id="button-custom" className="bg-[#54b3d6] text-white rounded-md rounded-tl-none rounded-bl-none font-medium w-[200px] ml-0 my-6 px-6">Notify Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter