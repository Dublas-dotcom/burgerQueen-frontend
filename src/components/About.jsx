import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '28+', label: 'Years of Excellence' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Clock, value: '15min', label: 'Average Delivery' },
    { icon: Heart, value: '100%', label: 'Made with Love' }
  ];

  const values = [
    {
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from trusted local suppliers.',
      icon: '🥩'
    },
    {
      title: 'Fresh Daily',
      description: 'Our buns are baked fresh every morning and patties are never frozen.',
      icon: '🌅'
    },
    {
      title: 'Royal Service',
      description: 'Every customer is treated like royalty with exceptional service.',
      icon: '👑'
    },
    {
      title: 'Community First',
      description: 'We\'re proud to support our local community and environment.',
      icon: '🌱'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
                Our Royal <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1995 by Chef Margaret Queen, Burger Queen began as a small family 
                  restaurant with a simple mission: to serve the most delicious, high-quality 
                  burgers that would make every customer feel like royalty.
                </p>
                <p>
                  What started as a humble 20-seat diner has grown into a beloved local institution, 
                  but our commitment to quality and exceptional service remains unchanged. We still 
                  hand-form every patty, slice our vegetables fresh daily, and treat every meal 
                  as if we're serving it to the Queen herself.
                </p>
                <p>
                  Today, we're proud to be recognized as the city's premier burger destination, 
                  but we never forget our roots or the community that made our success possible.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Chef preparing burgers in kitchen"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              What Makes Us <span className="text-gradient">Special</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence goes beyond just great food. 
              Here's what sets Burger Queen apart from the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition & Awards</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-800 mb-2">Best Burger 2023</h4>
              <p className="text-sm text-gray-600">City Food Awards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-semibold text-gray-800 mb-2">5-Star Rating</h4>
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-semibent text-gray-800 mb-2">People's Choice</h4>
              <p className="text-sm text-gray-600">Local Business Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;