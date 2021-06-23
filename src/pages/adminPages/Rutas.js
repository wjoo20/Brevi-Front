import { useState, useEffect } from 'react'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import { Container, Row, Col, Button} from 'react-bootstrap';
import SideBar from '../../components/SideBar'
import credentials from '../../credentials/credentials.js'
import Loader from '../../components/Loader'
import '../../css/Rutas.css'


const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

function Rutas() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            const { events } = await res.json()

            setEventData(events)
            setLoading(false)
        }

        fetchEvents()
    }, [])

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
                            <form className="needs-validation" novalidate="">
                                <div className="form-group">
                                    <label>Nombre de ruta</label>
                                    <input type="text" className="form-control" required=""/>
                                    <div className="invalid-feedback">
                                        Ingrese un número de placa correcto.
                                    </div>
                                </div>
                                <input className="btn btn-primary save" type="submit" value="Guardar"/>
                            </form>
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
                            <div className="body mt-3 p-3 mb-3 text-center">
                                {!loading ? <RouteMap eventData={eventData}/> : <Loader /> }   
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default Rutas
