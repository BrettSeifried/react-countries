import logo from './logo.svg';
import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setcountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continents, setContinents] = useState('All');
  console.log(countries);

  return (
    <div className="App">
      <h1> Country List</h1>
    </div>
  );
}

export default App;
