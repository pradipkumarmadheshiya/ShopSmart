import React, { useState } from 'react';
import { Star, Plus, Minus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  
  const {products, addToCart, removeFromCart, navigate, setShowUserLoggedIn, user}=useAppContext()

  const {id}=useParams()
  const product=products.find((item)=>item.id==id)

  const handleBuyNow = () => {
    if (!user) {
      alert("Please Login/Signup first");
      setShowUserLoggedIn(true); 
      return;
    }

    navigate("/checkout");
    window.scrollTo(0, 0);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="w-fit rounded-lg bg-gray-100">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title}
              className="w-full h-96 lg:h-[500px] object-cover cursor-zoom-in hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-gray-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Title and Rating */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-1">{product.brand}</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount?.toLocaleString() || 1} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-b border-gray-300 pb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-green-600">$ {product.price?.toLocaleString()}</span>
              <span className="text-xl text-gray-500 line-through">$ {product.originalPrice.toLocaleString()}</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                {product.discount}% OFF
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
          </div>

          {/* Size Selection */}
          {product.sizes && <div>
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'border-gray-500 bg-blue-50 text-gray-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>}

          {/* Quantity Selector */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => removeFromCart(product.id)
                }
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border border-gray-300 rounded-md min-w-16 text-center">
                {(JSON.parse(localStorage.getItem("localStorageCartItems")))[product.id] || 0}
              </span>
              <button
                onClick={() =>addToCart(product.id)
                }
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button onClick={()=>{addToCart(product.id); handleQuantityChange('increment')}}
            className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors duration-200 cursor-pointer">
              Add to Cart
            </button>
            <button onClick={handleBuyNow}
            className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails
