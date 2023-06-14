import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar_style.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link className="title">EtiquetteAcademy</Link>
        <div className="items">
            <Link className='nav_item' to="/">Home</Link>
            <Link className='nav_item' to="/tutor">Tutor</Link>
            <Link className='nav_item' to="/profile">Profile</Link>
        </div>
    </div>
  )
}
