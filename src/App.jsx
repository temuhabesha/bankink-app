import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account/Account'
import Login from './pages/Login/Login'
import Transaction from './pages/Transaction/Transaction'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
    </Routes>
  )
}

export default App
