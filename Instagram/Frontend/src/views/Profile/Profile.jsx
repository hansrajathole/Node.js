import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Profile = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [posts, setposts] = useState([]);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setposts(res.data.posts);
        setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex">
      {/* Sidebar Navbar */}
      <div className="w-[20%] border-r border-gray-700">
        <Navbar />
      </div>

      {/* Profile Section */}
      {userData && (
        <div className="flex-1 flex flex-col items-center p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-12 w-[60%] relative">
            <img
              src={userData.profilePicture}
              alt="Profile Pic"
              className="h-36 w-36 rounded-full border-4 border-gray-600 object-cover"
            />
            <div>
              <div className="flex items-center gap-6">
                <h2 className="text-2xl font-semibold">{userData.username}</h2>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded-md transition duration-300">
                  Edit Profile
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded-md transition duration-300">
                  View Archive
                </button>
                <FiSettings
                  className="text-2xl cursor-pointer hover:text-gray-400 transition duration-300"
                  onClick={toggleSettings}
                />
              </div>
              <div className="flex gap-8 mt-4 text-lg">
                <span>{posts?.length} posts</span>
                <span>{userData?.followers?.length} followers</span>
                <span>{userData?.following?.length} following</span>
              </div>
              <p className="mt-2 text-gray-400">{userData.bio}</p>
            </div>
          </div>

          {/* Settings Popup */}
          {showSettings && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[300px] z-50">
                <ul className="space-y-2">
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">Apps and websites</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">QR code</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">Notifications</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">Settings and privacy</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">Supervision</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300">Login activity</li>
                  <li className="cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300" onClick={handleLogout}>Log Out</li>
                  <li className="text-red-500 cursor-pointer p-2 hover:bg-gray-700 rounded transition duration-300" onClick={closeSettings}>Cancel</li>
                </ul>
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="flex gap-6 mt-8 border-t border-gray-700 pt-6">
            {userData?.highlights?.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={highlight.image}
                  alt="Highlight"
                  className="w-16 h-16 rounded-full border-2 border-gray-500 object-cover"
                />
                <p className="text-sm text-gray-400 mt-1">{highlight.title}</p>
              </div>
            ))}
          </div>

          {/* Posts Section */}
          <div className="border-t border-gray-700 mt-8 w-[60%]">
            <div className="flex justify-center gap-10 py-4">
              <span className="border-b-2 border-white pb-2 cursor-pointer">Posts</span>
              <span className="text-gray-500 cursor-pointer">Saved</span>
              <span className="text-gray-500 cursor-pointer">Tagged</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {posts?.map((post, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={post.media}
                    alt="Post"
                    className="h-48 w-48 object-cover transition duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-70 flex justify-center items-center transition duration-300">
                    <p className="text-white">{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;