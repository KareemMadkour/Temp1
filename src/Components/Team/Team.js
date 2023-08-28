import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamStyling.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import TeamImg1 from './team-1.jpg'
import TeamImg2 from './team-2.jpg'
import TeamImg3 from './team-3.jpg'
import TeamImg4 from './team-4.jpg'


export default function MyTeam() {
    const [team1, setTeam1] = useState({
        name:'Walter White',
        job:'Chief Executive Officer',
        desc:'Explicabo voluptatem mollitia et repellat qui dolorum quasi'
    })
    const [team3, setTeam3] = useState({
        name:'William Anderson',
        job:'CTO',
        desc:'Quisquam facilis cum velit laborum corrupti fuga rerum quia'
    })
    const [team2, setTeam2] = useState({
        name:'Sarah Jhonson',
        job:'Product Manager',
        desc:'Aut maiores voluptates amet et quis praesentium qui senda para'
    })
    const [team4, setTeam4] = useState({
        name:'Amanda Jepson',
        job:'Accountant',
        desc:'Dolorum tempora officiis odit laborum officiis et et accusamus'
    })
    return (
        <>
            <Container className="Team-Container" id='team'>
                <div className="Header">
                    <h1 className="text-center">Team</h1>
                    <div className="Underline"></div>
                </div>
                <Row>
                    <Col md={6}>
                        <Card className="bg-dark text-white TeamCard">
                            <Card.Img src={TeamImg1} alt="Card image" />
                            <Card.ImgOverlay className="Card-Overlay">
                                <Card.Title>{team1.name}</Card.Title>
                                <Card.Text>{team1.job}</Card.Text>
                                <Card.Text>
                                    {team1.desc}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white TeamCard">
                            <Card.Img src={TeamImg3} alt="Card image" />
                            <Card.ImgOverlay className="Card-Overlay">
                                <Card.Title>{team3.name}</Card.Title>
                                <Card.Title>{team3.job}</Card.Title>
                                <Card.Text>
                                    {team3.desc}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bg-dark text-white TeamCard">
                            <Card.Img src={TeamImg2} alt="Card image" />
                            <Card.ImgOverlay className="Card-Overlay">
                                <Card.Title>{team2.name}</Card.Title>
                                <Card.Title>{team2.job}</Card.Title>
                                <Card.Text>
                                    {team2.desc}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white TeamCard">
                            <Card.Img src={TeamImg4} alt="Card image" />
                            <Card.ImgOverlay className="Card-Overlay">
                                <Card.Title>{team4.name}</Card.Title>
                                <Card.Title>{team4.job}</Card.Title>
                                <Card.Text>
                                    {team4.desc}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}