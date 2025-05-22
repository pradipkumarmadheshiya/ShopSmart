import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import {X, Menu, Search, User, ShoppingCart} from "lucide-react"

const Navbar = () => {

  const {
    isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery, currentPage, setCurrentPage, selectedProduct, setSelectedProduct, checkoutStage, setCheckoutStage, cartItems, setCartItems, categories, setCategories, currentCategory, setCurrentCategory, navigate, showUserLoggedIn, setShowUserLoggedIn, user, setUser
  }=useAppContext()

  useEffect(()=>{
      if (searchQuery.length>0){
          navigate("/products")
      }
  },[searchQuery])

  const logout=async ()=>{
      setUser(null)
      navigate("/")
  }

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-1 cursor-pointer mr-4'
              onClick={()=>{navigate("/"); window.scrollTo(0,0)}}>
                <img src="/logo.jpg" alt="logo" 
                className='h-6 w-6 rounded'/>
                <p>ShopSmart</p>
            </div>
            
            <div className='flex items-center'>

              <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full mx-2 sm:mx-4">
                  <input onChange={(e)=>setSearchQuery(e.target.value.trim())} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" 
                  type="text" placeholder="Search products" value={searchQuery}/>
                  <Search className='w-5 h-5 text-gray-700'/>
              </div>
              
              <div className='flex items-center space-x-4'>
                <div className='hidden sm:block'>
                  {user ? (
                    <div className='relative group'>
                        <User className='w-10 cursor-pointer text-gray-700 hover:text-gray-900' />
                        <ul className='hidden group-hover:block absolute top-6 right-0 bg-white shadow border border-gray-200 py-2.5 w-32 rounded-md text-sm z-40'>
                            <li onClick={()=>navigate("/userOrders")} className='p-1.5 pl-3 hover:bg-gray-100 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-gray-100 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                  ) : (
                    <button className='bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-4 py-2 cursor-pointer'
                      onClick={()=>setShowUserLoggedIn(true)}>
                        Login
                    </button>
                  )
                  }
                </div>
                <button className="relative text-gray-700 hover:text-gray-900 cursor-pointer mr-2"
                onClick={()=> {navigate("/cart"); window.scrollTo(0,0)}}>
                  <ShoppingCart />
                  {
                    cartItems.length > 0 && (
                      <span className='absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                        {cartItems.length}
                      </span>
                    )
                  }
                </button>
              </div>

              {/* Mobile Menu */}
              {
                isMenuOpen && (
                  <div onClick={()=>setIsMenuOpen(false)}
                  className='fixed inset-0 bg-black/50 z-50 md:hidden'>
                    <div onClick={(e)=>e.stopPropagation()}
                    className='bg-white h-full w-4/5 max-w-xs overflow-y-auto'>
                      <div className='p-4 border-b flex items-center justify-between'>
                        <span className='font-bold text-xl'>
                          Menu
                        </span>
                        <button onClick={()=>setIsMenuOpen(false)}>
                          <X className='hover:bg-gray-200 cursor-pointer rounded-full p-1 w-8 h-8'/>
                        </button>
                      </div>

                      <div className='p-2 flex flex-col justify-between h-[90vh]'>
                        <div>
                          {
                            user ? (
                              <div 
                                className="p-3 flex items-center border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                  navigate('/userOrders');
                                  setIsMenuOpen(false);
                                }}
                              >
                                <User size={20} className="mr-3" />
                                <span>My Orders</span>
                              </div>
                              ) : (
                              <div 
                                className="p-3 flex items-center border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                  setShowUserLoggedIn(true);
                                  setIsMenuOpen(false);
                                }}
                              >
                                <User size={20} className="mr-3" />
                                <span>Login / Sign Up</span>
                              </div>
                            )}

                            {categories.map(category => (
                              <div 
                                key={category.id}
                                className="p-3 flex items-center text-gray-700 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                                onClick={()=>{
                                    navigate(`/products/${category.url.toLocaleLowerCase()}`)
                                    setIsMenuOpen(false)
                                    scrollTo(0,0)
                                }}
                              >
                                {category.name}
                              </div>
                            ))}
                          </div>

                          {user && <div onClick={logout} className='p-1.5 pl-3 hover:bg-gray-100 cursor-pointer'>
                            Logout
                          </div>}
                      </div>
                    </div>
                  </div>
                )
              }

              <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
                  className='sm:hidden cursor-pointer hover:bg-gray-200 rounded ml-1'>
                  {
                      isMenuOpen? <X/> : <Menu/>
                  }
              </button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar