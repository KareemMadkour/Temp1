import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PricingStyling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row, Card, Button } from "react-bootstrap";
export default function MyPricing() {
    return (
        <>
            <Container className="Pricing-Container">
                <div className="Header">
                    <h1 className="text-center">Pricing</h1>
                    <div className="Underline"></div>
                </div>
                <Row>
                    <p className="text-center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    <Col md={4}>
                        <Card className="Card">
                            <Card.Body>
                                <Card.Title>Free Plan</Card.Title>
                                <Card.Title style={{fontSize:'30px'}}><sup>$</sup><sub>0</sub></Card.Title>
                                <Card.Text style={{color:'blue'}}>per month</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Quam adipiscing vitae proin</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nec feugiat nisl pretium</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nulla at volutpat diam uteera</Card.Text>
                                <Card.Text className="makeLineThrough"><FontAwesomeIcon icon={faTimes} className='times' />Pharetra massa massa ultricies</Card.Text>
                                <Card.Text className="makeLineThrough"><FontAwesomeIcon icon={faTimes} className='times' />Massa ultricies mi quis hendrerit</Card.Text>
                                <Button>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="theSpecialCard Card">
                            <Card.Body>
                                <Card.Title>Business Plan</Card.Title>
                                <Card.Title style={{fontSize:'30px'}}><sup>$</sup><sub>29.99</sub></Card.Title>
                                <Card.Text style={{color:'blue'}}>per month</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Quam adipiscing vitae proin</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nec feugiat nisl pretium</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nulla at volutpat diam uteera</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Pharetra massa massa ultricies</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Massa ultricies mi quis hendrerit</Card.Text>
                                <Button className='getStartedBtn'>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="Card">
                            <Card.Body>
                                <Card.Title>Developer Plan</Card.Title>
                                <Card.Title style={{fontSize:'30px'}}><sup>$</sup><sub>49.99</sub></Card.Title>
                                <Card.Text style={{color:'blue'}}>per month</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Quam adipiscing vitae proin</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nec feugiat nisl pretium</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Nulla at volutpat diam uteera</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Pharetra massa massa ultricies</Card.Text>
                                <Card.Text><FontAwesomeIcon icon={faCheckDouble} className='check' />Massa ultricies mi quis hendrerit</Card.Text>
                                <Button>Get Started</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}