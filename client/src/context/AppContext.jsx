import { createContext, useContext, useState } from "react";
import { productsList, categoriesList, userOrdersData } from "../constants";

const  AppContext=createContext()

export const AppContextProvider=({children})=>{

    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const [searchQuery, setSearchQuery]=useState("")
    const [showSearchSuggestions, setShowSearchSuggestions]=useState(false)
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const [selectedProduct, setSelectedProduct]=useState(null)
    const [currentPage, setCurrentPage]=useState("home")
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const [checkoutStage, setCheckoutStage]=useState("cart")
    const [cartItems, setCartItems]=useState([])
    const [products, setProducts] = useState(productsList)
    const [categories, setCategories] = useState(categoriesList)
    const [userOrders, setUserOrders]=useState(userOrdersData)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [showLoginModal, setShowLoginModal]=useState(false)

    const value={
        isMenuOpen, setIsMenuOpen, searchQuery, setSearchQuery, showSearchSuggestions, setShowSearchSuggestions, searchSuggestions, setSearchSuggestions, selectedProduct, setSelectedProduct, currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn, checkoutStage, setCheckoutStage, cartItems, setCartItems, categories, setCategories, products, setProducts, userOrders, setUserOrders, currentCategory, setCurrentCategory, showLoginModal, setShowLoginModal
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext)
}
