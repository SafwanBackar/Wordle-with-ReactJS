import React from 'react';
import './Navbar.css'
import DarkMode from './DarkMode';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>WORDLE</h1>
      <span style={{}}><DarkMode/></span>
    </nav>
  );
};

export default Navbar;