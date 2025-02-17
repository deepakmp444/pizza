'use client';
import Image from 'next/image';
import { useState } from 'react';
import pizza from '../../public/images/pizza.jpg';
export default function Hero() {
  const [selectedLocation, setSelectedLocation] = useState('kahalgaon');

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Delicious Food <br />
              <span className="text-red-600">Delivered To Your Door</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Experience the best of Indian cuisine, Biryani, and Pizza. From traditional flavors to modern delights, 
              we deliver happiness in every order.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                <span>Order Now</span>
                <span className="ml-2 text-sm">(Min ₹200)</span>
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors">
                Explore Menu
              </button>
            </div>
            
            {/* Quick Category Access */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Main Food</h3>
                <p className="text-sm text-gray-600">7 Varieties</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Biryani</h3>
                <p className="text-sm text-gray-600">2 Types</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Pizza</h3>
                <p className="text-sm text-gray-600">11 Options</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={pizza}
                  alt="Food Collage showing Main Course, Biryani and Pizza"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <p className="text-red-600 font-semibold">30-45 Min Delivery</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <p className="text-red-600 font-semibold">Free Delivery*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
            <p className="text-gray-600">Hot and fresh food delivered in 30-45 minutes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">20+ Menu Items</h3>
            <p className="text-gray-600">Wide variety of Main Course, Biryani & Pizza</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-red-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Service Areas</h3>
            <p className="text-gray-600">Delivering in Kahalgaon & Ekchari</p>
          </div>
        </div>
      </div>
    </div>
  );
} 