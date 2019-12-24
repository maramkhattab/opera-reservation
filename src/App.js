import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import EditProfile from "./Containers/EditProfile/EditProfile";
import CreateEvent from "./Containers/CreateEvent/CreateEvent";
import CreateHall from "./Containers/CreateHall/CreateHall";
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from "./Components/UI/LandingPage/LandingPage";

import BookingSeats from "./Containers/BookingSeats/BookingSeats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/bookingseats" component={BookingSeats} />
          <Route path="/" exact component={LandingPage}/>
          
          
          {/* <Route path="/" exact component={LandingPage} />
            
            <Route exact path="/profile/:screenName" component={Profile} /> */}

          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/createevent" component={CreateEvent} />
          <Route exact path="/createhall" component={CreateHall} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
