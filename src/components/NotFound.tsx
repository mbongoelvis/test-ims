import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate()
  // function to go back one step
  const goBack = () => {
    navigate("/rest-password")
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className='flex flex-col justify-center items-center'>
        <h2 className='opacity-65 text-sm'>The Page you are trying to access is not found!</h2>
        <button onClick={goBack} className='px-8 text-sm py-3 rounded-full hover:opacity-65 duration-300 text-white bg-blue-400 mt-3 cursor-pointer'>Go back</button>
      </div>
    </div>
  );
}
