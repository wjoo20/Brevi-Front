import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FeaturesPage from '../pages/landingPages/FeaturesPage'
import MisVisPage from '../pages/landingPages/MisVisPage'
import HomePage from '../pages/landingPages/HomePage'
import ContactPage from '../pages/landingPages/ContactPage'
import LoginPage from '../pages/landingPages/LoginPage'
import Landing from '../pages/landingPages/Landing'
import listarBusesPages from '../pages/adminPages/listarBusesPages'
import ListarBuses from '../pages/adminPages/ListarBuses'


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Landing}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/listarBuses" component={listarBusesPages}/>
            </Switch>                   
        </Router>        
    )
}
