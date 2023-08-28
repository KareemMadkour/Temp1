import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactStyling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Card, Button, Form, FloatingLabel } from "react-bootstrap";
export default function MyContact() {
    return (
        <>
            <Container className="Contact-Container" id='contact'>
                <div className="Header">
                    <h1 className="text-center">Contact us</h1>
                    <div className="Underline"></div>
                </div>
                <Row>
                    <Col md={5}>
                        <Card className="Contact-Card">
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '30px' }}>
                                    <FontAwesomeIcon icon={faMapMarker} className='contact-icon' /> Location:
                                    <Card.Text>A108 Adam Street, New York, NY 535022</Card.Text>
                                </Card.Title>
                                <Card.Title style={{ marginBottom: '30px' }}>
                                    <FontAwesomeIcon icon={faEnvelope} className='contact-icon' /> Email:
                                    <Card.Text><a href="mailto:info@example.com">info@example.com</a></Card.Text>
                                </Card.Title>
                                <Card.Title style={{ marginBottom: '30px' }}>
                                    <FontAwesomeIcon icon={faMobile} className='contact-icon' /> Mobile
                                    <Card.Text><a href="tel:+1 5589 55488 55s">+1 5589 55488 55s</a></Card.Text>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7}>
                        <Form className="Contact-Form">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Enter your subject" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <Form.Label>Your message</Form.Label>
                                <FloatingLabel controlId="floatingTextarea2">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '70px' }}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <div className="contact-button">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}