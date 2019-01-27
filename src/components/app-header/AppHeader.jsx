import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pic from '../../assets/defaultPic.png';

class AppHeader extends Component {
    render() {
        let gretting;
        let now = new Date().getHours();

        if (now >= 6 && now < 12) {
            gretting = "Good morning"
        } else if (now >= 12 && now < 18) {
            gretting = "Good after-noon"
        } else if (now >= 18 && now < 22) {
            gretting = "Good night"
        } else {
            gretting = "GO TO SLEEP ";
        }

        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">BookStore</Link>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Cart">My-Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Products">My-Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Account">My-Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Account">{`${gretting}, ${this.props.currentUser.name}`} </Link>
                    </li>
                    <li className="nav-item">
                        <img src={pic} alt="userProfile" width="30" height="30" className="d-inline-block align-top" />
                    </li>
                </ul>
            </nav>



        );
    }
}

function mapPropsToDispatch(state) {
    return {
        currentUser: state.users.currentUser
    }
}

export default connect(mapPropsToDispatch)(AppHeader);
