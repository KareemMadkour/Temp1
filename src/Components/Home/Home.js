import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyling.css'
import { Col, Container, Row } from "react-bootstrap";
import HomeImg from '../Home/Home.png'
import { Nav } from "react-bootstrap";

export default function MyHome() {
    return (
        <>
            <Container fluid className="HomePage" id='home'>
                <Row>
                    <Col>
                        <h1>Better Solutions For Your Business</h1>
                        <br />
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <br />
                        <Nav>
                            <Nav.Link href="#about">Get Started</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <img src={HomeImg} alt='Error' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}