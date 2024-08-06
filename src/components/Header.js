import React from 'react';
import { Link } from 'react-router-dom';
import '../index';


function Header() {
  return (
   <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/cv">CV</Link></li>
    </ul>
   </nav>
  );
}

export default Header;
