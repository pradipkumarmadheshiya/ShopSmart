import { Check, Package, Truck, Calendar, MapPin, } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function OrderConfirmationPage() {

  const {userOrders, setUserOrders, navigate, cartArray}=useAppContext()

  const latestOrderIdx=userOrders.length-1

  let subtotal = userOrders[latestOrderIdx]?.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total=subtotal+tax+userOrders[latestOrderIdx]?.shipping.cost

  cartArray.forEach((item)=>{
    let tempItem={}
    tempItem.orderId=11111
    tempItem.orderDate=new Date().toLocaleDateString()
    tempItem.status="On the way"
    tempItem.estimatedDelivery=Number(new Date().getDate())+3
    tempItem.total=total
    tempItem.products={
      id:item.id,
      name:item.name,
      price:item.price,
      quantity:item.quantity,
      image:item.image
    }

  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-4">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="text-lg font-semibold text-gray-900">
              Order ID: <span className="text-gray-600">{userOrders[latestOrderIdx]?.orderId}</span>
            </div>
          </div>
        </div>

        {/* Order Status and Delivery Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Package className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Order Placed</h3>
                <p className="text-sm text-gray-600">{userOrders[latestOrderIdx]?.orderDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Truck className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
                <p className="text-sm text-gray-600">{userOrders[latestOrderIdx]?.estimatedDelivery}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Calendar className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Delivery Window</h3>
                <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {userOrders[latestOrderIdx]?.products.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 border-b border-gray-400 pb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(product.price * product.quantity).toFixed(0)}
                      </p>
                      <p className="text-sm text-gray-600">${product.price.toFixed(0)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="mt-6 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{userOrders[latestOrderIdx]?.shipping.method}</span>
                  <span className="text-gray-900">${userOrders[latestOrderIdx]?.shipping.cost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-4">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className='space-y-6'>
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Shipping Address
              </h2>
              <div className="text-gray-700">
                <p className="font-medium">{userOrders[latestOrderIdx]?.shippingAddress.name}</p>
                <p>{userOrders[latestOrderIdx]?.shippingAddress.street}</p>
                {userOrders[latestOrderIdx]?.shippingAddress.apartment && (
                  <p>{userOrders[latestOrderIdx]?.shippingAddress.apartment}</p>
                )}
                <p>
                  {userOrders[latestOrderIdx]?.shippingAddress.city}, {userOrders[latestOrderIdx]?.shippingAddress.state} {userOrders[latestOrderIdx]?.shippingAddress.zipCode}
                </p>
                <p>{userOrders[latestOrderIdx]?.shippingAddress.country}</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <button onClick={()=>{navigate("/products"); window.scrollTo(0,0)}}
              className='bg-gray-500 px-4 py-2 text-white rounded hover:bg-gray-700 cursor-pointer'>Continue Shopping</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default OrderConfirmationPage
