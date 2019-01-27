import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import AppLogin from '../app-login/AppLogin.jsx';

class AppAccount extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column">
          {!this.props.user.isLoggedOn && <li className="nav-item">
            <Link className="nav-link" to="/Account/Login">Login</Link>
          </li>}
          {!this.props.user.isLoggedOn && <li className="nav-item">
            <Link className="nav-link" to="/Account/Register">Register</Link>
          </li>}
          {this.props.user.isLoggedOn && <li className="nav-item">
            <Link className="nav-link" to="/Account">LogOut</Link>
          </li>}
          <Route path="/Account/Login" component={AppLogin} />
        </ul>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}


export default connect(mapStateToProps)(AppAccount);
