import React, { useState } from 'react'
import { useAuth } from './Authenication';
import { useNavigate,useLocation} from 'react-router-dom';
function Login(){
  const navigate=useNavigate()
  const location=useLocation()
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const auth=useAuth()
  const login=()=>
  {
    auth.login(email,pass)
    // console.log(auth.logined);
    // navigate(location.state?location.state.path:'/',{replace:true})
  }
return (
    <div>
      <input value={email} onChange={(e)=>{setemail(e.target.value)}} /><br/>
      <input value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br/>
      <button onClick={login} >Login</button>
    </div>
  )
}

export default Login;
