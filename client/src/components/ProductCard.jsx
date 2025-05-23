import { ShoppingCart } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const ProductCard = ({product}) => {

    const {navigate, cartItems, addToCart, removeFromCart}=useAppContext()
    
    return (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product.id}`); window.scrollTo(0, 0)}}>
            <div className='flex justify-center cursor-pointer'>
                <img src={product.image} alt={product.name} className="w-40 sm:w-50 h-40 sm:h-50 object-cover rounded hover:scale-105 transition-transform duration-300" />
            </div>
            <div  onClick={(e)=>{e.stopPropagation()}}
            className="p-4">
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

                <div>
                    {!cartItems[product.id] ? (
                        <button className="flex items-center justify-center gap-1 bg-gray-100 border border-gray-400 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer text-gray-700" onClick={() => addToCart(product.id)} >
                            <ShoppingCart/>
                            Add
                        </button>
                    ) : (
                        <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-gray-200 rounded select-none">
                            <button onClick={() => {removeFromCart(product.id)}} className="cursor-pointer text-md px-2 h-full" >
                                -
                            </button>
                            <span className="w-5 text-center">{cartItems[product.id]}</span>
                            <button onClick={() => {addToCart(product.id)}} className="cursor-pointer text-md px-2 h-full" >
                                +
                            </button>
                        </div>
                    )}
                </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard