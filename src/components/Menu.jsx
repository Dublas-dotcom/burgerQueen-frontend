import React, { useState } from 'react';
import { Star, Plus, Heart } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    { id: 'burgers', name: 'Signature Burgers', icon: '🍔' },
    { id: 'sides', name: 'Sides & Fries', icon: '🍟' },
    { id: 'drinks', name: 'Beverages', icon: '🥤' },
    { id: 'desserts', name: 'Sweet Treats', icon: '🍰' }
  ];

  const menuItems = {
    burgers: [
      {
        id: 1,
        name: 'Royal Crown Burger',
        description: 'Double beef patty, aged cheddar, caramelized onions, special crown sauce',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: 'Queen\'s Classic',
        description: 'Premium beef, lettuce, tomato, pickles, our signature sauce',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Spicy Kingdom',
        description: 'Jalapeño-infused patty, pepper jack cheese, spicy mayo, crispy onions',
        price: 14.99,
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.8
      },
      {
        id: 4,
        name: 'Veggie Royale',
        description: 'Plant-based patty, avocado, sprouts, vegan cheese, herb aioli',
        price: 13.99,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.6
      }
    ],
    sides: [
      {
        id: 5,
        name: 'Royal Fries',
        description: 'Crispy golden fries with our special seasoning',
        price: 4.99,
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.5
      },
      {
        id: 6,
        name: 'Onion Rings',
        description: 'Beer-battered onion rings with ranch dipping sauce',
        price: 5.99,
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.4
      }
    ],
    drinks: [
      {
        id: 7,
        name: 'Royal Shake',
        description: 'Thick vanilla milkshake topped with whipped cream',
        price: 5.99,
        image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Fresh Lemonade',
        description: 'House-made lemonade with fresh mint',
        price: 3.99,
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.3
      }
    ],
    desserts: [
      {
        id: 9,
        name: 'Crown Brownie',
        description: 'Warm chocolate brownie with vanilla ice cream',
        price: 6.99,
        image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.8
      }
    ]
  };

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Our Royal <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of gourmet burgers and sides, 
            made with the finest ingredients fit for royalty.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems[activeCategory]?.map((item) => (
            <div key={item.id} className="card p-6 group">
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(item.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary-600">
                    ${item.price}
                  </span>
                  <button className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-semibold">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-primary text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 Limited Time Offers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Family Feast Deal</h4>
              <p className="text-sm opacity-90">4 Burgers + 4 Sides + 4 Drinks = $49.99 (Save $15!)</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Student Special</h4>
              <p className="text-sm opacity-90">Show your student ID and get 15% off any burger!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;