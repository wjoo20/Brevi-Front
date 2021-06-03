import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import FeaturesPage from '../pages/FeaturesPage'
import MisVisPage from '../pages/MisVisPage'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import Footer from '../components/Footer'
import LoginPage from '../pages/LoginPage'

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
            </Switch>
            <Footer/>           
        </Router>
    )
}
