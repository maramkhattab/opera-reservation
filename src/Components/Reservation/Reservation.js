import React from "react";

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelButton: ""
        }


    }
    componentWillMount() {
        var eventDay = Date.parse(this.props.eventDate);
        console.log(eventDay)
        var today = new Date()
        var diffTime = Math.abs(eventDay - today);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays)
        if (diffDays > 3) {
            var cancelButton = (<p className="card-text"><button className="btn btn-danger"> Cancel reservation</button></p>);
            this.setState({ cancelButton: cancelButton })
        }

    }

    render() {

        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <p className="card-text"><img style={{ margin: "0px", textAlign: "center", display: "inline-block" }} src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" /></p>
                        <h4 className="card-title"> {this.props.eventName} </h4>
                        <p className="card-text"> Date: {this.props.eventDate}</p>
                        <p className="card-text"> Time: {this.props.eventTime}</p>
                        <p className="card-text">Hall number:{this.props.eventHall}</p>
                        <p className="card-text">Number of tickets: {this.props.eventTicketsCount}</p>
                        <br />
                        {/* <p className="card-text"><button className="btn btn-danger"> Cancel reservation</button></p> */}
                        {this.state.cancelButton}
                    </div>
                </div>
            </div >


        );
    }
}


export default Reservation;
