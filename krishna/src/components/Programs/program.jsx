import React from 'react'
import './program.css'
import program_1 from '../../assets/acads.png'
import program_2 from '../../assets/fest.png'
import program_3 from '../../assets/cult_life.png'
import program_4 from '../../assets/campus.png'
import program_5 from '../../assets/clubs.png'

import program_1_icon from '../../assets/acads_symbol.png'
import program_2_icon from '../../assets/fest_symbol.png'
import program_3_icon from '../../assets/cult_symbol.png'
import program_4_icon from '../../assets/campus_symbol.png'
import program_5_icon from '../../assets/clubs_symbol.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <p className="program-title">afss</p>
            <div className="caption">
              <img src={program_1_icon} alt="" />
              <p>Academic Life at IIITH</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <p className="program-title">scavsv</p>
            <div className="caption">
              <img src={program_2_icon} alt="" />
              <p>Fest Life at IIITH</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <p className="program-title">ffdg</p>
            <div className="caption">
              <img src={program_3_icon} alt="" />
              <p>Cultural Life at IIITH</p>
            </div>
        </div>
        <div className="program">
            <img src={program_4} alt="" />
            <p className="program-title">ewfwf</p>
            <div className="caption">
              <img src={program_4_icon} alt="" />
              <p>Campus Tour</p>
            </div>
        </div>
        <div className="program">
            <img src={program_5} alt="" />
            <p className="program-title">wewf</p>
            <div className="caption">
              <img src={program_5_icon} alt="" />
              <p>Clubs Council</p>
            </div>
        </div>
    </div>
  )
}

export default Program
