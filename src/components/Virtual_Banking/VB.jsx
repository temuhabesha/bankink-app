import React from 'react'
import './VB.css'
import vbimage from '../../assets/vb.jpg'

const VB = () => {
  return (
    <div className='vb'>
      <div className="innervb">
        <div className="title">
            <h1>Virtual Banking</h1>
        </div>
        <div className="discription_and_image">
            <img src={vbimage} alt="" />
        <div className="discription">
            <h1> Only at Bank of Abyssinia, discover more ways to bank than ever</h1>
            <p>Bank of Abyssinia proudly introduces the new self-service machine that hosts the service of branch banking through our excellent and friendly virtual tellers from the comfort of any ITM corner. Experience, virtual banking from Bank of Abyssinia for an instant, easy and convenient banking at your suitable locations.</p>
            <a href=""><span>Learn More</span></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VB
