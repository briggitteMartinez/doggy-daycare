import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import GetDogs from './components/GetDogs'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/dogs' exact component={GetDogs} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
