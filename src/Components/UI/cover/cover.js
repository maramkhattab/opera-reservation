import React from "react";

import "./cover.css";

const Cover = props => (
    
    <header class="masthead">
        <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">Welcome to Cairo Opera House Portal </h1>
                <hr class="divider my-4"/>
            <div class="col-lg-8 align-self-baseline">
                 <p class="text-white-75 font-weight-light mb-5">Book you seats now!</p> 
                 <div class="center">
                <button class="btn btn-primary btn-xl js-scroll-trigger ">See Upcoming Events </button>
                </div>
                
            </div>
            </div>
         </div>   
        </div>
    </header>
 
);

export default Cover;
