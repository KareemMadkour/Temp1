import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CallToActionStyling.css'
import { Container, Row, Col } from "react-bootstrap";


export default function MyCallToAction() {
    return (
        <>
            <div className="CallToAction-Container">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h2>Call To Action</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col md={4}>
                            <button className="CallToAction-Btn">Call to action</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}