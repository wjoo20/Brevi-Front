import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import RouteMarker from './RouteMarker'
import RouteInfo from './RouteInfo'


const RouteMap = ({eventData, center, zoom}) => {
    const [locationInfo, setLocation] = useState(null)

    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === 8){
            return <RouteMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocation({ id: ev.id, title: ev.title})} />
        }
        return null
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
