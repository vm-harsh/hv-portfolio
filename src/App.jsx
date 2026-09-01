import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App