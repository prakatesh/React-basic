import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const Nacvigate=useNavigate()
  return (
    <div>
      Home Page
      <button onClick={()=>{Nacvigate("orders")}}>PlaceOrder</button>
    </div>
  )
}

export default Home