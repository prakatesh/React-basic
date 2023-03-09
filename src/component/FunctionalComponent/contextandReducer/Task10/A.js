import React, { useContext } from 'react'
import { Usercontext1 } from './Main'
function A() {
  const setCout=useContext(Usercontext1)
  return (
    <div>
      <h1>A</h1>
      <button onClick={()=>setCout.setDisptach("inc")}>INC</button>
      <button onClick={()=>setCout.setDisptach("dec")}>Dec</button>
      <button onClick={()=>setCout.setDisptach("reset")}>reset</button>
    </div>
  )
}

export default A
