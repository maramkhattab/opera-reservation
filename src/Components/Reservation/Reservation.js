import React from "react";

class Reservation extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className="container">
                <div className="row smallDiv">
                    <div className="col-md-12">Omar Khairat</div>
                </div>
                <div className="row">
                    <div className="col-md-4 largeDiv"><img src="C:\Users\Maram\Desktop\Barcelona\IMG_1492.JPG" /></div>
                    <div className="col-md-8">
                        <div class="smallDiv" >Date</div>
                        <div class="smallDiv" >Hall number</div>
                        <div class="smallDiv" > number of tickets</div>
                    </div>
                </div>

            </div>

        );
    }
}


export default Reservation;
