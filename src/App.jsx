import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header onAuthClick={() => setIsAuthModalOpen(true)} />
        <main>
          <Hero />
          <Menu />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </AuthProvider>
  );
}

export default App;