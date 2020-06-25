import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Customers from './components/Customers.js'
import Library from './components/Library.js'
import Search from './components/Search.js'
import Rentals from './components/Rentals.js'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

// so we can consume the context anywhere:
export const SessionContext = React.createContext();

const App = () => {

  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  return (
    <SessionContext.Provider value={{
      selectedCustomer,
      selectedMovie,
      setSelectedCustomer,
      setSelectedMovie
    }}>
      <Router>
        <div className="App">
          <ReactNotification />
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/library' component={Library} />
            <Route path='/search' component={Search} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
          </Switch>
        </div>
      </Router>
    </SessionContext.Provider>
  );
}

export default App;
