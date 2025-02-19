import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import Profile from '../views/Profile/Profile'
import Navbar from '../views/Navbar/Navbar'
import Protected from '../components/Protected'
import CreatePost from '../views/Create/CreatePost'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Navbar/>} /> */}
        <Route path="/" exact element={<h1>HOME</h1>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path='/create' element={<Protected><CreatePost/></Protected>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
