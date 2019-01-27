import React, { Component } from 'react';
import logo from '../../assets/logo.jpg';
import { connect } from 'react-redux';

class AppHome extends Component {

    constructor(props) {
        super(props);
        this.state = {country:{name:"israel",flag:""}};
        
    }

    componentWillMount() {
        this.setFlag();
    }

    shouldComponentUpdate() {
        return !this.state.country.flag;
    }

    componentDidUpdate() {
        this.setFlag();
    }

    setFlag = () => {
        let storeCountry = this.props.states.filter((state) => state.name.toLowerCase() === this.state.country.name.toLowerCase())[0];

        if (storeCountry) {
            this.setState({ country: { ...this.state.country, flag: storeCountry.flag } });
        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Welcone to the book store</h1>
                        <p className="lead">The only place book are free?</p>
                    </div>
                    <img src={logo} alt="logo" className="rounded mx-auto d-block" style={{ height: "300px", width: "300px", borderRadius: "10%" }} />
                    <div className="container">
                        <p className="text-center lead">We are located in israel at menahem begin 23,Tel aviv </p>
                        <img src={this.state.country.flag} alt="flag" className="rounded mx-auto d-block" style={{ height: "100px", width: "100px", borderRadius: "10%" }} />
                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        states: state.states.states
    }
}


export default connect(mapStateToProps)(AppHome);
