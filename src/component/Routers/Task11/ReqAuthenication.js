import React from 'react'
import { useAuth } from './Authenication'
import {Navigate,useLocation} from 'react-router-dom'
function ReqAuthenication(props)
{
    const auth=useAuth()
    const location=useLocation()
    if(auth.logined===1)
    {
        return props.children
    }
    else return <Navigate to='/login' state={{path:location.pathname}}/>
}
export default ReqAuthenication
