import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  function filterCountries() {
    return countries.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(query) ||
        (obj.name.includes(query) && (obj.continent === continent || continent === 'All'))
      );
    });
  }

  return (
    <div className="App">
      <h1>Country List</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <select value={continent} onChange={(e) => setContinent(e.target.value)}>
            <option value="All">All</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="Antarctica">Antarctica</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
          </select>
          <div className="countryList">
            <div className="country">
              {filterCountries().map((country) => (
                <p key={country.id}>
                  <img
                    alt={country.name}
                    src={`https://flagcdn.com/80x60/${country.iso2.toLowerCase()}.png`}
                  ></img>
                  {country.name} : {country.continent}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
