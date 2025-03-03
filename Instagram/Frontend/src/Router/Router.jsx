import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import Profile from '../views/Profile/Profile'
import Navbar from '../components/Navbar/Navbar'
import Protected from '../components/Protected/Protected'
import CreatePost from '../views/Create/CreatePost'
import UserProfile from '../views/UserProfile/UserProfile'
import Feed from '../Pages/Feed'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected><Feed/></Protected>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path='/user/:userId' element={<Protected><UserProfile/></Protected>}/>
        <Route path='/create' element={<Protected><CreatePost/></Protected>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
