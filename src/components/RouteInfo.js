const RouteInfo = ({ info }) => {
    return (
        <div className="location-info">
            <h4>Punto de Control</h4>
            <ul>
                <li>Ruta: <strong>{info.ruta}</strong> </li>
                <li>Orden: <strong>{info.orden}</strong> </li>
                <li>Tiempo de paso: <strong>{info.tiempo} min</strong> </li>
            </ul>
            <a className="btn btn-primary pointActions"><i className="fa fa-edit"/> Editar</a>
            <a className="btn btn-primary pointActions"><i className="fa fa-trash"/> Eliminar</a>
        </div>
    )
}

export default RouteInfo
