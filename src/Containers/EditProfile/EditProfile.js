import React, { Component } from "react";
import "./EditProfile.css";
import Button from "../../Components/UI/button//button";
import Input from "../../Components/UI/Input/Input";
class EditProfile extends Component {

    state = {
        editProfileForm: {


            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Your password"
                },
                value: "",
                validation: {
                    required: false,
                    minLength: 8,
                    maxLength: 25
                },
                errorMessage: "Password should be between 8 and 25 characters long",
                valid: false,
                touched: false
            },
            reenter: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Re-enter Password"
                },
                value: "",
                validation: {
                    required: false,
                    matching: true
                },
                errorMessage: "Passwords mismatch",
                valid: false,
                touched: false
            },

            firstname: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name"
                },
                value: "",
                validation: {
                    required: false,
                    maxLength: 15
                },
                errorMessage: "Maximum length is 15",
                valid: false,
                touched: false
            },
            lastname: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Last Name"
                },
                value: "",
                validation: {
                    required: false,
                    maxLength: 15
                },
                errorMessage: "Maximum length is 15",
                valid: false,
                touched: false
            },
            birthdate: {
                elementType: "date",
                elementConfig: {
                    type: "date",
                    placeholder: "Birth date"
                },
                value: "",
                validation: {
                    required: false
                },
                errorMessage: "",
                valid: false,
                touched: false
            },
            city: {
                elementType: "text",
                elementConfig: {
                    type: "text",
                    placeholder: "City"
                },
                value: "",
                validation: {
                    required: false
                },
                errorMessage: "",
                valid: false,
                touched: false
            },
            Address: {
                elementType: "text",
                elementConfig: {
                    type: "text",
                    placeholder: "Address"
                },
                value: "",
                validation: {
                    required: false
                },
                errorMessage: "",
                valid: true,
                touched: true
            },
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
    inputChangedHandler = (event, inputIdentifier) => {
        const updatededitProfileForm = {
            ...this.state.editProfileForm
        };
        const updatedFormElement = {
            ...updatededitProfileForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatededitProfileForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatededitProfileForm) {
            formIsValid = updatededitProfileForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ editProfileForm: updatededitProfileForm, formIsValid: formIsValid });
    };
    checkValidity(value, rules) {
        let isValid = true;

        if (rules.startLetter) {
            isValid = !!value.match(/^[a-zA-Z][a-zA-Z_0-9]*$/) && isValid;
        }
        if (rules.email) {
            isValid =
                !!value.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) && isValid;
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
        if (rules.matching) {
            isValid = value === this.state.editProfileForm.password.value && isValid;
        }

        return isValid;
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.editProfileForm) {
            formElementsArray.push({
                id: key,
                config: this.state.editProfileForm[key]
            });
        }
        return (<div className="Body">

            <div className="jumbotron jumbotron-fluid editProfilePageCanvas">
                <div className="container">
                    <form onSubmit={this.submitHandler} className="editProfileBox">
                        <h3 className="editProfileHeader">Edit your profile</h3>
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
                                invalidEmail={this.state.editProfileForm.errorEmail}
                                invalidScreenname={this.state.errorScreenname}
                                invalidLenScreenname={this.state.editProfileForm.errorLenScreenname}
                            />
                        ))}
                        <div className="form-group" >
                            <select required={true} className="InputElement">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                        </div>

                        <Button
                            className="btn btn-primary editProfileButton"
                        //onClick={this.passwordHandler}
                        // disabled={!this.state.formIsValid}
                        >
                            Done
                    </Button>
                    </form></div>

            </div>
        </div >)
    }
}

export default EditProfile