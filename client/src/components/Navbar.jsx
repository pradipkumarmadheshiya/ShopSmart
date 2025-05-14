import React from 'react'
import { useAppContext } from '../context/AppContext'
import {X, Menu, Search, User, ShoppingCart} from "lucide-react"

const Navbar = () => {

  const {
    isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery, showSearchSuggestions, setShowSearchSuggestions, searchSuggestions, setSearchSuggestions, currentPage, setCurrentPage, selectedProduct, setSelectedProduct, isLoggedIn, setIsLoggedIn, checkoutStage, setCheckoutStage, cartItems, setCartItems, categories, setCategories, currentCategory, setCurrentCategory, showLoginModal, setShowLoginModal
  }=useAppContext()

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleProductClick=(product)=>{
    setSelectedProduct(product);
    setCurrentPage('product-details');
  }

  const handleCategoryClick = (categoryName) => {
    setCurrentCategory(categoryName);
    setCurrentPage('category');
    setIsMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-1 cursor-pointer mr-3'
              onClick={()=>navigateTo("home")}>
                <img src="/logo.jpg" alt="logo" 
                className='h-6 w-6 rounded'/>
                <p>ShopSmart</p>
            </div>
            
            <div className='flex items-center'>
              {/* Search Bar */}
              <div className='flex flex-1 ml-4 mr-2 sm:mr-4 relative'>
                <div className='flex w-full'>
                  <input type="text" placeholder='Search Products' 
                  className='w-full py-2 px-2 border border-gray-300 rounded-l-md focus:outline-none'
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  onBlur={()=>setTimeout(()=>setShowSearchSuggestions(false),2000)} 
                  onFocus={()=>searchQuery.length>2 && setShowSearchSuggestions(true)}/>
                  <button className='bg-gray-500 text-white px-2 rounded-r-md hover:bg-gray-600 cursor-pointer'>
                    <Search className='w-4 h-4 sm:w-6 sm:h-6'/>
                  </button>
                </div>
              </div>
              {/* Search Suggestions */}
              {
                showSearchSuggestions && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50 mt-1">
                    {
                      searchSuggestions.length>0? (
                        searchSuggestions.map((product)=>(
                          <div key={product.id} 
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={()=>{handleProductClick(product); 
                            setShowSearchSuggestions(false);
                            setSearchQuery('');
                          }}>
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div className="ml-2">
                              <div className="text-sm font-medium">{product.name}</div>
                              <div className="text-xs text-gray-500">{product.category}</div>
                            </div>
                          </div>
                        ))
                      ) :
                      (
                        <div className="p-3 text-center text-gray-500">No products found</div>
                      )
                    }
                  </div>
                )
              }
              {/* Right Navigation */}
              <div className='flex items-center space-x-4'>
                <div className='hidden sm:block'>
                  {isLoggedIn ? (
                    <div className='relative group'>
                      <button className="flex items-center justify-center hover:bg-gray-200 cursor-pointer p-2 rounded-full text-gray-700"
                      onClick={()=>navigateTo("account")}>
                        <User className='mr-1 '/>
                      </button>
                    </div>
                  ) : (
                    <button className='bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-4 py-2 cursor-pointer'
                      onClick={()=>setShowLoginModal(true)}>
                        Login
                    </button>
                  )
                  }
                </div>
                <button className="relative text-gray-700 hover:text-gray-900 cursor-pointer mr-2"
                onClick={()=>{setCheckoutStage("cart"); navigateTo("cart")}}>
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
                  className='fixed inset-0 bg-gray-200 z-50 md:hidden'>
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

                      <div className='p-2'>
                        {
                          isLoggedIn ? (
                            <div 
                              className="p-3 flex items-center border-b border-gray-300 cursor-pointer"
                              onClick={() => {
                                navigateTo('account');
                                setIsMenuOpen(false);
                              }}
                            >
                              <User size={20} className="mr-3" />
                              <span>My Account</span>
                            </div>
                            ) : (
                            <div 
                              className="p-3 flex items-center border-b border-gray-300 cursor-pointer"
                              onClick={() => {
                                setShowLoginModal(true);
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
                              className="p-3 flex items-center border-b border-gray-200"
                              onClick={() => handleCategoryClick(category.name)}
                            >
                              <span className="mr-3">{category.icon}</span>
                              {category.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )
              }

              <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
                  className='sm:hidden cursor-pointer hover:bg-gray-200 rounded hover:p-1'>
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