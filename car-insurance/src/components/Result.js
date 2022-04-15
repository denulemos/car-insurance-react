import React from 'react'
import useQuote from '../hooks/useQuote'
import {LABELS, PLANS} from '../constants';

const Result = () => {
    const {result, data} = useQuote();
    const {label, year, plan} = data;

    const labelName = LABELS.filter(m => m.id === Number(label))

    if (result === 0) return null
  return (
      <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
 <h2 className='text-gray-600 font-black'>{result}</h2>

 <p className='my-2'>
     <span className='text-gray-600 font-black' >Label: </span>
     {labelName[0].name}
     <span className='text-gray-600 font-black' >Year: </span>
     {labelName[0].name}
     <span className='text-gray-600 font-black' >Plan: </span>
     {labelName[0].name}
 </p>
      </div>
           
          
  )
}

export default Result