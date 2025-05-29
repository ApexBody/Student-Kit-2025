import React from 'react'
import './nav_bar.css'
import logo from '../../assets/logo.png'

const nav_bar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />    
      <ul>
        <li>Home</li>
        <li>information</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>About us</button></li>
      </ul>
    </nav>
  )
}

export default nav_bar
