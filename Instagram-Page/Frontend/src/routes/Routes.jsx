
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Feed from '../views/Feed/Feed'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
