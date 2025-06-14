import React, { useState } from 'react';
import { Menu, X, User, ShoppingCart, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loyaltyPoints, logout } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-gradient">
              Burger Queen
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 bg-accent-100 px-3 py-1 rounded-full">
                  <Crown className="w-4 h-4 text-accent-600" />
                  <span className="text-sm font-semibold text-accent-800">
                    {loyaltyPoints} pts
                  </span>
                </div>
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="p-3 border-b">
                      <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                    </div>
                    <div className="p-2">
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Order History
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                        Profile Settings
                      </button>
                      <button 
                        onClick={logout}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={onAuthClick}
                className="flex items-center space-x-2 btn-primary"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            )}

            <button className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;