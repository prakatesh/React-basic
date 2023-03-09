import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Home/Navbar'
import About from './About/About'
import Bikes from './Product/Bikes'
import Products from './Product/Products'
import Cars from './Product/Cars'
import PageNotFound from './PageNotFound/PageNotFound'
import Order from './Product/Order'
import User from './User/User'
import UserDet from './User/UserDet'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import { Authenication } from './Authenication/Authenication'
import ReqAuthenication from './Authenication/ReqAuthenication'
function Mian() {
  return (

    <>
    <Authenication>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/about'  element={<About/>}></Route>
          <Route path='/products' element={<ReqAuthenication><Products/></ReqAuthenication>}>
            <Route path='bikes' element={<Bikes/>}/>
            <Route path='cars' element={<Cars/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/orders' element={<Order/>}></Route>
          <Route path='/users' element={<User/>} ></Route>
          <Route path='users/:userid' element={<UserDet/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/profile' element={<ReqAuthenication><Profile/></ReqAuthenication>} ></Route>
        </Routes>
      </Authenication>
    </>
  )
}

export default Mian
