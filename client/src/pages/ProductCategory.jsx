import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categoriesList } from '../constants' 
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const {products}=useAppContext()
    const {category}=useParams()

    const searchCategory=categoriesList.find((item)=>category==item.url.toLocaleLowerCase())
    const filteredProducts=products.filter((product)=>product.category.toLocaleLowerCase()===category)

  return (
    <div className="px-6 sm:px-20 py-16 bg-gray-50">
      {searchCategory && (
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.name}</p>
            <div className='w-16 h-0.5 bg-gray-600 rounded-full'></div>
        </div>
      )}
      {
        filteredProducts.length>0 ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 mx-'>
                {filteredProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        ) : (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-red-500">
        Product not found.
      </div>
        )
      }
    </div>
  )
}

export default ProductCategory