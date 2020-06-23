import React, { useContext } from 'react';
// import './App.css';
import {Link} from 'react-router-dom'
import {SessionContext} from '../App'

function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  const session = useContext(SessionContext);

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

      <h1>{session.selectedCustomer && session.selectedCustomer.name}</h1>
      <h1>{session.selectedMovie && session.selectedMovie.title}</h1>
    </nav>
  );
}

export default Nav;