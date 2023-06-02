import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [seach, setSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${seach}`
      );
      setCountries(response.data);
    };
    if (seach) {
      fetchData();
    }
  }, [seach]);

  if (!countries || countries.length === 0) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  function handleClick(country) {
    setModal(true);
    setSelectedCountry(country);
  }

  function handleChange({ target }) {
    setSearch(target.value);
  }

  return (
    <>
      <div className="container">
        <div>
          <input
            type="text"
            className="form-control m-2"
            onChange={handleChange}
            placeholder="Find a country by name"
          />
        </div>
        <Modal modal={modal} setModal={setModal} country={selectedCountry} />
        <div className="country-container">
          {countries.map((c) => (
            <div key={c.name.common} className="country-card">
              <h2>{c.name.common}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-success"
                  onClick={() => handleClick(c)}
                >
                  Ver bandeira
                </button>
                <Link
                  to={`/countries/${c.name.common}`}
                  className="see-more-btn"
                >
                  More info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
