import React, { useState }  from 'react'
import ReactDOM from 'react-dom' 
import SideBar from '../../components/SideBar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
import '../../css/ListarBuses.css'

class listarBuses extends React.Component {
    constructor(){
        super();
        this.state = {
            buses: [],
            ruc: "20312736846",};
    }    
    render(){
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
                                        {this.state.buses.map((bus,index) => {
                                            return (
                                                <tr>
                                                <td>{bus.bus_placa}</td>
                                                <td>{bus.bus_serie}</td>
                                                <td>{bus.bus_marca}</td>
                                                <td>{bus.bus_modelo}</td>
                                                <td>{bus.bus_propietario}</td>
                                                <td>{bus.bus_categoria}</td>
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

                                            )
                                        })}  
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

    componentWillMount() {
        let ruc = this.state.ruc
        const url = `http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/ruc/${ruc}`
        axios.get(url).then(res => {
            this.setState({buses: res.data});
            console.log("buses ", this.state.buses)
        })
        
    }
    
}

export default listarBuses
