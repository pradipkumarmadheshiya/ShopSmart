import React, { useState } from 'react';
import { User, Package, Heart, MapPin, Edit, Trash2, Plus, Eye, RotateCcw, Phone, Mail, Home } from 'lucide-react';

// Sample data
const initialUserData = {
  name: 'John Doe',
  email: 'john.doe@email.com',
  phone: '+1 (555) 123-4567',
  addresses: [
    {
      id: 1,
      type: 'Home',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      street: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      isDefault: false
    }
  ]
};

const initialOrders = [
  {
    id: '#ORD-001',
    date: '2024-03-15',
    status: 'Delivered',
    total: 299.99,
    items: [
      { name: 'Wireless Headphones', price: 199.99, quantity: 1 },
      { name: 'Phone Case', price: 29.99, quantity: 1 }
    ]
  },
  {
    id: '#ORD-002',
    date: '2024-03-20',
    status: 'In Transit',
    total: 149.99,
    items: [
      { name: 'Bluetooth Speaker', price: 149.99, quantity: 1 }
    ]
  },
  {
    id: '#ORD-003',
    date: '2024-03-25',
    status: 'Processing',
    total: 79.99,
    items: [
      { name: 'USB Cable', price: 19.99, quantity: 2 },
      { name: 'Power Bank', price: 39.99, quantity: 1 }
    ]
  }
];

const initialWishlist = [
  {
    id: 1,
    name: 'Smart Watch',
    price: 399.99,
    image: '/api/placeholder/200/200',
    inStock: true
  },
  {
    id: 2,
    name: 'Laptop Stand',
    price: 89.99,
    image: '/api/placeholder/200/200',
    inStock: true
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    price: 59.99,
    image: '/api/placeholder/200/200',
    inStock: false
  }
];

