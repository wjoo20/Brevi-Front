import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import locations from '../data/locations'
import RouteInfo from './RouteInfo'

function Map() {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: -16.429098, lng: -71.519622 }}
        >
            {locations.map(site => (
                <Marker
                    key={site.id}
                    position={{ lat: site.lat, lng: site.lng }}
                    onClick={() => {
                        <div className="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h4 className="modal-title" id="myModalLabel">Esto es un modal</h4>
                                    </div>
                                    <div className="modal-body">
                                        Texto del modal
                                    </div>
                                </div>
                            </div>
                        </div>
                    }}
                    icon={{ url: "/bus.png", scaledSize: new window.google.maps.Size(25, 25) }}
                />
            ))}
        </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map))