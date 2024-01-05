import React from 'react'
import Navbar from './Components/Navbar'
import HeroComponent from './Components/HeroComponent'
import AboutComponent from './Components/AboutComponent'
import ProjectComponent from './Components/ProjectComponent'
import CertificateComponent from './Components/CertificateComponent'
import ContactComponent from './Components/ContactComponent'
import FooterComponent from './Components/FooterComponent'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroComponent />
      </header>
      <main>
        <AboutComponent />
        <ProjectComponent />
        <CertificateComponent />
      </main>
      <footer>
        <ContactComponent />
        <FooterComponent />
      </footer>
    </>
  )
}

export default App
