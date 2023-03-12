import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/service'
import Portfolio from './components/portfolio/port'
import Test from './components/testimonials/testimonials'
import Contact from './components/contacts/contact'
import Footer from './components/footer/footer'
import { Themeprovider } from './context'



function App() {



  return (

    <>

      <Themeprovider>

          <Header/>
          <Nav/>
          <About/>
          <Experience/>
          <Services/>
          <Portfolio/>
          <Test/>
          <Contact/>
          <Footer/>
          
      </Themeprovider>
    

    
    </>


  )
}

export default App