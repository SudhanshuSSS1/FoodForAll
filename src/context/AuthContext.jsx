import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Determine base URL (could be from env later, hardcoded to backend for now)
  const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      fetchCurrentUser(token);
    } else {
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  const fetchCurrentUser = async (currentToken) => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${currentToken}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setToken(null);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setUser(data.user);
        return { success: true, role: data.user.role };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again later.' };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  // Helper method for authenticated fetches
  const authFetch = async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(`${API_URL}${url}`, { ...options, headers });
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, authFetch, API_URL }}>
      {children}
    </AuthContext.Provider>
  );
};
