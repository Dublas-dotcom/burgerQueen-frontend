import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('burgerQueenUser');
    const savedPoints = localStorage.getItem('loyaltyPoints');
    const savedOrders = localStorage.getItem('orderHistory');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoyaltyPoints(parseInt(savedPoints) || 0);
      setOrderHistory(JSON.parse(savedOrders) || []);
    }
    setLoading(false);
  }, []);

  const login = async (email, password, rememberMe = false) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        joinDate: new Date().toISOString(),
        avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`
      };
      
      setUser(userData);
      setLoyaltyPoints(150); // Welcome bonus
      
      if (rememberMe) {
        localStorage.setItem('burgerQueenUser', JSON.stringify(userData));
        localStorage.setItem('loyaltyPoints', '150');
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: Date.now(),
        ...userData,
        joinDate: new Date().toISOString(),
        avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`
      };
      
      setUser(newUser);
      setLoyaltyPoints(100); // Welcome bonus
      
      localStorage.setItem('burgerQueenUser', JSON.stringify(newUser));
      localStorage.setItem('loyaltyPoints', '100');
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    setLoyaltyPoints(0);
    setOrderHistory([]);
    localStorage.removeItem('burgerQueenUser');
    localStorage.removeItem('loyaltyPoints');
    localStorage.removeItem('orderHistory');
  };

  const addLoyaltyPoints = (points) => {
    const newPoints = loyaltyPoints + points;
    setLoyaltyPoints(newPoints);
    localStorage.setItem('loyaltyPoints', newPoints.toString());
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'confirmed'
    };
    const updatedOrders = [newOrder, ...orderHistory];
    setOrderHistory(updatedOrders);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    
    // Add loyalty points (1 point per dollar)
    addLoyaltyPoints(Math.floor(order.total));
  };

  const value = {
    user,
    loading,
    loyaltyPoints,
    orderHistory,
    login,
    register,
    logout,
    addLoyaltyPoints,
    addOrder
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};