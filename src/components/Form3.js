import React from 'react'
import { Link } from 'react-router-dom'
const Form3 = () => {
    return (
        <div className='lg:px-40 md:px-20 px-4 py-20'>
            <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 mb-12">
                <div className="bg-green-500 h-1  rounded-full w-[60%]" ></div>
            </div>
            <div className='lg:flex md:flex justify-around px-20 gap-4'>
                <div className='flex items-center justify-center'>
                    <img src="https://img.pikbest.com/png-images/qiantu/national-legal-day-scales-cartoon-hand-drawn-elements_2738311.png!sw800" alt="" className='lg:w-[25rem] w-80' />
                </div>
                <div className='flex flex-col items-center lg:items-start justify-center lg:w-[25rem] md:w-80 w-full'>
                    <h3 className='text-2xl font-bold text-center lg:text-left md:text-left pt-12'>You're in the right place</h3>
                    <p className='text-base pt-4 text-center lg:text-left'>Brilliant get you hands-onto help improve your professional skills and knowledge. You will interect with theconcepts and solve fun problems in marth, science, and computer science.</p>
                </div>
            </div>
            <div className='flex items-center justify-center pt-20'>
                <button className='bg-black text-white py-2 px-12 font-semibold rounded-lg'>
                    <Link to="/form4">Continue</Link>
                </button>
            </div>
        </div>
    )
}

export default Form3
