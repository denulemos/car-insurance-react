import {QuoteProvider} from './context/QuoteProvider';
import InsuranceApp from "./components/InsuranceApp";
import React from 'react';
function App() {
  return (
    <React.StrictMode>    
      <QuoteProvider>
      <InsuranceApp/>
      </QuoteProvider>
      </React.StrictMode>

    
  );
}

export default App;
