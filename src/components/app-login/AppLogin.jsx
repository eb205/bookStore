import React, { Component } from 'react';
import Input from '../common/Input.jsx';
import {connect} from 'react-redux';

class AppLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            fields: {
                Username: {
                    value: "",
                    type: "text",
                    name: "Username",
                    placeholder: "Enter a User name",
                    info: "Between 3-15 characters",
                    isValid: (value) => {
                        return value.length >= 3 && value.length <= 15
                    }
                },
                Password: {
                    value: "",
                    type: "password",
                    name: "Password",
                    placeholder: "Enter a Password",
                    info: "Between 5-10 characters",
                    isValid: (value) => {
                        return value.length >= 5 && value.length <= 10
                    }
                }
            }
        };

    }

    onChange = (e) => {
        this.setState({ fields: { ...this.state.fields, [e.target.name]: {...this.state.fields[e.target.name],value:e.target.value} }, isValid: this.isFormValid() });

    }

    onSubmit = () => {

    }

    isFormValid = () => {
        let isValid = true;
        let context = this;
        Object.keys(this.state.fields).map((key) => {
            isValid = isValid && context.state.fields[key].isValid(context.state.fields[key].value);
        });

        return isValid && Object.keys(this.state.fields).length > 0;
    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-group ">
                        {Object.keys(this.state.fields).map((key) => {
                        return(<Input  type={this.state.fields[key].type}
                                    name={this.state.fields[key].name}
                                    placeholder={this.state.fields[key].placeholder}
                                    info={this.state.fields[key].info}
                                    value={this.state.fields[key].value}
                                    isValid={this.state.fields[key].isValid}
                                    onChange={this.onChange} 
                                    key={this.state.fields[key].name}/>)
                        })}
                        <input type="button" value="Login" className="btn btn-dark" disabled={!this.state.isValid} />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = () => {
    
}

export default connect()(AppLogin);