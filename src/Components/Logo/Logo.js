import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './LogoStyling.css'
import C1 from './Images/client-1.png'
import C2 from './Images/client-2.png'
import C3 from './Images/client-3.png'
import C4 from './Images/client-4.png'
import C5 from './Images/client-5.png'
import C6 from './Images/client-6.png'

export default function MyLogo() {
    return (
        <>
            <Container className="Img-Container">
                <Row>
                    <Col> <img src={C1} alt='Not found' /> </Col>
                    <Col> <img src={C2} alt='Not found' /> </Col>
                    <Col> <img src={C3} alt='Not found' /> </Col>
                    <Col> <img src={C4} alt='Not found' /> </Col>
                    <Col> <img src={C5} alt='Not found' /> </Col>
                    <Col> <img src={C6} alt='Not found' /> </Col>
                </Row>
            </Container>
        </>
    )
}

