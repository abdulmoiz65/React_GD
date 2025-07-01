import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="MAJU Logo" /> Mohammad Ali Jinnah University
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact Us</Link>
  </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
