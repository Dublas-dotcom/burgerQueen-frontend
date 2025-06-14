import React from 'react';
import { Star, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-600 rounded-full"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Premium Quality Since 1995
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient">Burger</span>
                <br />
                <span className="text-gray-800">Queen</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Experience the royal taste of our handcrafted burgers made with premium ingredients 
                and served with a crown of flavor that will make you feel like royalty.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">15min</p>
                  <p className="text-sm text-gray-600">Fast Delivery</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">50K+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Order Now
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View Menu
              </button>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-primary text-white p-4 rounded-lg shadow-glow">
              <p className="text-center font-semibold">
                🎉 Grand Opening Special: 20% OFF on all orders above $25!
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Delicious Burger Queen burger"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">2,847 Reviews</p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-primary-600">$12.99</p>
                <p className="text-sm text-gray-600">Royal Deluxe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;