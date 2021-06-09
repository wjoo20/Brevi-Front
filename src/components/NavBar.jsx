import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../css/NavBar.css'
import '../css/Globals.css'

export default function NavBar() {
    return (
        <Navbar className="fh5co-hero-wrapper" expand="lg">
            <Container className="contenedor-links">
                <Navbar.Brand as={Link} to="/home" className="titulo">BREVI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto links">
                        <a href="#home" className="letra">Inicio</a>
                        <a href="#misvis" className="letra">Brevi</a>
                        <a href="#features" className="letra">Características</a>
                        <a href="#Contact" className="letra">Contáctanos</a>
                        <Nav.Link as={Link} exact to="/login" className="letra">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container className="cont-iconos">
                <Navbar>
                    <Nav className="me-auto iconos">
                        <Nav.Link href="https://www.facebook.com" className="icono"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                        <Nav.Link href="https://www.instagram.com" className="icono"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link href="https://www.twitter.com" className="icono"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    )
}
