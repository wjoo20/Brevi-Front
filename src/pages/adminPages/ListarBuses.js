import SideBar from '../../components/SideBar'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import '../../css/ListarBuses.css'

function listarBuses() {
    return (
        <>
            <SideBar />
            <Container fluid className="page">
                <Row>
                    <Col lg={12}>
                        <div className="headerPage mt-3 p-3">
                            <h1>Buses</h1>                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="bodyPage">
                            <div className="titleBody mt-3 p-3 mb-3 d-flex justify-content-between">
                                <h1>Buses Registrados</h1>
                                <a href="#" className="btn btn-primary btn-sm">Nuevo Bus</a>
                            </div>                            
                            <div className="body mt-3 p-3 mb-3">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                 </Table>                               
                                  
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default listarBuses
