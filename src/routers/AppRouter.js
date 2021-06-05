import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import FeaturesPage from '../pages/landingPages/FeaturesPage'
import MisVisPage from '../pages/landingPages/MisVisPage'
import HomePage from '../pages/landingPages/HomePage'
import ContactPage from '../pages/landingPages/ContactPage'
import Footer from '../components/Footer'
import LoginPage from '../pages/landingPages/LoginPage'
import listarBusesPages from '../pages/adminPages/listarBusesPages'

export default function AppRouter() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route path="/misVis" component={MisVisPage}/>
                <Route path="/features" component={FeaturesPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/listarBuses" component={listarBusesPages}/>
            </Switch>
            <Footer/>           
        </Router>
    )
}
