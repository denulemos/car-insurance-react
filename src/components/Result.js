import React, {useCallback, useRef} from 'react'
import useQuote from '../hooks/useQuote'
import {LABELS, PLANS} from '../constants';

const Result = () => {
    const {result, data} = useQuote();
    const {label, year, plan} = data;

    // they will re-render if results changes
    const labelName = useCallback(LABELS.filter(m => m.id === Number(label)), [result]);
    const planName = useCallback(PLANS.filter(m => m.id === Number(plan)), [result]);
    const yearRef = useRef(year);

    if (result === 0) return null
  return (
      <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
 <h2 className='text-gray-600 font-black'>{result}</h2>

 <p className='my-2'>
     <span className='text-gray-600 font-black' >Label: </span>
     {labelName[0].name} 
     </p>
     <p className='my-2'>
     <span className='text-gray-600 font-black' >Year: </span>
     {yearRef.current} 
     </p>
     <p className='my-2'>
     <span className='text-gray-600 font-black' >Plan: </span>
     {planName[0].name}
 </p>
      </div>
           
          
  )
}

export default Result