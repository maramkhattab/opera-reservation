import React, { Component } from "react";
//import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/NavBar";

import "./Events.css";
import Reservation from "../../Components/Reservation/Reservation";
import Event from "../../Components/Event/Event";
import axios from "../../axios-users"



class Events extends Component {
    state = {
        pageContent: ""
    }
    componentWillMount() {
        axios({
            method: 'get',
            url: '/api/events/getAllEvents',

        })
            .then(response => {
                var pageContent = (
                    <div className="container widthadjust">
                        <div className="profilecontainer ">


                            {response.data.map(hafla => (

                                < Event key={hafla.id} eventName={hafla.name} eventDate={hafla.date} eventHall={hafla.Hallid} eventDescription={hafla.description} />
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
                    <div className="bg-light border-right" id="page-content-wrapper">
                        <h1> Cairo Opera House upcoming events </h1>
                        {this.state.pageContent}
                        {/* <Event eventName={"Omar Khairat's concert"} eventDate={"Date: 27/12/2019"} eventTime="Event time: 3" eventHall={"Hall number:5"} eventDescription={"Hall description:omar khairat"} /> */}

                    </div>

                </div>
            </div>

        )

    }

}
export default Events;
