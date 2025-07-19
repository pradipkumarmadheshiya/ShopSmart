import { Clock, ShoppingCart, Tag } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

function DealOfTheDay() {

  const {addToCart}=useAppContext()
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
        <div className="flex items-center">
          <Tag className="text-gray-600 mr-2" />
          <h2 className="text-2xl font-bold">Deal of the Day</h2>
        </div>
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
          <Clock size={18} className="text-gray-600 mr-2" />
          <div className="flex items-center space-x-1">
            <div className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.hours)}</div>
            <span>:</span>
            <div className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.minutes)}</div>
            <span>:</span>
            <div className="bg-gray-800 text-white px-2 py-1 rounded">{formatTime(timeLeft.seconds)}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <img 
              src={assets.headphone}
              alt="Deal of the Day" 
              className="max-h-80 object-contain rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="bg-gray-500 text-white inline-block px-3 py-1 rounded-full text-sm font-bold mb-3">
              50% OFF
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Noise-Cancelling Headphones</h3>
            <p className="text-gray-700 mb-4">
              Experience superior sound quality with our top-rated noise-cancelling headphones. Perfect for work, travel, or relaxation.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">$199.99</span>
              <span className="text-lg text-gray-500 line-through ml-2">$249.99</span>
            </div>
            <button onClick={()=>addToCart(1)}
            className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center cursor-pointer">
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealOfTheDay 
