import React from "react";

class Requests extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h2 className="card-title"> {this.props.Username} </h2>
                        <p className="card-text"> {this.props.Email}</p>
                        <p className="card-text">{this.props.Authority}</p>
                        <button
                                type="submit"
                                className="btn btn-primary loginButton"
                            >
                                Accept
                             </button>
                             <button
                                type="submit"
                                className="btn btn-primary loginButton"

                            >
                                Decline
                             </button>
                    </div>
                </div>
            </div >


        );
    }
}


export default Requests;
