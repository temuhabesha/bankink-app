import React, { useState } from 'react'
import axios from 'axios'

const Save = () => {
  const [account,setaccount]= useState();
  const [ammount,setammount] = useState();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/save",{account,ammount});
      alert(response.data.msg)
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  return (
    <div className="save">
      <h1>SAVE MONY</h1>
      <form onSubmit={handlesubmit}>
        <div className="account">
          <label htmlFor="account_number">account_number</label>
          <input type="text" placeholder="account_number" onChange={e=>setaccount(e.target.value)}/>
        </div>
        <div className="ammount">
          <label htmlFor="ammount">ammount</label>
          <input type="text" placeholder="ammount" onChange={e=>setammount(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Save
