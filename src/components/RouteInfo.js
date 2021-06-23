const RouteInfo = ({ info }) => {
    return (
        <div className="location-info">
            <h4>Punto de Control</h4>
            <ul>
                <li>ID: <strong>{info.id}</strong> </li>
                <li>TÍTULO: <strong>{info.title}</strong> </li>
            </ul>
            <a className="btn btn-primary pointActions"><i className="fa fa-edit"/> Editar</a>
            <a className="btn btn-primary pointActions"><i className="fa fa-trash"/> Eliminar</a>
        </div>
    )
}

export default RouteInfo
