import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, Facebook, Instagram, Twitter } from 'lucide-react';
import useAuth from '../hooks/useAuth';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { login, register } = useAuth();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password); // strong password

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const newErrors = {};
    if (!validateEmail(loginData.email)) newErrors.email = 'Invalid email';
    if (!loginData.password) newErrors.password = 'Password required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    const result = await login(loginData.email, loginData.password, loginData.rememberMe);
    if (result.success) {
      setLoginData({ email: '', password: '', rememberMe: false });
      onClose();
    } else {
      setErrors({ general: result.error });
    }

    setIsLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const newErrors = {};
    if (!registerData.username.trim()) newErrors.username = 'Username required';
    if (!validateEmail(registerData.email)) newErrors.email = 'Invalid email';
    if (!validatePassword(registerData.password)) newErrors.password = 'Weak password';
    if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!registerData.agreeToTerms) newErrors.agreeToTerms = 'Accept terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    const result = await register({
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
    });

    if (result.success) {
      setRegisterData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      });
      onClose();
    } else {
      setErrors({ general: result.error });
    }

    setIsLoading(false);
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login not implemented yet`);
  };

  // You can now use `isLogin ? LoginForm : RegisterForm` to show UI (code omitted for brevity)



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? 'Welcome Back!' : 'Join the Royal Family'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Tab Switcher */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                isLogin
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
                !isLogin
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="font-medium text-gray-700">Continue with Google</span>
            </button>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </button>
              <button
                onClick={() => handleSocialLogin('Instagram')}
                className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </button>
              <button
                onClick={() => handleSocialLogin('Twitter')}
                className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Error Message */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Login Form */}
{isLogin ? (
  <form onSubmit={handleLoginSubmit} className="space-y-4">
    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.email ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="your@email.com"
        />
      </div>
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
    </div>

    {/* Password */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={loginData.password}
          onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.password ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
    </div>

    {/* Remember Me + Forgot */}
    <div className="flex items-center justify-between">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={loginData.rememberMe}
          onChange={(e) => setLoginData(prev => ({ ...prev, rememberMe: e.target.checked }))}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <span className="text-sm text-gray-700">Remember me</span>
      </label>
      <button type="button" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
        Forgot password?
      </button>
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={isLoading}
      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Signing In...' : 'Sign In'}
    </button>
  </form>
) : (
  // REGISTER FORM
  <form onSubmit={handleRegisterSubmit} className="space-y-4">
    {/* Username */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={registerData.username}
          onChange={(e) => setRegisterData(prev => ({ ...prev, username: e.target.value }))}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.username ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Your username"
        />
      </div>
      {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          value={registerData.email}
          onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.email ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="your@email.com"
        />
      </div>
      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
    </div>

    {/* Password */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={registerData.password}
          onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.password ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Create a strong password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
    </div>

    {/* Confirm Password */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={registerData.confirmPassword}
          onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Confirm your password"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
    </div>

    {/* Terms */}
    <label className="flex items-start space-x-2">
      <input
        type="checkbox"
        checked={registerData.agreeToTerms}
        onChange={(e) => setRegisterData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
        className={`w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5 ${
          errors.agreeToTerms ? 'border-red-300' : ''
        }`}
      />
      <span className="text-sm text-gray-700">
        I agree to the{' '}
        <button type="button" className="text-primary-600 hover:text-primary-700 font-medium">
          Terms and Conditions
        </button>{' '}
        and{' '}
        <button type="button" className="text-primary-600 hover:text-primary-700 font-medium">
          Privacy Policy
        </button>
      </span>
    </label>
    {errors.agreeToTerms && <p className="text-red-600 text-sm">{errors.agreeToTerms}</p>}

    {/* Submit */}
    <button
      type="submit"
      disabled={isLoading}
      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Creating Account...' : 'Create Account'}
    </button>
  </form>
)}


          {/* GDPR Compliance Notice */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              By signing up, you acknowledge that your data will be processed in accordance with our 
              Privacy Policy. We are GDPR compliant and respect your privacy rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;