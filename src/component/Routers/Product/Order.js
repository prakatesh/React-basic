import React from 'react'
import { useNavigate } from 'react-router-dom'
function Order() {
    const Navigate=useNavigate()
  return (
    <div>
      Orders is conformed
      <button onClick={()=>Navigate("/")} >Back</button>
    </div>
  )
}

export default Order
