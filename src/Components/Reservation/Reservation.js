import React from "react";

class Reservation extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <p classNAme="card-text"><img style={{ margin: "0px", textAlign: "center", display: "inline-block" }} src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" /></p>
                        <h4 className="card-title"> {this.props.eventName} </h4>
                        <p className="card-text"> Date: {this.props.eventDate}</p>
                        <p className="card-text"> Time: {this.props.eventTime}</p>
                        <p className="card-text">Hall number:{this.props.eventHall}</p>
                        <p className="card-text">Number of tickets: {this.props.eventTicketsCount}</p>
                        <br />
                        <p className="card-text"><button className="btn btn-danger"> Cancel reservation</button></p>
                    </div>
                </div>
            </div >


        );
    }
}


export default Reservation;
