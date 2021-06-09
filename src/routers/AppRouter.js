import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/landingPages/LoginPage'
import Landing from '../pages/landingPages/Landing'
import listarBusesPage from '../pages/adminPages/listarBusesPage'
import ListarBuses from '../pages/adminPages/ListarBuses'


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Landing}/>   
                <Route path="/login" component={LoginPage}/>            
                <Route path="/listarBuses" component={listarBusesPage}/>
                {/* <Route path="/listarVuelta" component={listarVueltaPage}/>
                <Route path="/listarControl" component={listarControlPage}/> */}
            </Switch>                   
        </Router>        
    )
}
