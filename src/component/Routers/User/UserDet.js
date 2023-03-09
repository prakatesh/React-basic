import React from 'react'
import { useParams,Outlet } from 'react-router-dom'
function UserDet() {
    const {userid}=useParams()
  return (
    <div>
      Detail of the user {userid}
    </div>
    
  )
}

export default UserDet
