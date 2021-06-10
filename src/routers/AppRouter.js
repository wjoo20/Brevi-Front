import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/landingPages/LoginPage'
import Landing from '../pages/landingPages/Landing'
import ListarBusesPage from '../pages/adminPages/ListarBusesPage'
import ListarBuses from '../pages/adminPages/ListarBuses'
import ListarVueltaPage from '../pages/adminPages/ListarVueltaPage'
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
                <Route path="/admin/rutas" component={ListarBuses} />
                <Route path="/admin/consulta" component={ListarVueltaPage} />
                <Route path="/admin/listarBuses" component={ListarBusesPage} />
            </Switch>
        </Router>
    )
}
