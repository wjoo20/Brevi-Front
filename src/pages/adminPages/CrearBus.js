import React from 'react'
import SideBar from '../../components/SideBar'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../../css/CrearBus.css'

function crearBus() {
    return (
        <>
            <SideBar />
            <Container id="crearBus" fluid className="page">
                <Row>
                    <Col lg={12}>
                        <div className="headerPage mt-3 p-3">
                            <h1>Nuevo Bus</h1>                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Col>
                            <div className="bodyPage">
                                <div className="titleBody mt-3 p-3 d-flex justify-content-between">
                                    <h1>Instructivo</h1>
                                </div>                            
                                <div className="body p-3 mb-3">
                                    <p>Ingrese un número de placa para realizar la búsqueda mediante la API y así obtener los datos del vehículo de manera directa para su guardado. Asegúrese de ingresar el número de placa de forma correcta.
                                    </p>
                                    <small>Instructivo Brevi</small>   
                                </div>
                            </div>    
                        </Col>
                        <Col>
                            <div className="bodyPage">
                                <div className="titleBody mt-3 p-3 d-flex justify-content-between">
                                    <h1>Registro por búsqueda de placa</h1>                                    
                                </div>                            
                                <div className="body p-3 mb-3">
                                    <Form>
                                        <Form.Group className="group">
                                            <Form.Label>Nro. placa</Form.Label>
                                            <Form.Control type="text" placeholder="Ejem: 412-DFG" />
                                        </Form.Group>
                                        <div className="mt-2">
                                            <Button variant="primary" type="submit">
                                                Buscar
                                            </Button>
                                        </div>
                                        
                                    </Form>     
                                </div>
                            </div>    
                        </Col>
                    </Col>
                    
                    <Col lg={8}>
                        <div className="bodyPage">
                            <div className="titleBody mt-3 p-3">
                                <h1>Datos del bus</h1>
                            </div>                            
                            <div className="body p-3 mb-3">
                                <form action="#">
                                    <div className="row mb-3">
                                        <div className="form-group col-md-6">
                                            <label>Nro. Placa</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese un número de placa correcto.
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Nro. Serie</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese un número de serie correcto.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-6">
                                            <label>Marca</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese una marca correcta.
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Modelo</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese un modelo correcta.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-6">
                                            <label>Propietario</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese una marca correcta.
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Categoría</label>
                                            <input type="text" className="form-control" required=""/>
                                            <div className="invalid-feedback">
                                                Ingrese un modelo correcta.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-0">
                                        <div className="form-group mb-0">
                                            <label>Foto del vehículo</label><br/>
                                            <small>Complete este campo con una imagen referencial del bus.(No es obligatorio)</small>
                                            <input type="file" className="form-control mt-2"/>
                                        </div>
                                    </div>
                                    <div class="text-right mt-2 mb-2">
                                        <button class="btn btn-primary" type="submit">Guardar</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
        </>

    )
    
    
    
}

export default crearBus
