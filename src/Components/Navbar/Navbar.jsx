import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png';
export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">
  <NavLink className="navbar-brand text-white text-italic me-5" to="#"><img src={logo} width="40px" height="40px" alt="logo"/> ORIGINAL GOAL™ </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white active" aria-current="page" to={'home'}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white active" aria-current="page" to={'about'}>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white active" aria-current="page" to={'services'}>Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white active" aria-current="page" to={'contactus'}>Contact Us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white active" aria-current="page" to={''}>English</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white active" aria-current="page" to={''}>اللغة العربية</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    </>
  )
}
