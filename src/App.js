import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import EditProfile from "./Containers/EditProfile/EditProfile";
import Profile from "./Containers/Profile/Profile";
import Events from "./Containers/Events/Events";
import Admin from "./Containers/Admin/Admin";
import OperaManagement from "./Containers/OperaManagement/OperaManagement";
import Reservation from "./Components/Reservation/Reservation";
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
          <Route exact path="/bookingseats/:eventKey" component={BookingSeats} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/" exact component={LandingPage} />


          {/* <Route path="/" exact component={LandingPage} />
            
            <Route exact path="/profile/:screenName" component={Profile} /> */}

          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/management" component={OperaManagement} />
          <Route exact path="/Reservation" component={Reservation} />
          <Route exact path="/createevent" component={CreateEvent} />
          <Route exact path="/createhall" component={CreateHall} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;



