import React, { useContext } from 'react';
// import './App.css';
import {Link} from 'react-router-dom'
import {SessionContext} from '../App'

const Nav = () => {

  const session = useContext(SessionContext);

  return (
    <nav className="nav-style">
      <ul className="nav-ul">
        <Link to='/'>
          <li className="navbar-brand">KB Videos</li>
        </Link>

        <Link to='/'>
          <li className="nav-links">Home</li>
        </Link>

       <Link to='/search'>
          <li className="nav-links">Search</li>
        </Link>

        <Link to='/library'>
          <li className="nav-links">Library</li>
        </Link>
      
        <Link to='/customers'>
          <li className="nav-links">Customers</li>
        </Link>
      </ul>

      <h5>{session.selectedCustomer && session.selectedCustomer.name}</h5>
      <h5>{session.selectedMovie && session.selectedMovie.title}</h5>
    </nav>
  );
}

export default Nav;