import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Absolutely incredible! The Royal Crown Burger is hands down the best burger I\'ve ever had. The quality of ingredients and attention to detail is remarkable.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Local Resident',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Been coming here for 5 years and they never disappoint. The staff treats you like family and the food is consistently amazing. My go-to spot!',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'College Student',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The student discount is amazing, but even without it, the value is incredible. Fresh ingredients, generous portions, and the milkshakes are to die for!',
      date: '3 days ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Business Owner',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Perfect for business lunches. Quick service, professional atmosphere, and the food quality is exceptional. My clients are always impressed.',
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Fitness Enthusiast',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Love that they have healthy options too! The Veggie Royale is packed with flavor and the nutrition info is clearly displayed. Guilt-free indulgence!',
      date: '4 days ago'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Family Man',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Great family spot! Kids love the atmosphere and the kids menu is fantastic. The family deals make it affordable for our weekly dinner out.',
      date: '5 days ago'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our loyal customers 
            have to say about their royal dining experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`card p-8 transition-all duration-500 ${
                  index === 1 ? 'transform scale-105 shadow-2xl' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-600 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">2,847</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Share Your Experience
          </h3>
          <p className="text-gray-600 mb-6">
            Had a great meal? We'd love to hear about it!
          </p>
          <button className="btn-primary">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;