import React from 'react';
import './Modal.css';

const Modal = ({ modal, setModal, country }) => {
  if (modal === true)
    return (
      <div className="county-card" style={{ width: '100%', height: '100%' }}>
        <div className="country-content">
          <h5>{country.name.common} </h5>
          <img src={country.flags.svg} alt={country.name.common} />
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => setModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  return null;
};

export default Modal;
