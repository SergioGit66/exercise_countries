import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';

function App() {

  const countriesURL="https://ih-countries-api.herokuapp.com/countries"
  return (
    <div className="App">
      <Navbar />
      <CountriesList url={countriesURL}/>
    </div>
  );
}

export default App;