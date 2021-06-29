import { Container, Form, Button, Row, Col, Table, Dropdown } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import '../../css/ListarVueltaPage.css'

export default function listarVueltaPage() {
    return (
        <>
            <SideBar />
            <Container fluid className="page">
                <Row>
                    <Col lg={12}>
                        <div className="headerPage mt-3 p-3">
                            <h1>Reporte de Vueltas</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="bodyPage">
                            <div className="titleBody mt-3 p-3 mb-3 d-flex justify-content-between">
                                <h1>Registro de Vueltas</h1>
                                <Form>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="placa">
                                            <Form.Control type="text" placeholder="Placa..." />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="ruta">
                                            <Form.Control type="text" placeholder="Ruta..." />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="search">
                                            <Button type="submit" className="search">
                                                Buscar
                                            </Button>
                                        </Form.Group>

                                    </Row>
                                </Form>
                            </div>
                            <div className="body mt-3 p-3 mb-3">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Placa</th>
                                            <th>Ruta</th>
                                            <th>Vueltas</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>AAA-111</td>
                                            <td>A</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="/admin/listarControlPage">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                {/* <div class="form-group">                                             
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option selected>Elegir vuelta...</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>AAA-115</td>
                                            <td>B</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>AAA-124</td>
                                            <td>A</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>V6B-245</td>
                                            <td>B</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>HB5-412</td>
                                            <td>C</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>GB6-475</td>
                                            <td>C</td>
                                            <td>
                                                <div className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                                                            Elegir vuelta...
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-1">3</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">4</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </td>
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
