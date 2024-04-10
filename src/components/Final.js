import React, { useState, useEffect } from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const Final = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className='flex items-start justify-center '>
      {
        loading ?
        <div className='flex flex-col items-center justify-center text-center py-40'>
        <MoonLoader
              color={"#36d7b7"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
        <h2 className='text-2xl font-semibold w-[80%] pt-12'>Finding learning path recomendations for you based on your responses</h2>
        </div> :
          <div className='lg:px-60 md:px-20 sm:px-12 px-12 py-40'>
          <h2 className='text-4xl font-bold text-center'>Learning paths based on your answers</h2>
          <p className='text-base text-center text-gray-700 py-8'>Choose one to get started. You can switch anytime.</p>
          <div className='lg:flex md:flex item-center justify-center gap-5 mb-10'>
            <div className="card">
              <div className='lg:flex md:flex sm:flex items-center justify-between px-6 gap-2'>
                <div className='flex lg:w-[60%] md:w-[60%] sm:w-[60%] items-center justify-center text-center'>
                  <h3 className='text-sm'><span className='font-bold'>Foundational Math</span> Build your foundational skills in Algebra, geometry, and probability.</h3>
                </div>
                <div className='flex items-center justify-center'>
                  <img src="https://st4.depositphotos.com/1768806/41302/v/450/depositphotos_413025872-stock-illustration-math-science-education-abstract-background.jpg" alt="" className='w-60' />
                </div>
              </div>
            </div>
            <div className="card">
              <div className='lg:flex md:flex sm:flex items-center justify-between px-6 gap-2'>
                <div className='flex lg:w-[60%] md:w-[60%] sm:w-[60%] items-center justify-center text-center'>
                  <h3 className='text-sm'><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in Algebra, geometry, and probability.</h3>
                </div>
                <div className='flex items-center justify-center'>
                  <img src="https://st4.depositphotos.com/1768806/41302/v/450/depositphotos_413025872-stock-illustration-math-science-education-abstract-background.jpg" alt="" className='w-60' />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
     
    </div>
  )
}

export default Final
