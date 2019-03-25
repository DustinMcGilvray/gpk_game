import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';
import "./Footer.css";

const PageFooter = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="React Logo"
            src={logo}
            width="30"
            height="30"
            className="App-logo"
          />
          {' GPK Card Collector '}
        </Navbar.Brand>
      </Navbar>
    )
}
export default PageFooter;