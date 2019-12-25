
import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import axios from "../../axios-users"
// import { connect } from 'react-redux'
import "./login.css";
import Button from "../../Components/UI/button//button";
import Input from "../../Components/UI/Input/Input";
import AuthNavBar from "../../Components/AuthNav/AuthNavBar";
import NavBar from "../../Components/NavBar/NavBar";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {

                username: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "UserName"
                    },
                    value: "",
                    validation: {
                        required: true,
                        minLength: 0,
                        maxLength: 15,
                        startLetter: true,
                        nospace: true
                    },
                    errorMessage: "The screen name should start with a letter and with no spaces",
                    length: false,
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: "input",
                    elementConfig: {
                        type: "password",
                        placeholder: "Password"
                    },
                    value: "",
                    validation: {
                        required: true,
                        minLength: 8,
                        maxLength: 25
                    },
                    errorMessage: "Password should be between 8 and 25 characters long",
                    valid: false,
                    touched: false,
                    length: false
                }
            },
            formIsValid: false,
            loading: false,
            error: {},
            token: "",
            errorEmail: false,
            errorScreenname: false,
            errorLenScreenname: false,
            errorMessage: null
        };
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedloginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedloginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation,
        );
        updatedFormElement.touched = true;
        updatedloginForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedloginForm) {
            formIsValid = updatedloginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ loginForm: updatedloginForm, formIsValid: formIsValid });
    };

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.startLetter) {
            isValid = !!value.match(/^[a-zA-Z][a-zA-Z_0-9]*$/) && isValid;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.nospace) {
            isValid = !(value.indexOf(" ") >= 0) && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    submitHandler = event => {

        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[
                formElementIdentifier
            ].value;
        }

        const user = {

        };

        var body = {
            username: this.state.loginForm.username.value.toString(),
            password: this.state.loginForm.password.value.toString(),

        }

        axios({
            method: 'post',
            url: '/api/users/login',
            data: body
        })
            .then(response => {
                console.log(response)
                const token = response.data.token;
                console.log(token)
                var jwt = require('jsonwebtoken');

                localStorage.setItem("jwtToken", token);
                console.log(response);
                if (response.data.role == 1) { this.props.history.push({ pathname: "/profile" }) }
                else if (response.data.role == 2) {
                    this.props.history.push({ pathname: "/management" })
                }
                ;
            })
            .catch(function (error) {
                console.log(error);
            });



    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        return (
            <div className="Body">
                <AuthNavBar />
                <div className="jumbotron jumbotron-fluid PageCanvas">
                    <div className="container">
                        <form className="loginBox" onSubmit={this.submitHandler} >
                            <h3 className="headerText">Log in to Opera house reservation portal</h3>
                            {this.state.errorMessage}
                            {formElementsArray.map(formElement => (
                                <Input
                                    key={formElement.id}
                                    elementType={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    invalid={!formElement.config.valid}
                                    errorMessage={formElement.config.errorMessage}
                                    shouldValidate={formElement.config.validation}
                                    touched={formElement.config.touched}
                                    autoFocus={formElement.config.autoFocus}
                                    changed={event => this.inputChangedHandler(event, formElement.id)}

                                />
                            ))}

                            <button
                                type="submit"
                                className="btn btn-primary loginButton"
                                disabled={!this.state.formIsValid}
                            >
                                Log in
                             </button>

                        </form>
                    </div>
                    <div className="downDiv">
                        <p className="text-sm-left downText">
                            New to Opera house?{" "}
                            <a className="Links" href="/signup">
                                Sign up now..
                  </a>
                        </p>
                        <p className="text-sm-left downText">
                            Need to know more{" "}
                            <a
                                className="Links"
                                href="https://about.twitter.com/en_us.html"
                            >
                                About us
                  </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default withRouter(Login)