import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login1'>
      <h1>Log In</h1>
      <form>
        <div className="useremail">
          <label htmlFor="email">Enter Your Email</label>
          <input type="text" placeholder='Email'/>
        </div>
        <div className="userpassword">
          <label htmlFor="password">Enter Password</label>
          <input type="password" placeholder='Password'/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
