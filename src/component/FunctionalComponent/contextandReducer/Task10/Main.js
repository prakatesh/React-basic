import React, { useReducer } from 'react'
import A from './A'
import B from './B'
import D from './D'
export const Usercontext1=React.createContext()
const initalval=0
const reducer=(state,action)=>
{
    switch(action)
    {
        case "inc":
            return state+1
        case "dec":
            return state-1
        case "reset":
            return initalval
    }
}
function Main() {
    const [count,disptach]=useReducer(reducer,initalval)
  return (
    <div>
        count-<h1>{count}</h1>
      <Usercontext1.Provider value={{setDisptach:disptach}}>
        <A/>
        <B/>
        <D/>
      </Usercontext1.Provider>
    </div>
  )
}

export default Main
