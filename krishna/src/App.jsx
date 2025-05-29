import React from 'react'
import Navbar from './components/nav_bar/nav_bar.jsx'
import Hero from './components/Hero/hero.jsx'
import Programs from './components/Programs/program.jsx'
import Title from './components/Title/title.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='WELCOME to IIIT HYDERABAD' title='Exceptional place for exceptional people'/>
        <Programs/>
      </div>
      
    </div>
  )
}

export default App

