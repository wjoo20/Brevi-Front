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
                                    <a href="#home" className="letra">Inicio</a>
                                    <a href="#misvis" className="letra">Brevi</a>
                                    <a href="#features" className="letra">Características</a>
                                    <a href="#contact" className="letra">Contáctanos</a>
                                    <a href="/login" className="letra">Login</a>
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
                </div>
            </div>
        </>
    )
}
