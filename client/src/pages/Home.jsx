import React from 'react'
import HeroBanner from '../components/HeroBanner'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedProducts from '../components/FeaturedProducts'
import DealOfTheDay from '../components/DealOfTheDay '

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <div className="container mx-auto px-4 py-8">
        <CategoriesSection />
        <FeaturedProducts />
        <DealOfTheDay />
      </div>
    </div>
  )
}

export default Home
