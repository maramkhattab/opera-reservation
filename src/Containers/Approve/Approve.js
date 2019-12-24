import React, { Component } from 'react'
import "./Approve.css";
import NavBar from "../../Components/NavBar/NavBar";

class Approve extends Component {


    render() {
        
        return (
            <div >
                <NavBar/>
                <div className="jumbotron jumbotron-fluid PageCanvas">
                <div className="container">
                <form className="loginBox" >
                <h3 className="headerText"> Please Approve the user</h3>
                    <div className="k">
                    <div className="hh">Username:</div>
                    <div className="hk">mirna</div>
                    </div>
                    <div className="k">
                    <div className="hh">Screenname:</div>
                    <div className="hk">mirna</div>
                    </div>
                    <div className="k">
                    <div className="hh">Email:</div>
                    <div className="hk">mirnahatem@gmail.com</div>
                    </div>
                    <div className="k">
                    <div className="hh">Email:</div>
                    <div className="hk">mirnahatem@gmail.com</div>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Approve