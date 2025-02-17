'use client';
import Image from 'next/image';
import { useState } from 'react';
import pizza1 from '../../public/images/pizza/pizza1.jpg';
import pizza2 from '../../public/images/pizza/pizza2.jpg';
import pizza3 from '../../public/images/pizza/pizza3.jpg';
import pizza4 from '../../public/images/pizza/pizza4.jpg';

const menuItems = {
  mainFood: [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Tender chicken in rich, creamy tomato sauce",
      price: "₹280",
      image: "/images/butter-chicken.jpg",
      category: "Main Food"
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      description: "Fresh cottage cheese in creamy tomato gravy",
      price: "₹220",
      image: "/images/paneer-butter.jpg",
      category: "Main Food"
    },
    {
      id: 3,
      name: "Dal Makhani",
      description: "Creamy black lentils cooked overnight",
      price: "₹180",
      image: "/images/dal-makhani.jpg",
      category: "Main Food"
    },
    {
      id: 4,
      name: "Kadai Chicken",
      description: "Spicy chicken with bell peppers",
      price: "₹260",
      image: "/images/kadai-chicken.jpg",
      category: "Main Food"
    },
    {
      id: 5,
      name: "Malai Kofta",
      description: "Cheese dumplings in rich cream sauce",
      price: "₹200",
      image: "/images/malai-kofta.jpg",
      category: "Main Food"
    },
    {
      id: 6,
      name: "Chilli Chicken",
      description: "Indo-Chinese style spicy chicken",
      price: "₹240",
      image: "/images/chilli-chicken.jpg",
      category: "Main Food"
    },
    {
      id: 7,
      name: "Mixed Vegetable Curry",
      description: "Fresh vegetables in aromatic gravy",
      price: "₹160",
      image: "/images/mix-veg.jpg",
      category: "Main Food"
    }
  ],
  biryani: [
    {
      id: 8,
      name: "Chicken Biryani",
      description: "Aromatic rice with tender chicken and spices",
      price: "₹180",
      image: "/images/chicken-biryani.jpg",
      category: "Biryani"
    },
    {
      id: 9,
      name: "Veg Biryani",
      description: "Fragrant rice with mixed vegetables",
      price: "₹150",
      image: "/images/veg-biryani.jpg",
      category: "Biryani"
    }
  ],
  pizza: [
    {
      id: 10,
      name: "Margherita Classic",
      description: "Fresh tomatoes, mozzarella, basil, and olive oil",
      price: "₹199",
      image: pizza1,
      category: "Pizza"
    },
    {
      id: 11,
      name: "Pepperoni Supreme",
      description: "Loaded with pepperoni and mozzarella",
      price: "₹299",
      image: pizza2,
      category: "Pizza"
    },
    {
      id: 12,
      name: "Vegetarian Delight",
      description: "Bell peppers, mushrooms, onions, olives",
      price: "₹249",
      image: pizza3,
      category: "Pizza"
    },
    {
      id: 13,
      name: "BBQ Chicken",
      description: "Grilled chicken with BBQ sauce",
      price: "₹329",
      image: pizza4,
      category: "Pizza"
    },
    {
      id: 14,
      name: "Paneer Tikka",
      description: "Spiced cottage cheese with Indian herbs",
      price: "₹279",
      image: pizza1,
      category: "Pizza"
    },
    {
      id: 15,
      name: "Chicken Tandoori",
      description: "Tandoori chicken with Indian spices",
      price: "₹349",
      image: pizza2,
      category: "Pizza"
    },
    {
      id: 16,
      name: "Double Cheese",
      description: "Extra cheese with mozzarella and cheddar",
      price: "₹249",
      image: pizza3,
      category: "Pizza"
    },
    {
      id: 17,
      name: "Mushroom & Olive",
      description: "Fresh mushrooms with black olives",
      price: "₹269",
      image: pizza4,
      category: "Pizza"
    },
    {
      id: 18,
      name: "Spicy Mexican",
      description: "Jalapeños, corn, and bell peppers",
      price: "₹299",
      image: pizza1,
      category: "Pizza"
    },
    {
      id: 19,
      name: "Hawaiian",
      description: "Pineapple and chicken with cheese",
      price: "₹319",
      image: pizza2,
      category: "Pizza"
    },
    {
      id: 20,
      name: "Supreme Loaded",
      description: "All toppings loaded special pizza",
      price: "₹399",
      image: pizza3,
      category: "Pizza"
    }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('pizza');

  const categories = [
    { id: 'pizza', name: 'Pizza' },
    { id: 'mainFood', name: 'Main Food' },
    { id: 'biryani', name: 'Biryani' },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our delicious selection of food items
          </p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300
                  ${activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-red-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Information */}
        <div className="mt-16 bg-red-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Home Delivery Service
          </h3>
          <div className="text-center text-gray-600">
            <p className="mb-2">We deliver to:</p>
            <p className="text-lg font-semibold text-red-600">Kahalgaon & Ekchari</p>
            <p className="mt-4">Minimum order value: ₹200</p>
            <p>Delivery time: 30-45 minutes</p>
            <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 