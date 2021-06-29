import Rutas from '../pages/adminPages/Rutas'
import axios from 'axios';

const RouteInfo = ({ info }) => {

    const deleteControlPoint = (id) => {
        let rpta = window.confirm('¿Seguro que desea eliminar este registro?');
        if (rpta) {
            axios.delete("http://3.208.58.70/usuario/b'gAAAAABgz3FA4eAx6QbcppWtmdJwPrq1wRXoQB8uatdrly9CYgtiFOcelRXNSY_vY3AfkMgKlMfYEv4k1HAuiFMZcJmC02F_TQ=='/controlRuta/"+id+"/")
            .then(res => {
                console.log(res)
                window.location.reload();
            })
        }        
    }

    return (
        <div className="location-info text-center">
            <h4>Punto de Control</h4>
            <ul>
                <li>Ruta: <strong>{info.ruta}</strong> </li>
                <li>Orden: <strong>{info.orden}</strong> </li>
                <li>Tiempo de paso: <strong>{info.tiempo} min</strong> </li>
            </ul>
            <a className="btn btn-primary pointActions"><i className="fa fa-edit"/> Editar</a>
            <a className="btn btn-primary pointActions" onClick={() => deleteControlPoint(info.id)}><i className="fa fa-trash"/> Eliminar</a>
        </div>
    )
}

export default RouteInfo
