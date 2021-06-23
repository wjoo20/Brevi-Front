import { Icon, InlineIcon } from '@iconify/react';
import mapMarkerRadius from '@iconify-icons/mdi/map-marker-radius';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={mapMarkerRadius} className="location-icon" />
            
        </div>
    )
}

export default LocationMarker