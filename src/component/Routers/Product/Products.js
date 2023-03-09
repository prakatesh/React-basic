import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

function Products() {
    const inlinestyle=({isActive})=>
    {
        return({
            fontSize:isActive?"20px":"15px",
            color:isActive?"green":"blue",
            marginLeft:"5vh"
        })
    }
  return (
    <>
      All Products<br/>
      <input/><button>Search</button>
      <nav>
        <NavLink style={inlinestyle} to='bikes'>Bikes</NavLink>
        <NavLink style={inlinestyle} to='cars'>Cars</NavLink>
      </nav>
      <Outlet/>
    </>
  )
}

export default Products
