import React from "react";
import axios from "../../axios-users"
class Users extends React.Component {

    state = {
        pageContent: (<div>

        </div>),
        role: ""
    }
    delclickHandler=(event)=>{
        console.log("heello")
        var token=localStorage.getItem("jwtToken");
        var body={
            username:this.props.Username
        }
        axios({
            method: 'post',
            url: '/api/users/deleteAccount',
            data: body,
            headers: {
                Authorization:  token,

            }
        })
            .then(response => {
                console.log(response)
           
          
            })
            .catch(function (error) {
                console.log(error);
            });
        
            
    }

    clickHandler = (event, choice) => {
        console.log("m");
        var pageContent = (


            <div className="form-group" >
                <select required={true} className="InputElement">
                    <option value="Customer">Customer</option>
                    <option value="Opera Management">Opera Management</option>

                </select>
            </div>

        )
        this.setState({ pageContent: pageContent })

    }
    componentWillMount() {
        if (this.props.role == 0) {
            this.setState({ role: (<p className="card-text"> Role:Admin</p>) })
        }
        else if (this.props.role == 1) {
            this.setState({ role: (<p className="card-text"> Role:Customer</p>) })
        }
        else if (this.props.role == 2) {
            this.setState({ role: (<p className="card-text"> Role:Manager</p>) })
        }

    }

    render() {
        var roles = ["admin", "customer", "manager"]
        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h4 className="card-title"> Username: {this.props.Username} </h4>
                        <p className="card-text"> Email: {this.props.Email}</p>
                        <p className="card-text">Name: {this.props.firstname} </p>
                        <p className="card-text"> Role:{roles[this.props.Authority]}</p>

                        <button
                            type="submit"
                            className="btn btn-primary logButton"
                            onClick={event => this.delclickHandler()}
                        >
                            Delete
                             </button>

                        <button onClick={event => this.clickHandler()}
                            className="btn btn-primary logButton"
                        >
                            Authority
                             </button>
                        <div>
                            {this.state.pageContent}
                        </div>
                    </div>
                </div>
            </div >


        );
    }
}


export default Users;
