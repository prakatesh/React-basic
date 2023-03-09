import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authenication from './Authenication'
import Bikes from './Bikes'
import Cars from './Cars'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Product from './Product'
import Profile from './Profile'
import ReqAuthenication from './ReqAuthenication'
import Sign from './Sign'

function Main() {
  return (
    <>
   <Authenication>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/product'  element={<ReqAuthenication><Product/></ReqAuthenication>}>
            <Route path='bikes' element={<Bikes/>} ></Route>
            <Route path='cars' element={<Cars/>} ></Route>
          </Route>
          <Route path='/profile'element={<Profile/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/sign' element={<Sign/>} ></Route>
      </Routes>
    </Authenication>
    </>
  )
}

export default Main
