import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import SignUp from '../src/screens/SignUp';
import LogIn from '../src/screens/LogIn';
import Profile from '../src/screens/Profile';
import HomePage from './screens/HomePage';

class App extends Component{
  render(){
    return (
      <div className="d-flex justify-content-center">
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
