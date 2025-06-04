import React, { createContext, useState, useEffect } from 'react';
import {
  getCurrentUser,
  loginUser,
  registerUser,
  logoutUser,
} from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = getCurrentUser();
    if (stored) {
      setUser(stored);
    }
  }, []);

  const login = (username, password) => {
    const logged = loginUser(username, password);
    if (logged) {
      setUser(logged);
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    const registered = registerUser(username, password);
    if (registered) {
      setUser({ username });
    }
    return registered;
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
