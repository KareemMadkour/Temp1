import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import './AboutStyling.css'
import { Col, Container, Row, Button } from "react-bootstrap";

export default function MyAbout() {
    return (
        <>
            <Container className="About-Container" id="about">
                <h1 className="text-center">About Us</h1>
                <div className="Underline"></div>
                <br />
                <Row>
                    <Col>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        <br />
                        <p><FontAwesomeIcon icon={faCheckDouble} className="iconCheck" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><FontAwesomeIcon icon={faCheckDouble} className="iconCheck" /> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <p><FontAwesomeIcon icon={faCheckDouble} className="iconCheck" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col>
                        <h5>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        <br />
                        <Button variant="outline-primary" className="LearnMoreBtn">Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}