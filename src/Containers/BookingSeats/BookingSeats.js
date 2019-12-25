import React, { Component } from 'react'
// import { connect } from 'react-redux'
import axios from "../../axios-users"
import "./BookingSeats.css";
class BookingSeats extends Component {
    constructor(props) {
        super(props);
    this.state = {
        bookedseats:[],
        row:3,
        col:3

    };
}





onChangeHandler= (event,value) => {
    console.log("m");
    var bookedseats = this.state.bookedseats;
    bookedseats.push(value)
    this.setState({ bookedseats: bookedseats })
    console.log(bookedseats);
  };

submitHandler = event => {

        event.preventDefault();
       
        var userid
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[
                formElementIdentifier
            ].value;
        }
        var eventid=this.props.match.params.eventKey
        console.log(eventid)
        var token = localStorage.getItem("jwtToken");
        // var jwt = require('jsonwebtoken');
        // var decode = jwt.decode(token)
        console.log(token)
        axios({
            method: 'get',
            url: '/api/users/getUser',
            headers: { Authorization: token }
        })
            .then(response => {
                var user = response.data;
                userid=response.data.id
                console.log(userid)
                var n=this.state.bookedseats.length
        for (var i=0;i<n;i++)
        {
            console.log(this.state.bookedseats[i])
        var body = {

            number:this.state.bookedseats[i].toString(),
            eventid:eventid,
            dataValues:userid
            
           
           

        }
    

        axios({
            method: 'post',
            url: '/api/seats/reserveSeat',
            data: body,
            headers: {
                Authorization:  token,

            }
        })
            .then(response => {
                console.log(response)
           
          
            })
            .catch(function (error) {
                console.log(error);
            });
        }
            })
            
        .catch(function (error) {
                console.log(error);
            });


        


    };


