import React from 'react'
import './Footer.css'
import twitter from "../../assets/twitter (1).png";
import facbook from "../../assets/facebook (1).png";
import linkdine from "../../assets/linkedin (1).png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="enerfooter">
        <div className="upperFooter">the content of the footer part</div>
        <div className="lowerfooter">
          <p>Bank of Abyssinia &copy; 2024 / All Rights Reserved</p>
          <div className="social_media">
            <img src={twitter} alt="twitter icon" className="twitter" />
            <img src={facbook} alt="facbook icon" className="faccbook" />
            <img src={linkdine} alt="linkdin icon" className="linkdin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
