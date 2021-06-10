import React from 'react'
import Map from '../../components/Map'
import SideBar from '../../components/SideBar'
import credentials from '../../credentials/credentials.js'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

function rutasPages() {
    return (
        <div>
            <SideBar/>
            <Map 
                googleMapURL = {mapURL}
                containerElement = {<div style = {{height: '650px', width: '100%'}}/>}
                mapElement = {<div style={{height: '100%'}}/>}
                loadingElement = {<p>Cargando...</p>}            
            />
            
        </div>
    )
}

export default rutasPages