render() {
    
    return (
        
        <div  className="bodybooking">
        <div className="h11">Theatre Seat Selection</div>
        <div class="containerr">
            <div class="w3ls-reg">
            <div class="inputForm">
                <div className="h22">fill the required details below and select your seats</div>
                <div class="mr_agilemain">
                    <div class="agileits-left">
                        <label> Credit Card Number
                            <span>*</span>
                        </label>
                        <input type="number" id="Creditcardnumber" required/>
                    </div>
                    <div class="agileits-center">
                        <label> Credit Card Pin
                            <span>*</span>
                        </label>
                        <input type="number" id="Creditcardpin" required/>
                    </div>
                    <div class="agileits-right">
                        <label> Number of Seats
                            <span>*</span>
                        </label>
                        <input type="number" id="Numseats" required min="1"/>
                    </div>
                </div>
    
            </div>
            <ul class="seat_w3ls">
                <li class="smallBox greenBox">Selected Seat</li>

                <li class="smallBox redBox">Reserved Seat</li>

                <li class="smallBox emptyBox">Empty Seat</li>
            </ul>
        <div class="seatStructure txt-center"  >
         
               <table id="seatsBlock">
                  
               <tr>
                        <td> </td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>

                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>
                            <input type="checkbox" class="seats" value="A1"  onChange={event => this.onChangeHandler(event, "A1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A2"  onChange={event => this.onChangeHandler(event, "A2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A3" onChange={event => this.onChangeHandler(event, "A3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A4" onChange={event => this.onChangeHandler(event, "A4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A5" onChange={event => this.onChangeHandler(event, "A5")}/>
                        </td>
                        <td class="seatGap"></td>
                        <td>
                            <input type="checkbox" class="seats" value="A6" onChange={event => this.onChangeHandler(event, "A6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A7" onChange={event => this.onChangeHandler(event, "A7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A8" onChange={event => this.onChangeHandler(event, "A8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A9" onChange={event => this.onChangeHandler(event, "A9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A10" onChange={event => this.onChangeHandler(event, "A10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A11" onChange={event => this.onChangeHandler(event, "A11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A12" onChange={event => this.onChangeHandler(event, "A12")}/>
                        </td>
                    </tr>

                    <tr>
                        <td>B</td>
                        <td>
                            <input type="checkbox" class="seats" value="B1" onChange={event => this.onChangeHandler(event, "B1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B2" onChange={event => this.onChangeHandler(event, "B2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B3" onChange={event => this.onChangeHandler(event, "B3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B4" onChange={event => this.onChangeHandler(event, "B4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B5" onChange={event => this.onChangeHandler(event, "B5")}/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="B6" onChange={event => this.onChangeHandler(event, "B6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B7" onChange={event => this.onChangeHandler(event, "B7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B8" onChange={event => this.onChangeHandler(event, "B8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B9" onChange={event => this.onChangeHandler(event, "B9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B10" onChange={event => this.onChangeHandler(event, "B10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B11"onChange={event => this.onChangeHandler(event, "B11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B12" onChange={event => this.onChangeHandler(event, "B12")}/>
                        </td>
                    </tr>

                    <tr>
                        <td>C</td>
                        <td>
                            <input type="checkbox" class="seats" value="C1" onChange={event => this.onChangeHandler(event, "C1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C2" onChange={event => this.onChangeHandler(event, "C2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C3" onChange={event => this.onChangeHandler(event, "C3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C4" onChange={event => this.onChangeHandler(event, "C4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C5" onChange={event => this.onChangeHandler(event, "C5")}/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="C6" onChange={event => this.onChangeHandler(event, "C6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C7" onChange={event => this.onChangeHandler(event, "C7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C8" onChange={event => this.onChangeHandler(event, "C8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C9" onChange={event => this.onChangeHandler(event, "C9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C10" onChange={event => this.onChangeHandler(event, "C10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C11" onChange={event => this.onChangeHandler(event, "C11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C12" onChange={event => this.onChangeHandler(event, "C12")}/>
                        </td>
                    </tr>

                    <tr>
                        <td>D</td>
                        <td>
                            <input type="checkbox" class="seats" value="D1" onChange={event => this.onChangeHandler(event, "D1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D2" onChange={event => this.onChangeHandler(event, "D2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D3"onChange={event => this.onChangeHandler(event, "D3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D4"onChange={event => this.onChangeHandler(event, "D4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D5"onChange={event => this.onChangeHandler(event, "D5")}/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="D6" onChange={event => this.onChangeHandler(event, "D6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D7"onChange={event => this.onChangeHandler(event, "D7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D8"onChange={event => this.onChangeHandler(event, "D8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D9"onChange={event => this.onChangeHandler(event, "D9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D10"onChange={event => this.onChangeHandler(event, "D10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D11"onChange={event => this.onChangeHandler(event, "D11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D12"onChange={event => this.onChangeHandler(event, "D12")}/>
                        </td>
                    </tr>

                    <tr>
                        <td>E</td>
                        <td>
                            <input type="checkbox" class="seats" value="E1"onChange={event => this.onChangeHandler(event, "E1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E2"onChange={event => this.onChangeHandler(event, "E2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E3" onChange={event => this.onChangeHandler(event, "E3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E4"onChange={event => this.onChangeHandler(event, "E4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E5"onChange={event => this.onChangeHandler(event, "E5")}/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="E6"onChange={event => this.onChangeHandler(event, "E6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E7"onChange={event => this.onChangeHandler(event, "E7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E8"onChange={event => this.onChangeHandler(event, "E8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E9"onChange={event => this.onChangeHandler(event, "E9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E10"onChange={event => this.onChangeHandler(event, "E10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E11"onChange={event => this.onChangeHandler(event, "E11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E12" onChange={event => this.onChangeHandler(event, "E12")}/>
                        </td>
                    </tr>


                    <tr>
                        <td>F</td>
                        <td>
                            <input type="checkbox" class="seats" value="F1" onChange={event => this.onChangeHandler(event, "F1")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F2" onChange={event => this.onChangeHandler(event, "F2")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F3" onChange={event => this.onChangeHandler(event, "F3")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F4" onChange={event => this.onChangeHandler(event, "F4")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F5" onChange={event => this.onChangeHandler(event, "F5")}/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="F6" onChange={event => this.onChangeHandler(event, "F6")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F7" onChange={event => this.onChangeHandler(event, "F7")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F8" onChange={event => this.onChangeHandler(event, "F8")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F9" onChange={event => this.onChangeHandler(event, "F9")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F10" onChange={event => this.onChangeHandler(event, "F10")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F11" onChange={event => this.onChangeHandler(event, "F11")}/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F12" onChange={event => this.onChangeHandler(event, "F12")}/>
                        </td>
                    </tr>

                   
                 
                </table>
            
              <br/>
                <button 
                type="submit"
                onClick={this.submitHandler}
                className="btn btn-primary loginButton" >
                            Confirm Selection
                            </button>
    </div>
    </div>
    </div>
    </div>

        )
    }
}
export default BookingSeats