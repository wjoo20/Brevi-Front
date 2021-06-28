import { useState, useEffect } from 'react'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import { Container, Row, Col, Button, Accordion, Card, Dropdown, Table} from 'react-bootstrap';
import SideBar from '../../components/SideBar'
import credentials from '../../credentials/credentials.js'
import Loader from '../../components/Loader'
import axios from 'axios';
import '../../css/Rutas.css'


const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

function Rutas() {
    const [eventData, setEventData] = useState([])
    const [routes, setRoutes] = useState([])
    const [loading, setLoading] = useState(false)
    const [valuesRoute, setValuesRoute] = useState({
        id: null,
        ruta_nombre: '',
        ruta_inicio: "Avenida Arequipa 123",
        ruta_rucEmpresa: '20312736846',
    });

    useEffect(() => {       
        getPointControl()
        getRoutes()
    }, [])

    const getPointControl = async () => {
        setLoading(true)
        axios.get("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/controlRuta/")
            .then(res =>{
                setEventData(res.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
    }

    const getRoutes = async() => {
        axios.get("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/ruc/20312736846/")
            .then(res =>{
                setRoutes(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChangeRouteName = name => e => {
        setValuesRoute({ ...valuesRoute, [name]: e.target.value });
    };

    const saveRoute = async (e) => {
        e.preventDefault();
        const { ruta_nombre, ruta_inicio, ruta_rucEmpresa} = valuesRoute;
        const route = {ruta_nombre, ruta_inicio, ruta_rucEmpresa};
        console.log(route);
        await axios.post("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/", route);        
        getRoutes()
        getPointControl()
    };

    const getRoute = (id) => {
        axios.get("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/"+id+"/")
            .then(res =>{
                setValuesRoute({
                    id: res.data.id,
                    ruta_nombre: res.data.ruta_nombre,
                    ruta_inicio: res.data.ruta_inicio,
                    ruta_rucEmpresa: res.data.ruta_rucEmpresa})
            }).catch(err => {
                console.log(err)
            })
    }

    const deleteRoute = (id) => {
        let rpta = window.confirm('¿Seguro que desea eliminar este registro?');
        if (rpta) {
            axios.delete("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/"+id+"/")
            .then(res => {
                console.log(res)
                getPointControl()
                getRoutes()
            })
        }        
    }

    const updateRoute = async (idRoute) => {
        const { id, ruta_nombre, ruta_inicio, ruta_rucEmpresa} = valuesRoute;
        const route = {id, ruta_nombre, ruta_inicio, ruta_rucEmpresa};
        console.log(route);
        await axios.put("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/"+idRoute+"/", route)
            .then(res => {
                    console.log(res)
                    getPointControl()
                    getRoutes()
            }).catch(err => {
                    console.log(err)
            })
    };
    return (
        <div>
            <SideBar/>
            {/* Modal Ruta */}
            <div class="modal fade"  id="nuevaRuta" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Nueva Ruta</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label>Nombre de ruta</label>
                                <input onChange={handleChangeRouteName('ruta_nombre')} type="text" className="form-control" required/>
                                <input value={valuesRoute.inicio} onChange={handleChangeRouteName('ruta_inicio')} type="text" className="form-control" required hidden/>
                                <input value={valuesRoute.rucEmpresa} onChange={handleChangeRouteName('ruta_rucEmpresa')} type="text" className="form-control" required hidden/>
                                <div className="invalid-feedback">
                                    Ingrese un número de placa correcto.
                                </div>
                            </div>
                            <button onClick={saveRoute} className="btn btn-primary save" type="submit">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>  
            {/* End Modal Ruta */}

            {/* Modal Update Ruta */}
            <div class="modal fade"  id="editarRuta" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Editar Ruta</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label>Nombre de ruta</label>
                                <input value={valuesRoute.ruta_nombre} onChange={handleChangeRouteName('ruta_nombre')} type="text" className="form-control" required/>
                                <input value={valuesRoute.ruta_inicio} onChange={handleChangeRouteName('ruta_inicio')} type="text" className="form-control" required hidden/>
                                <input value={valuesRoute.ruta_rucEmpresa} onChange={handleChangeRouteName('ruta_rucEmpresa')} type="text" className="form-control" required hidden/>
                                <div className="invalid-feedback">
                                    Ingrese un número de placa correcto.
                                </div>
                            </div>
                            <button onClick={() => updateRoute(valuesRoute.id)}className="btn btn-primary save" type="submit">Guardar Cambios</button>
                        </div>
                    </div>
                </div>
            </div>  
            {/* End Modal Ruta */}


            {/* Modal Punto de Control */}
            <div class="modal fade"  id="nuevoPuntoControl" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Nuevo Punto de Control</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className="needs-validation" novalidate="">
                                <div className="form-group">
                                    <select className="form-control" name="ruta">
                                        <option>Seleccione la ruta a configurar</option>
                                        <option>Ruta 1</option>
                                        <option>Ruta 2</option>
                                        <option>Ruta 3</option>
                                        <option>Ruta 4</option>
                                    </select>
                                </div>
                                <hr/>
                                <div className="form-group">
                                    <label>Número de orden</label>
                                    <input type="text" className="form-control" required=""/>
                                    <div className="invalid-feedback">
                                        Ingrese un número de orden correcto.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Tiempo de paso (minutos)</label>
                                    <input type="text" className="form-control" required=""/>
                                    <div className="invalid-feedback">
                                        Ingrese un tiempo de paso exacto desde el anterior punto de control o salida.
                                    </div>
                                </div>
                                <input className="btn btn-primary save" type="submit" value="Guardar"/>
                                <button className="btn btn-outline-secondary add">Guardar y seguir agregando</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>             
            {/* End Punto de Control */}            

            <Container id="rutas" fluid className="page">
                <Row>
                    <Col lg={12}>
                        <div className="headerPage mt-3 p-3">
                            <h1>Rutas</h1>                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="bodyPage">
                            <div className="titleBody mt-3 p-3 mb-3">
                                <h1>Rutas Registradas</h1>
                                <div className="actions">
                                    <a id="nuevoPunto" href="#" className="btn" data-toggle="modal" data-target="#nuevoPuntoControl">Nuevo Punto de Control</a>
                                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#nuevaRuta">Nueva Ruta</a>
                                </div>
                                                                
                            </div>  
                            <div className="body mt-3 p-3 mb-3">  
                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="accordionTitle">
                                        Tabla de rutas
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Table bordered responsive className="text-center">
                                                <thead>
                                                    <tr>
                                                    <th>Nombre</th>
                                                    <th>Inicio</th>
                                                    <th>RUC de Empresa</th>
                                                    <th></th>
                                                    <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {routes.map(route => (
                                                        <tr>
                                                            <td>{route.ruta_nombre}</td>
                                                            <td>{route.ruta_inicio}</td>
                                                            <td>{route.ruta_rucEmpresa}</td>
                                                            <td>
                                                                <a className="btn btn-primary routeActions2" data-toggle="modal" data-target="#editarRuta" onClick={() => getRoute(route.id)}><i className="fa fa-edit"/> Editar</a>            
                                                            </td>
                                                            <td>
                                                                <a className="btn btn-primary routeActions" onClick={() => deleteRoute(route.id)}><i className="fa fa-trash"/> Eliminar</a>
                                                            </td>
                                                        </tr> 
                                                    ))}
                                                    
                                                </tbody>
                                            </Table>    
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" >
                                        Mapa
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>{!loading ? <RouteMap eventData={eventData}/> : <Loader /> } </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>    
                            </div>   
                        </div>    
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default Rutas
