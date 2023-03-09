import React from 'react'

export default function ListRending() {
    var a=[
        {
        id:1,
        name:"prax",
        ages:20
    },
    {
        id:2,
        name:"sri",
        ages:19
    },
    {
        id:3,
        name:"sada",
        ages:25
    }
]
  return (
    <div>
      {a.map((x,key1)=><h1>{key1} Name {x.name} with {x.ages}</h1>)}
    </div>
  )
}
