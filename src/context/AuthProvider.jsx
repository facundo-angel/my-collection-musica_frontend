import { useEffect, useState } from 'react';
import AuthContext from './AuthContext.js';
import * as authService from '../services/authService.js';
import { setSessionExpiredHandler } from '../services/api.js';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);

  // Al abrir la app, preguntamos al backend si la cookie sigue siendo válida
  useEffect(() => {
    authService
      .getMe()
      .then((currentUser) => setUser(currentUser))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setSessionExpiredHandler(() => {
      setUser(null);
      setSessionExpired(true);
    });
  }, []);

  async function login(email, password) {
    const loggedUser = await authService.login(email, password);
    setUser(loggedUser);
    setSessionExpired(false);
  }

  async function register(data) {
    const newUser = await authService.register(data);
    setUser(newUser);
    setSessionExpired(false);
  }

  async function logout() {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  }

  const value = { user, setUser, loading, sessionExpired, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;