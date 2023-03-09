import React, { Children } from 'react'
import ChildRending from './ChildRending'
export default function ParentlistRending() {
    var a=[
        {
        id:1,
        name:"prax",
        ages:20
    },
    {
        id:0,
        name:"sri",
        ages:19
    },
    {
        id:0,
        name:"sada",
        ages:25
    }
]
const b=a.map(x=><ChildRending key={x.id} name={x.name}></ChildRending>)
  return (
    <div>
      {b}
    </div>
  )
}
