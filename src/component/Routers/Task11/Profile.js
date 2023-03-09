import React from 'react'
import { useAuth } from './Authenication'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
    const logout=()=>
    {
        auth.logout()
        navigate("/login")
    }
  return (
    <div>
        <h1>Welcome {auth.username}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
