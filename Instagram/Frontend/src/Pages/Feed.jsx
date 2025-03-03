import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const Feed = () => {
  const Navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [isfollow, setisfollow] = useState(false)
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      Navigate("/");
    }

    axios
      .get("http://localhost:3000/feed", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res?.data?.posts);
        setUser(res.data.user);
        console.log(res.data.posts);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Navigate || isfollow]);

  const likesHandler = (postId) => {
    axios
      .patch(
        `http://localhost:3000/post/update/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId ? { ...post, likes: res.data.postData.likes } : post
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const followUnfollowHandler = (updateUserId)=>{
    axios.patch(`http://localhost:3000/users/follow/${updateUserId}`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res)=>{
        console.log(res);
        
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.author._id === updateUserId
              ? { ...post, author: { ...post.author, followers: res.data.postData.followers } } // Only updating author fields
              : post
          )
        );
        console.log(posts);
        
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  const calculateHoursAgo = (createdAt) => {
    if (!createdAt) return "Unknown";
    const postDate = new Date(createdAt);
    if (isNaN(postDate.getTime())) return "Invalid Date";
    const currentDate = new Date();
    const differenceInMs = currentDate - postDate;
    const differenceInHours = Math.floor(differenceInMs / (1000 * 60 * 60));
  
    if (differenceInHours < 1) {
      const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
      return differenceInMinutes < 1 ? "Just now" : `${differenceInMinutes} min ago`;
    }
  
    if (differenceInHours >= 24) {
      const differenceInDays = Math.floor(differenceInHours / 24);
      return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago`;
    }
  
    return `${differenceInHours} hour${differenceInHours > 1 ? "s" : ""} ago`;
  };
  

  return (
    <div className="w-full bg-black text-white flex justify-end relative font-light">
      <Navbar />
      <div className="w-[80%] min-h-screen overflow-auto flex flex-col justify-center items-center gap-3 pt-8">
        <div className="w-[30rem]">
          {posts?.map((post, index) => (
            <div key={index} className="flex flex-col mb-2 rounded-md p-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <img
                      onClick={() => Navigate(`/user/${post?.author?._id}`)}   
                     src={post?.author?.profilePicture} alt="profilePicture" className="w-9 h-9 rounded-full" />
                    <div className="flex flex-col leading-tight">
                      <h2 className="font-medium">{post?.author?.username}</h2>
                      <p className="text-[0.8em] opacity-70">{calculateHoursAgo(post?.createdAt)}</p>
                    </div>
                    <div className="p-2">
                     
                     {!post.author.followers.includes(user._id) ?
                      <button 
                      onClick={()=>followUnfollowHandler(post?.author?._id)}
                      className="text-blue-500 rounded font-medium cursor-pointer"><span className="text-white">•</span> follow</button> : 
                        <div></div>
                      }
                      
                    </div>
                  </div>
                  <span className="cursor-pointer pr-2">
                    <BsThreeDots />
                  </span>
                </div>
                <div className="border border-gray-700 mt-2">
                  <img src={post.media.url} alt="post" className="w-full h-[35rem] object-contain" />
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="flex gap-3 text-2xl">
                    <div onClick={() => likesHandler(post._id)} className="cursor-pointer">
                      {post?.likes?.includes(user._id) ? <FaHeart /> : <FaRegHeart />}
                    </div>
                    <FaRegComment className="cursor-pointer" />
                    <RiTelegram2Line className="cursor-pointer" />
                  </div>
                  <FaRegBookmark className="text-2xl cursor-pointer" />
                </div>
                <div className="text-sm">
                  <p>{post?.likes?.length} likes</p>
                </div>
                <div className="text-sm">
                  <span className="font-medium mr-1.5">{post?.author?.username}</span>
                  <p className="inline break-words">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
