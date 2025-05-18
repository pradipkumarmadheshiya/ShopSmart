import { ShoppingCart } from 'lucide-react'
import React from 'react'

const ProductCard = ({product}) => {
    
    return (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className='flex justify-center'>
                <img src={product.image} alt={product.name} className="w-fit h-48 object-cover rounded" />
            </div>
            <div className="p-4">
                <h3 className="font-medium text-lg mb-1 truncate">{product.name}</h3>
                <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < Math.floor(product.rating) ? "★" : i < product.rating ? "★" : "☆"}
                    </span>
                    ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                <div>
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.oldPrice}
                    </span>
                    )}
                </div>
                <button className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer">
                    <ShoppingCart size={18} />
                </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
