import React from 'react'
import './CSS/my.css'
export default function Checkcss({isloggin}) {
    const b=isloggin?"a1":"b1"
  return (
    <div>
      <div className={b}>nfcj</div>
    </div>
  )
}
