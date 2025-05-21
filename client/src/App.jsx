import React from 'react'
import Navbar from './components/Navbar'
import CategoryNav from './components/CategoryNav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListingPage from './pages/ProductListingPage'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import {Toaster} from "react-hot-toast"
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import UserOrders from './pages/UserOrders'

const App = () => {

  const {showUserLoggedIn, user}=useAppContext()

  return (
    <div>
      <Navbar/>
      <CategoryNav/>

      {showUserLoggedIn ? <Login/> : null}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<ProductListingPage/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/orderConfirmation' element={<OrderConfirmationPage/>}/>
        <Route path='/userOrders' element={<UserOrders/>}/>
      </Routes>

      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App
