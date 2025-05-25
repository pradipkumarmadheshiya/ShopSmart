import { useEffect } from 'react';
import { Check, Package, Truck, Calendar, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

function OrderConfirmationPage() {
  const { userOrders, setUserOrders, navigate, cartArray, addressFormData2 } = useAppContext();

  useEffect(() => {
    if (cartArray.length === 0) return;

    const newOrders = cartArray.map((item) => ({
      orderId: item.id+10000,
      orderDate: new Date().toLocaleDateString(),
      status: 'Pending',
      estimatedDelivery: `${new Date().getDate() + 3}/${new Date().getMonth() + 1}`,
      products: [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        },
      ],
      shipping: {
        method: 'Standard Shipping',
        cost: 20.0,
      },
      shippingAddress: {
        name: addressFormData2.name,
        street: addressFormData2.addressLine1,
        apartment: addressFormData2.addressLine2,
        city: addressFormData2.city,
        state: addressFormData2.state,
        zipCode: addressFormData2.zipCode,
      },
    }));

    setUserOrders((prevOrders) => [...prevOrders, ...newOrders]);
  }, []); 

  const latestOrderIdx = userOrders.length - 1;
  const latestOrder = userOrders[latestOrderIdx];

  const subtotal = latestOrder?.products?.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  ) || 0;

  const tax = subtotal * 0.08;
  const total = subtotal + tax + (latestOrder?.shipping?.cost || 0);

  if (latestOrder) {
    latestOrder.total = total;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <div className="text-lg font-semibold text-gray-900">
            Order ID: <span className="text-gray-600">{latestOrder?.orderId}</span>
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Order Placed</h3>
                <p className="text-sm text-gray-600">{latestOrder?.orderDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
                <p className="text-sm text-gray-600">{latestOrder?.estimatedDelivery}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Delivery Window</h3>
                <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {latestOrder?.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 border-b border-gray-400 pb-4"
                  >
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
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">${product.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{latestOrder?.shipping?.method}</span>
                  <span className="text-gray-900">
                    ${latestOrder?.shipping?.cost.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-4">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Shipping Address
              </h2>
              <div className="text-gray-700">
                <p className="font-medium">{latestOrder?.shippingAddress.name}</p>
                <p>{latestOrder?.shippingAddress.street}</p>
                {latestOrder?.shippingAddress.apartment && (
                  <p>{latestOrder.shippingAddress.apartment}</p>
                )}
                <p>
                  {latestOrder?.shippingAddress.city}, {latestOrder?.shippingAddress.state}{' '}
                  {latestOrder?.shippingAddress.zipCode}
                </p>
                <p>{latestOrder?.shippingAddress.country}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate('/products');
                  window.scrollTo(0, 0);
                }}
                className="bg-gray-500 px-4 py-2 text-white rounded hover:bg-gray-700 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;
