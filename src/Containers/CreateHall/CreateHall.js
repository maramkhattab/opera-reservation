import React, { Component } from "react";
import "./CreateHall.css";
import Button from "../../Components/UI/button//button";
import Input from "../../Components/UI/Input/Input";

class CreateHall extends Component {

    state = {
        createHallForm: {

            hallnumber: {
                elementType: "input",
                elementConfig: {
                    type: "number",
                    placeholder: "Hall number"
                },
                value: "",
                validation: {
                    required: true,
                    // nospace: true,
                    // maxLength: 15,
                    // startLetter: true
                },
                //errorMessage: "Maximum length is 15",
                errorMessage: "",
                valid: false,
                touched: false
            },


            numberOfRows: {
                elementType: "input",
                elementConfig: {
                    type: "number",
                    placeholder: "Number of rows"
                },
                value: "",
                validation: {
                    required: true,

                },
                errorMessage: "",
                valid: false,
                touched: false
            },

            numberOfColumns: {
                elementType: "number",
                elementConfig: {
                    type: "number",
                    placeholder: "Number of columns"
                },
                value: "",
                validation: {
                    required: true
                },
                errorMessage: "",
                valid: false,
                touched: false
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
        const updatedcreateHallForm = {
            ...this.state.createHallForm
        };
        const updatedFormElement = {
            ...updatedcreateHallForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedcreateHallForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedcreateHallForm) {
            formIsValid = updatedcreateHallForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ createHallForm: updatedcreateHallForm, formIsValid: formIsValid });
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
            isValid = value === this.state.createHallForm.password.value && isValid;
        }

        return isValid;
    }
    onChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onload = e => {
            this.setState({
                file,
                change: true,
                imagePreview: reader.result,

            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        console.log(reader.result);
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.createHallForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createHallForm[key]
            });
        }
        return (
            // <div className="Body">

            //     <div className="jumbotron jumbotron-fluid createHallPageCanvas">
            //         <div className="container">
            <form onSubmit={this.submitHandler} className="createHallBox">
                <h3 className="createHallHeader">Create a new hall</h3>
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
                        invalidEmail={this.state.createHallForm.errorEmail}
                        invalidScreenname={this.state.errorScreenname}
                        invalidLenScreenname={this.state.createHallForm.errorLenScreenname}
                    />
                ))}


                <Button
                    //className="btn btn-primary createHallButton"
                    //onClick={this.passwordHandler}
                    disabled={!this.state.formIsValid}
                >
                    Create
                    </Button>
            </form>
            //             </div>

            //     </div>
            // </div >
        )
    }
}

export default CreateHall