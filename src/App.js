import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />
          {/* <Route path="/" exact component={LandingPage} />
            
            <Route exact path="/profile/:screenName" component={Profile} />
            
            <Route exact path="/editprofile" component={EditProfile} /> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
