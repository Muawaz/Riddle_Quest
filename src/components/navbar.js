import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/logo.png';

const NavBarComponent = () => {
    return (
        <>
        {/* <div className="navbar-logo-container">
            
        </div> */}

        <Navbar expand="lg" sticky="top" className="custom-navbar">
            <Container className="justify-content-between">
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src={logo} alt="logo" className="navbar-logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#quiz">Quiz</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    );
}

export default NavBarComponent