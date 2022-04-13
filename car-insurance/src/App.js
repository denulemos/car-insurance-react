import {QuoteProvider} from './context/QuoteProvider';
import InsuranceApp from "./components/InsuranceApp";
function App() {
  return (
    <QuoteProvider><InsuranceApp/></QuoteProvider>
    
  );
}

export default App;
