import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./Profile.css";




class Profile extends Component {

    render() {
        return (
            <div className="Body">
                <NavBar />
                <div className="container widthadjust">
                    <div className="profilecontainer ">
                        <div className="profile">
                            Welcome Back!
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
export default Profile;
