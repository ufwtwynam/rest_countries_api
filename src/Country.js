import React, { useState } from 'react';

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

   // Add conditional checks for country and currencies
   if (!country || !country.currencies || country.currencies.length === 0) {
    return null; // Return null if the required data is not available
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currencies[0].name}</p>
      <a href={`https://www.google.com/maps/place/${country.name}`}
         target="_blank" rel="noopener noreferrer">
         Google Maps
      </a>
      <label>
        Visited:
        <input type="checkbox" checked={visited} onChange={handleVisited} />
      </label>
    </div>
  );
};

export default Country;