import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Country.css';

const Country = () => {
  const { name } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountry(response.data);
    };
    fetchData();
  }, []);

  if (!country || country.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  const languages = country[0].languages;
  const languageList = Object.values(languages).join(', ');

  const currencies = country[0].currencies;
  const currencyList = Object.values(currencies)
    .map((currency) => currency.name)
    .join(', ');

  return (
    <>
      <div className="container p-5">
        <div className="country-header">
          <h1>{country[0].name.common}</h1>
          <img src={country[0].flags.svg} alt={country[0].name.common} />
        </div>
        <p>Official name: {country[0].name.official}</p>
        <p>Region: {country[0].region}</p>
        <p>Capital: {country[0].capital}</p>
        <p>Population: {country[0].population}</p>
        <p>Languages: {languageList}</p>
        <p>Currencies: {currencyList}</p>
      </div>
    </>
  );
};

export default Country;
