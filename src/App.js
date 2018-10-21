import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header />  
        <div className="view">
        <Router >
          <Switch>
            <Route path = '/Dashboard' component = {Dashboard}/>
            <Route path = '/Wizard' component = {Wizard}/>
          </Switch>
       </Router>
        </div>
      </div>
    );
  }
}

export default App;
