import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/calculator' component={Calculator}/>
        <Route path='/documentation' component={Docs}/>
      </Switch>
    </Router>
  );
}

export default App;