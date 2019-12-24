import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./OperaManagement.css";
import Reservation from "../../Components/Reservation/Reservation";
import CreateEvent from "../CreateEvent/CreateEvent";
import CreateHall from "../CreateHall/CreateHall";




class OperaManagement extends Component {
    state = {
        pageContent: (<div className="container widthadjust">
            <div className="profilecontainer ">


                <Reservation eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventHall={"Hall number:5"} eventTicketsCount="Number of tickets: 3" />

            </div>
        </div>)
    }
    sidebarHandler = (event, choice) => {
        if (choice == "createEvent") {
            var pageContent = (<div className="container widthadjust">
                <div className="profilecontainer ">


                    <CreateEvent />
                </div>
            </div>)
            this.setState({ pageContent: pageContent })
        }
        else
            if (choice == "createHall") {
                var pageContent = (<div className="container widthadjust">
                    <div className="profilecontainer ">


                        <CreateHall />
                    </div>
                </div>)
                this.setState({ pageContent: pageContent })
            }
            else if (choice == "Events") {
                var pageContent = (
                    <div className="container widthadjust">
                        <div className="profilecontainer ">


                            <Reservation eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventHall={"Hall number:5"} eventTicketsCount="Number of tickets: 3" />
                            <Reservation eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventHall={"Hall number:5"} eventTicketsCount="Number of tickets: 3" />

                        </div>
                    </div>

                )
                this.setState({ pageContent: pageContent })
            }

    }
    render() {
        return (
            <div className="Body">
                <NavBar />
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        {/* <div className="sidebar-heading">Welcome back!</div> */}
                        <div className="list-group list-group-flush">
                            <a href="#" onClick={event => this.sidebarHandler(event, "Events")} className="list-group-item list-group-item-action bg-light">Events</a>
                            <a href="#" onClick={event => this.sidebarHandler(event, "createEvent")} className="list-group-item list-group-item-action bg-light">Create a new event</a>
                            <a href="#" onClick={event => this.sidebarHandler(event, "createHall")} className="list-group-item list-group-item-action bg-light">Create a new hall</a>

                        </div>
                    </div>
                    <div id="page-content-wrapper">
                        {this.state.pageContent}
                    </div>
                </div>
            </div>

        )

    }

}
export default OperaManagement;
