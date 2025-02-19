import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const Navigate = useNavigate()
    const [userdata, setUserdata] = useState({})

    

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!token){
            Navigate("/login")
        }
    
        axios.get("http://localhost:4000/users/profile",{
            headers : {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((res)=>{
            console.log(res);

            setUserdata(res.data);
            
        })
        .catch((err)=>{
            console.log("error aaya bhai",err);
            
        })


    }, [Navigate])
    
    console.log(userdata);
    
  return (
    <div className='h-screen w-full  p-6'>

        <div className=''>
            <img src={userdata.profilePicture} alt="" 
            className='h-28 w-28 rounded-full object-cover object-top'
            />

            <h2 className=' pt-2 text-xl font-medium'>{userdata.username}</h2>
           <div  className='flex gap-7 w-80 mt-2'>
                <div className=' flex flex-col items-center'>
                    <h1 className='font-medium'>Post</h1>
                    <p>{userdata?.posts?.length}</p>
                </div>
                <div className=' flex flex-col items-center '>
                    <h1 className='font-medium'>Follower</h1>
                    <p>{userdata?.followers?.length }</p>
                </div>
                <div className=' flex flex-col items-center '>
                    <h1 className='font-medium'>Folliwing</h1>
                    <p>{userdata?.followings?.length}</p>
                </div>
           </div>
        </div>
        <br />
        <hr />

        <div className='flex mt-3 gap-2'>
            {userdata.posts && userdata.posts.map((elem)=>(
                <div className=''>
                    <img src={elem.media} alt="" className='max-w-40' />
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Profile
