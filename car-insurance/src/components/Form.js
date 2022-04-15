import React from 'react'
import {LABELS, YEARS, PLANS} from '../constants';
import useQuote from '../hooks/useQuote';
import Error from './Error';

const Form = () => {

    const {data, handleChangeData, setError, error, quote}  = useQuote();

    const handleSubmit = e => {
        // prevent reload
        e.preventDefault();
        // if any object is empty
        if (Object.values(data).includes('')) {
            setError('All the fields must be filled');
            return
        }

        setError('');
        quote();
    }

    return (
        <>
        {
            error && <Error/>
        }
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Label
                    </label>
                    <select onChange={(e) => handleChangeData(e)} name="label" className="w-full p-3 bg-white border border-gray-400 focus:outline-none focus:border-indigo-500 text-base leading-6 font-medium text-gray-700">
                        <option value={data.id}>Select an option</option>
                        {LABELS.map(label => (
                            <option key={label.id} value={label.id}>{label.name}</option>
                        ))}
                        </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Year
                    </label>
                    <select onChange={(e) => handleChangeData(e)} name="year" className="w-full p-3 bg-white border border-gray-400 focus:outline-none focus:border-indigo-500 text-base leading-6 font-medium text-gray-700">
                        <option value={data.year}>Select a year</option>
                        {YEARS.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                        </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Plan
                    </label>
                    <div  className="flex gap-3 items-center">
                        {PLANS.map(plan => (
                            <div key={plan.id}>
                                <label>
                                    {plan.name}
                                </label>
                                <input
                                onChange={(e) => handleChangeData(e)}
                                type="radio"
                                name="plan"
                                value={plan.id}
                                />
                                </div>
                        ))}
                        </div>
                </div>
                <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Quote" />
                </form>  
        </>
    )
}

export default Form
