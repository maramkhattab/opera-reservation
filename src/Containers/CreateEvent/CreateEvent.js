import React, { Component } from "react";
import "./CreateEvent.css";
import axios from "../../axios-users"
import Button from "../../Components/UI/button//button";
import Input from "../../Components/UI/Input/Input";
class CreateEvent extends Component {

    state = {
        createEventForm: {

            eventname: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Event name"
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


            hall: {
                elementType: "input",
                elementConfig: {
                    type: "number",
                    placeholder: "Hall number"
                },
                value: "",
                validation: {
                    required: true,

                },
                errorMessage: "",
                valid: false,
                touched: false
            },

            eventdate: {
                elementType: "date",
                elementConfig: {
                    type: "date",
                    placeholder: "Event date"
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
        const updatedcreateEventForm = {
            ...this.state.createEventForm
        };
        const updatedFormElement = {
            ...updatedcreateEventForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedcreateEventForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedcreateEventForm) {
            formIsValid = updatedcreateEventForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ createEventForm: updatedcreateEventForm, formIsValid: formIsValid });
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
            isValid = value === this.state.createEventForm.password.value && isValid;
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
            name:this.state.createEventForm.eventname.value.toString(),
            description:"hahahahahah",
            date:this.state.createEventForm.eventdate.value.toString(),
            starttime:10,
            endtime:11,
            hallnumber:this.state.createEventForm.hall.value

        }

        axios({
            method: 'post',
            url: 'api/events/createEvent',
            data: body
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
        for (let key in this.state.createEventForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createEventForm[key]
            });
        }
        return (
            // <div className="Body">

            //     <div className="jumbotron jumbotron-fluid createEventPageCanvas">
            //         <div className="container">
            <form onSubmit={this.submitHandler} className="createEventBox">
                <h3 className="createEventHeader">Create a new event</h3>
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
                        invalidEmail={this.state.createEventForm.errorEmail}
                        invalidScreenname={this.state.errorScreenname}
                        invalidLenScreenname={this.state.createEventForm.errorLenScreenname}
                    />
                ))}
                <div className="form-group" >
                    <textarea rows="3" cols="25" placeholder="Description" className="InputElement" ></textarea>
                </div>

                <div className="form-group">
                    <img src={this.state.imagePreview} className="image " />
                </div>
                <div className="form-group limitwidth center">
                    <div className="custom-file ">
                        <input
                            type="file"
                            className="custom-file-input InputElement"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={e => this.onChange(e)}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Event poster
                                </label>
                    </div>
                </div>
                <Button
                    //className="btn btn-primary createEventButton"
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

export default CreateEvent