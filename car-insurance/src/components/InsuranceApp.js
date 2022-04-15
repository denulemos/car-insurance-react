import React from 'react'
import Form from './Form'
import useQuote from '../hooks/useQuote'
import Spinner from './Spinner';
import Result from './Result';

const InsuranceApp = () => {

    const {loading} = useQuote();

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-5xl font-black">Insurance Car App</h1>
                </header>
                <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                    <Form/>
                    <p>{loading ? <Spinner/> : <Result/>}</p>
                </main>
       
        </>
    )
}

export default InsuranceApp
