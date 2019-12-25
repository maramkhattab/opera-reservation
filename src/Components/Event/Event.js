import React from "react";

class Event extends React.Component {
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
                        <p className="card-text"> {this.props.eventDate}</p>
                        <p className="card-text"> {this.props.eventTime}</p>
                        <p className="card-text">{this.props.eventHall}</p>
                        <p className="card-text"> {this.props.eventDescription}</p>
                    </div>
                </div>
            </div >


        );
    }
}


export default Event;
