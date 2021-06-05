import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import locations from '../data/locations'

function Map() {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: -16.429098, lng: -71.519622 }}
        >
            {locations.map(site => (
                <Marker
                    key={ site.id }
                    position={{ lat: site.lat, lng: site.lng}}
                />
            ))}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))