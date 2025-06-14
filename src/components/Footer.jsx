import React from 'react';
import { Crown, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'Menu', href: '#menu' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    'Customer Service': [
      { name: 'Order Online', href: '#' },
      { name: 'Delivery Info', href: '#' },
      { name: 'Nutritional Info', href: '#' },
      { name: 'Allergen Guide', href: '#' }
    ],
    'Company': [
      { name: 'Careers', href: '#' },
      { name: 'Franchise', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Investor Relations', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                Burger Queen
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Serving royal quality burgers since 1995. Every meal is crafted with 
              premium ingredients and served with the care fit for royalty.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>123 Royal Street, Downtown District</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>(555) 123-QUEEN</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>info@burgerqueen.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => link.href.startsWith('#') ? scrollToSection(link.href) : window.open(link.href)}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated with Royal Offers
            </h3>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>© {currentYear} Burger Queen. All rights reserved.</p>
              <div className="flex space-x-6">
                <button className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </button>
                <button className="hover:text-primary-400 transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for burger lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;