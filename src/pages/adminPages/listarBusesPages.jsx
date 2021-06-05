import Map from '../../components/Map'
import credentials from '../../credentials/credentials.js'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

export default function listarBusesPages() {
    return (
        <div className="contenedor">
            <Map 
                googleMapURL = {mapURL}
                containerElement = {<div style = {{height: '800px'}}/>}
                mapElement = {<div style={{height: '100%'}}/>}
                loadingElement = {<p>Cargando...</p>}            
            />
        </div>
    )
}
