import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Royal Street', 'Downtown District', 'City, State 12345'],
      color: 'text-primary-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-QUEEN', '(555) 123-7833', 'Available 24/7'],
      color: 'text-secondary-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@burgerqueen.com', 'orders@burgerqueen.com', 'We reply within 2 hours'],
      color: 'text-accent-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 11AM - 10PM', 'Fri-Sat: 11AM - 11PM', 'Sun: 12PM - 9PM'],
      color: 'text-green-600'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to make a reservation? 
            We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center mb-4`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Royal Street, Downtown District</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="reservation">Reservation</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="catering">Catering Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our newsletter for special offers and updates
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Quick Response Guarantee:</strong> We typically respond to all inquiries 
                within 2 hours during business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-primary text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Royal Offers!</h3>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter and be the first to know about new menu items, 
            special promotions, and exclusive events.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-4 opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;