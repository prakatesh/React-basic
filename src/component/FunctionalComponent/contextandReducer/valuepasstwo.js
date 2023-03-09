import React from 'react'
import { Usercontext1 } from '../../../App'
export default function Valuepasstwo() {
  return (
    <div>
      <Usercontext1.Consumer>
        {
          val=>
          {
            return(<h1>{val.val1}``{val.val2}</h1>)
          }
        }
      </Usercontext1.Consumer>
    </div>
  )
}
