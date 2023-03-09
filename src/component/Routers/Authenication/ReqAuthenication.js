import React from 'react'
import { useAuth } from './Authenication'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function ReqAuthenication(props) {
    const location=useLocation()
    const auth=useAuth()
      if(auth.user===null)
      {
        return <Navigate to="/login" state={{path:location.pathname}} ></Navigate>
      }
      return props.children
}

export default ReqAuthenication
