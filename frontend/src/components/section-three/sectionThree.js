import React from 'react';
import { Card } from 'flowbite-react';
import individual from '../../assets/individual.svg'
import teacher from '../../assets/teacher.svg'
import student from '../../assets/student.svg'

const SectionThree = () => {
  
  return (
    <div>   
         
    <div id="resources" className="w-full h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="flex flex-col font-thin text-6xl 2xl:text-8xl mb-[10%]">Learn and Teach with EduBahamas</h1>
        <div className="mx-auto grid md:grid-cols-3 px-20">

        <Card horizontal imgSrc={teacher} className="mr-5 hover:cursor-pointer shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105">
            <h5 className="text-sm 2xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    Register as a Teacher
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="text-sm">
                    Create classrooms and monitor each student's progress.
                </p>
            </p>
        </Card>
        <Card horizontal imgSrc={student} className="mr-5 hover:cursor-pointer shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105" >
            <h5 className="text-sm 2xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    Register as a Student
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="text-sm">
                    Test your knowledge with quizzes and create study groups.
                </p>
            </p>
        </Card>
        <Card horizontal imgSrc={individual} className="hover:cursor-pointer shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105">
            <h5 className="text-sm 2xl:text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                <p className="">
                    Register as an Individual
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="text-sm">
                    Learn at your own pace, with individualized progress tracking!
                </p>
            </p>
        </Card>
           
        </div>
    </div>
    </div>
  )
}

export default SectionThree