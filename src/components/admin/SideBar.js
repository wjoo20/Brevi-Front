import React from 'react'

function SideBar() {
    return (
        <div>
            <ul className="sidebar-menu">
                <li><a className="nav-link" href="listarBuses.html"><i className="fas fa-bus"></i><span>Buses</span></a></li>
                <li><a className="nav-link" href="CRUD-rutas.html"><i className="fas fa-road"></i><span>Rutas</span></a></li>
                <li><a className="nav-link" href="blank.html"><i className="fas fa-map-marker-alt"></i><span>Rastreador</span></a></li>
                <li><a className="nav-link" href="blank.html"><i className="far fa-clipboard"></i><span>Consulta de procesos</span></a></li>
            </ul>            
        </div>
    )
}

export default SideBar
