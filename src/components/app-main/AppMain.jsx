import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AppHome from '../app-home/AppHome.jsx';
import AppAccount from '../app-account/AppAccount.jsx'


class AppMain extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path='/' component={AppHome}/>
        <Route path='/Account' component={AppAccount}/>
      </div>
    );
  }
}

export default AppMain;
