import q1 from "../../img/quotes-1.jpg";
import q2 from "../../img/quotes-2.jpg";
import { Col, Container, Row } from "react-bootstrap";

export default function MisVisPage() {
    return (
        <>
        <Container id="misvis">
            <br /><br />
            <div id="fh5co-reviews-outer" className="fh5co-reviews-outer container-fluid">
                <Container>
                    <div id="fh5co-reviews-inner">
                        <Row className="justify-content-center">
                            <Col sm="5" className="wow fadeIn animated" data-wow-delay="0.25s">
                                <h2 className="title">Misión</h2>
                                <br />
                                <img className="float-left" src={q1} /><br /><br />
                                <p id="testimonial-desc">Cambiar la cultura de la movilidad en transporte público, brindando una guía de movilización personalizada a sus usuarios con el mapeo de diferentes líneas de transporte.</p><br />
                                <img className="float-right" src={q2} />
                            </Col>
                            <Col>
                            </Col>
                            <Col sm="5" id="testimonial-2" className="wow fadeIn animated" data-wow-delay="0.67s">
                                <h2 className="title">Visión</h2>
                                <br />
                                <img className="float-left" src={q1} /><br /><br />
                                <p id="testimonial-desc">Somos un grupo de estudiantes de diseño y desarrollo de software, que buscamos ayudar a todas las personas a movilizarse de la manera mas óptima y lograr una estabilidad de flujo vial.</p><br />
                                <img className="float-right" src={q2} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <br /><br />
            <p id="espacio"></p>
        </Container>
        </>
    )
}
