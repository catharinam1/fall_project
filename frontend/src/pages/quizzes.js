import React from 'react'
import { Navbar } from '../components';

const Quizzes = () => {
  return (
    <div>
        <Navbar />
        <div className="text-white h-screen flex flex-col items-center justify-center">
            <p className="text-4xl">Quizzes</p>
            <p className="text-6xl">Coming Soon</p>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/3866/3866319.png"/> */}
        </div>
    </div>
  )
}

export default Quizzes