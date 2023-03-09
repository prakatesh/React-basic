import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from '../Authenication/Authenication'
import style from '../CSS/Navbar.module.css'
function Navbar() {
  const auth=useAuth()
  const inlinestyle=({isActive})=>
  {
    return({
      fontSize:isActive?"25px":"20px",
      color:isActive?"white":"blue"
    })
  }
  return (
    <>
        <nav className={style.nav1}>
            <NavLink style={inlinestyle} to='/'>Home</NavLink>
            <NavLink  style={inlinestyle} to='/about'>About</NavLink>
            <NavLink style={inlinestyle} to='/products'>Product</NavLink>
            <NavLink style={inlinestyle} to='/users' >User</NavLink>
            <NavLink style={inlinestyle} to='/profile' >Profile</NavLink>
            {!auth.user&&
            <NavLink style={inlinestyle} to='/login' >Login</NavLink>
            }
        </nav>
    </>
    
  )
}

export default Navbar
