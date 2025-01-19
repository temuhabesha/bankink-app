import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const responce = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      const statusresult = (responce.status)
       if(statusresult == 200){
        navigate("/transaction");
        alert(responce.data.msg)
       } 

    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <div className="login1">
      <h1>Log In</h1>
      <form onSubmit={handlesubmit}>
        <div className="useremail">
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="userpassword">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
