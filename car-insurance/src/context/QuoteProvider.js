import {useState, createContext} from 'react';

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [modal, setModal] = useState(false);

    // inside value we have to put the info we want to share between components
    return (
            <QuoteContext.Provider 
            value={{modal, setModal}} >
                {children}
            </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext;