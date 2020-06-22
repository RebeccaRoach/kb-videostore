import React from 'react';
// import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>

       <Link style={navStyle} to='/search'>
          <li>Search</li>
        </Link>

        <Link style={navStyle} to='/library'>
          <li>Library</li>
        </Link>
      
        <Link style={navStyle} to='/customers'>
          <li>Customers</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;