import { Button } from 'bootstrap'
import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SideBar from '../../components/SideBar'

export default function listarControlPage() {
    return (
        <div>
            <SideBar />
            <Container id="crearBus" fluid className="page">
                <Row>
                    <Col lg={12}>
                        <div className="headerPage mt-3 p-3">
                            <h1>Control de Buses</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="bodyPage">
                            <div className="titleBody mt-3 p-3">
                                <h1>Tiempos del bus</h1>
                            </div>
                            <div className="body p-3 mb-3">
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Nro. Vuelta</label>
                                        <input type="text" className="form-control" value="1" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Ruta</label>
                                        <input type="text" className="form-control" value="A" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Nro. Placa</label>
                                        <input type="text" className="form-control" value="AAA-111" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Nro. Serie</label>
                                        <input type="text" className="form-control" value="42342NJNK43433349" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Hora Inicio</label>
                                        <input type="text" className="form-control" value="06:10" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Fin</label>
                                        <input type="text" className="form-control" value="07:34" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 1</label>
                                        <input type="text" className="form-control" value="06:23" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="06:20" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 2</label>
                                        <input type="text" className="form-control" value="06:35" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="06:30" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 3</label>
                                        <input type="text" className="form-control" value="06:45" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="06:40" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 4</label>
                                        <input type="text" className="form-control" value="06:52" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="06:50" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 5</label>
                                        <input type="text" className="form-control" value="06:58" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="07:00" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 6</label>
                                        <input type="text" className="form-control" value="07:06" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="07:05" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 7</label>
                                        <input type="text" className="form-control" value="07:18" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="07:10" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-md-6">
                                        <label>Control 8</label>
                                        <input type="text" className="form-control" value="07:34" readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Hora Programada</label>
                                        <input type="text" className="form-control" value="07:20" readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
