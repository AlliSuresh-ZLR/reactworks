import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navbar  from '../Navbar'
import Home from '../pages/Home'
import { Login } from '../pages/Login'
import { PrivateRoute } from './PrivateRoute'

const Routing = () => {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Home' element={<PrivateRoute><Home/></PrivateRoute>}/>
    <Route path='/About' element={<div>about route</div>}/>
    <Route path='/Contact' element={<div>contact route</div>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='*' element={<div>invalid route</div>}/>
</Routes>

</BrowserRouter>
  )
}

export default Routing