import React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h4 className="card-title"> {this.props.Username} </h4>
                        <p className="card-text"> {this.props.Email}</p>
                        <p className="card-text"> {this.props.Address}</p>
                    </div>
                </div>
            </div >


        );
    }
}


export default Users;
