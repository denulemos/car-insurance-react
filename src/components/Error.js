import useQuote from "../hooks/useQuote";
import React from 'react'

const Error = () => {
    const { error } = useQuote();
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3">{error}</div>
  )
}

export default Error;