import React, { useState } from 'react'
import './Account.css'
import axios from 'axios'

const Account = () => {

  const[fathername,setfathername] = useState('');
  const[fullname,setfullname] = useState('');
  const[mothername,setmothername] = useState('');
  const[Nationality,setnationality] = useState('');
  const[dateofbirth,setdateofbirth] = useState('');
  const[birthplace,setbirthplace] = useState('');
  const[Region,setregion] = useState('');
  const[regioncity,setregioncity] = useState('');
  const[zone,setzone] = useState('');
  const[Woreda,setworeda] = useState('');
  const[Kebele,setkebele] = useState('');
  const[house,sethousenumber] = useState('');
  const[Mobile,setmobile] = useState('');
  const[Office,setofficenumber] = useState('');
  const[Gender,setgender] = useState('');
  const[mritalstatus,setmritalstatus] = useState('');
  const[accountnumber,setaccountnumber] = useState('');
  const[accounttype,setaccounttype] = useState('');
  const[employdetail,setemploymentdetail] = useState('');
  const[idtype,setidtype] = useState('');

 async function handelsubmit(event) {
   event.preventDefault();
    try {
      await axios.post('http://localhost:3002/register',{fullname,fathername, mothername,Nationality,dateofbirth,birthplace,Region,regioncity,zone,Woreda,Kebele,house,Mobile,Office,Gender,mritalstatus,accountnumber,accounttype,employdetail,idtype})
    } catch (error) {
      console.log(error)
    }
 }
  return (
    <div className='account'>
      <div className="inner_account">
        <div className="title">
            <h1>Account Opening</h1>
        </div>
        <form onSubmit={handelsubmit}>
           <div> 
            <label htmlFor="">Title</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="">Full Name*</label>
            <input type="text"  onChange={e=>setfullname(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Father's Full Name*</label>
            <input type="text"  onChange={e=>setfathername(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Mother's Full Name*</label>
            <input type="text"  onChange={e=>setmothername(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Nationality*</label>
            <input type="text"  onChange={e=>setnationality(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Gender*</label>
            <select name="" id="" onChange={e=>setgender(e.target.value)}>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Date of Birth*</label>
            <input type="text"  onChange={e=>setdateofbirth(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Place of Birth*</label>
            <input type="text"  onChange={e=>setbirthplace(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Mrital Status*</label>
            <select name="" id="" onChange={e=>setmritalstatus(e.target.value)}>
                <option value="single" >single</option>
                <option value="married">married</option>
                <option value="separeted">separeted</option>
                <option value="divorced">divorced</option>
            </select>
            </div>
            <div>
            <label htmlFor="">Region*</label>
            <input type="text"   onChange={e=>setregion(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Region City</label>
            <input type="text"   onChange={e=>setregioncity(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Sub city/Zone*</label>
            <input type="text"   onChange={e=>setzone(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Woreda*</label>
            <input type="text"   onChange={e=>setworeda(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Kebele*</label>
            <input type="text"   onChange={e=>setkebele(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Mobile Number*</label>
            <input type="text"   onChange={e=>setmobile(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">House Number*</label>
            <input type="text"   onChange={e=>sethousenumber(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Office Phone</label>
            <input type="text"   onChange={e=>setofficenumber(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="">Id Type*</label>
            <select name="" id="" onChange={e=>setidtype(e.target.value)}>
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
            <select name="" id="" onChange={e=>setemploymentdetail(e.target.value)}>
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
            <select name="" id="" onChange={e=>setaccounttype(e.target.value)}>
                <option value="savings account" >savings account</option>
                <option value="cheking accounts">cheking accounts</option>
                <option value="special saving accounts">special saving accounts</option>
            </select>
            </div>
            <div>
            <label htmlFor="">if you have an account please enter your account number</label>
            <input type="text" onChange={e=>setaccountnumber(e.target.value)}/>
            </div>
            <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Account
