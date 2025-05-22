import React, { useEffect, useState } from 'react'
import { banners } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const HeroBanner = () => {

    const {navigate}=useAppContext()

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div className="relative overflow-hidden w-full h-96">
        <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {banners.map((banner) => (
            <div 
                key={banner.id} 
                className={`flex-shrink-0 w-full h-full ${banner.bgColor} flex items-center`}
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 space-y-4 text-center md:text-left mb-6 md:mb-0">
                        <h1 className={`text-4xl font-bold ${banner.textColor}`}>{banner.title}</h1>
                        <p className="text-lg">{banner.description}</p>
                        <button onClick={()=>{navigate("/products"); window.scrollTo(0,0)}}
                        className={`${banner.btnColor} text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer`}>
                        Shop Now
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                        src={banner.image} 
                        alt={banner.title} 
                        className="max-h-80 min-h-50 w-60 sm:w-90 md:w-120 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            ))}
        </div>
        
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100 cursor-pointer"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100 cursor-pointer"
        >
            <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {banners.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-gray-400'
                }`}
            />
            ))}
        </div>
        </div>
    );
}


export default HeroBanner