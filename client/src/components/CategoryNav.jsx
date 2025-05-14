import React from 'react'
import { useAppContext } from '../context/AppContext';

const CategoryNav = () => {

    const {
        categories, setCategories, currentCategory, setCurrentCategory, currentPage, setCurrentPage
    }=useAppContext()

    const handleCategoryClick = (categoryName) => {
        setCurrentCategory(categoryName);
        setCurrentPage('category');
    };

  return (
    <div className='hidden md:block bg-gray-100 shadow-sm'>
        <div className='container mx-auto'>
            <div className='flex justify-between overflow-x-auto whitespace-nowrap py-2'>
            {
                categories.map((category)=>(
                <div key={category.id} 
                className='px-4 py-1 cursor-pointer hover:text-black text-gray-700 font-medium flex-shrink-0'
                onClick={()=>handleCategoryClick(category.name)}>
                    <span className='mr-1'>{category.icom}</span>
                    {category.name}
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default CategoryNav
