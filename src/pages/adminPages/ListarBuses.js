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
            placa: '',
            serie: '',
            marca: '',
            modelo: '',
            propietario: '',
            categoria: '',
            rucEmpresa: '20312736846',
            imagen: null,
            imagenFound: null};
        this.state = {
            buses: [],
            ruc: "20312736846",};
        
        this.deleteBus = this.deleteBus.bind(this)
        this.searchBus = this.searchBus.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.updateBus = this.updateBus.bind(this)
    }    

    componentWillMount() {
        let ruc = this.state.ruc
        const url = `http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/ruc/${ruc}`
        axios.get(url).then(res => {
            this.setState({buses: res.data});
            console.log("buses ", this.state.buses)
        })        
    }

    deleteBus(placa){
        let rpta = window.confirm('¿Seguro que desea eliminar este registro?');
        if (rpta) {
            axios.delete("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/"+placa+"/")
            .then(res => {
                alert("Bus eliminado con éxito")
                this.componentWillMount();
            })
        }
    }  


    searchBus(placa){
        const url = `http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/${placa}/`
        fetch(url,{
            method:'GET'
        }).then(response => response.json())
        .then(res => {
            console.log(res);
            this.setState({
                 placa: res.bus_placa,
                 serie: res.bus_serie,
                 marca: res.bus_marca,
                 modelo: res.bus_modelo,
                 propietario: res.bus_propietario,
                 categoria: res.bus_categoria,
                 rucEmpresa: '20312736846',
                 imagenFound: "http://3.208.58.70/"+res.bus_imagen
             })
            console.log(this.state.imagenFound)
        });
    }

    handleChangeImage(event){
        // console.log(event.target.files[0])
        this.setState({
            imagen: event.target.files[0]
        });
    }

    async updateBus(event){
        var formdata = new FormData();
        var placa = this.state.placa;
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
        method: 'PUT',
        body: formdata,
        redirect: 'follow'
        };
        console.log(this.state.placa)
        fetch(`http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/buses/${placa}/`, requestOptions)
        .then(response => response.text())
        .then(result => window.location.reload(), alert("Bus actualizado con éxito"))
        .catch(error => console.log('error', error));        
    };    
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
                            <div className="text-center">
                                <img id="referentImage" src={this.state.imagenFound} alt="ReferentImage" />
                            </div>
                            <div className="form-group mb-0">
                                <label>Foto del vehículo</label><br/>
                                <input type="file" className="form-control mt-2" onChange={this.handleChangeImage}/>
                            </div>
                            <button id="update" class="btn btn-primary" type="submit" onClick={this.updateBus}>Guardar Cambios</button>
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
                                                                <Dropdown.Item data-toggle="modal" data-target="#editarBus" onClick={() => this.searchBus(bus.bus_placa)}>Editar</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => this.deleteBus(bus.bus_placa)} >Eliminar</Dropdown.Item>
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

    
    
    
}

export default listarBuses
