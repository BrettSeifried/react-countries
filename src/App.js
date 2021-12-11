import './App.css';
import { getCountries } from './services/countries';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState('asc');

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
        (obj.name.toLowerCase().includes(query) || obj.name.includes(query)) &&
        (obj.continent === continent || continent === 'All')
      );
    });
  }

  // function sortCountries(a, b) {
  //   let countryA = a.name.toUpperCase();
  //   let countryB = b.name.toUpperCase();
  //   if (countryA < countryB) {
  //     return -1;
  //   }
  //   if (countryA > countryB) {
  //     return 1;
  //   }
  //   return 0;
  // }

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
          {/* <button value={order} onChange={(e) => setOrder(e.target.value)}>
            A-Z
          </button> */}
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
