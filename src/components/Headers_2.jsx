import React from 'react'
import "../Stail/Headers2.css"
import log2 from "../imajes/Headline.png"
import { NavLink } from 'react-router-dom'
function Hiuder() {
  return (
    <header>
     <div className="canteyner">
        <nav>
            <ul className='animation'>             
              <NavLink to="/about" id='Shop'>Shop</NavLink>
              <NavLink to="/pdp" id='Shop'>About</NavLink>
              <NavLink to="/" id='Shop'>Suncare 101</NavLink>
            </ul>
            <NavLink to="/">
                <img src={log2} alt="logo" className='log2'/>
            </NavLink>
            <ul className='animation'>
                <NavLink to="/acaunt" id='Shop'>Acaunt</NavLink>
                <NavLink to="/card" id='Shop'>Search</NavLink>
                <NavLink to="/card" id='Shop'>Cart (0)</NavLink>
            </ul>
        </nav>
     </div>
        
    </header>
  )
}

export default Hiuder