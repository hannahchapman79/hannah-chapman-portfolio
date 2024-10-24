import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav-bar' id='nav-bar'> 
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about-me">About me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

