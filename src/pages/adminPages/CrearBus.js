import React, { useState }  from 'react'
import ReactDOM from 'react-dom' 
import SideBar from '../../components/SideBar'
import axios from 'axios';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../../css/CrearBus.css'

class crearBus extends React.Component {
    constructor() {
        super();
        this.state = {
            placa: '',
            placaFound: '',
            serie: '',
            marca: '',
            modelo: '',
            propietario: '',
            categoria: '',
            rucEmpresa: '20312736846',
            imagen: null};
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.searchBus = this.searchBus.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.saveBus = this.saveBus.bind(this)
    };
    handleChangeSearch(event) {
        this.setState({placa: event.target.value});
    };
    handleChangeImage(event){
        this.setState({
            imagen: event.target.files[0]
        });
    }
    searchBus(){
        let placa =this.state.placa;
        const url = `https://api-placa-get.herokuapp.com/placa/${placa}`

        fetch(url,{
            method:'GET'
        }).then(response => response.json())
        .then(res => {
            console.log(res);
            this.setState({
                 placaFound: res.bus_placa,
                 serie: res.bus_serie,
                 marca: res.bus_marca,
                 modelo: res.bus_modelo,
                 propietario: res.bus_propietario,
                 categoria: res.bus_categoria
             })
        });
        
    };
    
    
    saveBus(event){
        var formdata = new FormData();
        formdata.append("bus_placa", this.state.placa);
        formdata.append("bus_serie", this.state.serie);
        formdata.append("bus_marca", this.state.marca);
        formdata.append("bus_modelo", this.state.modelo);
        formdata.append("bus_propietario", this.state.propietario);
        formdata.append("bus_categoria", this.state.categoria);
        formdata.append("bus_estado", false);
        formdata.append("bus_rucEmpresa", this.state.rucEmpresa);
        formdata.append("bus_imagen", this.state.imagen, this.state.imagen.name);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result) , alert("Bus guardado con ??xito"))
        .catch(error => console.log('error', error));
        

    };    
    render(){
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
                                    <p>Ingrese un n??mero de placa para realizar la b??squeda mediante la API y as?? obtener los datos del veh??culo de manera directa para su guardado. Aseg??rese de ingresar el n??mero de placa de forma correcta.
                                    </p>
                                    <small>Instructivo Brevi</small>   
                                </div>
                            </div>    
                        </Col>
                        <Col>
                            <div className="bodyPage">
                                <div className="titleBody mt-3 p-3 d-flex justify-content-between">
                                    <h1>Registro por b??squeda de placa</h1>                                    
                                </div>                            
                                <div className="body p-3 mb-3">
                                        <Form.Group className="group" >
                                            <Form.Label>Nro. placa</Form.Label>
                                            <Form.Control onChange={this.handleChangeSearch} value={this.state.placa}  type="text" placeholder="Ejem: 412DFG" />
                                        </Form.Group>
                                        <div className="mt-2">
                                            <Button variant="primary" onClick={this.searchBus}>
                                                Buscar
                                            </Button>
                                        </div>    
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
                                    <div className="row mb-3">
                                        <input type="text" className="form-control" value={20312736846}  hidden/>
                                        <div className="form-group col-md-6">
                                            <label>Nro. Placa</label>
                                            <input type="text" className="form-control" value={this.state.placaFound} readOnly/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Nro. Serie</label>
                                            <input type="text" className="form-control" value={this.state.serie} readOnly/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-6">
                                            <label>Marca</label>
                                            <input type="text" className="form-control" value={this.state.marca} readOnly/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Modelo</label>
                                            <input type="text" className="form-control" value={this.state.modelo} readOnly/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-6">
                                            <label>Propietario</label>
                                            <input type="text" className="form-control" value={this.state.propietario} readOnly/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Categor??a</label>
                                            <input type="text" className="form-control" value={this.state.categoria} readOnly/>
                                        </div>
                                    </div>
                                    <div className="row mb-0">
                                        <div className="form-group mb-0">
                                            <label>Foto del veh??culo</label><br/>
                                            <small>Complete este campo con una imagen referencial del bus.(No es obligatorio)</small>
                                            <input type="file" className="form-control mt-2" onChange={this.handleChangeImage}/>
                                        </div>
                                    </div>
                                    <div class="text-right mt-2 mb-2">
                                        <button class="btn btn-primary" type="submit" onClick={this.saveBus}>Guardar</button>
                                    </div>
                                
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
        </>

    )

    }

    
    
    
    
    
}

export default crearBus
