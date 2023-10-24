import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Overview = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Weekly Average Activity',
            data: [10, 15, 12, 20, 18, 22, 14], // Replace with your activity data
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false,
          },
        ],
      };

  return (
    <div>
        <div>
            <div className="mt-0 py-5 px-5 my-5 bg-[#f0f0f0] w-full">
            <h1 className="text-5xl text-center font-poppins font-[20px]">BGCSE BIOLOGY</h1>
                <div className="flex flex-col ">
                    {/* <h1 className="text-3xl font-poppins">Progress Overview</h1>
                    <div className="mt-2 bg-[#f7f7f7] w-full h-[10%] shadow-md rounded-md border">
                        <div className="bg-green-600 w-[40%] h-[10%] rounded-md border">
                            <p className="px-4 py-2 text-white">40%</p>
                        </div>
                    </div> */}
                </div>

                <div className="mt-10 px-2 bg-[#f0f0f0] w-full">
                    <h1 className="text-2xl font-poppins pb-4">Key Concepts</h1>
                    <div className="shadow-md bg-[#f7f7f7] w-full px-5 py-5 rounded-md">
                        <ol>
                            <li className="py-2">Understanding environmental biology and Bahamian ecosystems</li>
                            <li className="py-2">Understanding the cell lifecycle and its various processes</li>
                            <li className="py-2">Learn about animal feeding and the different agriculture industries</li>
                            <li className="py-2">Understand both plant and human anatomy and processes </li>
                        </ol>
                    </div>
                    <div className="flex pt-10">
                        <a className="w-[100%]" href="http://localhost:3000/pastpapers"><div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 hover:bg-[#36b584] hover:text-white duration-200 -skew-x-12 bg-white text-center rounded-md px-2 py-2 shadow-md hover:cursor-pointer mr-[5%]"><p>View Past Papers</p></div></a>                        
                        <a className="w-[100%]" href="http://localhost:3000/quizzes"><div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 hover:bg-[#36b584] hover:text-white duration-200 -skew-x-12 bg-white text-center rounded-md px-2 py-2 shadow-md hover:cursor-pointer ml-[5%]"><p>View Quizzess</p></div></a>
                    </div>
                    <hr className="w-full bg-black-500 pb-10 opacity-0"></hr>
                    <h1 className="text-2xl font-poppins">Progression</h1>
                    <div className="mt-2 bg-[#f7f7f7] w-full h-[10%] shadow-md rounded-md border">
                        
                        <div className="bg-green-600 w-[40%] h-[10%] rounded-md border">
                            <p className="px-4 py-2 text-white">40%</p>
                        </div>
                    </div>

                    
                    
                    <div className="flex">
                        <h1 className="text-2xl font-semibold pt-10 w-[30%] text-center">Daily Average Activity</h1>
                        <h1 className="ml-20 text-2xl font-semibold pt-10 w-[30%] text-center">Weekly Average Activity</h1>
                        <h1 className="ml-20 text-2xl font-semibold pt-10 w-[30%] text-center">Monthly Average Activity</h1>
                    </div> 
                    
                     <div className="container mx-auto mt-5 pt-2 flex">
                        <div className="bg-white p-4 shadow-md rounded-md w-[30%]">
                            <Line data={data} />
                        </div>
                        <div className="ml-[5%] bg-white p-4 shadow-md rounded-md w-[30%]">
                            <Line data={data} />
                        </div>
                        <div className="ml-[5%] bg-white p-4 shadow-md rounded-md w-[30%]">
                            <Line data={data} />
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview