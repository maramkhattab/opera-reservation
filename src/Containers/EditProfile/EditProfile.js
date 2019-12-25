import React, { Component } from "react";
import "./EditProfile.css";
import Button from "../../Components/UI/button//button";
import Input from "../../Components/UI/Input/Input";
import axios from "../../axios-users"
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
                value: this.props.firstname,
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
                value: this.props.lastname,
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
                value: this.props.birthdate,
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
                value: this.props.city,
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
        gender: this.props.gender,
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
    genderChanged = (event) => {
        var gender = 0;
        if (event.target.value == "Female") {
            gender = 1;
        }
        else if (event.target.value == "Male") {
            gender = 0;
        }

        this.setState({ gender: gender });

    }
    submitHandler = event => {

        event.preventDefault();
        // this.setState({ loading: true });
        // const formData = {};
        // for (let formElementIdentifier in this.state.signupForm) {
        //     formData[formElementIdentifier] = this.state.signupForm[
        //         formElementIdentifier
        //     ].value;
        // }

        // const user = {

        // };

        var body = {
            password: this.state.editProfileForm.password.value.toString(),
            firstname: this.state.editProfileForm.firstname.value.toString(),
            lastname: this.state.editProfileForm.lastname.value.toString(),
            city: this.state.editProfileForm.city.value.toString(),
            address: this.state.editProfileForm.Address.value.toString(),
            birthdate: this.state.editProfileForm.birthdate.value.toString(),
            gender: this.state.gender,
        }
        var token = localStorage.getItem("jwtToken");
        axios({
            method: 'post',
            url: '/api/users/updateUser',
            data: body,
            headers: { Authorization: token }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    };
    render() {
        const formElementsArray = [];
        for (let key in this.state.editProfileForm) {
            formElementsArray.push({
                id: key,
                config: this.state.editProfileForm[key]
            });
        }
        return (

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
                    <select required={true} className="InputElement" onChange={this.genderChanged}>
                        <option value="Male" selected={!this.props.gender}>Male</option>
                        <option value="Female" selected={this.props.gender} > Female</option>

                    </select>
                </div>

                <Button
                    className="btn btn-primary editProfileButton"
                //onClick={this.passwordHandler}
                // disabled={!this.state.formIsValid}
                >
                    Done
                    </Button>
            </form>
            //             </div>

            //     </div>
            // </div >)
        )
    }
}

export default EditProfile