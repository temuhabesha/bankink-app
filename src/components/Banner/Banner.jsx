import React from 'react'
import logo from '../../assets/logo'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      {/* {logo.map((index,imag)=>{
        return <img src={logo[imag]} alt="" />
      })} */}
      <img src={logo[0]} alt="" />
    </div>
  )
}

export default Banner
