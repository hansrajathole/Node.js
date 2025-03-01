import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
    const navigate = useNavigate();
    const [media, setMedia] = useState(null);
    const [caption, setCaption] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/post/create', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => {
                toast.success(response.data.message);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.response?.data?.message);
            });
    };

    const generateCaption = async () => {
        if (!media) {
            toast.error("Please select an image first!");
            return;
        }
        console.log(media);
        
        setLoading(true);
        const formData = new FormData();
        formData.append("media", media);
        const token = localStorage.getItem("token");

        try {
            const response = await axios.post("http://localhost:3000/ai/", formData,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            setCaption(response.data.caption);
            toast.success("Caption Generated Successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to generate caption");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-black">
            <Navbar />
            <section className="bg-black text-white p-6 rounded-lg shadow-md w-full max-w-md border border-gray-800 flex flex-col items-center">
                <h1 className="text-xl font-bold mb-6 text-center">Create New Post</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <label className="text-gray-400 text-sm">Upload Image</label>
                    <input
                        accept='image/*'
                        name='media'
                        type="file"
                        onChange={(e) => setMedia(e.target.files[0])}
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-gray-500"
                    />

                    <button type="button" onClick={generateCaption} className="w-full py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all">
                        {loading ? 'Generating...' : 'Generate Caption'}
                    </button>

                    <label className="text-gray-400 text-sm">Caption</label>
                    <textarea
                        name='caption'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Write a caption..."
                        className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-gray-500 resize-none h-20"
                    />

                    <button className="w-full cursor-pointer active:scale-95 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all">
                        Share
                    </button>

                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                </form>
            </section>
            <ToastContainer />
        </main>
    );
};

export default CreatePost;
