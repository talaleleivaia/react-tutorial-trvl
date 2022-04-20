import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.js';
import Home from './components/pages/home.js';
import Products from './components/pages/Products.jsx';
import Services from './components/pages/Services.jsx';
import SignUp from './components/pages/SignUp.jsx';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/Products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
