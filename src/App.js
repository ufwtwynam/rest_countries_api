import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './Country';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Country Bucket List</h1>
      {countries.map(country => (
        <Country key={country.alpha3Code} country={country} />
      ))} 
      {/* alpha-3 code e.g. GBR */}
      <h2>Visited Countries</h2>
      {countries.filter(country => country.visited).map(country => (
        <Country key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
}

export default App;
