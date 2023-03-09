import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      Product
      <NavLink to='cars' >Cars</NavLink>
      <NavLink to='bikes' >Bikes</NavLink>
      <Outlet/>
    </div>
  )
}

export default Product
