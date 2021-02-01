import React, { Component } from 'react'
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }

}

export default App;
