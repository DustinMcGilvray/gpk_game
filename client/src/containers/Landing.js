import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import StartGameButton from "../components/StartGameButton/StartGame";
import Carousel from "../components/Carousel/Carousel";
class Landing extends Component {
    render() {
        return (
        <Container fluid="true">
        <Carousel/>
        <StartGameButton/>
        </Container>
        )      
    }
};

export default Landing;