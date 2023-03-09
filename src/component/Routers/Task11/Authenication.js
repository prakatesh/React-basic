import React, {  useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AuthContext=React.createContext()
export default function Authenication(props) 
{
  const navigate=useNavigate()
    const [list,setlist]=useState([])
    const [signed,setsigned]=useState(0)
    const [logined,setlogined]=useState(0)
    const [username,setusername]=useState("Guest")
    const sign=(name,email,pass)=>
    {
      setlist([...list,{name:name,email:email,pass:pass}])  
      setsigned(1)
    }
    const login=(email1,pass1)=>
    {
      list.map(x=>
      {
        if(email1===x.email)
        {
          if(pass1===x.pass)
          {
            setlogined(1)
            setusername(x.name)
            navigate('/')
            return
          }
        }
      })

      // alert("not found")
  }
  const logout=()=>
  {
    setlogined(0)
  }
  return (
    <>
      <AuthContext.Provider value={{sign,login,list,signed,logined,username,logout}} >
        {props.children}
      </AuthContext.Provider>
    </>
  )
}
export const useAuth=()=>{
  return useContext(AuthContext)
}