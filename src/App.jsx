import React, { useState } from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// import productList from './components/data'
const App = () => {
  // const [data,setData]=useState([...productList])
  return (
     <BrowserRouter>
     <Navbar /> <br /><br /><br />
     <Routes>
      <Route path="/" element={<Product/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
     </Routes>
     <Footer />
     </BrowserRouter>
  )
}

export default App
