import React from "react";
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import contactBackground from '../images/contactBackground.jpg';

const ConactUs = () => {
    return (
        <div style={{background: "#0454a4", padding: "40px 20px"}}>
            <section className="contact-section" style={{backgroundImage: `url(${contactBackground})`}}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} className="text-center">
                            <h2 className="contact-title">Contact Us</h2>
                            <p className="contact-subtitle">We'd love to here from you ! </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name"/>
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email"/>
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="textarea" placeholder="Enter your message"/>
                                </Form.Group>

                                <Button vairent="primary" type="submit" className="contact-button">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ConactUs;