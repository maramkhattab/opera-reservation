import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import 'bootstrap/dist/css/bootstrap.css';
import landingPage from "./Components/UI/landingPage/landingPage";
import Cover from "./Components/UI/cover/cover";
function App() {
  return (
    <div className="App">
      <Cover />
    </div>
  );
}

export default App;
