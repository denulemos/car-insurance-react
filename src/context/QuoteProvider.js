import {useState, createContext} from 'react';
import { getYearDifference, calculateLabel, calculatePlan, formatMoney } from '../helpers';

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [data, setData] = useState({
        label: '',
        year: '',
        plan: ''
    })

    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChangeData = async(e) => {
        await setData({
            ...data,
            [e.target.name]: e.target.value,

        })
    }

    const quote = () => {
        // Base
        let result = 2000;

        // year selected - current
        const difference = getYearDifference(data.year);

        // substract 3% per year difference
        result -= ((difference * 3) * result) / 100;
        

        result *= calculateLabel(data.label);

        // plan selected
        result *= calculatePlan(data.plan);

        setLoading(true);
        setTimeout(() => {
            setResult(formatMoney(result));
            setLoading(false);
        }, 3000);
        setResult(formatMoney(result.toFixed(2)));
    }

    const [error, setError] = useState('');

    // inside value we have to put the info we want to share between components
    return (
            <QuoteContext.Provider 
            value={{data, loading, handleChangeData, setError, error, quote, result}} >
                {children}
            </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext;