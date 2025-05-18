import React from 'react'
import { useAppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

function FeaturedProducts() {
  const {products}=useAppContext()

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <a href="/all-products" className="text-blue-600 hover:underline">View All</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0,8).map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts
