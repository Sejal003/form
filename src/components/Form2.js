import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form2 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [nextButtonActivated, setNextButtonActivated] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setNextButtonActivated(true);
    };

    const [backgroundColor, setBackgroundColor] = useState({
        option1: 'white',
        option2: 'white',
        option3: 'white',
        option4: 'white',
        option5: 'white',
    });
    const handleClick = (option) => {
        setBackgroundColor((prevColors) => ({
            ...prevColors,
            [option]: 'lightblue',
        }));
        handleOptionSelect(option);
    };

    return (
        <div>
            <div className='flex flex-col items-center text-center py-20 lg:px-40 px-20 '>
                <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mb-12">
                    <div className="bg-green-500 h-1 rounded-full w-[40%]" ></div>
                </div>
                <h2 className='text-3xl font-bold'>Which are you more interseted in?</h2>
                <p className='text-gray-700 pt-4 pb-12'>Choose just one. This will help us get you started(but won't limit your experience)</p>
                <div className='flex flex-col gap-2'>
                <label className='label-container' style={{ backgroundColor: backgroundColor.option1 }}
                    onClick={() => handleClick('option1')}>
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={() => handleOptionSelect('option1')}
                    />
                    <div className='flex items-center justify-start gap-4 pr-12 lg:pr-40'>
                        <img src="https://static.vecteezy.com/system/resources/previews/028/202/665/original/happy-student-boy-character-face-3d-illustration-icon-free-png.png" alt="" className='w-7'/>
                        <h3 className='font-normal'>Learning specific skills to start my career</h3>
                    </div>
                </label>
                
                <label className='label-container' style={{ backgroundColor: backgroundColor.option2 }}
                    onClick={() => handleClick('option2')}>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={() => handleOptionSelect('option2')}
                    />
                     <div className='flex items-center justify-start gap-4 pr-12 lg:pr-40'>
                        <img src="https://static.vecteezy.com/system/resources/previews/028/202/665/original/happy-student-boy-character-face-3d-illustration-icon-free-png.png" alt="" className='w-7'/>
                        <h3 className='font-normal'>Exploring new topics I'm interseted in</h3>
                    </div>
                </label>
                
                <label className='label-container' style={{ backgroundColor: backgroundColor.option3 }}
                    onClick={() => handleClick('option3')}>
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={() => handleOptionSelect('option3')}
                    />
                     <div className='flex items-center justify-start gap-4 pr-12 lg:pr-40'>
                        <img src="https://static.vecteezy.com/system/resources/previews/028/202/665/original/happy-student-boy-character-face-3d-illustration-icon-free-png.png" alt="" className='w-7'/>
                        <h3 className='font-normal'>Refreshing my math foundation</h3>
                    </div>
                </label>
                
                <label className='label-container' style={{ backgroundColor: backgroundColor.option4 }}
                    onClick={() => handleClick('option4')}>
                    <input
                        type="radio"
                        value="option4"
                        checked={selectedOption === 'option4'}
                        onChange={() => handleOptionSelect('option4')}
                    />
                     <div className='flex items-center justify-start gap-4 pr-12 lg:pr-40'>
                        <img src="https://static.vecteezy.com/system/resources/previews/028/202/665/original/happy-student-boy-character-face-3d-illustration-icon-free-png.png" alt="" className='w-7'/>
                        <h3 className='font-normal'>Excersing my brain to stay sharp</h3>
                    </div>
                </label>
               
                <label className='label-container' style={{ backgroundColor: backgroundColor.option5 }}
                    onClick={() => handleClick('option5')}>
                    <input
                        type="radio"
                        value="option5"
                        checked={selectedOption === 'option5'}
                        onChange={() => handleOptionSelect('option5')}
                    />
                     <div className='flex items-center justify-start gap-4 pr-12 lg:pr-40'>
                        <img src="https://static.vecteezy.com/system/resources/previews/028/202/665/original/happy-student-boy-character-face-3d-illustration-icon-free-png.png" alt="" className='w-7'/>
                        <h3 className='font-normal'>Something else</h3>
                    </div>
                </label>
               
                </div>
            </div>

            {nextButtonActivated && (
                <div className='flex items-center justify-center'>
                    <button className='bg-black text-white py-2 px-12 font-semibold rounded-lg'>
                        <Link to="/form3">Continue</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form2;