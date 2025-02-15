import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const Navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        axios.post("http://localhost:4000/users/login",{email,password})
        .then((res)=>{
            // console.log(res.data.token);
            const token = res.data.token
            if(!token){
                Navigate("/login")
            }
            localStorage.setItem("token", token) 
            Navigate("/")
        })
        .catch((err)=>{
            // console.log(err.response.data);
            setError(err.response.data.message)
        })
    }

  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center">
      <section className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="input-group flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter password"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
        </form>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </section>
    </main>
  )
}

export default Login
