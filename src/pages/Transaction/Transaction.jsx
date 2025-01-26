import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.jpg'
const Transaction = () => {
  return (
    <div className="transaction">
      <img src={image1} alt="" />

      <div className="innertransaction">
        <p>
          1, to save mony on your account please click here{" "}
          <span>
            <Link to="/save">SAVE</Link>
          </span>
        </p>

        <p>
          2, to transifer mony from account to account please cleck here{" "}
          <span>
            <Link to="/transfer">TRANSFER</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Transaction
