import React, { Component } from 'react'
// import { connect } from 'react-redux'
import "./BookingSeats.css";
class BookingSeats extends Component {

render() {
    
    return (
        <body >
        <h1>Theatre Seat Selection</h1>
        <div class="container">
    
            <div class="w3ls-reg">

            <div class="inputForm">
                <h2>fill the required details below and select your seats</h2>
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
                        <td> </td>
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
                            <input type="checkbox" class="seats" value="A1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A5"/>
                        </td>
                        <td class="seatGap"></td>
                        <td>
                            <input type="checkbox" class="seats" value="A6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="A12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>B</td>
                        <td>
                            <input type="checkbox" class="seats" value="B1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="B6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="B12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>C</td>
                        <td>
                            <input type="checkbox" class="seats" value="C1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="C6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="C12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>D</td>
                        <td>
                            <input type="checkbox" class="seats" value="D1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="D6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="D12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>E</td>
                        <td>
                            <input type="checkbox" class="seats" value="E1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="E6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="E12"/>
                        </td>
                    </tr>

                    <tr class="seatVGap"></tr>

                    <tr>
                        <td>F</td>
                        <td>
                            <input type="checkbox" class="seats" value="F1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="F6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="F12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>G</td>
                        <td>
                            <input type="checkbox" class="seats" value="G1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="G6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="G12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>H</td>
                        <td>
                            <input type="checkbox" class="seats" value="H1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="H6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="H12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>I</td>
                        <td>
                            <input type="checkbox" class="seats" value="I1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="I6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="I12"/>
                        </td>
                    </tr>

                    <tr>
                        <td>J</td>
                        <td>
                            <input type="checkbox" class="seats" value="J1"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J2"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J3"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J4"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J5"/>
                        </td>
                        <td></td>
                        <td>
                            <input type="checkbox" class="seats" value="J6"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J7"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J8"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J9"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J10"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J11"/>
                        </td>
                        <td>
                            <input type="checkbox" class="seats" value="J12"/>
                        </td>
                    </tr>
                </table>
            
              <br/>
                <button>
                            Confirm Selection
                            </button>
    </div>
    </div>
    </div>
    </body>

        )
    }
}
export default BookingSeats