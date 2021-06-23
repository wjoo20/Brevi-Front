import SideBar from '../../components/SideBar'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
import '../../css/ListarBuses.css'

function listarBuses() {
    return (
        <>
            <SideBar />
            {/* Modal Editar Bus */}
            <div class="modal fade"  id="editarBus" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Editar Bus</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className="needs-validation" novalidate="">
                                <div className="form-group mb-0">
                                    <label>Foto del vehículo</label><br/>
                                    <input type="file" className="form-control mt-2"/>
                                 </div>
                                <input className="btn btn-primary save" type="submit" value="Guardar"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>           
            
            {/* End Modal Editar Bus */}
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
                                <Link to={`/admin/nuevoBus`}>
                                    <a id="nuevoBus" className="btn btn-success">Nuevo Bus</a>
                                </Link>                                
                            </div>                            
                            <div className="body mt-3 p-3 mb-3 text-center">
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                        <th>Placa</th>
                                        <th>Nro. Serie</th>
                                        <th>Marca</th>
                                        <th>Modelo</th>
                                        <th>Propietario</th>
                                        <th>Categoría</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>ASD-568</td>
                                        <td>555-999-555</td>
                                        <td>Nissan</td>
                                        <td>NV200</td>
                                        <td>José Perez</td>
                                        <td>Transporte</td>
                                        <td>
                                            <div className="text-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary"  size="sm" id="dropdown-basic">
                                                        Opciones
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" data-toggle="modal" data-target="#editarBus">Editar</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>5K2-345</td>
                                        <td>453-344-676</td>
                                        <td>Toyota</td>
                                        <td>Corolla</td>
                                        <td>Daniel Paredes</td>
                                        <td>Transporte</td>
                                        <td>
                                            <div className="text-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary"  size="sm" id="dropdown-basic">
                                                        Opciones
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" data-toggle="modal" data-target="#editarBus">Editar</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>F79-653</td>
                                        <td>355-769-453</td>
                                        <td>Toyota</td>
                                        <td>Etios</td>
                                        <td>Ernesto Martínez</td>
                                        <td>Transporte</td>
                                        <td>
                                            <div className="text-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary"  size="sm" id="dropdown-basic">
                                                        Opciones
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" data-toggle="modal" data-target="#editarBus">Editar</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>E4R-723</td>
                                        <td>687-778-523</td>
                                        <td>Mercedes Benz</td>
                                        <td>Citaro</td>
                                        <td>Pedro Torres</td>
                                        <td>Transporte</td>
                                        <td>
                                            <div className="text-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary"  size="sm" id="dropdown-basic">
                                                        Opciones
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" data-toggle="modal" data-target="#editarBus">Editar</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>ASD-568</td>
                                        <td>555-999-555</td>
                                        <td>Hyundai</td>
                                        <td>County Personal</td>
                                        <td>Raúl Miranda</td>
                                        <td>Transporte</td>
                                        <td>
                                            <div className="text-center">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary"  size="sm" id="dropdown-basic">
                                                        Opciones
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" data-toggle="modal" data-target="#editarBus">Editar</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>
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

export default listarBuses
