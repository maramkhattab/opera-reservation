
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import "./login.css";
class Login extends Component {
    render() {
        return (
            <div className="Body">

                <div className="jumbotron jumbotron-fluid PageCanvas">
                    <div className="container">
                        <form className="loginBox" >
                            <h3 className="headerText">Log in to Opera house reservation portal</h3>
                            <div className="form-group">

                                <input
                                    className="form-control inputFields"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter username"
                                    autoFocus

                                />

                            </div>

                            <br />
                            <div className="form-group">
                                <input
                                    type="password"
                                    style={{ marginBottom: "25px" }}
                                    className="form-control inputFields"
                                    id="exampleInputPassword1"
                                    placeholder="Password"

                                />


                            </div>
                            <button
                                type="submit"

                                className="btn btn-primary loginButton"
                            >
                                Log in
                  </button>

                        </form>
                    </div>
                    <div className="downDiv">
                        <p className="text-sm-left downText">
                            New to Opera house?{" "}
                            <a className="Links" href="/signup">
                                Sign up now..
                  </a>
                        </p>
                        <p className="text-sm-left downText">
                            Need to know more{" "}
                            <a
                                className="Links"
                                href="https://about.twitter.com/en_us.html"
                            >
                                About us
                  </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login