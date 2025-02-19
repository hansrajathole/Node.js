import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    const Navigate = useNavigate()
    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        
        const token = localStorage.getItem('token')
        axios.get("http://localhost:3000/user/profile",{
            headers :{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data.userData)
            setUserData(res.data.userData)
        })
        .catch((err) => {
            console.log(err)
            // alert("Error getting profile")
        })


    }, [Navigate])
    
    
  return (

      <>
      {
        userData && (
          <div className='p-4'>
            <div className='flex gap-4'>
              <div className='w-36'>
                <img src={userData.profilePicture} alt="Profile Pic" className='h-20 w-20 rounded-full' />
                <p>Name: {userData.username}</p>
                <p>bio : {userData.bio}</p>
              </div>
              <div className=' flex gap-4' >
                <h3>Followers: {userData?.followers?.length}</h3>
                <h3>Following: {userData?.following?.length}</h3>
              </div>
            </div>
            <br />
            <hr />
            <div>
              <h2>Posts</h2>
              <div className='flex gap-4'>
              {
                userData?.posts?.map((post, index) => (
                  <div key={index} className='mt-3 flex gap-2'>
                    <img src={post.media} alt="Post" className='h-40 w-40 rounded-2xl' />
                    {/* <p>{post.caption}</p> */}
                  </div>
                ))
              }
              </div>
            </div>
          </div>

        )
      }
      </>
      

  )
}

export default Profile
