import React from "react";
import axios from "../../axios-users"
import {Redirect} from 'react-router'
class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            button:"",
            redirect:false
        }
    }
    clickHandler=(event,key)=>{
        // this.props.history.push({ pathname: "/bookingseats" },
         
        //     { key1: key })
        console.log("hello")
        this.setState({redirect:true})
    }
    componentWillMount(){
        var token = localStorage.getItem("jwtToken");
        if (token){
            var button=(<button onClick={()=>this.clickHandler(this.props.eventID)} className="btn btn-primary">Reserve</button>)
            this.setState({button:button})
        }
        if (this.state.redirect){
            var path="/bookingseats"+this.props.eventID.toString()
            return<Redirect to={path}/>
        }
    }
    render() {

        if (this.state.redirect){
            var path="/bookingseats/"+this.props.eventID.toString()
            return<Redirect to={path}/>
        }
      
        return (
            <div className="container-fluid mt-4">
                <div  className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <p classNAme="card-text"><img style={{ margin: "0px", textAlign: "center", display: "inline-block" }} src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" /></p>
                        <h4 className="card-title"> {this.props.eventName} </h4>
                        <p className="card-text"> Date: {this.props.eventDate}</p>
                        <p className="card-text"> Time:{this.props.eventTime}</p>
                        <p className="card-text">Hall number:{this.props.eventHall}</p>
                        <p className="card-text"> {this.props.eventDescription}</p>
                         <p className="card-text">{ this.state.button}</p>
                    </div>
                </div>
            </div >


        );
    }
}


export default Event;
