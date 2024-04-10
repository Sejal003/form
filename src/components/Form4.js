import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form4 = () => {
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
                    <div className="bg-green-500 h-1 rounded-full w-[80%]" ></div>
                </div>
                <h2 className='text-3xl font-bold'>Which are you more interseted in?</h2>
                <p className='text-gray-700 pt-4 pb-12'>Choose just one. This will help us get you started(but won't limit your experience)</p>
                <div className='flex flex-wrap gap-4 items-center justify-center text-center'>
                <label className='label-container' style={{ backgroundColor: backgroundColor.option1 }}
                    onClick={() => handleClick('option1')}>
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={() => handleOptionSelect('option1')}
                    />
                    <div className='flex flex-col items-center justify-start p-8 text-center'>
                       <img src="https://miro.medium.com/v2/resize:fit:1400/0*Ngnv2w74BOUFsuEi.jpg" alt="" className='w-20' />
                        <h3 className='font-normal text-sm'>Arithmetic</h3>
                        <h3 className='text-gray-500'>Introductory</h3>
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
                    <div className='flex flex-col items-center justify-start p-8'>
                       <img src="https://miro.medium.com/v2/resize:fit:1400/0*Ngnv2w74BOUFsuEi.jpg" alt="" className='w-20' />
                        <h3 className='font-normal text-sm'>Arithmetic</h3>
                        <h3 className='text-gray-500'>Introductory</h3>
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
                      <div className='flex flex-col items-center justify-start p-8'>
                       <img src="https://miro.medium.com/v2/resize:fit:1400/0*Ngnv2w74BOUFsuEi.jpg" alt="" className='w-20' />
                        <h3 className='font-normal text-sm'>Arithmetic</h3>
                        <h3 className='text-gray-500'>Introductory</h3>
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
                     <div className='flex flex-col items-center justify-start p-8'>
                       <img src="https://miro.medium.com/v2/resize:fit:1400/0*Ngnv2w74BOUFsuEi.jpg" alt="" className='w-20' />
                        <h3 className='font-normal text-sm'>Arithmetic</h3>
                        <h3 className='text-gray-500'>Introductory</h3>
                    </div>
                </label>
                </div>
            </div>

            {nextButtonActivated && (
                <div className='flex items-center justify-center'>
                    <button className='bg-black text-white py-2 px-12 font-semibold rounded-lg'>
                        <Link to="/form5">Continue</Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form4;