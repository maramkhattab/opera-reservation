import React from "react";

class Users extends React.Component {
  
    state = {
        pageContent: (<div>
            
        </div>)
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

    render() {

        return (
            <div className="container-fluid mt-4">
                <div className="card" style={{ textAlign: "center", width: "inherits", maxHeight: "72rem", minHeight: "5rem", alignContent: "center" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h4 className="card-title"> {this.props.Username} </h4>
                        <p className="card-text"> {this.props.Email}</p>
                        <p className="card-text"> {this.props.Address}</p>
                        <p className="card-text"> {this.props.Authority}</p>
                        <button
                                type="submit"
                                className="btn btn-primary logButton"
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
