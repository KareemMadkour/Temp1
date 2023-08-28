import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesStyling.css'
import { Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faFileAlt, faTachometerAltFast, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

export default function MyServices() {
    return (
        <>
            <Container className="Services-Container" id="services">
                <div className="Header">
                    <h1 className="text-center">Services</h1>
                    <div className="Underline"></div>
                </div>
                <p className="text-center" style={{paddingBottom:'30px'}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <Row>
                    <Col>
                        <Card style={{ width: '14rem' }} className='Card'>
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faBasketball} className='icon' /></Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">Lorem Ispum</Card.Subtitle>
                                <Card.Text style={{fontSize:'20px'}}>
                                    Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className='Card'>
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faFileAlt} className='icon' /></Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">Sed ut perspici</Card.Subtitle>
                                <Card.Text style={{fontSize:'20px'}}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className='Card'>
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faTachometerAltFast} className='icon' /></Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">Magni Dolores</Card.Subtitle>
                                <Card.Text style={{fontSize:'20px'}}>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '14rem' }} className='Card'>
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faLayerGroup} className='icon' /></Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">Nemo Enim</Card.Subtitle>
                                <Card.Text style={{fontSize:'20px'}}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}