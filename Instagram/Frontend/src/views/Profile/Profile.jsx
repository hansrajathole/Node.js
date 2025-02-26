import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Profile = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <div className="flex items-center gap-12 w-[60%]">
            <img
              src={userData.profilePicture}
              alt="Profile Pic"
              className="h-36 w-36 rounded-full border-4 border-gray-600"
            />
            <div>
              <div className="flex items-center gap-6">
                <h2 className="text-2xl font-semibold">{userData.username}</h2>
                <button className="bg-gray-800 text-white px-4 py-1 rounded-md">
                  Edit Profile
                </button>
                <button className="bg-gray-800 text-white px-4 py-1 rounded-md">
                  View Archive
                </button>
              </div>
              <div className="flex gap-8 mt-4">
                <span>{userData?.posts?.length} posts</span>
                <span>{userData?.followers?.length} followers</span>
                <span>{userData?.following?.length} following</span>
              </div>
              <p className="mt-2 text-gray-400">{userData.bio}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex gap-6 mt-8 border-t border-gray-700 pt-6">
            {userData?.highlights?.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={highlight.image}
                  alt="Highlight"
                  className="w-16 h-16 rounded-full border-2 border-gray-500"
                />
                <p className="text-sm text-gray-400 mt-1">{highlight.title}</p>
              </div>
            ))}
          </div>

          {/* Posts Section */}
          <div className="border-t border-gray-700 mt-8 w-[60%]">
            <div className="flex justify-center gap-10 py-4">
              <span className="border-b-2 border-white pb-2">Posts</span>
              <span className="text-gray-500">Saved</span>
              <span className="text-gray-500">Tagged</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {userData?.posts?.map((post, index) => (
                <div key={index} className="relative group">
                  <img
                    src={post.media}
                    alt="Post"
                    className="h-48 w-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center">
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
