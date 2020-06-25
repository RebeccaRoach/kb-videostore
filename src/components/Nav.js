import React, { useContext } from 'react';
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

        <Link to='/rentals'>
          <li className="nav-links">Rentals</li>
        </Link>
      </ul>

      <h4 className="selected-context">{session.selectedCustomer && session.selectedCustomer.name}</h4>
      <h4 className="selected-context">{session.selectedMovie && session.selectedMovie.title}</h4>
    </nav>
  );
}

export default Nav;