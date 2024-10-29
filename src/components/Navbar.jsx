import React from 'react';
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className='nav-bar' id='nav-bar'> 
    <Link to="/">Home</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about-me">About</Link>
    <Link to="/contact">Contact</Link>
    </nav>
    </>
  );
};

export default Navbar;

