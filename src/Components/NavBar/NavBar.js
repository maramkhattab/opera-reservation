import React from "react";

import "./NavBar.css";
import img from "../../assets/logo.jpg";
const NavBar = props => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light AuthNav">
    <a className="navbar-brand" href="/">
      <img
        className="LogoNavBar"
        src={img}
        alt=""
        height="40"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <strong>Home</strong> <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.cairoopera.org/">
            <strong>About</strong>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/events">
            <strong>Events</strong>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">
            <strong>Profile</strong>
          </a>
        </li>
      </ul>
    </div>
  </nav>



);
export default NavBar;