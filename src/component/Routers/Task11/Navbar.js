import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.css'
import { useAuth } from './Authenication'
function Navbar() {
  const auth=useAuth()
    const inlinestyle=({isActive})=>
    {
        return({
            fontSize:isActive?"30px":"20px",
            color:isActive?"red":"black"
        })
    }
  return (
    <>
      <nav>
        <NavLink style={inlinestyle} to='/'>Home</NavLink>
        <NavLink style={inlinestyle} to='/product'>Product</NavLink>
        {auth.logined===1?<NavLink style={inlinestyle} to='/profile'>Profile</NavLink>:<NavLink style={inlinestyle} to='/login' >Login</NavLink>}
        {auth.signed===1?"":<NavLink style={inlinestyle} to='/sign' >Sign up</NavLink>}
      </nav>
    </>
  )
}

export default Navbar
