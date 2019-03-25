import React, { Component } from "react";
import StartGameButton from "../components/StartGameButton/StartGame";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
class Landing extends Component {
    render() {
        return (
        <div>
            <Carousel/>
            <StartGameButton/>
            <Footer/>     
        </div>
        )      
    }
};

export default Landing;