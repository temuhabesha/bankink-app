import React from 'react'
import './Navbar.css'
import logoimg from '../../assets/abyssiniaLogo.webp'

const Navbar = () => {
  return (
    <div className="outernavbar">
      <div className='header'>
      <img src={logoimg} alt="" />
      <nav className="navbar">
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">TRANSACTION</a></li>
            <li><a href="">REAL_TIME_UPDATES</a></li>
          </ul>
      </nav>
      <div className="login_and_profile">
           <div className="login">
            <ul>
                <li><a href="">LOGIN</a></li>
            </ul>
           </div>
           <div className="profile">
            <img src="" alt="profile image" />
           </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
