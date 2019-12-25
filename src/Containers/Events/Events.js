import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./Events.css";
import Reservation from "../../Components/Reservation/Reservation";
import Event from  "../../Components/Event/Event";




class Events extends Component {

    render() {
        return (
            <div className="Body">
                <NavBar />
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="page-content-wrapper">
                        <h1> Cairo Opera House upcoming events </h1>
                        
                        <Event eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventTime="Event time: 3" eventHall={"Hall number:5"} eventDescription={"Hall description:omar khairat"}  />
                       
                    </div>
                   
                </div>
            </div>

        )

    }

}
export default Events;
