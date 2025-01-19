import React from 'react'
import './Navbar.css'
import logoimg from '../../assets/abyssiniaLogo.webp'
import { Link } from 'react-router-dom'
import profileimage from '../../assets/jack.png'

const Navbar = () => {
  return (
    <div className="outernavbar">
      <div className='header'>
      <img src={logoimg} alt="" />
      <nav className="navbar">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="">ABOUT</Link></li>
            <li><Link to="/login">TRANSACTION</Link></li>
            <li><Link to="">REAL_TIME_UPDATES</Link></li>
          </ul>
      </nav>
      <div className="login_and_profile">
           <div className="login">
            <ul>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
           </div>
           <div className="profile">
            <Link to="/account"><img src={profileimage} alt="profile image" /><span>account</span></Link>
           </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
