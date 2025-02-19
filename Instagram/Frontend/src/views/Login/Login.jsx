import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const Navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:3000/user/login', { email, password })
        .then(response => {
            console.log(response)
            localStorage.setItem("token",response?.data?.token)
            Navigate('/profile')

            alert(response?.data?.message)
            // Redirect to home page or dashboard
        })
        .catch(error => {
            console.log(error?.response?.data?.message)
            setError(error.response?.data?.message)
        })  
    }


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">

        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                <div className="input-grp mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" id="email" name="email" placeholder="Enter email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="input-grp mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" id="password" name="password" placeholder="Enter password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>

            {error && <p className="text-red-500 text-xs mt-5 m-auto">{error}</p>}
            </form>
            
        </section>
    </main>
  )
}

export default Login