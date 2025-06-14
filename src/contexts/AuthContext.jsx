import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [orderHistory, setOrderHistory] = useState([]);

  // Load session from localStorage
  useEffect(() => {
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

  // ✅ Real API login
  const login = async (email, password, rememberMe = false) => {
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        const userData = {
          id: data.user.id,
          name: data.user.username,
          email: data.user.email,
          avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`,
        };

        setUser(userData);
        setLoyaltyPoints(150); // Welcome bonus for logging in

        if (rememberMe) {
          localStorage.setItem('burgerQueenUser', JSON.stringify(userData));
          localStorage.setItem('loyaltyPoints', '150');
        }

        localStorage.setItem('token', data.token); // Save JWT for future auth
        return { success: true };
      } else {
        return { success: false, error: data.msg || 'Invalid login' };
      }
    } catch  {
      return { success: false, error: 'Login failed, try again' };
    }
  };

  // ✅ Real API register
  const register = async ({ username, email, password }) => {
    try {
      const res = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        const newUser = {
          id: data.user,
          name: username,
          email,
          avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`,
        };

        setUser(newUser);
        setLoyaltyPoints(100); // Welcome bonus for new users

        localStorage.setItem('burgerQueenUser', JSON.stringify(newUser));
        localStorage.setItem('loyaltyPoints', '100');
        return { success: true };
      } else {
        return { success: false, error: data.msg || 'Registration failed' };
      }
    } catch {
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
    localStorage.removeItem('token');
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
      status: 'confirmed',
    };
    const updatedOrders = [newOrder, ...orderHistory];
    setOrderHistory(updatedOrders);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
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
    addOrder,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
