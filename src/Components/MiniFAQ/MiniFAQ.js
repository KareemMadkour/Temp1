import React from "react";
import './MiniFAQStyling.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import ComputerImg from '../MiniFAQ/Computers.png'

export default function MyMiniFAQ() {
    return (
        <>
            <Container className="MiniFAQ-Container">
                <Row>
                    <Col md={8}>
                        <h2>Eum ipsam laborum deleniti <b>velit pariatur architecto aut nihil</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="Acc-Header">01 Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                                <Accordion.Body>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="Acc-Header">02 Feugiat scelerisque varius morbi enim nunc?</Accordion.Header>
                                <Accordion.Body>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="Acc-Header">03 Dolor sit amet consectetur adipiscing elit?</Accordion.Header>
                                <Accordion.Body>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <img src={ComputerImg} alt="Not Found" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}