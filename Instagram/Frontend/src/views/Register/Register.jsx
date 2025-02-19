import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const Navigate = useNavigate()
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/user/register', { username, email, password })
        .then((response) => {
            localStorage.setItem("token",response.data.token)
            alert(response.data.message)
            Navigate('/')
        })
        .catch((error) => {
            seterror(error.response.data.message)
            console.error(error)
        });
        
        setusername("")
        setemail("")
        setPassword("")
    }


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">

        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

                <div className="input-grp mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input 
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    type="text" id="name" name="name" placeholder="Enter username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                
                <div className="input-grp mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input 
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    type="email" id="email" name="email" placeholder="Enter email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="input-grp mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password" id="password" name="password" placeholder="Enter password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>

            </form>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </section>
    </main>
  )
}

export default Register