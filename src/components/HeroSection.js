import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../images/hero-image.jpg'; // Replace with your background image path

const HeroSection = () => {
    return (
        <section className="hero-section position-relative py-5" style={{background: "#0454a4"}}>
            <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} className='text-center text-md-start text-white'>
                            <div className="hero-content text-white">
                                <h1 className="mb-4" style={{ fontSize: "5rem"}}>Welcome to RiddleQuest</h1>
                                <p className="lead mb-4"  style={{ fontSize: "2.5rem"}}>
                                    Solve intriguing riddles and test your wit!
                                </p>
                                <Button variant="primary">Get Started</Button>
                            </div>
                        </Col>
                        <Col md={6} className="text-md-end d-none d-md-block">
                            <img src={heroImage} alt="Hero-Image" className="img-fluid rounded-circle shadow-lg hero-image" />
                        </Col>
                    </Row>
                </Container>
                </div>
        </section>
    );
}

export default HeroSection;
