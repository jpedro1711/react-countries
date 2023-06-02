import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 p-2">CountryGo</span>
        <div className="link-container">
          <Link to="/" className="link">
            About
          </Link>{' '}
          |{' '}
          <Link className="link" to="countries">
            Countries
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
