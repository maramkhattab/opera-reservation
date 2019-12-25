import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./Admin.css";
import Users from "../../Components/Users/Users";
import Requests from "../../Components/Requests/Requests";
import EditProfile from "../EditProfile/EditProfile";
import Approve from "../EditProfile/EditProfile";




class Admin extends Component {
    state = {
        pageContent: (<div className="container widthadjust">
            <div className="profilecontainer ">


                <Users Username={"Mirna Hatem"} Email={"mirnahatem@gmail.com"} ddress={"El Sheikh Zayed"} />

            </div>
        </div>)
    }
    sidebarHandler = (event, choice) => {
        if (choice == "requests") {
            var pageContent = (<div className="container widthadjust">
                <div className="profilecontainer ">

                <Requests Username={"Mirna Hatem"} Email={"mirnahatem@gmail.com"} Authority={"Customer"}  />
                </div>
            </div>)
            this.setState({ pageContent: pageContent })
        }
        else if (choice == "users") {
            var pageContent = (
                <div className="container widthadjust">
                    <div className="profilecontainer ">
                    <Users Username={"Mirna Hatem"} Email={"mirnahatem@gmail.com"}  Address={"El Sheikh Zayed"} />
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
