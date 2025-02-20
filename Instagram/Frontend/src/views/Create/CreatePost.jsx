import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const Navigate = useNavigate()
    const [media, setMedia] = React.useState('')
    const [caption, setCaption] = React.useState('')
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        axios.post('http://localhost:3000/user/create', { media, caption},{
           headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then(response => {
            alert(response.data.message)
            Navigate('/profile')
        })
        .catch(error => {
            console.log(error)
            setError(error.response?.data?.message)
        })  
    }


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">

        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Create Post</h1>

                <div className="input-grp mb-4">
                    <label htmlFor="media" className="block text-sm font-medium text-gray-700">Media:</label>
                    <input
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
                    type="text" id="media" name="media" placeholder="Enter Post URL" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <div className="input-grp mb-6">
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Caption:</label>
                    <input 
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    type="text" id="caption" name="caption" placeholder="Enter caption" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>

                <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>

            {error && <p className="text-red-500 text-xs mt-5 m-auto">{error}</p>}
            </form>
            
        </section>
    </main>
  )
}

export default Login