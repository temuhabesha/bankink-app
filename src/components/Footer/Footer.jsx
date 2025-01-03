import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="enerfooter">
         <div className="upperFooter">
        the content of the footer part
      </div>
      <div className="lowerfooter">
        <p>Bank of Abyssinia &copy; 2024 / All Rights Reserved</p>
        <div className="social_media">
            <img src="" alt="twitter icon" className="twitter" />
            <img src="" alt="facbook icon" className="faccbook" />
            <img src="" alt="linkdin icon" className="linkdin" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
