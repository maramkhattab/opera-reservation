import React from "react";

import "./landingPage.css";



const LandingPage = props => (

    <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="/signup">Signup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold">Welcome to Cairo Opera House Portal </h1>
                        <hr class="divider my-4" />
                        <div class="row h-100 align-items-center justify-content-center text-center">
                            <p class="text-white-75 font-weight-light mb-5">Cairo opera house is the main performing arts venue in the Egyptian capital and home to most of Egypt's finest musical groups, it is located on the southern portion of Gezira Island in the Nile River, in the Zamalek district near downtown Cairo</p>
                            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">View Events</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </body>

);

export default LandingPage;
