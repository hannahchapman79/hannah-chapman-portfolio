import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsHouseDoor, BsPerson, BsFolder, BsFileText, BsEnvelope } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="nav-bar">
      <div className="container">
        <Link className="navbar-brand" to="/">Hannah Chapman</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/">
                <BsHouseDoor className="me-2" /> 
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              <BsPerson className="me-2" /> 
                About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
              <BsFolder className="me-2" /> 
                Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cv">
              <BsFileText className="me-2" /> 
              CV</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              <BsEnvelope className="me-2" /> 
                Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;