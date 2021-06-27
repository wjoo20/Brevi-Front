import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import RouteMarker from './RouteMarker'
import RouteInfo from './RouteInfo'


const RouteMap = ({eventData, center, zoom}) => {
    const [locationInfo, setLocation] = useState(null)

    const markers = eventData && eventData.map(ev =>{
        return <RouteMarker lat={ev.cr_lat} lng={ev.cr_lon} onClick={() => setLocation({ id: ev.id, tiempo: ev.cr_tiempo, ruta: ev.cr_idRuta})} />        
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
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 5
}

export default RouteMap