export default function UserAccount
() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(initialUserData);
  const [orders] = useState(initialOrders);
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Tab navigation
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Address Book', icon: MapPin }
  ];

  // Profile Page Component
  const ProfilePage = () => {
    const [formData, setFormData] = useState(userData);

    const handleSave = () => {
      setUserData(formData);
      setIsEditing(false);
    };

    const handleCancel = () => {
      setFormData(userData);
      setIsEditing(false);
    };

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit size={16} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <User size={20} className="text-gray-500" />
                <span className="text-gray-900">{userData.name}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Mail size={20} className="text-gray-500" />
                <span className="text-gray-900">{userData.email}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Phone size={20} className="text-gray-500" />
                <span className="text-gray-900">{userData.phone}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Address
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-2">
                <Home size={20} className="text-gray-500 mt-0.5" />
                <div>
                  {userData.addresses.find(addr => addr.isDefault) ? (
                    <div className="text-gray-900">
                      <div>{userData.addresses.find(addr => addr.isDefault).street}</div>
                      <div>{userData.addresses.find(addr => addr.isDefault).city}, {userData.addresses.find(addr => addr.isDefault).state} {userData.addresses.find(addr => addr.isDefault).zipCode}</div>
                    </div>
                  ) : (
                    <span className="text-gray-500">No default address set</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Orders Page Component
  const OrdersPage = () => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'In Transit': return 'bg-blue-100 text-blue-800';
        case 'Processing': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    const handleReorder = (order) => {
      alert(`Reordering ${order.id}...`);
    };

    const OrderDetails = ({ order, onClose }) => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Order Details</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <span className="font-medium">Order ID:</span> {order.id}
            </div>
            <div>
              <span className="font-medium">Date:</span> {order.date}
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
                {order.items.map((item, idx) => (
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
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-lg">{order.id}</h3>
                  <p className="text-gray-600 text-sm">Ordered on {order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="mb-3">
                <p className="text-sm text-gray-600">
                  {order.items.length} item{order.items.length > 1 ? 's' : ''} • Total: <span className="font-semibold">${order.total}</span>
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye size={16} />
                  View Details
                </button>
                <button
                  onClick={() => handleReorder(order)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RotateCcw size={16} />
                  Reorder
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
  };

  // Wishlist Page Component
  const WishlistPage = () => {
    const removeFromWishlist = (id) => {
      setWishlist(wishlist.filter(item => item.id !== id));
    };

    const addToCart = (item) => {
      alert(`Added ${item.name} to cart!`);
    };

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <Heart size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Your wishlist is empty</p>
            <p className="text-sm text-gray-400">Add items you love to your wishlist</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-3">${item.price}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        item.inStock
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Address Book Component
  const AddressBook = () => {
    const [newAddress, setNewAddress] = useState({
      type: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      isDefault: false
    });

    const handleAddAddress = () => {
      if (newAddress.type && newAddress.street && newAddress.city && newAddress.state && newAddress.zipCode) {
        const addressToAdd = {
          ...newAddress,
          id: userData.addresses.length + 1
        };
        
        let updatedAddresses = [...userData.addresses, addressToAdd];
        
        if (newAddress.isDefault) {
          updatedAddresses = updatedAddresses.map(addr => ({
            ...addr,
            isDefault: addr.id === addressToAdd.id
          }));
        }
        
        setUserData({...userData, addresses: updatedAddresses});
        setNewAddress({
          type: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          isDefault: false
        });
        setShowAddressForm(false);
      }
    };

    const handleEditAddress = (address) => {
      setEditingAddress(address);
      setNewAddress(address);
      setShowAddressForm(true);
    };

    const handleUpdateAddress = () => {
      const updatedAddresses = userData.addresses.map(addr => 
        addr.id === editingAddress.id ? newAddress : addr
      );
      
      if (newAddress.isDefault) {
        updatedAddresses.forEach(addr => {
          if (addr.id !== editingAddress.id) addr.isDefault = false;
        });
      }
      
      setUserData({...userData, addresses: updatedAddresses});
      setEditingAddress(null);
      setNewAddress({
        type: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: false
      });
      setShowAddressForm(false);
    };

    const handleDeleteAddress = (id) => {
      const updatedAddresses = userData.addresses.filter(addr => addr.id !== id);
      setUserData({...userData, addresses: updatedAddresses});
    };

    const cancelForm = () => {
      setShowAddressForm(false);
      setEditingAddress(null);
      setNewAddress({
        type: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        isDefault: false
      });
    };

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Address Book</h2>
          <button
            onClick={() => setShowAddressForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} />
            Add Address
          </button>
        </div>

        {showAddressForm && (
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Type
                </label>
                <select
                  value={newAddress.type}
                  onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={newAddress.street}
                  onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={newAddress.state}
                  onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="NY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={newAddress.zipCode}
                  onChange={(e) => setNewAddress({...newAddress, zipCode: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="10001"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDefault"
                  checked={newAddress.isDefault}
                  onChange={(e) => setNewAddress({...newAddress, isDefault: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isDefault" className="ml-2 block text-sm text-gray-700">
                  Set as default address
                </label>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={editingAddress ? handleUpdateAddress : handleAddAddress}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingAddress ? 'Update Address' : 'Add Address'}
              </button>
              <button
                onClick={cancelForm}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userData.addresses.map((address) => (
            <div key={address.id} className="border border-gray-200 rounded-lg p-4 relative">
              {address.isDefault && (
                <span className="absolute top-2 right-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Default
                </span>
              )}
              <div className="mb-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <MapPin size={18} className="text-gray-500" />
                  {address.type}
                </h3>
                <div className="mt-2 text-gray-600">
                  <p>{address.street}</p>
                  <p>{address.city}, {address.state} {address.zipCode}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditAddress(address)}
                  className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit size={14} />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Main component render
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="transition-all duration-300">
          {activeTab === 'profile' && <ProfilePage />}
          {activeTab === 'orders' && <OrdersPage />}
          {activeTab === 'wishlist' && <WishlistPage />}
          {activeTab === 'addresses' && <AddressBook />}
        </div>
      </div>
    </div>
  );
}