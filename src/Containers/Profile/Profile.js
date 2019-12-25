import React, { Component } from "react";
//imp`ort { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "../../axios-users"
import "./Profile.css";
import Reservation from "../../Components/Reservation/Reservation";
import EditProfile from "../EditProfile/EditProfile";




class Profile extends React.Component {
    componentDidMount() {

    }

    state = {
        pageContent: (<div className="container widthadjust">
            <div className="profilecontainer ">


                <Reservation eventName={"Omar Khairat's concert"} eventDate={"12-29-2019"} eventTime={"19:00"} eventHall={"5"} eventTicketsCount=" 3" />

            </div>
        </div>)
    }
    sidebarHandler = (event, choice) => {
        if (choice == "edit") {
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
                    console.log(user)
                    var pageContent = (<div className="container widthadjust">
                        <div className="profilecontainer ">
                            <EditProfile city={user.city} gender={user.gender} firstname={user.firstname} lastname={user.lastname} address={user.address} birthdate={user.birthdate} />
                        </div>
                    </div>)
                    this.setState({ pageContent: pageContent })
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
        else if (choice == "reservation") {
            var pageContent = (
                <div className="container widthadjust">
                    <div className="profilecontainer ">
                        <Reservation eventName={"Omar Khairat's concert"} eventDate={"27/12/2019"} eventHall={"5"} eventTicketsCount=" 3" />

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
