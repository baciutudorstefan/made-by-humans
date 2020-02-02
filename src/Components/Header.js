import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Header extends Component {
    render() {
        return (
            <ScrollAnimation animateIn="bounceInDown">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">made by humans</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#philosophy">Philosophy</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           
            </ScrollAnimation>

        )
    }
}
