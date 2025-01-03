import React from 'react'
import './Ifb.css'
import ifbimage from '../../assets/IFB.png'

const IFB = () => {
  return (
    <div className='ifb'>
      <div className="innerifb">
        <div className="title">
            <h1>Interest Free Banking</h1>
        </div>
        <div className="discription_and_image">
            <img src={ifbimage} alt="" />
            <div className="discription">
                <p>Bank of Abyssinia provides a specialized Interest-Free Banking service with a brand name of “AbyssinAmeen” with unique product features and benefits. The product and services provided by BoA fulfill the need of our esteemed customers and fully in compliance with the Shari’a principles. The Bank has established Sharia advisors who have ample experience in commercial jurisprudence fiqeh, muamelat, and well known to the public at large and who ascertains every activity of the bank is performed in conformity with pertinent Sharia laws.</p>
                <a href=""><span>Learn More</span></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default IFB
