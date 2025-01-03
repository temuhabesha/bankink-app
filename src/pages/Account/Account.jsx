import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <div className='account'>
      <div className="inner_account">
        <div className="title">
            <h1>Account Opening</h1>
        </div>
        <form action="">
           <div> 
            <label htmlFor="">Title</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="">Full Name*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Father's Full Name*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Mother's Full Name*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Nationality*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Gender*</label>
            <select name="" id="">
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Date of Birth*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Place of Birth*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Mrital Status*</label>
            <select name="" id="">
                <option value="single" >single</option>
                <option value="married">married</option>
                <option value="separeted">separeted</option>
                <option value="divorced">divorced</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Region*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Region City</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Sub city/Zone*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Woreda*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Kebele*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Mobile Number*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">House Number*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Office Phone</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Id Type*</label>
            <select name="" id="">
                <option value="National ID" >National ID</option>
                <option value="driving license">driving license</option>
                <option value="passport">passport</option>
                <option value="schoole id">schoole id</option>
            </select>
            </div>
            <div>
            <label htmlFor="">ID Number*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">ID Issue Date*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">ID Expired date*</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">ID Issue</label>
            <input type="text"  />
            </div>
            <div>
            <label htmlFor="">Employment Detail</label>
            <select name="" id="">
                <option value="employed" >National ID</option>
                <option value="self employed">self employed</option>
                <option value="unemployed">unemployed</option>
                <option value="house wife">house wife</option>
                <option value="student">student</option>
                <option value="pensioner">pensioner</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Account Type</label>
            <select name="" id="">
                <option value="savings account" >savings account</option>
                <option value="cheking accounts">cheking accounts</option>
                <option value="special saving accounts">special saving accounts</option>
            </select>
            </div>
            <div>
            <label htmlFor="">if you have an account please enter your account number</label>
            <input type="text" />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Account
