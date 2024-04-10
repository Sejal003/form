import React from 'react'
import { Link } from 'react-router-dom'
import { RiStarSFill } from "react-icons/ri";

const Form5 = () => {
    return (
        <div className='lg:px-40 md:px-20 px-4 py-20'>
            <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 mb-12">
                <div className="bg-green-500 h-1 rounded-full w-[100%]" ></div>
            </div>
            <div className='lg:flex md:flex justify-around px-20 gap-4 '>
                <div className='flex items-center justify-center'>
                    <img src="https://i.pinimg.com/736x/bc/91/6d/bc916dcf74bf685295ec90ecd7cfe1f0.jpg" alt="" className='lg:w-[20rem] w-80' />
                </div>

                <div className='flex flex-col items-center lg:items-start lg:w-[25rem] md:w-80 w-full'>
                    <h3 className='text-2xl font-bold text-center lg:text-left md:text-left pt-12'>You're on your way!</h3>
                    <div className='flex text-3xl text-yellow-500 pt-8'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />                    
                    </div>
                    <p className='text-sm pt-4 text-center lg:text-left'>Through its interesting and well structured courses. Brilliant get you hands-onto help improve your professional skills and knowledge. You will interect with theconcepts and solve fun problems in marth, science, and computer science.</p>
                    <p className='text-sm pt-4 text-center lg:text-left'>- Jacob S.</p>
                </div>

            </div>

            <div className='flex items-center justify-center pt-20'>
                <button className='bg-black text-white py-2 px-12 font-semibold rounded-lg'>
                    <Link to="/final">Continue</Link>
                </button>
            </div>
        </div>
    )
}

export default Form5
