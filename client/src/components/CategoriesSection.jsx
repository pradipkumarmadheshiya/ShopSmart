import React from 'react'
import { useAppContext } from '../context/AppContext';

function CategoriesSection() {

  const {categories}=useAppContext()

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(category => (
          <div 
            key={category.id} 
            className='rounded-lg p-4 text-center cursor-pointer hover:shadow-md hover:scale-110 transition-transform duration-500'
          >
            <div className="mb-2 flex justify-center">
              <img src={category.icon} alt={category.name} 
              className='w-16 h-14 rounded'/>
            </div>
            <h3 className="font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}


export default CategoriesSection
