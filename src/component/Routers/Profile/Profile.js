import React from 'react'
import { useAuth } from '../Authenication/Authenication'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate=useNavigate()
  const auth=useAuth()
  const logout=()=>
  {
    auth.logout()
    navigate("/login")
  }
  return (
    <div>
      <h3>Welcome {auth.user}</h3>
      <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Profile
