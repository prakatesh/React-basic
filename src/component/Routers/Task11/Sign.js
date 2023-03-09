import React, { useState } from 'react'
import { useAuth } from './Authenication'
import { useNavigate } from 'react-router-dom'
export default function Sign() {
    const auth=useAuth()
    const navigate=useNavigate()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [rpass,setrpass]=useState("")
    const sign=(e)=>
    {
      e.preventDefault()
        if(pass!==rpass)
        {
          return(alert("invalidPassword"))
        }
        auth.sign(name,email,pass)
        navigate("/login")
    }
  return (
    <>
    <form onSubmit={sign}>
        <input placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} /><br/>
        <input placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} /><br/>
        <input type='password' placeholder='password' value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br/>
        <input placeholder='re-password' value={rpass} onChange={(e)=>{setrpass(e.target.value)}} /><br/>
        <button type='submit' >Sign-in</button>
     </form>
    
    </>
  )
}