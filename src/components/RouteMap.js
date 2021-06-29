import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import RouteMarker from './RouteMarker'
import RouteInfo from './RouteInfo'
import axios from 'axios';


const RouteMap = ({eventData, center, zoom}) => {
    const [locationInfo, setLocation] = useState(null)

    const [valuesRoute, setValuesRoute] = useState({
        id: null,
        ruta_nombre: '',
        ruta_inicio: "Avenida Arequipa 123",
        ruta_rucEmpresa: '20312736846',
    });

    const getRoute = (id) => {
        axios.get("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/rutas/"+id+"/")
            .then(res =>{
                console.log(res)
                setValuesRoute({
                    id: res.data.id,
                    ruta_nombre: res.data.ruta_nombre,
                    ruta_inicio: res.data.ruta_inicio,
                    ruta_rucEmpresa: res.data.ruta_rucEmpresa})
            }).catch(err => {
                console.log(err)
            })
    }

    let nombre = valuesRoute.ruta_nombre

    const markers = eventData && eventData.map(ev =>{
        return <RouteMarker lat={ev.cr_lat} lng={ev.cr_lon} onClick={() => { getRoute(ev.cr_idRuta); setLocation({ orden: ev.cr_orden, tiempo: ev.cr_tiempo, ruta: nombre, id: ev.id});}} />        
    })
    return (
        <div className="map">
            <GoogleMapReact
                // Credenciales Google Cloud Platform
                bootstrapURLKeys = {{key: 'AIzaSyAXqAFwBGgMkw_ykCgq5xXQNh786_cz8JU'}}
                defaultCenter = { center }
                defaultZoom = { zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <RouteInfo info={locationInfo}/>}
        </div>
    )
}

RouteMap.defaultProps = {
    center: {
        lat: -16.39889,
        lng: -71.535
    },
    zoom: 14
}

export default RouteMap
