import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../css/Footer.css'
import '../css/Globals.css'

export default function Footer() {
    return (
        <>
            <div className="footer-outer">
                <div className="container footer-inner">
                    <div className="footer-three-grid" data-wow-delay="0.66s">
                        <div className="column-1-3">
                            <h1>BREVI</h1>
                        </div>
                        <div className="column-2-3">
                            <nav className="footer-nav">
                                <ul class="footer-nav-links">
                                    <li className="active"><Nav.Link as={Link} exact to="/home" className="footer-navlink">Inicio</Nav.Link></li>
                                    <li className="active"><Nav.Link as={Link} exact to="/misVis" className="footer-navlink">Brevi</Nav.Link></li>
                                    <li className="active"><Nav.Link as={Link} exact to="/features" className="footer-navlink">Características</Nav.Link></li>
                                    <li className="active"><Nav.Link as={Link} exact to="/contact" className="footer-navlink">Contáctanos</Nav.Link></li>
                                    <li className="active"><Nav.Link as={Link} exact to="/login" className="footer-navlink">Login</Nav.Link></li>     
                                </ul>
                            </nav>
                        </div>
                        <div className="column-3-3">
                            <div className="social-icons-footer">
                                <a href="https://www.facebook.com/fh5co"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://freehtml5.co"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://www.twitter.com/fh5co"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                    <span className="border-bottom-footer"></span>
                    <p className="copyright">&copy; 2021 App. All rights reserved. Design by BREVI.</p>
                </div>
            </div>
        </>
    )
}
