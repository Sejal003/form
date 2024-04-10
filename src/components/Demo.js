import React, { useState, useEffect } from 'react';

const Demo = ({progress}) => {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress(prevProgress => {
  //       const newProgress = prevProgress + 20; // Assuming each page transition increments progress by 20%
  //       return newProgress >= 100 ? 100 : newProgress; // Limit progress to 100%
  //     });
  //   }, 1000); // Change the interval as needed

  //   return () => clearInterval(timer);
  // }, []);


  return (
    <div className="progress-bar" style={{ width: `${progress}%` }}></div>

  )
}

export default Demo
