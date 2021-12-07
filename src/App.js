import logo from './logo.svg';
import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  // const [query, setQuery] = useState('');
  const [flag, setFlag] = useState([]);
  // const [continents, setContinents] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Country List</h1>
      {countries.map((countries) => (
        <p key={countries.id}>{countries.name}</p>
      ))}
      {flag.map((flag) => (
        <img alt={flag.name} src={`https://flagcdn.com/16x12/${flag.iso2}.png`} />
      ))}
    </div>
  );
}
export default App;
