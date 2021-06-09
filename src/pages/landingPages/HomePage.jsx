import { Col, Container, Row, Button } from "react-bootstrap";
import "../../css/Home.css";

export default function HomePage() {
    return (
        <>
        <Container id="home" className="contenedor">
            <div className="mb-5 masthead">
                <Container className="pt-5 h-100">
                    <Row className="h-100">
                        <Col lg="7" className="my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-5">Descubre nuevas rutas y evita el caos del transporte público</h1>
                                <Button className="but1" color="primary" size="lg">Descargalo YA!</Button>
                            </div>
                        </Col>
                        <Col lg="5" className="pt-5 my-auto">
                            <img src="https://i.ibb.co/4S50mnc/app.png" className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
        
        </>
        
    )
}
