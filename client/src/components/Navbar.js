import React from 'react';
import { Link } from 'react-router-dom';
import nwLogo from '../nw.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={nwLogo} alt="NoodleWorks" height="90" width="auto" />
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact-details">View Submissions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;