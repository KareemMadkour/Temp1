import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import './NavbarStyling.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function MyNavbar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">Arsha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#contact">Contact us</Nav.Link>
                            <Nav.Link className="getStarted" href="#about">Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}