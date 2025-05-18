import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { Filter, Star, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import FilterSection from '../components/FilterSection';

function ProductListingPage() {

  const {
        products, setProducts, cartItems, setCartItems, sortOption, setSortOption, mobileFiltersOpen, setMobileFiltersOpen, filters, setFilters, category
    }=useAppContext()

  // Get all available filter options from products
  const allBrands = [...new Set(products.map(p => p.brand))];
  const allColors = [...new Set(products.filter(p => p.color).map(p => p.color))];
  const allSizes = [...new Set(products.filter(p => p.size).map(p => p.size))];

  // Filter products based on the selected filters
  useEffect(() => {
    let filteredProducts = [...products];
    
    // Price range filter
    filteredProducts = filteredProducts.filter(
      p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    );
    
    // Brand filter
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(p => filters.brands.includes(p.brand));
    }
    
    // Rating filter
    if (filters.ratings > 0) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.ratings);
    }
    
    // Color filter
    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(p => p.color && filters.colors.includes(p.color));
    }
    
    // Size filter
    if (filters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter(p => p.size && filters.sizes.includes(p.size));
    }
    
    // Discount filter
    if (filters.discount) {
      filteredProducts = filteredProducts.filter(p => 
        ((p.originalPrice - p.price) / p.originalPrice) >= 0.1
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default 'featured' sorting - no specific sort
        break;
    }
    
    setProducts(filteredProducts);
  }, [filters, sortOption]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (Array.isArray(prev[filterType])) {
        // Handle array filters like brands, colors, sizes
        if (prev[filterType].includes(value)) {
          return { ...prev, [filterType]: prev[filterType].filter(item => item !== value) };
        } else {
          return { ...prev, [filterType]: [...prev[filterType], value] };
        }
      } else if (filterType === 'priceRange') {
        // Handle price range
        return { ...prev, priceRange: { ...prev.priceRange, ...value } };
      } else {
        // Handle boolean or number filters
        return { ...prev, [filterType]: value };
      }
    });
  };

  // Handle add to cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
            <Link to="/" className="hover:text-gray-800 underline mb-2">Home</Link>
            <p className="text-gray-600">{products.length} products found</p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md bg-white shadow-sm hover:bg-gray-50"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
          </div>

          {/* Mobile filter sidebar */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="fixed inset-0 bg-gray-100 bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
              <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                {/* Filter content - same as desktop */}
                <div className="divide-y divide-gray-200">

                  {/* Price Range */}
                  <FilterSection title="Price Range">
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="0"
                        value={filters.priceRange.min}
                        onChange={(e) => handleFilterChange('priceRange', { min: Number(e.target.value) })}
                        className="w-24 p-1 border border-gray-300 rounded mr-2 text-sm"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min="0"
                        value={filters.priceRange.max}
                        onChange={(e) => handleFilterChange('priceRange', { max: Number(e.target.value) })}
                        className="w-24 p-1 border border-gray-300 rounded ml-2 text-sm"
                      />
                    </div>
                  </FilterSection>

                  {/* Brand */}
                  <FilterSection title="Brand">
                    {allBrands.map(brand => (
                      <div key={brand} className="flex items-center mb-1">
                        <input
                          type="checkbox"
                          id={`mobile-brand-${brand}`}
                          checked={filters.brands.includes(brand)}
                          onChange={() => handleFilterChange('brands', brand)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-brand-${brand}`} className="text-sm">{brand}</label>
                      </div>
                    ))}
                  </FilterSection>

                  {/* Rating */}
                  <FilterSection title="Rating">
                    {[4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center mb-1">
                        <input
                          type="radio"
                          id={`mobile-rating-${rating}`}
                          name="rating"
                          checked={filters.ratings === rating}
                          onChange={() => handleFilterChange('ratings', rating)}
                          className="mr-2"
                        />
                        <label htmlFor={`mobile-rating-${rating}`} className="flex items-center text-sm">
                          {rating} <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400" /> & above
                        </label>
                      </div>
                    ))}
                  </FilterSection>

                  {/* Offers */}
                  <FilterSection title="Offers">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="mobile-discount"
                        checked={filters.discount}
                        onChange={() => handleFilterChange('discount', !filters.discount)}
                        className="mr-2"
                      />
                      <label htmlFor="mobile-discount" className="text-sm">10% Off or more</label>
                    </div>
                  </FilterSection>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Filters sidebar */}
          <aside className="hidden lg:block w-64 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Filters</h2>
            <div className="divide-y divide-gray-200">
              {/* Price Range */}
              <FilterSection title="Price Range">
                <div className="flex items-center">
                  <input
                    type="number"
                    min="0"
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange', { min: Number(e.target.value) })}
                    className="w-24 p-1 border border-gray-300 rounded mr-2 text-sm"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    min="0"
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange', { max: Number(e.target.value) })}
                    className="w-24 p-1 border border-gray-300 rounded ml-2 text-sm"
                  />
                </div>
              </FilterSection>

              {/* Brand */}
              <FilterSection title="Brand">
                {allBrands.map(brand => (
                  <div key={brand} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleFilterChange('brands', brand)}
                      className="mr-2"
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                  </div>
                ))}
              </FilterSection>

              {/* Rating */}
              <FilterSection title="Rating">
                {[4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center mb-1">
                    <input
                      type="radio"
                      id={`rating-${rating}`}
                      name="rating"
                      checked={filters.ratings === rating}
                      onChange={() => handleFilterChange('ratings', rating)}
                      className="mr-2"
                    />
                    <label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                      {rating} <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400" /> & above
                    </label>
                  </div>
                ))}
              </FilterSection>

              {/* Offers */}
              <FilterSection title="Offers">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="discount"
                    checked={filters.discount}
                    onChange={() => handleFilterChange('discount', !filters.discount)}
                    className="mr-2"
                  />
                  <label htmlFor="discount" className="text-sm">10% Off or more</label>
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* Products section */}
          <div className="flex-1">
            {/* Sorting options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-lg font-medium">Products</h2>
                <div className="flex items-center">
                  <label className="mr-2 text-sm text-gray-600">Sort by:</label>
                  <select
                    className="p-2 border border-gray-300 rounded bg-white text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Customer Ratings</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}/>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <p className="text-lg text-gray-600">No products match your selected filters.</p>
                <button 
                  onClick={() => setFilters({
                    priceRange: { min: 0, max: 2500 },
                    brands: [],
                    ratings: 0,
                    colors: [],
                    sizes: [],
                    discount: false
                  })}
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductListingPage
