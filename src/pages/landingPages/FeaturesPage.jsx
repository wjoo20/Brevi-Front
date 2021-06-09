import f1 from "../../img/f1.jpg";
import f2 from "../../img/f2.jpg";
import f3 from "../../img/f3.jpg";
import { Container } from "react-bootstrap";
import '../../css/Features.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function FeaturesPage() {
    return (
        <>
            <NavBar/>
            <Container className="contenedor">
                <div id="fh5co-features" className="fh5co-features-outer">
                    <Container>
                        <div className="row fh5co-features-grid-columns">

                            <div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
                                <div className="col-sm-image-container">
                                    <img className="img-float-left" src={f1} alt="smartphone-1" />
                                    <span className="span-new">New</span>
                                    <span className="span-free">Free</span>
                                </div>
                            </div>

                            <div className="content col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                                <h1>Tiempo Real</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                <span className="circle circle-first"><i className="fab fa-instagram"></i></span>
                                <span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
                                <span className="circle circle-last"><i className="fab fa-twitter"></i></span>
                            </div>

                            <div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
                                <h1>Servicio de taxis</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                <span className="circle circle-first"><i className="fas fa-star"></i></span>
                                <span className="circle circle-middle"><i className="far fa-star"></i></span>
                                <span className="circle circle-last"><i className="far fa-thumbs-up"></i></span>
                            </div>

                            <div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
                                <img className="img-float-right" src={f2} alt="smartphone-2" />
                            </div>

                            <div className="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
                                <div className="col-sm-image-container">
                                    <img className="img-float-left" src={f3} alt="smartphone-3" />
                                    <span className="span-data">DATA</span>
                                    <span className="span-percent">100%</span>
                                </div>
                            </div>
                            <div className="content col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                                <h1>Rutas Precisas</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                <span className="circle circle-first">95%</span>
                                <span className="circle circle-middle"><i className="fas fa-forward"></i></span>
                                <span className="circle circle-last"><i className="fab fa-github"></i></span>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
            <Footer/>
        </>
    )
}
