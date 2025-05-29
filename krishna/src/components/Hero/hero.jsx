import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h1>We ensure all the reuirements of a student is taken care of </h1>
      <p>we APEX have designed this Student Kit to resolve general queries of new students taking admission in IIIT Hyderabad in year 2025 </p>
      <button className='btn'>Explore More<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default hero
