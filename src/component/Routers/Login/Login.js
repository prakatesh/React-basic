import React, { useState } from 'react'
import { useAuth } from '../Authenication/Authenication'
import {useNavigate,useLocation} from 'react-router-dom'
function Login() {
  const location=useLocation()
  const auth=useAuth()
  const navigate=useNavigate()
   const [user,setuser]=useState("")
   const login=()=>
   {
    auth.login(user)
    navigate(location.state?location.state.path:"/",{replace:true})
   }
  return (
    <div>
     <input value={user} onChange={(e)=>setuser(e.target.value)}/>
     <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
