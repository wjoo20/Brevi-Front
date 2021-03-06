import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/landingPages/LoginPage'
import Landing from '../pages/landingPages/Landing'
import RastreoBusesPage from '../pages/adminPages/RastreoBusesPage'
import ListarBuses from '../pages/adminPages/ListarBuses'
import Rutas from '../pages/adminPages/Rutas'
import ListarVueltaPage from '../pages/adminPages/ListarVueltaPage'
import CrearBus from '../pages/adminPages/CrearBus'
import ListarControlPage from '../pages/adminPages/ListarControlPage'


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Landing} />
                <Route path="/login" component={LoginPage} />
            </Switch>
            <Switch>
                <Route path="/admin/buses" component={ListarBuses} />
                <Route path="/admin/nuevoBus" component={CrearBus} />
                <Route path="/admin/rutas" component={Rutas} />
                <Route path="/admin/consulta" component={ListarVueltaPage} />
                <Route path="/admin/rastreoBuses" component={RastreoBusesPage} />
                <Route path="/admin/listarControlPage" component={ListarControlPage} />
            </Switch>
        </Router>
    )
}
