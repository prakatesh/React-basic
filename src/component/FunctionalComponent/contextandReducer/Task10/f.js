import React, { useContext } from 'react'
import { Usercontext1 } from './Main'
function F() {
    const count=useContext(Usercontext1)
  return (
    <div>
        <h1>F</h1>
        <button onClick={()=>count.setDisptach("inc")}>INC</button>
        <button onClick={()=>count.setDisptach("dec")}>dec</button>
        <button onClick={()=>count.setDisptach("rest")}>rest</button>
    </div>
  )
}

export default F
