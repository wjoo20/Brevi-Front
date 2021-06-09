import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Home from './HomePage'
import MisVis from './MisVisPage'
import Features from './FeaturesPage'
import Contact from './ContactPage'

function Landing() {
    return (
        <>
        <NavBar/>
        <Home/>
        <MisVis/>
        <Features/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Landing
