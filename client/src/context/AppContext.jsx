import { createContext, useContext, useEffect, useState } from "react";
import { productsList, categoriesList } from "../constants";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("login");
  const [showUserLoggedIn, setShowUserLoggedIn] = useState(false);
  const [checkoutStage, setCheckoutStage] = useState("cart");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("localStorageCartItems")) || {}
  );
  const [products, setProducts] = useState(productsList);
  const [categories, setCategories] = useState(categoriesList);
  const [userOrders, setUserOrders] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const navigate = useNavigate();
  const [addressFormData2, setAddressFormData2] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "cod",
  });

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item.id === Number(key));
      product.quantity = cartItems[key];
      tempArray.push(product);
    }
    setCartArray(tempArray);
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 2500 },
    brands: [],
    ratings: 0,
    colors: [],
    sizes: [],
    discount: false,
  });
  const [addressFormData, setAddressFormData] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "cod",
  });

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    localStorage.setItem("localStorageCartItems", JSON.stringify(cartData));
    toast.success("Added to Cart");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.error("Removed from Cart");
    setCartItems(cartData);
    localStorage.setItem("localStorageCartItems", JSON.stringify(cartData));
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    searchQuery,
    setSearchQuery,
    selectedProduct,
    setSelectedProduct,
    currentPage,
    setCurrentPage,
    showUserLoggedIn,
    setShowUserLoggedIn,
    checkoutStage,
    setCheckoutStage,
    cartItems,
    setCartItems,
    categories,
    setCategories,
    products,
    setProducts,
    userOrders,
    setUserOrders,
    currentCategory,
    setCurrentCategory,
    sortOption,
    setSortOption,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    filters,
    setFilters,
    navigate,
    addressFormData,
    setAddressFormData,
    isLoading,
    setIsLoading,
    user,
    setUser,
    getCart,
    addToCart,
    removeFromCart,
    getCartCount,
    cartArray,
    setCartArray,
    addressFormData2,
    setAddressFormData2,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
