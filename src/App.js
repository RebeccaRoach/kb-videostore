import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Customers from './components/Customers.js'
import Library from './components/Library.js'
import Search from './components/Search.js'

// we can consume the context anywhere if we export it like so:
export const SessionContext = React.createContext();

function App() {

  const [selectedCustomer, setSelectedCustomer] = useState(undefined);
  const [selectedMovie, setSelectedMovie] = useState(undefined);




  return (
    <SessionContext.Provider value={{
      selectedCustomer,
      selectedMovie,
      setSelectedCustomer,
      setSelectedMovie}}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/library' component={Library} />
            <Route path='/search' component={Search} />
            <Route path='/customers' component={Customers} />
          </Switch>
        </div>
      </Router>
    </SessionContext.Provider>
  );
}

export default App;