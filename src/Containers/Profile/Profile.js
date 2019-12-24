import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./Profile.css";
import Reservation from "../../Components/Reservation/Reservation";
import EditProfile from "../EditProfile/EditProfile";




class Profile extends Component {
    state = {
        pageContent: (<div className="container widthadjust">
            <div className="profilecontainer ">


                <Reservation eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventHall={"Hall number:5"} eventTicketsCount="Number of tickets: 3" />

            </div>
        </div>)
    }
    sidebarHandler = (event, choice) => {
        if (choice == "edit") {
            var pageContent = (<div className="container widthadjust">
                <div className="profilecontainer ">


                    <EditProfile />
                </div>
            </div>)
            this.setState({ pageContent: pageContent })
        }
        else if (choice == "reservation") {
            var pageContent = (
                <div className="container widthadjust">
                    <div className="profilecontainer ">


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
                        <div className="sidebar-heading">Welcome back!</div>
                        <div className="list-group list-group-flush">
                            <a href="#" onClick={event => this.sidebarHandler(event, "reservation")} className="list-group-item list-group-item-action bg-light">Reservations</a>
                            <a href="#" onClick={event => this.sidebarHandler(event, "edit")} className="list-group-item list-group-item-action bg-light">Edit profile</a>

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
export default Profile;
