import React from 'react'
import "../Stail/CardHeader.css"
import logo from "../imajes/lazizbek.png"
import { NavLink } from 'react-router-dom'
function CardHeader() {
  return (
    <header>
     <div className="container">
        <nav>
            <ul className='ankr'>             
              <NavLink to="/about" id='Shop'>Shop</NavLink>
              <NavLink to="/pdp" id='Shop'>About</NavLink>
              <NavLink to="/" id='Shop'>Suncare 101</NavLink>
            </ul>
            <NavLink to="/">
                <img src={logo} alt="logo" className='logo'/>
            </NavLink>
            <ul className='ankr'>
                <NavLink to="/acaunt" id='Shop'>Account</NavLink>
                <NavLink to="/acaunt" id='Shop'>Search</NavLink>
                <NavLink to="/card" id='Card'>Cart (0)</NavLink>
            </ul>
        </nav>
     </div>
        
    </header>
  )
}

export default CardHeader