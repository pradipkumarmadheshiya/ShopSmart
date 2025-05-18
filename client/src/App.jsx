import React from 'react'
import Navbar from './components/Navbar'
import CategoryNav from './components/CategoryNav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListingPage from './pages/ProductListingPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <CategoryNav/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/all-products' element={<ProductListingPage/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App