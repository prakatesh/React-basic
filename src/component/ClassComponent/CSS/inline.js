import React from 'react'

export default function Inline() {
    const a={
        color:"red",
        fontSize:"30px"
    }
    console.log(a.color)
  return (
    <div>
      <h1 style={a}>inline css</h1>
    </div>
  )
}
