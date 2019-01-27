import React, { Component } from 'react';
import AppHeader from './components/app-header/AppHeader.jsx';
import AppFooter from './components/app-footer/AppFooter.jsx';
import AppMain from './components/app-main/AppMain.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as initializeActions from './actions/initializeAction.js';
import {withRouter} from 'react-router-dom';

class App extends Component {

  componentWillMount() {
    this.props.initializeActions.initializeData();
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <AppMain/>
        <AppFooter/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    states: state.states.states
  }
}

function mapDispatchToProps(dispatch) {
  return {initializeActions:bindActionCreators(initializeActions,dispatch)}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
