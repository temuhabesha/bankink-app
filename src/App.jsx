import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account/Account'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>
  )
}

export default App
