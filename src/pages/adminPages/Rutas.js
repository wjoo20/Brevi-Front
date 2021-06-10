import React from 'react'
import Map from '../../components/Map'
import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
import SideBar from '../../components/SideBar'
import credentials from '../../credentials/credentials.js'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

function rutasPages() {
    return (
        <div>
            <SideBar/>
            <Container fluid className="page">
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
                            <div className="titleBody mt-3 p-3 mb-3 d-flex justify-content-between">
                                <h1>Rutas Registradas</h1>
                                <a href="#" className="btn btn-primary btn-sm">Nueva Ruta</a>
                            </div>                            
                            <div className="body mt-3 p-3 mb-3 text-center">
                                <Map 
                                    googleMapURL = {mapURL}
                                    containerElement = {<div style = {{height: '650px', width: '100%'}}/>}
                                    mapElement = {<div style={{height: '100%'}}/>}
                                    loadingElement = {<p>Cargando...</p>}            
                                />                                                       
                                  
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default rutasPages
