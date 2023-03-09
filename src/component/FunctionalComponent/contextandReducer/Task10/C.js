import React, { useContext } from 'react'
import { Usercontext1 } from './Main'
function C() {
    const count=useContext(Usercontext1)
  return (
    <div>
        <h1>C</h1>
      <button onClick={()=>count.setDisptach("inc")}>INC</button>
      <button onClick={()=>count.setDisptach("dec")}>Dec</button>
      <button onClick={()=>count.setDisptach("reset")}>REset</button>
    </div>
  )
}

export default C
