import { Container } from 'react-bootstrap'
import Map from '../../components/Map'
import SideBar from '../../components/SideBar'
import credentials from '../../credentials/credentials.js'
import '../../css/RastreoBusesPage.css'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

export default function listarBusesPages() {
    return (
        <>
            <SideBar/>
            <Map 
                googleMapURL = {mapURL}
                containerElement = {<div className="contenedor-mapa"/>}
                mapElement = {<div className="mapa"/>}
                loadingElement = {<p>Cargando...</p>}
            />
        </>
    )
}
