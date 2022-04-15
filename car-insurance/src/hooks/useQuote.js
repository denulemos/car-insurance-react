import {useContext} from 'react';
import QuoteContext from '../context/QuoteProvider';

const useQuote = () => {
    return useContext(QuoteContext);
}

export default useQuote;