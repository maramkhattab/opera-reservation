import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "../../axios-users"
import "./Admin.css";
import Users from "../../Components/Users/Users";
import Requests from "../../Components/Requests/Requests";
import EditProfile from "../EditProfile/EditProfile";
import Approve from "../EditProfile/EditProfile";




class Admin extends Component {
    state = {
        pageContent: (<div className="container widthadjust">
            <div className="profilecontainer ">

            </div>
        </div>)
    }
    sidebarHandler = (event, choice) => {
        if (choice == "requests") {
            var token = localStorage.getItem("jwtToken");
            // var jwt = require('jsonwebtoken');
            // var decode = jwt.decode(token)
            console.log(token)
            axios({
                method: 'get',
                url: '/api/request/getAllRequests',
                headers: { Authorization: token }
            })
                .then(response => {


                    console.log(response.data)
                    var pageContent = (
                        <div className="container widthadjust">
                            <div className="profilecontainer ">
                                {response.data.map(user => (

                                    <Requests key={user.id} Username={user.username} Email={user.email} Authority={user.role} />

                                ))}


                            </div>
                        </div>

                    )
                    this.setState({ pageContent: pageContent })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (choice == "users") {
            var token = localStorage.getItem("jwtToken");
            // var jwt = require('jsonwebtoken');
            // var decode = jwt.decode(token)
            console.log(token)
            axios({
                method: 'get',
                url: '/api/users/getAll',
                headers: { Authorization: token }
            })
                .then(response => {

                    console.log(response.data)
                    var pageContent = (
                        <div className="container widthadjust">
                            <div className="profilecontainer ">
                                {response.data.map(user => (

                                    <Users key={user.id} Username={user.username} Email={user.email} firstname={user.firstname} lastname={user.lastname} Authority={user.role} />

                                ))}


                            </div>
                        </div>

                    )
                    this.setState({ pageContent: pageContent })

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    componentWillMount() {
        var token = localStorage.getItem("jwtToken");
        // var jwt = require('jsonwebtoken');
        // var decode = jwt.decode(token)
        console.log(token)
        axios({
            method: 'get',
            url: '/api/users/getAll',
            headers: { Authorization: token }
        })
            .then(response => {

                console.log(response.data)
                var pageContent = (
                    <div className="container widthadjust">
                        <div className="profilecontainer ">
                            {response.data.map(user => (

                                <Users key={user.id} Username={user.username} Email={user.email} firstname={user.firstname} lastname={user.lastname} Authority={user.role} />

                            ))}


                        </div>
                    </div>

                )
                this.setState({ pageContent: pageContent })

            })
            .catch(function (error) {
                console.log(error);
            });

    }
    render() {
        return (
            <div className="Body">
                <NavBar />
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading">Welcome back!</div>
                        <div className="list-group list-group-flush">
                            <a href="#" onClick={event => this.sidebarHandler(event, "users")} className="list-group-item list-group-item-action bg-light">Available users</a>
                            <a href="#" onClick={event => this.sidebarHandler(event, "requests")} className="list-group-item list-group-item-action bg-light">Review Requests</a>

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
export default Admin;
