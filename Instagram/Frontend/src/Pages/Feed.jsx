import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const Feed = () => {
  const Navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState("");
  const token = localStorage.getItem("token");
  const [isliked, setIsliked] = useState(false);

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
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Navigate]);


  const likesHandler = (postId) => {
    // console.log(likes);
    const token = localStorage.getItem("token");
    
    axios.patch(`http://localhost:3000/post/update/${postId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: res.data.postData.likes } : post
        )
      );
      setIsliked(!isliked);
    }) 
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className=" w-full bg-black text-white flex justify-center p-8 relative">
        <Navbar />
      <div className="w-[85%] h-full overflow-auto flex flex-col gap-3">
        <div className="w-[35rem] ">
        {posts?.map((post, index) => (
          <div
            key={index}
            className=" flex flex-col mb-9 ml-48"
          >
            <div className=" flex flex-col gap-1">
              <div className="flex gap-3 ">
                <div className="flex  gap-2">
                    <img
                    src={post?.user?.profilePicture}
                    alt=""
                    className="w-8 h-8 rounded-full"
                    />
                    <h2>{post?.user?.username} </h2>
                </div> 
              </div>
              <div>
                <img src={post.media} alt="Profile" className="w-96" />
                <div className="mt-2 flex justify-between">
                    <div className=" flex gap-3 text-2xl ">
                        <div
                        onClick={()=>{
                          likesHandler(post._id)
                        }}
                        className="cursor-pointer">
                          {post?.likes?.includes(post.user._id) ? <FaHeart /> : <FaRegHeart />}
                        </div>
                        <div className="cursor-pointer">
                        <FaRegComment />
                        </div>
                        <div className="cursor-pointer">
                        <RiTelegram2Line />
                        </div>
                    </div>
                    <div className="text-2xl"> 
                        <FaRegBookmark />
                    </div>
                </div>
              </div>
              <div >
                <p>{post?.likes?.length} likes</p>
              </div>
              <div>
                <p>{post.caption}</p>
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