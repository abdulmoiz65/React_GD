import React from 'react';
import logo from '../assets/logo.png';

function Preloader() {
  return (
    <div className="loader-container" id="loader">
      <img src={logo} alt="Loading..." className="tornado" />
      <p className="loader-text">MAJU Graduation Directory</p>
    </div>
  );
}

export default Preloader;
