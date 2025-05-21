import { Eye } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const UserOrders = () => {

    const {userOrders}=useAppContext()

    const initialOrders = userOrders

    const [orders] = useState(initialOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);


    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'In Transit': return 'bg-blue-100 text-blue-800';
            case 'Processing': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const OrderDetails = ({ order, onClose }) => (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Order Details</h3>
            <button onClick={onClose} className="text-gray-900 hover:text-gray-600">
              ✕
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Order ID:</span> {order.orderId}
            </div>
            <div>
              <span className="font-medium">Date:</span> {order.orderDate}
            </div>
            <div>
              <span className="font-medium">Status:</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div>
              <span className="font-medium">Items:</span>
              <ul className="mt-2 space-y-1">
                {order.products.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600">
                    {item.quantity}x {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t">
              <span className="font-medium">Total: ${order.total}</span>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div onClick={()=>setSelectedOrder(null)}
      className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
        <div onClick={(e)=>e.stopPropagation()}
         className="space-y-4">
          {orders.map((order) => (
            <div key={order.orderId} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{order.orderId}</h3>
                  <p className="text-gray-600 text-sm">Ordered on {order.orderDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="mb-3">
                <p className="text-sm text-gray-600">
                  {order.products.length} item{order.products.length > 1 ? 's' : ''} • Total: <span className="font-semibold">${order.total}</span>
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Eye size={16} />
                  View Details
                </button>
                
              </div>
            </div>
          ))}
        </div>

        {selectedOrder && (
          <OrderDetails 
            order={selectedOrder} 
            onClose={() => setSelectedOrder(null)} 
          />
        )}
      </div>
    );
}
export default UserOrders;