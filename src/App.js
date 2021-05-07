import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dogs from './components/pages/Dogs'
import Gallery from './components/pages/Gallery';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dogs' exact component={Dogs} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/sign-up' exact component={Signup} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
