import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js'
import Customers from './components/Customers.js'
import Library from './components/Library.js'
import Search from './components/Search.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/library' component={Library} />
        <Route path='/search' component={Search} />
        <Route path='/customers' component={Customers} />
      </div>
    </Router>
  );
}

export default App;