import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const CartPage = () => {
  const {products, cartItems, cartArray, setCartArray, addToCart, removeFromCart, navigate, user, setShowUserLoggedIn} = useAppContext()

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalMRP = cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemDiscount = totalMRP - subtotal;
    
    let promoDiscount = 0;
    if (appliedPromo) {
      promoDiscount = appliedPromo.type === 'percentage' 
        ? (subtotal * appliedPromo.value / 100)
        : appliedPromo.value;
    }
    
    const deliveryCharges = subtotal > 1000 ? 0 : 20;
    const finalTotal = subtotal - promoDiscount + deliveryCharges;
    
    return {
      totalMRP,
      itemDiscount,
      promoDiscount,
      subtotal,
      deliveryCharges,
      finalTotal
    };
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartArray(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const applyPromoCode = () => {
    const promoCodes = {
      'SAVE10': { type: 'percentage', value: 10, description: '10% off' },
      'FLAT100': { type: 'flat', value: 100, description: '$100 off' },
      'WELCOME20': { type: 'percentage', value: 20, description: '20% off' }
    };
    
    if (promoCodes[promoCode]) {
      setAppliedPromo(promoCodes[promoCode]);
    } else {
      toast.error('Invalid promo code');
    }
    setPromoCode('');
  };

  const totals = calculateTotals();

  const handleBuyNow = () => {
    if (!user) {
      alert("Please Login/Signup first");
      setShowUserLoggedIn(true); 
      return;
    }

    navigate("/checkout");
    window.scrollTo(0, 0);
  };

  if (cartArray.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto w-24 h-24 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add items to your cart to continue shopping</p>
            <button onClick={()=>{navigate("/products"); window.scrollTo(0,0)}}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-600 mt-2"><span className='text-black'>{cartArray.length}</span> items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cartArray.map((item, index) => (
                <div key={item.id} className={`p-6 ${index !== cartArray.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xl font-bold text-gray-900">${item.price}</span>
                            <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                            <span className="text-sm text-green-600 font-medium">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                            </span>
                          </div>
                          {!item.availability && (
                            <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">Qty:</span>
                          <div className="flex items-center border border-gray-00 rounded ">
                            <button 
                              onClick={() => {updateQuantity(item.id, item.quantity - 1);
                                toast.error("removed 1 item from cart")
                              }}
                              className="p-1 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300 min-w-12 text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => {updateQuantity(item.id, item.quantity + 1);
                                toast.success("1 more item added to cart")
                              }}
                              className="p-1 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Section */}
            <div className="bg-white rounded-lg shadow-sm mt-6 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Apply Promo Code</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button 
                  onClick={applyPromoCode}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-green-600 text-sm">
                    Promo code applied: {appliedPromo.description}
                  </span>
                </div>
              )}
              <div className="mt-3 text-sm text-gray-600">
                Try: SAVE10, FLAT100, WELCOME20
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Total MRP</span>
                  <span>${totals.totalMRP}</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Item Discount</span>
                  <span>-${totals.itemDiscount}</span>
                </div>
                
                {totals.promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Discount</span>
                    <span>-${totals.promoDiscount}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charges</span>
                  <span className={totals.deliveryCharges === 0 ? 'text-green-600' : ''}>
                    {totals.deliveryCharges === 0 ? 'FREE' : `$${totals.deliveryCharges}`}
                  </span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total Amount</span>
                  <span>${totals.finalTotal}</span>
                </div>
                
                {totals.itemDiscount + totals.promoDiscount > 0 && (
                  <div className="text-green-600 text-sm">
                    You saved ${totals.itemDiscount + totals.promoDiscount} on this order!
                  </div>
                )}
              </div>

              <button onClick={handleBuyNow}
              className="w-full mt-6 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors cursor-pointer">
                Proceed to Checkout
              </button>
              
              <button onClick={()=>{navigate("/products"); window.scrollTo(0,0)}}
              className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
                Continue Shopping
              </button>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Delivery Information</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Free delivery on orders above $1000</li>
                  <li>• Express delivery available</li>
                  <li>• Easy 30-day returns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;